const Demo = () => {
  const redux = require("redux");
  const reduxLogger=require("redux-logger")
  const createStore = redux.createStore;
  const logger=reduxLogger.createLogger()
  const  combineReducers=redux.combineReducers
  
  const applyMiddleware=redux.applyMiddleware
  const BUY_CAKE = "BUY_CAKE"
  const BUY_ICECREAM='BUY_ICECREAM'
  function buyCake() {
    //action type
    return {
      type: BUY_CAKE,
      info: "first redux action",
    };
  }
  function buyIcecream(){
    return{
      type:BUY_ICECREAM
       }
  }
  //state
  // const initialState = {
  //   numOfCakes: 10,
  //   numOfIceCreams: 20,
  // };
  const initialCakeState = {
    numOfCakes: 10,
    
  };
  const initialIceCreamState = {
    numOfIceCreams: 20,
  };
  // //reducer function
  // const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case BUY_CAKE:
  //       return {
  //         ...state,                     //copy of state object using spread operator so that we can change required property of state,
  //         numOfCakes: state.numOfCakes - 1, //in this example we are asking reducer make copy of state and update the numOfCakes property of the state and other property will remain unchanged
  //       };
  //     case BUY_ICECREAM:
  //       return {
  //          ...state,                     //copy of state object using spread operator so that we can change required property of state,
  //         numOfIceCreams: state.numOfIceCreams - 1, //in this example we are asking reducer make copy of state and update the numOfCakes property of the state and other property will remain unchanged
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,                     //copy of state object using spread operator so that we can change required property of state,
          numOfCakes: state.numOfCakes - 1, //in this example we are asking reducer make copy of state and update the numOfCakes property of the state and other property will remain unchanged
        };
      default:
        return state;
    }
  };
  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,                     //copy of state object using spread operator so that we can change required property of state,
          numOfCakes: state.numOfIceCreams - 1, //in this example we are asking reducer make copy of state and update the numOfCakes property of the state and other property will remain unchanged
        };
      case BUY_ICECREAM:
        return {
           ...state,                     //copy of state object using spread operator so that we can change required property of state,
          numOfIceCreams: state.numOfIceCreams - 1, //in this example we are asking reducer make copy of state and update the numOfCakes property of the state and other property will remain unchanged
        };
      default:
        return state;
    }
  };
  //console.log("Hwoudewnnnnnnnnnnnnnn");
  const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamReducer
  })
  const store = createStore(rootReducer,applyMiddleware(logger));
  console.log(">>>>>>>>>>>>>>>>>>>>>>>", store);
  console.log("initial state", store?.getState());
  const unsubscribe = store.subscribe(()=>{})
  
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyIcecream());
  store.dispatch(buyIcecream());
 
  // unsubscribe()
};
// export default Demo;

Demo();