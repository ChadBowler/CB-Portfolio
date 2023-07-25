import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import 'dotenv/config';
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const MAIL_JS_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, MAIL_JS_PUBLIC_KEY)
          .then((result) => {
            return (
                <div className="container">
                    <p>Success</p>
                </div>
            )
            //   console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
      return (
        <div className="container">
            <div className="contact container text-center mt-5">
                <h3 className="page-title">How can you find me?</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <label className='form-label'>Name</label>
                <input type="text" className='form-name form-control' name="from_name" />
                <label className='form-label'>Email</label>
                <input type="email" className='form-control' name="user_email" />
                <label className='form-label'>Message</label>
                <textarea className='form-text form-control' name="message" />
                <input type="submit" className='btn mt-2' value="Send" />
            </form>
        </div>
        
      );

}
 
export default Contact;