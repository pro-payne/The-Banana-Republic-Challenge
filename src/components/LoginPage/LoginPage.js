import React from "react";
import {
  faMars,
  faVenus,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.scss";
import RadioButton from "../../asserts/RadioButton/RadioButton";

const LoginPage = () => {
  return (
    <>
      <form className="form-wrapper">
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div className="radio-buttons">
            <RadioButton
              name="gender"
              value="male"
              icon={faMars}
              id="male"
              label="Male"
            />
            <RadioButton
              name="gender"
              value="female"
              icon={faVenus}
              id="female"
              label="Female"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            placeholder="576802-ERD0348 45"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Membership</label>
          <div className="radio-buttons">
            <RadioButton
              name="membership"
              value="classic"
              icon={faCreditCard}
              id="classic"
              label="Classic"
            />
            <RadioButton
              name="membership"
              value="silver"
              icon={faCreditCard}
              id="silver"
              label="Silver"
            />
            <RadioButton
              name="membership"
              value="gold"
              icon={faCreditCard}
              id="gold"
              label="Gold"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="cancel-button" type="reset">
            CANCEL
          </button>
          <button className="save-button" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
