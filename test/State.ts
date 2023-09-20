export class State {
  name: string;
  transitions: Map<string, { targetState: string; guard: () => boolean }[]>;

  constructor(name: string) {
    this.name = name;
    this.transitions = new Map();
  }

  addTransition(event: string, targetState: string, guard: () => boolean = () => true) {
    if (!this.transitions.has(event)) {
      this.transitions.set(event, []);
    }
    this.transitions.get(event)!.push({ targetState, guard });
  }

  getNextStates(event: string): { targetState: string; guard: () => boolean }[] {
    return this.transitions.get(event) || [];
  }
}
