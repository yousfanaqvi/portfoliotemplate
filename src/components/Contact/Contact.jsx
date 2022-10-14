import React ,{useState, useRef } from 'react'
import './Contact.css';
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

    // const[fData,setFormdata]=useState({
    //   n:"",
    //   e:"",
    //   m:""
    // });

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ukztntd', 'template_4rl35o9', form.current, 'JtcjoysPABtO-K2cj')
        .then((result) => {
            alert("message sent");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        
    };
   

    // function handleClick(event){
    //   const{name,value}=event.target;
    //   setFormdata((prevdata)=>({
    //       ...prevdata,
    //       [name]:value}));
    //  }

  return (

    
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container container_contact'>
        <div className='contact_options'>
          <article className='contact_opt'>
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>yousfa@gmail.com</h5>
            <a href="mailto:yousfayahya@gmail.com">Send a message</a>
          </article>
          <article className='contact_opt'>
            <AiOutlinePhone className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>908-969-8039</h5>
            <a href="https://api.whatsapp.com">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your name"
           required/>
          <input type="email" name="email" placeholder='Enter your email'
           required/>
          <textarea name="message" rows="7" placeholder="Enter message" 
           required></textarea>
          <div  align="right">
          <button type='submit' name="submit" className='btn btn-primary ' >Send Message</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact