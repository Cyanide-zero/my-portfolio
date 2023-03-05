import React from 'react';
import PortCSS from '../css/mobportfolio.module.css';
import lalabaApp from '../assets/images/lalabaApp.jpg';
import ebin from '../assets/images/ebin.jpg';
import jt from '../assets/images/jt.jpg';

export default function WebPortfolio (){
    return(
        <div className={PortCSS.container}>
            <h1 className={PortCSS.title}>Mobile Projects</h1>
            <p className={PortCSS.note}>*Please note that in this section, clicking a card will redirect you to the demo video or download page of the APK file.</p>
                    <div className={PortCSS.categories}>
                        <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40cyanidezero/lalabaApp-7ccde6bc09524fd891ec4707766d136e-signed.apk" target="_blank" className={PortCSS.mobileCard}>
                            <img className={PortCSS.mobileCardImage} src={lalabaApp}/>
                            <p className={PortCSS.mobileCardName}>LalabaApp</p>
                        </a>
                        <a href="https://expo.dev/artifacts/df79f694-2769-4d10-83c4-7735be9ebea2" target="_blank" className={PortCSS.mobileCard}>
                            <img className={PortCSS.mobileCardImage} src={ebin}/>
                            <p className={PortCSS.mobileCardName}>E-bin App</p>
                        </a>
                        <a href="https://www.youtube.com/watch?v=ZitxCpD_skE" target="_blank" className={PortCSS.mobileCard}>
                            <img className={PortCSS.mobileCardImage} src={jt}/>
                            <p className={PortCSS.mobileCardName}>JuanTapp</p>
                        </a>
                    </div>
            </div>
    )
}