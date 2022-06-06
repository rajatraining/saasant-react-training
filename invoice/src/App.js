import logo from "./logo.svg";
import "./App.css";
import InvoiceLayout from "./component/InvoiceLayout";
import MountingPractice from "./component/MountingPracitce";
import UpdateSample from "./component/UpdatingPractice";
import GetSnap from "./component/GetSnap";
import WillUn from "./component/WillUnmount";
import Sample from "./component/MapPractice";
import MapPractice from "./component/MapPractice";

import ConditionalRendering from "./component/conditionalRendering/ConditionalRendering";
import { useState } from "react";
import UsingFunction from "./component/ClassCompRender/UsingFunction";
import RoutingSample from "./component/RoutingSample";
import { BrowserRouter, Link } from "react-router-dom";
import AjaxSample from "./component/AjaxSample";
import NestedRouting, { Home, Layout } from "./component/NestedRouting";
import ReactCss from "./component/ReactCss";
import MyComponent from "./component/RefSample";
import RefsSample from "./component/RefsSample";
import RefSample from "./component/RefSample";
import CustomTextInput from "./component/CustomRef";
import CustomTextInputCallBack from "./component/RefWithCallback";
import PersonList, { PersonAdd } from "./component/AxiosSample";
import EnhancedComponent from './component/Hoc'
import React from "react";

export const TypeContext = React.createContext('Tax'); 

function App() {
  const [isLogin, setIsLogin] = useState("true");

  const handleLoginClick = function () {};
 

  return (
    <div className="">
      <h1>Green House Pharmacy</h1>
    <TypeContext.Provider value={{orgName:'saasant',location:'Chennai'} }>
       <InvoiceLayout  />
    </TypeContext.Provider>
     
      {/* <MountingPractice favcol="Blue" /> */}
      {/* <UpdateSample /> */}
      {/* <GetSnap /> */}
      {/* <WillUn /> */}
      {/* <MapPractice/> */}
      {/* <button onClick={() => setCount(count + 1)}>
          Click me
        </button> */}
      {/* <button onClick={() => setIsLogin("false")} >
        LogOut
      </button>
      <button onClick={() => setIsLogin("true")} >
        Login
      </button>
      <ConditionalRendering loggedin={isLogin}/>*/}
      {/* <UsingFunction /> */}
      {/* <RoutingSample/> */}
      {/* <AjaxSample/> */}
      {/* <BrowserRouter>
        <NestedRouting/>
      </BrowserRouter> */}
      {/* <ReactCss/> */}
    {/* <MyComponent/> */}

    {/* <RefsSample/>
   
    
    <CustomTextInputCallBack/>

    
    <PersonAdd/> */}
   {/* <CustomTextInput/> */}
    {/* <EnhancedComponent/> */}

    {/* <RefSample/> */}

    <PersonAdd/>
    <PersonList/>
    </div>
  );
}

export default EnhancedComponent(App);
