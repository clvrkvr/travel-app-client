import React from "react";
import Destination from "../Destination";
import { Button } from "../Button";
import Footer from "../Footer";
import "../../App.css";
import "../Cards.css";
import "../Destination.css";

const Services = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="cards">
        <h1>Explore these EPIC destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__item">
              <Destination
                src="images/phuket.jpg"
                text="Enjoy the pure white sands, aquamarine waters and limestone cliffs in Phuket"
                label="Adventure"
              />
              <Destination
                src="images/bali.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
              />
              <Destination
                src="images/grand-canyon.jpg"
                text="Explore and enjoy the view of the Grand Canyon in Arizona"
                label="Adventure"
              />
            </ul>
            <br />
            <ul className="cards__item">
              <Destination
                src="images/south-island.jpg"
                text="Go on a road trip, hike the mountains, or visit the glacier in New Zealand's South Island"
                label="Adventure"
              />
              <Destination
                src="images/eiffel-tower.jpg"
                text="Explore and see iconic attractions in the City of Love"
                label="Vibrant"
              />
              <Destination
                src="images/bora-bora.jpg"
                text="Enjoy the luxurious resorts, beaches, and explore the jungle of Bora Bora"
                label="Luxury / Adventure"
              />
            </ul>
            <br />
            <ul className="cards__item">
              <Destination
                src="images/machu-picchu.jpg"
                text="Visit the Lost City of the Incas and feel the vibe of living in the Middle Ages"
                label="Adventure / Vibrant"
              />
              <Destination
                src="images/rio-de-janeiro.jpg"
                text="Enjoy the views and the beaches of Rio De Janeiro"
                label="Adventure"
              />
              <Destination
                src="images/niagara-falls.jpg"
                text="A spectacular cluster of three waterfalls, Niagara Falls is a must-see if you want a glimpse of some of North America's best sites"
                label="Adventure"
              />
            </ul>
          </div>
          <br />
          <Button
            buttonStyle="btn--clear"
            path="/register-trip"
            onClick={() => scrollToTop()}>
            Book Now!
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
