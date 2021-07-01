import React, { useState } from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import "../../App.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const registerUser = async () => {
    fetch(`/api/tours/users/add-user`, {
      method: "post",
      body: JSON.stringify({ firstName, lastName, email, password, birthday }),
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
          <h1>Sign Up</h1>
          <br />
          <p>Please fill in this form to create an account!</p>
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
                      minLength="10"
                      size="25"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password:</label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      minLength="10"
                      maxLength="50"
                      size="25"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="birthday">Date of Birth:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
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
              onClick={() => {
                registerUser();
                scrollToTop();
              }}
              path="/sign-up"
            >
              Sign Up
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
export default SignUp;
