import React from "react";
import style from "../css/techs.module.css";
import { ReactSVG } from "react-svg";
//import icons
import html5 from "../assets/svgs/html5.svg";
import css3 from "../assets/svgs/css3.svg";
import js from "../assets/svgs/js.svg";
import reactjs from "../assets/svgs/reactjs.svg";
import vuejs from "../assets/svgs/vuejs.svg";
import php from "../assets/svgs/php.svg";
import mysql from "../assets/svgs/mysql.svg";
import nodejs from "../assets/svgs/nodejs.svg";
import vscode from "../assets/svgs/vscode.svg";
import github from "../assets/svgs/github.svg";
import git from "../assets/svgs/git.svg";
import firebase from "../assets/svgs/firebase.svg";
import python from "../assets/svgs/python.svg";
import cpp from "../assets/svgs/cpp.svg";
import csharp from "../assets/svgs/csharp.svg";
import unity from "../assets/svgs/unity.svg";
import expressjs from "../assets/svgs/expressjs.svg";
import mongodb from "../assets/svgs/mongodb.svg";

export default function Techs() {
  const icons = [
    html5,
    css3,
    js,
    reactjs,
    vuejs,
    php,
    mysql,
    nodejs,
    vscode,
    github,
    git,
    firebase,
    python,
    cpp,
    csharp,
    unity,
    expressjs,
    mongodb,
  ];

  return (
    <div className={style.container}>
      <h1 className={style.title}>Technologies Used</h1>
      <div className={style.row}>
        {icons.slice(0, 8).map((icon) => {
          return (
            <ReactSVG
              src={icon}
              className={style.icons}
              beforeInjection={(svg) => {
                svg.classList.add("svg-class-name");
                svg.setAttribute("style", "width: 100px;height:100px;");
              }}
            />
          );
        })}
      </div>
      <div className={style.row}>
        {icons.slice(8, 16).map((icon) => {
          return (
            <ReactSVG
              src={icon}
              className={style.icons}
              beforeInjection={(svg) => {
                svg.classList.add("svg-class-name");
                svg.setAttribute("style", "width: 100px;height:100px;");
              }}
            />
          );
        })}
      </div>
      <div className={style.row}>
        {icons.slice(16, 18).map((icon) => {
          return (
            <ReactSVG
              src={icon}
              className={style.icons}
              beforeInjection={(svg) => {
                svg.classList.add("svg-class-name");
                svg.setAttribute("style", "width: 100px;height:100px;");
              }}
            />
          );
        })}
      </div>
      {/* <ReactSVG src={css3} className={style.icons}/> */}
    </div>
  );
}
