import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.scss";
import InfoPage from "../InfoPage/InfoPage";
import LoginPage from "../LoginPage/LoginPage";

const LandingPage = () => {
  const [showForm, setShowFrom] = useState(false);

  const handleClicked = () => {
    setShowFrom((currentS) => !currentS);
  };
  return (
    <main>
      <div className="landing-wrapper">
        <div className="landing">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <h1>Front-end challenge!</h1>
          <p>This is a design that you will need to code up and impress us</p>
          <div className="slide-button">
            <button
              onClick={handleClicked}
              className={showForm ? "show-right" : ""}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
          </div>
        </div>
        <div className={`right-style ${showForm ? "white-background" : ""}`}>
          {!showForm ? <InfoPage /> : <LoginPage />}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
