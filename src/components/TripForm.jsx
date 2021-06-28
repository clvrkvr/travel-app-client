import React, { useState } from "react";
import Footer from "./Footer";
import { Button } from "./Button";
import "../App.css";
import "./TripForm.css";

const TripForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [traveller, setTraveller] = useState("");
  const reserveTrip = async () => {
    fetch(`/api/tours/trips/add-trip`, {
      method: "post",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        destination,
        traveller,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <>
      <div className="form__container">
        <div className="form__wrapper">
          <br />
          <br />
          <h1>Your Trip Summary</h1>
          <br />
          <p>Please fill in this form to book a trip!</p>
          <br />
          <br />
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="first-name">First Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      minLength="3"
                      size="25"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="last-name">Last Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      minLength="3"
                      size="25"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email-address">Email:</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      minLength="3"
                      size="25"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="mobile-phone">Phone:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="mobile-phone"
                      name="phone"
                      minLength="12"
                      maxLength="12"
                      size="25"
                      placeholder="888-888-8888"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="destination">Destination:</label>
                  </td>
                  <td>
                    <select
                      name="destination"
                      id="destination"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      <option value="">-- Select Your Destination --</option>
                      <option value="Phuket">Phuket</option>
                      <option value="Bali">Bali</option>
                      <option value="Grand Canyon">Grand Canyon</option>
                      <option value="South Island">South Island</option>
                      <option value="Paris">Paris</option>
                      <option value="Bora Bora">Bora Bora</option>
                      <option value="Machu Picchu">Machu Picchu</option>
                      <option value="Rio De Janeiro">Rio De Janeiro</option>
                      <option value="Niagara Falls">Niagara Falls</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="traveller">Traveller:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="traveller"
                      name="traveller"
                      minLength="3"
                      size="25"
                      min="0"
                      value={traveller}
                      onChange={(e) => setTraveller(e.target.value)}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <Button
              buttonStyle="btn--clear"
              type="submit"
              onCLick={() => reserveTrip()}
              path="/activity-booked"
            >
              Book Trip
            </Button>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TripForm;
