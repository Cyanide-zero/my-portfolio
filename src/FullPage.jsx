import React from "react";
import { Fullpage, FullPageSections, FullpageNavigation, FullpageSection} from '@ap.cx/react-fullpage';

//Components  
import TextChanger from './components/TextChanger';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Portfolio from './components/Portfolio';

const FullPageScroll = () => {
    const SectionStyle = {
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    return(
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={{height:'100vh', width:'100vw'}}>
                    <h1>HELLO</h1>
                </FullpageSection>
                <FullpageSection>
                <p>Hello</p>
                </FullpageSection>
                <FullpageSection>
                <p>Hello</p>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll;