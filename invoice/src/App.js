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


function App() {
  const [isLogin, setIsLogin] = useState("true");

  const handleLoginClick = function () {};

  return (
    <div className="">
      <h1>Green House Pharmacy</h1>

      {/* <InvoiceLayout type="Tax" /> */}
      {/* <MountingPractice favcol="Blue" /> */}
      {/* <UpdateSample /> */}
      {/* <GetSnap /> */}
      {/* <WillUn /> */}
      <MapPractice/>

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

    </div>
  );
}

export default App;
