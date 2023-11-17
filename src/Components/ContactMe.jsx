import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mk6qu6o', 'template_sdca5mb', form.current, 'GlBVur3r75FnEjqU9')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    color: 'black',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyle}>
      <label style={labelStyle}>Name</label>
      <input type="text" name="form_name" style={inputStyle} />
      <label style={labelStyle}>Email</label>
      <input type="email" name="form_email" style={inputStyle} />
      <label style={labelStyle}>Message</label>
      <textarea name="message" style={textareaStyle} />
      <input type="submit" value="Send" style={buttonStyle} />
    </form>
  );
};

export default ContactMe;
