import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
//import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer.js";
import UserDetail from "./components/UserDetail";
import APIIntegration from "./components/APIIntegration";
function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
          
      <UserDetail/>
      </div>
    </Provider>
  );
}

export default App;



  {/* <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer/>
        <NewCakeContainer/> */}