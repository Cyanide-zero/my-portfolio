import React from "react";
import FCC from '../css/fcc.module.css';
//assets
import quotes from '../assets/images/quotes.jpg';
import calculator from '../assets/images/calculator.jpg'
import mdpreview from '../assets/images/mdpreview.jpg';
import drummachine from '../assets/images/drummachine.jpg'
import pomodoro from '../assets/images/pomodoro.jpg'
import timestamp from '../assets/images/timestamp.jpg'
import parser from '../assets/images/parser.jpg'
import urlLogo from '../assets/images/url.jpg'
import exercise from '../assets/images/exercise.jpg'
import metadata from '../assets/images/metadata.jpg'
import waddles from '../assets/images/waddles-no-right.png'
import eye from '../assets/images/eye.png'

const useKey = (key, cb) => {
    const cbRef = React.useRef(cb);

    React.useEffect(()=>{
        cbRef.current = cb;
    })

    React.useEffect(()=>{
        const handle = (event) =>{
            if(event.code === key){
                cbRef.current(event);
            }
        }
        document.addEventListener("keypress", handle);
        return () => document.removeEventListener("keypress", handle)
    }, [key])
}

const RenderItems = () => {
    return (
        <>
                    <h1 className={FCC.title}>freeCodeCamp Certification Activities</h1>
                    <div className={FCC.mainContainer}>
                        <div className={FCC.contentContainer}>
                            <a href="https://codepen.io/TetraCyanide/full/JjvorKB" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Random Quote Generator</p>
                                <img src={quotes} className={FCC.linkImage}/>
                            </a>
                            <a href="https://codepen.io/TetraCyanide/full/JjvorKB" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>JavaScript Calculator</p>
                                <img src={calculator} className={FCC.linkImage}/>
                            </a>
                            <a href="https://codepen.io/TetraCyanide/full/JjvorKB" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Markdown Previewer</p>
                                <img src={mdpreview} className={FCC.linkImage}/>
                            </a>
                            <a href="https://codepen.io/TetraCyanide/full/JjvdMXK" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Drum Machine</p>
                                <img src={drummachine} className={FCC.linkImage}/>
                            </a>
                            <a href="https://codepen.io/TetraCyanide/full/ZEoGvaY" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Pomodoro Clock</p>
                                <img src={pomodoro} className={FCC.linkImage}/>
                            </a>
                            <a href="https://www.freecodecamp.org/certification/Cyanide-zero/front-end-development-libraries" 
                                target="_blank" 
                                className={FCC.linkContainer}
                                style={{marginTop:'1vh'}}
                            >
                                <p className={FCC.linkText}>Front End Libraries Certificate</p>
                            </a>
                        </div>
                        <div className={FCC.contentContainer}>
                            <a href="https://boilerplate-project-timestamp.cyanide-zero.repl.co/" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Timestamp Microservices</p>
                                <img src={timestamp} className={FCC.linkImage}/>
                            </a>
                            <a href="https://boilerplate-project-headerparser.cyanide-zero.repl.co/" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Request Header Parser Microservice</p>
                                <img src={parser} className={FCC.linkImage}/>
                            </a>
                            <a href="https://boilerplate-project-urlshortener.cyanide-zero.repl.co/" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>URL Shortener</p>
                                <img src={urlLogo} className={FCC.linkImage}/>
                            </a>
                            <a href="https://boilerplate-project-exercisetracker.cyanide-zero.repl.co/" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>Exercise Tracker</p>
                                <img src={exercise} className={FCC.linkImage}/>
                            </a>
                            <a href="https://boilerplate-project-filemetadata.cyanide-zero.repl.co/" target="_blank" className={FCC.linkContainer}>
                                <p className={FCC.linkText}>File Metadata Microtransaction</p>
                                <img src={metadata} className={FCC.linkImage}/>
                            </a>
                            <a href="https://www.freecodecamp.org/certification/Cyanide-zero/back-end-development-and-apis" target="_blank" className={FCC.linkContainer} style={{marginTop:'1vh'}}>
                                <p className={FCC.linkText}>Back End Development and APIs Certificate</p>
                            </a>
                        </div>
                    </div>
                </>
    );
}

export default function Fcc(){

    // React.useEffect(()=>{
    //     document.addEventListener('mousemove',(e)=>{
    //         console.log(e);
    //     })
    // })
    document.addEventListener('mousemove', (e)=>{
        //console.log(e.clientX, e.clientY);
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const anchor = document.getElementById('anchor');
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        console.log(angleDeg);

        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`;
            anchor.style.filter = `hue-rotate(${angleDeg}deg)`
        })
    });

    function angle(cx, cy, ex, ey){
        const dy = ey-cy;
        const dx = ex-cx;
        const rad = Math.atan2(dy,dx);
        const deg = rad * 180/ Math.PI;
        return deg
    }
    const [prof, setProf] = React.useState(false);
    const [code, setCode] = React.useState('');

    const handleEnter = (e) => {
        e.preventDefault();
        console.log("enter");
        setProf(true)
    }

    useKey("Enter", handleEnter);

    const handleSubmit = () => {
        console.log("Click");
        if(code === "CMPE30213"){
            <RenderItems/>
        }
    }

    return(
        <div className={FCC.container} style={{overflow:"hidden"}}>
            {
                prof === true?
                <form className={FCC.form} onSubmit={handleSubmit}>
                    {
                        code === "CMPE30213"? <RenderItems/>
                        : <>
                        <label className={FCC.inputLabel}>Enter the Subject Code: <span style={{color:'#0c0c0c'}}>CMPE30213</span></label>
                        <input type="text" className={FCC.inputField} onChange={(e)=>{setCode(e.target.value)}}/>
                        <input type="submit" className={FCC.inputButton} value="Click Me!"/></>
                    }
                </form>

                
                : <div>
                    <img id="anchor" src={waddles}
                        style={{height:'100vh', width:'100vw'}}
                    />
                    <div id="eyes" className={FCC.eyes}>
                        <img className="eye" src={eye} style={{position:'absolute',top:'32vh',left:'39.5vw'}}/>
                        <img className="eye" src={eye} style={{position:'absolute',top:'32vh',left:'56.5vw'}}/>
                        {/* <img class={FCC.eye} src={'../assets/images/eye.png')}/>
                        <img class={FCC.eye} src={'../assets/images/eye.png')}/> */}
                    </div>
                    {/* <p style={{
                        fontSize:'40pt',
                        color:'#009182'
                    }}>Nothing to see here...</p> */}
                </div>
            }
        </div>
    )
}