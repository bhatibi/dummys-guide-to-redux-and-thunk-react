https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.44hlq3vvt

https://github.com/stowball/dummys-guide-to-redux-and-thunk-react

Notes:

* A component shouldn’t include logic to fetch data, and data shouldn’t be stored in a component’s state, so this is where Redux comes in.

* There is 1 global state object that manages the state for your entire application. It is the single source of truth.

* The only way to modify the state is through **emitting an action**, which is an object that describes what should change. 

* **Action Creators** are the functions that are dispatched to emit a change – all they do is return an action. *Action creators are functions that return an action.*

* When an action is dispatched, a **Reducer** is the function that actually *changes the state* appropriate to that action – or returns the existing state if the action is not applicable to that reducer.

* Reducers are "pure functions". They should not have any side-effects nor mutate the state — they must return a modified copy.

* Individual reducers are combined into a single **rootReducer** to create the discrete properties of the state.

* The **Store** is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk etc.), and allows you to actually dispatch actions.

* For using Redux in React, the <Provider /> component wraps the entire application and passes the storedown to all children.

* Redux action creators don’t support asynchronous actions like fetching data.

* Redux Thunk allows you to write action creators that return a function instead of an action. The inner function can receive the store methods dispatch and getState as parameters.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
