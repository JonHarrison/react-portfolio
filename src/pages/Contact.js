import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import * as emailAPI from '../utils/emailAPI';

// import { Form, Button, Checkbox} from 'react-bootstrap';

// import Learn from './Learn';

// https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/

const Contact = (props) => {
  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    console.log(e.target);
    const { name, email, subject, message } = e.target.elements;
    let contactForm = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(contactForm);
    emailAPI.postMessage(contactForm)
      .then((res) => {
        setFormStatus('Send');
      });
  }

  const inlineStyles = { width: '100%', maxWidth: '450px' };

  return (
    <div className="contact container mt-5 justify-center text-center" style={inlineStyles} >
      <h2 className="mb-3">How can I help you ?</h2>
      <Form className="grid" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="contactForm.fullnameInput">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.subjectInput">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="subject" placeholder="Contact us about" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.messageInput">
          <Form.Label>Message</Form.Label>
          <Form.Control type="textarea" as="textarea" rows={5} placeholder="Message" />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Check type="checkbox" label="Send me a copy" className=""> */}
            <Form.Check.Label><Form.Check.Input type="checkbox" isValid />Send me a copy</Form.Check.Label>
          {/* </Form.Check> */}
        </Form.Group>
        
        {/*onClick={onSubmit}*/}
        <Button className="btn btn-danger" type="submit" >{formStatus}</Button>
      </Form>
      {/* <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p> */}
    </div>
  );
}

export default Contact;
