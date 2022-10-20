import React from "react";
import Tech from '../css/techs.module.css';
import {AiFillHtml5, AiOutlineGithub} from 'react-icons/ai';
import {DiCss3, DiReact, DiPhp, DiGit} from 'react-icons/di';
import {IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {SiMysql, SiExpress, SiFirebase, SiMongodb, SiVisualstudiocode, SiUnity, SiCplusplus, SiCsharp} from 'react-icons/si'

export default function Techs () {
    
    const [hovered, setIsHovered] = React.useState(-1);

    return(
        <div className={Tech.container}>
            <h1 className={Tech.title}>Dev Technologies Used</h1>
            <div className={Tech.row}>
                <AiFillHtml5 
                    size={100} color={hovered === 0? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(0)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={0}
                />
                <DiCss3
                    size={100} color={hovered === 1? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(1)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={1}
                />
                <IoLogoJavascript
                    size={100} color={hovered === 2? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(2)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={2}
                />
                <DiReact
                    size={100} color={hovered === 3? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(3)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={3}
                />
                <DiPhp
                    size={100} color={hovered === 4? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(4)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={4}
                />
                <SiMysql
                    size={100} color={hovered === 5? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(5)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={5}
                />
                <IoLogoNodejs
                    size={100} color={hovered === 6? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(6)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={6}
                />
            </div>
            <div className={Tech.row}>
                <SiVisualstudiocode
                    size={100} color={hovered === 7? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(7)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={7}
                />
                <AiOutlineGithub
                    size={100} color={hovered === 8? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(8)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={8}
                />
                <DiGit
                    size={100} color={hovered === 9? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(9)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={9}
                />
                <SiFirebase
                    size={100} color={hovered === 10? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(10)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={10}
                />
                <SiCplusplus
                    size={100} color={hovered === 14? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(14)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={14}
                />
                <SiCsharp
                    size={100} color={hovered === 11? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(11)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={11}
                />
                <SiUnity
                    size={100} color={hovered === 15? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(15)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={15}
                />
                
            </div>
            <div className={Tech.row}>
                <SiExpress
                    size={100} color={hovered === 12? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(12)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={12}
                />
                <SiMongodb
                    size={100} color={hovered === 13? "#009182" : 'white'} 
                    onMouseEnter={()=>setIsHovered(13)} 
                    onMouseLeave={()=>setIsHovered(-1)}
                    style={{cursor:'pointer'}}
                    key={13}
                />
            </div>
        </div>
    )
}