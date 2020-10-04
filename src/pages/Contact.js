import React from 'react'
import { contacts } from '../static/jsonData';
import Form from '../component/Form'

export default function Contact() {
  const contactList = () => {
    return contacts.map((contact, key ) => {
      return <div key={`contact${key}`} className = "contactlist">
        <span className="contact-type"><i className = {`contact-icon ${contact.icon}`}></i></span>
        <label>{contact.name}</label>
      </div>
    }
  )}

  return (
    <div className="container">
      <div className="contact-title col-12">
        CONTACT
      </div>
      <div className="contact-wrapper row">
        <div className="contact-info col-xl-5">
          { contactList() }
        </div>
        <div className="col-xl-7">
          <Form />
        </div>
      </div>
    </div>
  )
}
