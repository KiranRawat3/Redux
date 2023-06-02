
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { reducer } from "../others/asyncAction";
const redux=require("redux")
const createStore = redux.createStore;
const applymiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const store = createStore(reducer,applymiddleware(thunkMiddleware));

export default store;

//const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))