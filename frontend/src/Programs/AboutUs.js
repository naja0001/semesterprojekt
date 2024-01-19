import React from "react";
import Footer from "../Assets/Footer"; // Import the Navbar component
import Navbar from "../Assets/NavbarPages"; // Import the Navbar component
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import "./kurser.css";
import Loader from "./Loader";

const AboutUs = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />

          <div className="text-box1">
            <h1>Om os</h1>
            <p>
              "Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer."
            </p>
          </div>
        </header>

        <section className="info">
          <h1>Hvem er Ibn Amer Institute?</h1>
          <p>
            Vi er en uddannelsesinstution der specialisere sig udenfor
            reciitationsstile (qira'at) og koranens videnskaber. <br />
            <br />
            Vi specialisere os også indefor udenadslære af koranen, og arbejder
            for at sprede koranens videnskaber vidt og bredt. <br />
            Ibn amer Institute mellem eleven og undervisere er i fokus.
          </p>
          <div className="info_container">
            <div className="info_sprite">
              <h3>Vores vision</h3>
              <p>
                Vores vision er at være frontløbere indenfor udenadslære af
                koranen, hvor eleven udvikles til at være rollemodeller, Imamer
                og recitatorer i deres felt.
              </p>
            </div>

            <div className="info_sprite">
              <h3>vores struktur</h3>
              <p>
                Vores institut har flere linjer og forløb, der passer med
                elevens niveau.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
