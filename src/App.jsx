import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideNav from "./components/SideNav";
import './index.css'
import Progress_Card from "./components/Progess_Card";
import Tables from "./components/Table";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SideNav />
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto d-flex justify-content-around gap-10 flex-wrap items-center">
              <Progress_Card />
              <Progress_Card />
              <Progress_Card />
              <Progress_Card />
              <Progress_Card />
              <Progress_Card />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="justify-content-center items-center">
            <Tables />
            </div>
          </div>
        </div>
        <Footer/>
        </div>
        
      </>
      );
}

      export default App;
