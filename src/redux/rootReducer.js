import { combineReducers } from "redux";
import iceCreamReducer from "./ice-cream/iceCreamReducers";
import cakeReducer from "./cakes/cakeReducers";

const rootReducer=combineReducers(
    {
        iceCream:iceCreamReducer,
        cake:cakeReducer,
    
    })

    export default rootReducer