import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';

// import Demo from './redux/demo';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const redux = require("redux");
// const createStore = redux.createStore;

// const reducer = () => {
// };
// const store = createStore(reducer)



root.render(
  <React.StrictMode>
      <App />
    {/* <Provider store={store}>
  
    <Demo/>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
