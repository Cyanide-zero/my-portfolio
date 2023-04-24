import React from "react";
import WorkCSS from '../css/work.module.css';
import laminalogo from '../assets/images/laminalogo.png';
import puplogo from '../assets/images/puplogo.png'
import aiahlogo from '../assets/images/aiahicon.png'

export default function Work(){
    return(
        <div className={WorkCSS.container}>
            <h1 className={WorkCSS.title}>WORK EXPERIENCE</h1>
            <div className={WorkCSS.contentContainer}>
                <div className={WorkCSS.workContainer}>
                    <img className={WorkCSS.image} style={{height:'10vw', width:'10vw'}} src={aiahlogo}/>
                    <div className={WorkCSS.workContent}><br></br>
                        <p><b>FRONTEND ENGINEER | INTERN</b></p>
                        <p>InnoVantage, Inc. - Aiah | Quezon City - Philippines</p>
                        <p>MAR 2022 - DEC 2023</p>
                    </div>
                </div>
                <div className={WorkCSS.workContainer}>
                    <img className={WorkCSS.image} style={{width:'10vw'}} src={laminalogo}/>
                    <div className={WorkCSS.workContent}><br></br>
                        <p><b>SOFTWARE DEVELOPER | INTERN</b></p>
                        <p>Lamina Studios, LLC. | Quezon City - Philippines</p>
                        <p>SEPT 2021 - NOV 2021</p>
                    </div>
                </div>
                <div className={WorkCSS.workContainer}>
                    <img className={WorkCSS.image} style={{height:'10vw', width:'10vw'}} src={puplogo}/>
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