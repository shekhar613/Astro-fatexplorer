
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Assets/Styles/contact.css';
import Popup from "./Popup";



export default function Contact() {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const [time, settime] = useState("");
  const [place, setplace] = useState("");
  const [msg, setmsg] = useState("");

  const [popup, setpopup] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxnkrn5', 'template_ykzej2l', form.current, '0i8u63fkiGW5XuAmb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setpopup(true)
    setname('')
    setemail('')
    setphone('')
    setdob('')
    settime('')
    setplace('')
    setmsg('')
    
  };






  return (
    
    <div className='container contact_section '>
      <h3>Know your Hororscope and more...</h3>
      <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input required type="txt"  className="form-control" name='from_name' placeholder="Your name" value={name} onChange={(e)=>setname(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input required type="email" className="form-control" name='email' placeholder="name@example.com"value={email} onChange={(e)=>setemail(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input required type="tel" className="form-control" name='phone'  placeholder="Your Phone number"value={phone} onChange={(e)=>setphone(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input required type="date" className="form-control" name='DOB' placeholder="Your date " value={dob} onChange={(e)=>setdob(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Time with (AM/PM)</label>
        <input required type="time" className="form-control" name='time' placeholder="DOB time" value={time} onChange={(e)=>settime(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Place where you Born</label>
        <input required type="text" className="form-control" name='place' placeholder="Place..." value={place} onChange={(e)=>setplace(e.target.value)}/>
      </div>


      <div className="mb-3">
        <label  className="form-label">Your Query</label>
        <textarea className="form-control" rows="3" name='message' placeholder='Your message or query' value={msg} onChange={(e)=>setmsg(e.target.value)} ></textarea>
      </div>
      <Popup trigger={popup}/>
      <button className='btn btn-primary'  >Submit</button>

      </form>
    </div>
  )
}
