import React from "react";
import styled from "styled-components";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    h2{
      margin-bottom:2rem;
    }

    span{
      font-weight:bold;
    }

    span:hover{
      cursor:pointer;
    }

    .info-icon{
      margin-right:0.5rem;
    }

    

    iframe{
      margin-top:1rem;
    }

    .container {
      margin-top: 6rem;
      display:flex;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width:30rem;
        }
      }
    }

    input, textarea{
      max-width: 50rem;      
      padding: 0.6rem 1.4rem;
      border: 1px solid ;
      background-color:black;
      color:bisque;
      text-transform: uppercase;
      
  }
      input[type="submit"]{
      max-width: 8rem;
      margin-top: 1rem; 
      padding: 0.4rem 0.6rem;
      border-style: solid;
      border-width: .1rem;
      border-radius:0.5rem;
      text-transform: uppercase;
      background-color:black;
      color:bisque;
      font-size: 1.2rem;
      cursor: pointer;
      
      transition: all 0.2s;
      
      &:hover {
        color:lightcoral;
      }

      
  `;

  return (
    <Wrapper>
      <h2>Feel Free To Contact Us</h2>
      <span><BsTelephoneFill className="info-icon"/>8219288447</span>
      <br />
      <span className="mail"><TfiEmail className="info-icon"/>puravkapoor77@gmail.com</span>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.600149010434!2d76.92827596811665!3d31.7048338223178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e3e255264813%3A0xd0a4b847793f01a1!2s192%2F11%2C%20Harivilla!5e1!3m2!1sen!2sin!4v1667906682349!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyvlkqq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message That You Want To Send Us"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
