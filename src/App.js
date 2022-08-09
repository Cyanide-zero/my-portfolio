import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';

import TextChanger from './components/TextChanger';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import WebPortfolio from './components/WebPortfolio';
import MobilePortfolio from './components/MobilePortfolio';

const anchors = ["Hi!", "About", "Education", "Work","Web", "Mobile"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    scrollingSpeed={1000}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#0c0c0c","#009182","#0c0c0c", "#0c0c0c","#0c0c0c", "#0c0c0c",  ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><TextChanger/></div>
          <div className="section" style={{height:'100vh'}}><h3>TEKA LANG DI PA TAPOS</h3><h3>BASTA ABOUT PAGE TO</h3></div>
          <div className="section"><Education/></div>
          <div className="section"><Work/></div>
          <div className="section"><WebPortfolio/></div>
          <div className="section" style={{height:'100vh'}}><MobilePortfolio/></div>
        </div>
      );
    }}
  />
);
export default App;