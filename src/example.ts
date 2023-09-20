// Create an instance of the FSM
import FSM from './FSM';

const fsm = new FSM();

// Define states
const state1 = fsm.addState('state1');
const state2 = fsm.addState('state2');
const state3 = fsm.addState('state3');
const finish = fsm.addState('finish');

// Define transitions between states
fsm.addTransition(state1.name, 'next', state2.name);
fsm.addTransition(state2.name, 'next', state3.name);
fsm.addTransition(state2.name, 'prev', state1.name);
fsm.addTransition(state3.name, 'prev', state2.name);
fsm.addTransition(state3.name, 'next', finish.name);
fsm.addTransition(finish.name, 'prev', state3.name);

// Set the initial state
fsm.setInitialState(state1.name);

// Transition between states
fsm.transition('finish');
console.log('Current state:', fsm.currentState.name); // Should print "state2"
//
// fsm.transition('next');
// console.log('Current state:', fsm.currentState.name); // Should print "state3"
//
// fsm.transition('next');
// console.log('Current state:', fsm.currentState.name); // Should print "finish"
//
// fsm.transition('prev');
// console.log('Current state:', fsm.currentState.name); // Should print "state3"
//
// fsm.transition('prev');
// console.log('Current state:', fsm.currentState.name); // Should print "state2"
//
// fsm.transition('prev');
// console.log('Current state:', fsm.currentState.name); // Should print "state1"
