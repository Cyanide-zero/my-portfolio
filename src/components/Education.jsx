import React from "react";
import Edu from '../css/education.module.css';

export default function Education () {
    return(
        <div className={Edu.container}>
            <h1 className={Edu.title}>EDUCATIONAL BACKGROUND</h1>
            <div className={Edu.schoolContainer}>
                <div className={Edu.introContainer}>
                    <p><b>Polytechnic University of the Philippines - Manila</b></p>
                    <p>2018 - Present</p>
                </div>
                <img className={Edu.image} src={require('../assets/images/puplogo.png')}/>
            </div>
            <div className={Edu.schoolContainer}>
                <img className={Edu.image} src={require('../assets/images/sacilogo.jpg')}/>
                <div className={Edu.introContainer}>
                    <p><b>Southeast Asian College Inc.</b></p>
                    <p>2016 - 2018</p>
                </div>
            </div>
            <div className={Edu.schoolContainer}>
                <div className={Edu.introContainer}>
                    <p><b>Carlos L. Albert High School</b></p>
                    <p>2012 - 2016</p>
                </div>
                <img className={Edu.image} src={require('../assets/images/clahslogo.jpg')}/>
            </div>
        </div>
    )
}