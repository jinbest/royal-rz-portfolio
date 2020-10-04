// import React from 'react'

// export default function Form() {
//   return (
//     <div>
//         <div className="form-group">
//         <label htmlFor="name">Name</label>
//           <input type="text" className="form-control" id="name" name="name" required="" />
            
//             <span className="input-border"></span></div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" className="form-control" id="email" name="email" required="" />
//           <span className="input-border"></span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input type="text" className="form-control" id="subject" required="" />
//           <span className="input-border"></span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Your Message</label>
//           <textarea className="form-control" id="message" name="message" required=""></textarea>
//           <span className="input-border"></span>
//         </div>
//         <div className="contact-btn main-btn btn btn-block" type="submit">Send Message</div>
//         <div className="form-message text-center"><span></span>
//         </div>
//     </div>
//   )
// }


import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// action="https://formspree.io/kotdevops@gmail.com"

export default function Form() {

  // function SubmitFormData() {
  //   console.log("sdfe");
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = () => {
    setSubmitted(true);
    let data = {"name": name, "email": email, "subject": subject, "message": message};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/send_email', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
        }
    }
    xhr.send(JSON.stringify(data));
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }, 3000);
    console.log("handleSubmitted", name, email, subject, message);
  }

  return (
    <div style={{marginTop: "40px", marginBottom: "100px"}}>
      <ValidatorForm
        onSubmit={handleSubmit}
        className="contactForm"
      >
        <TextValidator
          label="Name"
          onChange={handleChangeName}
          className="col-md-12 mb-3"
          name="name"
          value={name}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <br />
        <TextValidator
          label="Email"
          onChange={handleChangeEmail}
          className="col-md-12 mb-3"
          name="email"
          value={email}
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
        />
        <br />
        <TextValidator
          label="Subject"
          onChange={handleChangeSubject}
          className="col-md-12 mb-3"
          name="subject"
          value={subject}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <br />
        <TextValidator
          label="Message"
          onChange={handleChangeMessage}
          className="col-md-12 mb-3"
          name="message"
          value={message}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
          className="contact-btn main-btn btn btn-block"
        >
          Send Message
        </Button>
      </ValidatorForm>
    </div>
  )
}
