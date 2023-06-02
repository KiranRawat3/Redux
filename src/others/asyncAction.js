import axios, * as others from 'axios';

const redux = require("redux");
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunkMiddleware = require("redux-thunk").default;
// // export const asyncAction=()=>{
const initialState = {
  loading: false,
  users: [],
  error: "",
  isTrue:false
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const reducer = (state = initialState, action) => {
  console.log("HIIIIIIIIIIIIIIIIII",state)
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        isTrue:false,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        isTrue:true,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        isTrue:false,
        error: action.payload,
      };
  }
 
}
export const fetchUsers = () => { 
  console.log(">>>>>>>>>>>>>>>>>>")  //ACTION CREATOR
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://dummyjson.com/users/1')
      .then((response) => {
        const users = response.data
       dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message));
      });
  }
};

  
// };

// asyncAction()