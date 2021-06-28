import React from "react";
import Footer from "../Footer";
import "../../App.css";
import NotFoundPage from "./NotFoundPage";

const SuccessfulPage = ({ match }) => {
  const successfulPage = match.params.page;
  let outputString;
  switch (successfulPage) {
    case "booked":
      outputString = "Booked Trip";
      break;

    case "subscribed":
      outputString = "Subscribed to Newsletters";
      break;
    case "registered":
      outputString = "Registered Account";
      break;
    default:
      outputString = "";
      break;
  }
  if (outputString === "") {
    return <NotFoundPage />;
  } else {
    return (
      <>
        <h1 className="successful-page">Successfully {outputString}!</h1>
        <Footer />
      </>
    );
  }
};

export default SuccessfulPage;
