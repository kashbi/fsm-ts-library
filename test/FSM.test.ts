import { FSM } from '../src/FSM';
import { State } from '../src/State';

describe('FSM class', () => {
  let fsm: FSM;
  let stateA: State;
  let stateB: State;
  let stateC: State;

  beforeEach(() => {
    fsm = new FSM();
    stateA = fsm.addState('A');
    stateB = fsm.addState('B');
    stateC = fsm.addState('C');
  });

  it('should transition between states with guards', () => {
    // Add transitions with guards
    fsm.addTransition('A', 'event1', 'B', () => true);
    fsm.addTransition('B', 'event2', 'C', () => false);
    fsm.addTransition('C', 'event3', 'A', () => true);

    fsm.setInitialState('A');
    expect(fsm.currentState).toBe(stateA);

    // Valid transition with a true guard
    fsm.transition('event1');
    expect(fsm.currentState).toBe(stateB);

    // Attempting a transition with a false guard should not change the state
    fsm.transition('event2');
    expect(fsm.currentState).toBe(stateB);

    // Valid transition with a true guard
    fsm.transition('event3');
    expect(fsm.currentState).toBe(stateA);
  });

  it('should handle non-deterministic transitions', () => {
    fsm.addTransition('A', 'event1', 'B', () => Math.random() > 0.5);
    fsm.addTransition('A', 'event1', 'C', () => Math.random() <= 0.5);

    fsm.setInitialState('A');
    expect(fsm.currentState).toBe(stateA);

    fsm.transition('event1');
    // Expect that the FSM will transition to either stateB or stateC based on the guard
    expect(fsm.currentState === stateB || fsm.currentState === stateC).toBe(true);
  });

  it('should throw errors for invalid transitions', () => {
    fsm.addTransition('A', 'event1', 'B', () => false);
    fsm.setInitialState('A');

    // Attempting an invalid transition should throw an error
    expect(() => fsm.transition('invalidEvent')).toThrow('Invalid transition');
  });
});
