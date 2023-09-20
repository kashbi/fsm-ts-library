export default class State {
  name: string;

  transitions: { event: string; targetState: string; guard: () => boolean }[];

  constructor(name: string) {
    this.name = name;
    this.transitions = [];
  }

  addTransition(event: string, targetState: string, guard: () => boolean = () => true) {
    this.transitions.push({ event, targetState, guard });
  }

  getNextStates(event: string) {
    return this.transitions.filter((transition) => transition.event === event);
  }
}
