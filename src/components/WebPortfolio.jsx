import React from 'react';
import PortCSS from '../css/webportfolio.module.css';
import silverwolves from '../assets/images/silverwolves.jpg';
import mgandramshan from '../assets/images/mgandramshan.jpg';
import cpelab from '../assets/images/cpelab.jpg';
import clientms from '../assets/images/clientsystem.jpg'

export default function WebPortfolio (){
    return(
        <div className={PortCSS.container}>
            <h1 className={PortCSS.title}>Sample Projects</h1>
            <div className={PortCSS.categories}>
                <a href="https://silverwolves.000webhostapp.com/" target="_blank"className={PortCSS.card}>
                    <img className={PortCSS.cardImage} src={silverwolves}/>
                    <p className={PortCSS.cardName}>Silver Wolves</p>
                </a>
                <a href="https://mg-and-ramshan.netlify.app/" target="_blank" className={PortCSS.card}>
                    <img className={PortCSS.cardImage} src={mgandramshan}/>
                    <p className={PortCSS.cardName}>MG and Ramshan Ordering</p>
                </a>
            </div>

            
            <h1 className={PortCSS.title}>Collaborations</h1>
                <div className={PortCSS.categories}>
                    <a href="https://mg-and-ramshan.netlify.app/" target="_blank" className={PortCSS.card}>
                        <img className={PortCSS.cardImage} src={cpelab}/>
                        <p className={PortCSS.cardName}>CpE Laboratory Borrowing</p>
                    </a>
                    <a href="https://client-management-system.000webhostapp.com/" target="_blank" className={PortCSS.card}>
                        <img className={PortCSS.cardImage} src={clientms}/>
                        <p className={PortCSS.cardName}>Client Management System</p>
                    </a>
                </div>
            {/* <h1 className={PortCSS.title}>Mobile Projects</h1>
            <p className={PortCSS.note}>*Please note that in this section, clicking a card will redirect you to the download page of the APK file.</p>
                <div className={PortCSS.categories}>
                    <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40cyanidezero/lalabaApp-7ccde6bc09524fd891ec4707766d136e-signed.apk" target="_blank" className={PortCSS.mobileCard}>
                        <img className={PortCSS.mobileCardImage} src={'../assets/images/lalabaApp.jpg')}/>
                        <p className={PortCSS.cardName}>LalabaApp</p>
                    </a>
                    <a href="https://expo.dev/artifacts/df79f694-2769-4d10-83c4-7735be9ebea2" target="_blank" className={PortCSS.mobileCard}>
                        <img className={PortCSS.mobileCardImage} src={'../assets/images/ebin.jpg')}/>
                        <p className={PortCSS.cardName}>E-bin App</p>
                    </a>
                </div>
                <p className={PortCSS.note}>
                   TEKA LANG DI PA TO TAPOS HAHAHAHA 
                </p> */}

        </div>
    )
}