import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';

import TextChanger from './components/TextChanger';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Portfolio from './components/Portfolio';

const anchors = ["Hi!", "About", "Education", "Web", "Mobile"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#7fff00","#009182","#0c0c0c", "#0c0c0c", "#c4c4c4" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><TextChanger/></div>
          <div className="section"><h3>TEKA LANG DI PA TAPOS</h3><h3>BASTA ABOUT PAGE TO</h3></div>
          <div className="section"><h3>DITO YUNG EDUCATIONAL SHITS</h3></div>
          <div className="section"><Portfolio/></div>
          <div className="section"><h3>Section 5</h3></div>
        </div>
      );
    }}
  />
);
export default App;