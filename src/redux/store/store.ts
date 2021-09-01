import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from "../reducers";




declare let window: any;


const middlewares = [thunk];

const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : (item:any) => item
    ),
);


export default store;