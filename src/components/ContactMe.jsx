import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CSS from '../css/contact.module.css'

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wk2cp6p', 'template_r5ufm84', form.current, 'zJGE6ATFSLG6kM-xV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className={CSS.mainContainer}>
        <h1 className={CSS.title}>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className={CSS.formContainer}>
            <div className={CSS.inputContainer}>
                <label className={CSS.inputLabel}>Hello! I am</label>
                <input type="text" name="from_name" placeholder="Name/Company"className={CSS.inputField}/>
            </div>
            
            <div className={CSS.inputContainer}>
                
                <textarea name="message" placeholder="Message"className={CSS.inputArea}/>
            </div>
            
            <div className={CSS.inputContainer}>
                <label className={CSS.inputLabel}>You may contact me through: </label>
                <input type="email" name="from_email" placeholder="Link/Email" className={CSS.inputField}/>
            </div>
            
            <input type="submit" value="Send" className={CSS.inputButton}/>
        </form>
    </div>
  );
};

export default ContactMe;