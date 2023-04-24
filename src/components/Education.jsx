import React from "react";
import Edu from "../css/education.module.css";
import puplogo from "../assets/images/puplogo.png";
import sacilogo from "../assets/images/sacilogo.jpg";
import clahslogo from "../assets/images/clahslogo.jpg";

export default function Education() {
  const [regions, setRegions] = React.useState([]);
  React.useEffect(() => {
    fetch("https://ph-locations-api.buonzz.com/v1/regions")
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.data);
        // console.log(data.data);
      });

    console.log(regions);
  }, []);

  return (
    <div className={Edu.container}>
      <h1 className={Edu.title}>Educational Background</h1>
      <div className={Edu.timeline}>
        <ul>
          <li>
            <div className={Edu.timelineContent}>
              <img className={Edu.image} src={puplogo} />
              <h3 className={Edu.date}>2018 - 2023</h3>
              <p className={Edu.schoolText}>
                Polytechnic University of the Philippines
                <br /> - Sta. Mesa Manila
              </p>
            </div>
          </li>
          <li>
            <div className={Edu.timelineContent}>
              <img className={Edu.image} src={sacilogo} />
              <h3 className={Edu.date}>2016 - 2018</h3>
              <p className={Edu.schoolText}>Southeast Asian College Inc.</p>
            </div>
          </li>
          <li>
            <div className={Edu.timelineContent}>
              <img className={Edu.image} src={clahslogo} />
              <h3 className={Edu.date}>2012 - 2016</h3>
              <p className={Edu.schoolText}>Carlos L. Albert High School</p>
            </div>
          </li>
        </ul>
      </div>
      {/* <h1>Hello StratPoint</h1>
      {regions.map((region, index) => {
        return <p key={index}>{region.name}</p>;
      })} */}
    </div>
  );
}
