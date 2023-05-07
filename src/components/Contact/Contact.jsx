import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import Map from "./Map"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 20px;
`

const Design = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Contact = () => {

  const form = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm("service_7q2pkax", "template_qjymj2a", form.current, "YFxebhvRrCsqK6l7Y")
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });

  };

  return (
    <Section>
      <Container>
        <Content>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write your message' rows={10} name='message' />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Content>
        <Design>
          <Map />
        </Design>
      </Container>
    </Section>
  )
}

export default Contact