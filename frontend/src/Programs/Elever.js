import React from "react";
import Navbar from "../Assets/NavbarPages"; // Import the Navbar component
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import "./kurser.css";
import Footer from "../Assets/Footer"; // Import the Navbar component
import Reviews from "../Assets/Reviews"; // Import the Navbar component
import Loader from "./Loader";

const Elever = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />
          <div className="text-box1">
            <h1>Elever</h1>
            <p>
              "Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer."
            </p>
          </div>
        </header>
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Elever;
