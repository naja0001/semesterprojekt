import Navbar from "../Assets/NavbarPages"; // Import the Navbar component
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import "./kurser.css";
import "./login.css";
import "./kontaktos.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Assets/Footer"; // Import the Navbar component
import Loader from "./Loader";

//import dotenv from "dotenv";
//dotenv.config({ path: "./.env.dev" });

const ContactUs = () => {
  const form = useRef();
  console.log("Process Environment:", process.env);

  const sendEmail = (e) => {
    console.log("Public Key:", process.env.REACT_APP_PUBLIC_KEY);
    console.log("Service Key:", process.env.REACT_APP_SERVICE_ID);
    console.log("template Key:", process.env.REACT_APP_TEMPLATE_ID);

    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />
          <div className="text-box1">
            <h1>Kontakt os</h1>
            <p>
              "Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer."
            </p>
          </div>
        </header>

        <section className="contact-section">
          <div class="contact-wrapper">
            <section className="tildmeddig">
              <div className="wrapper">
                <form className="cf" action="" ref={form} onSubmit={sendEmail}>
                  <h1>Tilmeld dig</h1>
                  <div className="input-box">
                    <input
                      type="text"
                      name="name"
                      placeholder="Fuldenavn"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      name="kursus"
                      placeholder="kursus"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      name="number"
                      placeholder="Nummer"
                      required
                    />
                  </div>
                  <div className="remember-forgot">
                    <label>
                      <input type="checkbox" name="checkbox" />
                      Remember me
                    </label>
                    <a href="#">Forgot password</a>
                  </div>
                  <button type="submit" value="submit" className="btn">
                    Login
                  </button>
                  <div className="register-link">
                    <p>
                      Dont't have an account <a href="#">Register</a>
                    </p>
                  </div>
                </form>
              </div>
            </section>
            <div className="contact-info">
              <div>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>Phone No.</span>
                <span className="text">1-2392-23928-2</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>E-mail</span>
                <span className="text">mail@company.com</span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <span>Address</span>
                <span className="text">
                  2939 Patrick Street, Vicotria TX, United States
                </span>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.3888630372194!2d12.432770075764681!3d55.71699399474994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525052c1ca3ea9%3A0xed6ec7555c367122!2zSMO4cmvDpnIgMzIsIDI3MzAgSGVybGV2!5e0!3m2!1sda!2sdk!4v1701907139240!5m2!1sda!2sdk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
