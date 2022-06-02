import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import Contact from "./Contact";
import GetSnap from "./GetSnap";
import HeaderComponent from "./HeaderComponent";
import MapPractice from "./MapPractice";
import NotFound from "./NotFound";

class RoutingSample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <a href="/map">Click to Map</a>
          <br></br>
          <Link to={"/map"}> Click to Map using Route</Link>
          <br></br>
          <Link to={"/user"}> <button >Contact Button</button></Link>

        <Routes>
        <Route index element={<HeaderComponent />} />
        <Route path="/user" element={<HeaderComponent />} />
        <Route path="/map" element={<MapPractice />}>
            {/* <Route path="profile" element={<Contact />} />
            <Route path="account" element={<Contact />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>


          {/* <Routes>
            <Route index path="/" element={<HeaderComponent />}></Route>
            <Route path="/map" element={<MapPractice />}></Route>
            <Route path="/snap" element={<GetSnap />}></Route>
            <Route path="/contact" element={<Contact/>}>
                <Route path="invoice" element={<MapPractice/>}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes> */}
        </BrowserRouter>


      </>
    );
  }
}

export default RoutingSample;
