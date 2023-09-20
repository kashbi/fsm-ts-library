import { State } from '../src/State';

describe('State class', () => {
  it('should add transitions correctly', () => {
    const state = new State('A');
    state.addTransition('event1', 'B');
    expect(state.getNextStates('event1')).toEqual(['B']);
  });
});
