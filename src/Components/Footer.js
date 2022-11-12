import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { FaDiscord, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const date = new Date()
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <button className="btn hireme-btn">
              <Link className="start" to="/contact"> Get Started </Link> 
              </button>
               
            </div>
          </div>
        </section>

        {/* footer section */}

        <footer className="footer">
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>PURAV KAPOOR</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe To Get Important Updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <input className="btn-2" type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3 className="space">Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/purav-kapoor/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="icons"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className="call">Call Us</h3>
              <h3>+918219288447</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
              &#169;{date.getFullYear()} Purav Kapoor.  &nbsp;  All Rights Reserved.
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .footer{
    padding-top:14rem;
    padding-bottom:2rem;
   }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color:lavenderblush;
    border-radius: 1rem;
    color:black;
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  .space{
    margin-left:5rem;
  }
  .call{
    margin-left:3rem;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
 }

 .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

 h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p{
    font-size: 1rem;
    line-height: 1.5;
    font-weight:400;
  }


  .btn{
    padding:0.7rem 0.9rem;
    border-radius:0.5rem;
    background-color:black;   
  }

  .start:hover{
    color:lightcoral;
  }

  input[type="email"]{
    background-color:lavenderblush;
  }

  .btn-2{
    background-color:bisque;
    font-weight:bold;
    margin-top:0.7rem;
    padding:0.7rem 0.9rem;
    border-radius:0.5rem;
  }

  .btn-2:hover{
    color:lightcoral;
  }
  form{
    margin-bottom:1rem;
  }
  hr{
    color:bisque;
  }
  .start{
    text-decoration:none;
    color:bisque;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color:black ;
    h3 {
      color:bisque ;
      margin-bottom: 2.4rem;
    }
    p {
      color: bisque;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ;
        .icons {
          color: bisque;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
        .icons:hover{
            color:lightcoral;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 2rem;
    hr {
      margin-bottom: 2rem;
      color: ;
      height: 0.1px;
    }
  }
  @media (max-width:650px ) {
    .footer{    
        display:none;
        
    }
    .contact-short {
      max-width: 100vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
      .grid{
        gap: 3.2rem;
      }
      .grid-two-column , .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
    
    .footer-bottom--section {
      padding-top: 4.8rem;
    }

    .section{
      width:100%;
    }
  }
`;

export default Footer;