# ReactJS Quick using FSM library

Typescript implementation of Finite State Machine

Intro

```
“Finite state machines are a great conceptual model for many concerns facing
developers – from conditional UI, connectivity monitoring & management to
initialization and more. State machines can simplify tangled paths of asynchronous
code, they're easy to test, and they inherently lend themselves to helping you avoid
unexpected edge-case-state pitfalls.” (http://machina-js.org/)

```
Usage:

```
1. Clone this repository
2. npm install
3. import it in your typescript project

    const fsm = new FSM();
    // Define quiz states
    fsm.addState('state1');
    fsm.addState('state2');
    fsm.addState('state3');
    fsm.addState('state4');
    
// Define transitions
    fsm.addTransition('state1', 'next', 'state2');
    fsm.addTransition('state2', 'prev', 'state1');
    fsm.addTransition('state2', 'next', 'state3');
    fsm.addTransition('state3', 'next', 'state4');
    fsm.addTransition('state4', 'next', 'state1');
    
// Set the initial state
    fsm.setInitialState('state1');
    
// Set transition
   fsm.transition('next'); // 'state2' is the new state, access it at fsm.currentState
   fsm.transition('prev'); // 'state1' is the new state, access it at fsm.currentState


Or see example in src\example.ts
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `build`

Build the library, into /dist folder

### `npm test:coverage`

Runs the test suite with coverage info

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm lint`

Run the lint script

