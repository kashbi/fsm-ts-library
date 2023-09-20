import State from './State';

export default class FSM {
  states: Map<string, State>;

  currentState: State | null;

  constructor() {
    this.states = new Map();
    this.currentState = null;
  }

  addState(name: string): State {
    const state = new State(name);
    this.states.set(name, state);
    return state;
  }

  addTransition(sourceState: string, event: string, targetState: string, guard: () => boolean = () => true) {
    if (!this.states.has(sourceState) || !this.states.has(targetState)) {
      throw new Error('Invalid state name');
    }
    this.states.get(sourceState)!.addTransition(event, targetState, guard);
  }

  setInitialState(stateName: string) {
    if (!this.states.has(stateName)) {
      throw new Error('Invalid initial state name');
    }
    this.currentState = this.states.get(stateName) as State;
  }

  transition(event: string) {
    if (!this.currentState) {
      throw new Error('Initial state not set');
    }

    const nextStates = this.currentState.getNextStates(event);
    const validTransitions = nextStates.filter(({ guard }) => guard());

    if (validTransitions.length === 0) {
      throw new Error(`Invalid transition from state: ${this.currentState.name} on event: ${event}`);
    }

    const nextStateName = validTransitions[0].targetState;
    const nextState = this.states.get(nextStateName);

    if (nextState === undefined) {
      throw new Error(`Invalid target state: ${nextStateName}`);
    }

    this.currentState = nextState;
  }
}
