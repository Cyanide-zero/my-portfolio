import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';

import TextChanger from './components/TextChanger';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import WebPortfolio from './components/WebPortfolio';
import MobilePortfolio from './components/MobilePortfolio';
import Fcc from './components/Fcc';
import ContactMe from './components/ContactMe';
import Techs from "./components/Techs";

const anchors = ["Hi!", "About", "Education", "Work","Web", "Mobile", "Contact", "Technologies","freeCodeCamp"];

const App = () => (
  <ReactFullpage
    //loopBottom={true}
    // loopTop={true}
    anchors={anchors}
    scrollingSpeed={1000}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#0c0c0c","#009182","#0c0c0c", "#0c0c0c","#0c0c0c", "#0c0c0c", "#0c0c0c", "#0c0c0c", "#0c0c0c",  "#0c0c0c" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><TextChanger/></div>
          <div className="section" style={{height:'100vh', width:'100vw'}}><About/></div>
          <div className="section" style={{height:'100vh'}}><Education/></div>
          <div className="section"><Work/></div>
          <div className="section"><WebPortfolio/></div>
          <div className="section" style={{height:'100vh'}}><MobilePortfolio/></div>
          <div className="section" style={{height:'100vh', color:'white'}}><ContactMe/></div>
          <div className="section" style={{height:'100vh'}}><Techs/></div>
          <div className="section" style={{height:'100vh'}}><Fcc/></div>
        </div>
      );
    }}
  />
);
export default App;