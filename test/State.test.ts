import {State} from "./State";

describe('State class', () => {
  it('should add transitions correctly', () => {
    const state = new State('A');
    state.addTransition('event1', 'B');
    let nextStates = state.getNextStates('event1');
    expect(Array.isArray(nextStates)).toEqual(true);
    expect(nextStates[0].targetState).toEqual('B');
  });

  it('should report invalid transitions ', () => {
    const state = new State('A');
    state.addTransition('event1', 'B');
    let nextStates = state.getNextStates('xxxxx');
    expect(nextStates.length).toEqual(0);
  });

  it('should report invalid transitions since not defined ', () => {
    const state = new State('A');
    let nextStates = state.getNextStates('event5');
    expect(nextStates.length).toEqual(0);
  });


});
