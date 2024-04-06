"use client"

import React, { useRef, useState } from 'react';
import { Button } from "./ui/button"; 
import { Input } from "./ui/input"; 
import { Textarea } from "./ui/textarea"; 
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"; 
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setNameError(!name);
    setEmailError(!email || !/\S+@\S+\.\S+/.test(email));
    setMessageError(!message);

    if (name && email && message && /\S+@\S+\.\S+/.test(email)) {
      emailjs
        .sendForm('service_dx6j84b', 'template_bxesy0a', form.current, {
          publicKey: 'ubjyEPI46Moq3JQCO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setName('');
            setEmail('');
            setMessage('');
            notify();
          },
          (error) => {
            setName('');
            setEmail('');
            setMessage('');
          },
        );
    }
  };

  const notify = () => toast("Message sent successfully!");

  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
        {nameError && <p>Please enter a name.</p>}
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        {emailError && <p>Please enter a valid email.</p>}
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" name="message" placeholder="Type your message here." required value={message} onChange={e => setMessage(e.target.value)} />
        {messageError && <p>Please enter a message.</p>}
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" value="send" onSubmit={notify} className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
      <ToastContainer position="bottom-right"/>
    </form>
  );
};

export default Form;