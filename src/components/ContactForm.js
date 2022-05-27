import React from "react"; 
import './ContactForm.css'

import emailjs from "emailjs-com";


export default function ContactForm(){

    function sendEmail(e){

        e.preventDefault(); 

        emailjs.sendForm('gmail', 'template_e3yryhz', e.target, 'n4nzqnvmmdS6Ph-I5')
        .then((result)=> {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        

    }
    
    return(
        
            <div className="Container">
                <form onSubmit={sendEmail}>
                <label for="name">Name:</label>
                              <input type="text" className="form-input" placeholder="Name" name="name"/>

                          <label for="name">Email:</label>
                              <input type="email" className="form-input" placeholder="Your Email" name="reply_to"/>

                          <label for="name">Subject:</label>
                              <input type="text" className="form-input" placeholder="Subject" name="subject"/>

                          <label for="name">Your message:</label>

                              <textarea className="form-textarea" id="" placeholder="Your message" name="message"></textarea>
                   <button className="btn">Send</button>
                </form>
            </div>
        
    )
}