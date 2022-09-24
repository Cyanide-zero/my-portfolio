import React from "react";
import FCC from '../css/fcc.module.css';

export default function Fcc(){
    return(
        <div className={FCC.container}>
            <h1 className={FCC.title}>freeCodeCamp Certification Activities</h1>
            <div className={FCC.mainContainer}>
                <div className={FCC.contentContainer}>
                    <a href="https://codepen.io/TetraCyanide/full/JjvorKB" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Random Quote Generator</p>
                        <img src={require('../assets/images/quotes.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://codepen.io/TetraCyanide/full/JjvorKB" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>JavaScript Calculator</p>
                        <img src={require('../assets/images/calculator.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://codepen.io/TetraCyanide/full/JjvorKB" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Markdown Previewer</p>
                        <img src={require('../assets/images/mdpreview.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://codepen.io/TetraCyanide/full/JjvdMXK" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Drum Machine</p>
                        <img src={require('../assets/images/drummachine.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://codepen.io/TetraCyanide/full/ZEoGvaY" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Pomodoro Clock</p>
                        <img src={require('../assets/images/pomodoro.jpg')} className={FCC.linkImage}/>
                    </a>
                </div>
                <div className={FCC.contentContainer}>
                    <a href="https://boilerplate-project-timestamp.cyanide-zero.repl.co/" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Timestamp Microservices</p>
                        <img src={require('../assets/images/timestamp.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://boilerplate-project-headerparser.cyanide-zero.repl.co/" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Request Header Parser Microservice</p>
                        <img src={require('../assets/images/parser.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://boilerplate-project-urlshortener.cyanide-zero.repl.co/" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>URL Shortener</p>
                        <img src={require('../assets/images/url.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://boilerplate-project-exercisetracker.cyanide-zero.repl.co/" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>Exercise Tracker</p>
                        <img src={require('../assets/images/exercise.jpg')} className={FCC.linkImage}/>
                    </a>
                    <a href="https://boilerplate-project-filemetadata.cyanide-zero.repl.co/" className={FCC.linkContainer}>
                        <p className={FCC.linkText}>File Metadata Microtransaction</p>
                        <img src={require('../assets/images/metadata.jpg')} className={FCC.linkImage}/>
                    </a>
                </div>
            </div>
        </div>
    )
}