import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/phuket.jpg"
              text="Enjoy the pure white sands, aquamarine waters and limestone cliffs in Phuket"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/bali.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/bora-bora.jpg"
              text="Enjoy the luxurious resorts, beaches, and explore the jungle of Bora Bora"
              label="Luxury / Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
