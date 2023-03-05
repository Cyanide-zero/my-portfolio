import React from "react";
import WorkCSS from '../css/work.module.css';
import laminalogo from '../assets/images/laminalogo.png';
import puplogo from '../assets/images/puplogo.png'

export default function Work(){
    return(
        <div className={WorkCSS.container}>
            <h1 className={WorkCSS.title}>WORK EXPERIENCE</h1>
            <div className={WorkCSS.contentContainer}>
                <div className={WorkCSS.workContainer}>
                    <img className={WorkCSS.image1} src={laminalogo}/>
                    <div className={WorkCSS.workContent}><br></br>
                        <p><b>MOBILE DEVELOPER | INTERN</b></p>
                        <p>LAMINA STUDIOS, LLC. | PHILIPPINES</p>
                        <p>SEPT 2021 - NOV 2021</p>
                    </div>
                </div>
                <div className={WorkCSS.workContainer}>
                    <img className={WorkCSS.image2} src={puplogo}/>
                    <div className={WorkCSS.workContent}><br></br>
                        <p><b>WEB DEVELOPER</b></p>
                        <p>Freelance | PUP - Manila</p>
                        <p>Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}