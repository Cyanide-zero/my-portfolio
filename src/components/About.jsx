import React from 'react';
import AboutCSS from '../css/about.module.css';
import jovendpr from '../assets/images/jovendpr.png';

export default function About(){
    
    return(
        <div className={AboutCSS.container}>
           <div className={AboutCSS.slideContainer}> 
                {/* <p className={AboutCSS.placeHolder}>WAIT LANG DI PA TAPOS!!!!</p> */}
                <div className={AboutCSS.slideContent}>
                    <p className={AboutCSS.slideText}>Hi! I am</p>
                    <div className={AboutCSS.stack} style={{"--stacks": 3}}>
                        <span style={{"--index": 0}}>JOVEN</span>
                        <span style={{"--index": 1}}>JOVEN</span>
                        <span style={{"--index": 2}}>JOVEN</span>
                    </div>
                    <p className={AboutCSS.right}>Sabangan</p><br/><br/><br/>
                    <p className={AboutCSS.slideText}>"Di pa po 'to tapos, pasensya na po."</p>
                </div>
                <img src={jovendpr} className={AboutCSS.image} />
           </div>
        </div>
        
    )

    
}