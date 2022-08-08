import React from 'react';
import PortCSS from '../css/portfolio.module.css';

export default function Portfolio (){
    return(
        <div className={PortCSS.container}>
            <h1 className={PortCSS.title}>Sample Projects</h1>
            <div className={PortCSS.categories}>
                <a href="https://silverwolves.000webhostapp.com/" className={PortCSS.card}>
                    <img className={PortCSS.cardImage} src={require('../assets/images/silverwolves.jpg')}/>
                    <p className={PortCSS.cardName}>Silver Wolves</p>
                </a>
                <a href="https://mg-and-ramshan.netlify.app/" className={PortCSS.card}>
                    <img className={PortCSS.cardImage} src={require('../assets/images/mgandramshan.jpg')}/>
                    <p className={PortCSS.cardName}>MG and Ramshan Ordering</p>
                </a>
            </div>
            <h1 className={PortCSS.title}>Collaborations</h1>
                <div className={PortCSS.categories}>
                    <a href="https://mg-and-ramshan.netlify.app/" className={PortCSS.card}>
                        <img className={PortCSS.cardImage} src={require('../assets/images/cpelab.jpg')}/>
                        <p className={PortCSS.cardName}>CpE Laboratory Borrowing</p>
                    </a>
                    <a href="https://client-management-system.000webhostapp.com/" className={PortCSS.card}>
                        <img className={PortCSS.cardImage} src={require('../assets/images/clientsystem.jpg')}/>
                        <p className={PortCSS.cardName}>Client Management System</p>
                    </a>
                </div>
            <h1 className={PortCSS.title}>Mobile Projects</h1>
            <p className={PortCSS.note}>*Please note that in this section, clicking a card will redirect you to the download page of the APK file.</p>
                <div className={PortCSS.categories}>
                    <a href="https://client-management-system.000webhostapp.com/" className={PortCSS.mobileCard}>
                        <img className={PortCSS.mobileCardImage} src={require('../assets/images/lalabaApp.jpg')}/>
                        <p className={PortCSS.cardName}>LalabaApp</p>
                    </a>
                    <a href="https://client-management-system.000webhostapp.com/" className={PortCSS.mobileCard}>
                        <img className={PortCSS.mobileCardImage} src={require('../assets/images/lalabaApp.jpg')}/>
                        <p className={PortCSS.cardName}>E-bin</p>
                    </a>
                </div>

        </div>
    )
}