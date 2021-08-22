import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "../redux/reducers";
import throttle from 'lodash/throttle';

const loggerMiddleware = createLogger();

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const peristedState = loadState();

// store.subscribe(() => {
//     saveState(store.getState());
// });
// Serialization is an expensive operation. You should use a throttle function (like the one implemented by lodash) to limit the number of saves.
// Ref: https://stackoverflow.com/questions/52161128/react-redux-state-is-lost-at-page-refresh




export const store = createStore(
    // peristedState,
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware
    )
);
//
store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));
