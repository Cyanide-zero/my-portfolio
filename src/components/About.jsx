import React from 'react';
import AboutCSS from '../css/about.module.css';

export default function About(){
    const [date, setDate] = React.useState("Jan 05 2022")
    const uDate = new Date(date)
    const year = uDate.getFullYear();
    const month = uDate.getMonth();
    const day = uDate.getDate();
    var newDate;

    if(month > 8){
        if(day>9){
            newDate = `${year}-${month+1}-${day}`
        }else{
            newDate = `${year}-${month+1}-0${day}`
        }
        
    }else{
        if(day>8){
            newDate = `${year}-0${month+1}-${day}`
        }else{
            newDate = `${year}-0${month+1}-0${day}`
        }
    }
    
    return(
        <div className={AboutCSS.container}>
            <input
                type="date"
                value={newDate}
                style={{
                    padding:'10px',
                    fontFamily:'sans-serif',
                
                }}
            />
            {newDate}
        </div>
    )

    {/* <div className={AboutCSS.textContainer}>
                <p>Hi! I am <b>Joven R. Sabangan</b>, 
                a Computer Engineering Student from the Polythechnic University of the Philippines</p>
            </div>
            <img className={AboutCSS.image} src={require('../assets/images/jovendpr.jpg')}/> */}
}