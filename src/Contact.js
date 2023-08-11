import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import resume from './Chad_Bowler_Resume.pdf'
import { useState } from 'react';
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const MAIL_JS_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
    const form = useRef();
    const [ success, setSuccess ] = useState('');
    const [ statusColor, setStatusColor ] = useState('black');

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, MAIL_JS_PUBLIC_KEY)
          .then((result) => {
            e.target.reset();
            setStatusColor('green')
            setSuccess('Thanks!');
            
              console.log(result.text);
          }, (error) => {
            setStatusColor('red');
            setSuccess("Oops! That didn't go through.");
            
              console.log(error.text);
          });
      };
    
      return (
        <div className="contiainer contact-container fade-in">
            <div className="row justify-content-center align-items-center">
                <div className="contact container text-center mt-5 col-12">
                    <h3 className="page-title">How can you find me?</h3>
                </div>
                <div className="contact-form col-5"> 
                    <form ref={form} onSubmit={sendEmail} className='mt-4'>
                        <label className='form-label'>Name</label>
                        <input type="text" required className='form-name form-control mb-2' name="from_name" />
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control mb-2' name="user_email" />
                        <label className='form-label'>Message</label>
                        <textarea className='form-text form-control mb-2' name="message" />
                        <input type="submit" className='btn mt-2' value="Send" />
                        <span className='success-message' style={{ color: statusColor}}>{success}</span>
                    </form>
                </div>
                <div className="col-12 text-center p-5 resume-download">
                    <a href={resume} download='Chad_Bowler_Resume' className='btn'><i className="fa-solid fa-download"> Resume</i></a>
                </div>
            </div>
        </div>
      );
}
export default Contact;