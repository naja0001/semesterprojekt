import React from "react";
import Navbar from "../Assets/NavbarPages"; // Import the Navbar component
import forløb1 from "../Images/forløb1.jpg";
import forløb2 from "../Images/forløb2.jpg";
import forløb3 from "../Images/forløb3.jpg";
import "./styles.css";
import "./kurser.css";
import Footer from "../Assets/Footer"; // Import the Navbar component
import Loader from "./Loader";

const Udenadslæring = () => {
  return (
    <>
      <Loader />
      <div>
        <header className="header1">
          <Navbar />

          <div className="text-box1">
            <h1>Udenadslæring</h1>
            <p>
              "Vi tilbyder kurser, der henvender sig til alle aldre og
              niveauer."
            </p>
          </div>
        </header>

        <section className="courses" id="cards">
          <h1>Udenadslæring</h1>
          <p>Linjer for udenadslære</p>
          <div class="container">
            <div class="course_sprite" id="course1">
              <img src={forløb1} alt="forløb1" />
              <div class="label">
                <h2>1.5-års forløb</h2>
              </div>
              <div class="course_body">
                <div class="course_content">
                  <h2>1.5-års forløb</h2>
                  <p>
                    Her er målet at færdiggøre memoreringen af koranen på 1.5år,
                    <br />
                    hvor man memorerer 2 ajaa' hver måned.
                  </p>
                </div>
              </div>
            </div>
            <div class="course_sprite">
              <img src={forløb2} alt="forløb2" />
              <div class="label">
                <h2>3-års forløb</h2>
              </div>
              <div class="course_body">
                <div class="course_content">
                  <h2>3-års forløb</h2>
                  <p>
                    I 3 års forløbet et målet at lære koranen udenad, <br />
                    ved at lære 7 ajaa' det første år, 18 ajzaa' det andet år{" "}
                    <br />
                    og fulføreså memoreringen af resten af koranen i tredje år.
                  </p>
                </div>
              </div>
            </div>
            <div className="course_sprite">
              <img src={forløb3} alt="forløb3" />
              <div class="label">
                <h2>5-års forløb</h2>
              </div>
              <div class="course_body">
                <div class="course_content">
                  <h2>5-års forløb</h2>
                  <p>
                    5-år forløbet er forløbet hvor eleven lærer 2 ajaa'(2
                    dele)(dele af 30 dele af koranen) <br />
                    i det første år, 5 ajzaa' det andet år, 10 ajzaa' det tredje
                    år,
                    <br />
                    18 ajzaa' det fjerde år og fuldføre udenadlæren af hele
                    koranene det femte år.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </section>

        <section className="text-udenads">
          <p>
            Eleven der har færdiggjort memorering af af koranen skal læse hele
            koranen for underviseren adskillige gange, så det memoreret bliver
            stadfæstet i hukommelsen.
            <br />
            Når eleven har reiteret hele koranen for underviseren adskillige
            gange, vil eleven nu forskønne recitationen med underviseren, hvor
            recitation rettes og i henhold til de velkendte recitationsregler og
            metoder.
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Udenadslæring;
