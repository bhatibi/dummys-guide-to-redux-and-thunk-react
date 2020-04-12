https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.44hlq3vvt

https://github.com/stowball/dummys-guide-to-redux-and-thunk-react

Notes:

* A component shouldn’t include logic to fetch data, and data shouldn’t be stored in a component’s state, so this is where Redux comes in.

* There is 1 global state object that manages the state for your entire application. It is the single source of truth.

### Actions/Action Creators ###

* The only way to modify the state is through **emitting an action**, which is an object that describes what should change. 

* **Action Creators** are the functions that are dispatched to emit a change – all they do is return an action. *Action creators are functions that return an action.*

### Reducers ###

* When an action is dispatched, a **Reducer** is the function that actually *changes the state* appropriate to that action – or returns the existing state if the action is not applicable to that reducer.

* Reducers are "pure functions". They should not have any side-effects nor mutate the state — they must return a modified copy.

* Reducers take actions and return a new state of the application.
*In Redux, all reducers get called regardless of the action, so inside each one you have to return the original state if the action is not applicable.*

* Each reducer takes 2 parameters: the previous state (state) and an action object.

* Individual reducers are combined into a single **rootReducer** to create the discrete properties of the state.

*  Every reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer.

### Store ###

* The **Store** is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk etc.), and allows you to actually dispatch actions.

* For using Redux in React, the <Provider /> component wraps the entire application and passes the store down to all children.

* `connect` is what allows us to connect a component to Redux's store.

* We only need to import this action creator, as it handles dispatching the other actions.

* After our component's class definition, we're going to map Redux's state and the dispatching of our action creator to props.

### Redux Thunk ###
* Redux action creators don’t support asynchronous actions like fetching data.

* Redux Thunk allows you to write action creators that return a function instead of an action. The inner function can receive the store methods dispatch and getState as parameters.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). (with --use-npm flag)
