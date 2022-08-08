import React from 'react';
import AboutCSS from '../css/about.module.css';

export default function About(){
    
    return(
        <div className={AboutCSS.container}>
            <p className={AboutCSS.title}>WAIT LANG DI PA TAPOS!!!!</p>
        </div>
    )

    {/* <div className={AboutCSS.textContainer}>
                <p>Hi! I am <b>Joven R. Sabangan</b>, 
                a Computer Engineering Student from the Polythechnic University of the Philippines</p>
            </div>
            <img className={AboutCSS.image} src={require('../assets/images/jovendpr.jpg')}/> */}
}