import React from "react";
import Footer from "../Footer";
import "../../App.css";

const About = () => {
  return (
    <>
      <div className="about">
        <br />
        <div className="about__container">
          <div className="about__wrapper">
            <ul className="about__items">
              <li className="about__item">
                <h1>Amazing Tours</h1>
                <p>
                  Amazing Tours is an independent media company championing
                  outdoor lifestyle, environmental stewardship and regenerative
                  living. Through celebrating the stories of those inspired by
                  nature, we encourage people to connect with the natural world
                  in meaningful ways so they may become active stewards of our
                  planet.
                </p>
              </li>
              <li className="about__item">
                <h1>Our story</h1>
                <p>
                  In 2019, Amazing Tours founder, Clark Roda, came together to
                  create a high-quality lifestyle publication that inspires a
                  connection to the great outdoors, considered ways of living,
                  environmental stewardship and a sense of fulfilment in our
                  everyday lives. Through our love for storytelling, and working
                  alongside our small team and a talented network of
                  contributors, we have crafted a product for a community of
                  outdoors people who are creative, curious and adventurous. We
                  believe that if we can foster a meaningful relationship with
                  nature then we may be best equipped and most motivated to
                  offer stewardship to our planet, especially now, at a time
                  when it so desperately needs it.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
};
export default About;
