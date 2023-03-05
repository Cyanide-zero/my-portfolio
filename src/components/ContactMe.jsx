import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CSS from '../css/contact.module.css'
import Swal from 'sweetalert2'

const ContactMe = () => {

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const detectWidth = () =>{
    setWindowWidth(window.innerWidth)
  }

  React.useEffect(()=>{
    detectWidth();
    console.log(windowWidth);
    console.log(window.innerWidth)
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const urlRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

    
    
    if(form.current[0].value === '' || form.current[1].value === '' || form.current[2].value === ''){
        console.log("Please fill out all fields");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all the fields.',
            width:`${windowWidth <= 1100? '80%' : '40%' }`,
            height:`${windowWidth <= 1100? '50%' : '40%' }`,
        })
        e.target.reset();
    }else if(!emailRegex.test(form.current[2].value) && !urlRegex.test(form.current[2].value) ){
        console.log("Invalid email or website link")
        Swal.fire({
            icon: 'error',
            title: 'You actin\' a lil sus 🤔',
            text: 'Invalid Email or URL.',
            width:`${windowWidth <= 1100? '80%' : '40%' }`,
            height:`${windowWidth <= 1100? '50%' : '40%' }`,
        })
        //e.target.reset();
        
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting me. Have a nice day!',
            width:`${windowWidth <= 1100? '80%' : '40%' }`,
            height:`${windowWidth <= 1100? '50%' : '40%' }`,
        })
        emailjs.sendForm('service_wk2cp6p', 'template_r5ufm84', form.current, 'zJGE6ATFSLG6kM-xV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(form)
        e.target.reset();
    }
  };

  return (
    <div className={CSS.mainContainer}>
        <h1 className={CSS.title}>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className={CSS.formContainer}>
            <div className={CSS.inputContainer}>
                <label className={CSS.inputLabel}>Hello! I am/We are</label>
                <input 
                    type="text" 
                    name="from_name" 
                    placeholder="Name/Company"
                    className={CSS.inputField}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            
            <div className={CSS.inputContainer}>
                <textarea 
                    name="message" 
                    placeholder="Message"
                    className={CSS.inputArea}
                    onChange={(e)=>{setMessage(e.target.value)}}
                />
            </div>
            
            <div className={CSS.inputContainer}>
                <label className={CSS.inputLabel}>You may contact me/us through: </label>
                <input 
                    //type="email" 
                    name="from_email" 
                    placeholder="Link/Email" 
                    className={CSS.inputField}
                    onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            
            <input type="submit" value="Send" className={CSS.inputButton}/>
        </form>
    </div>
  );
};

export default ContactMe;