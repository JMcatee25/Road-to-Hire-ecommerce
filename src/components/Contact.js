import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "./../images/logo2.png";
import Home from "./Home";
import Store from "./Store";
import auth0Client from "./../auth0/Auth";
import "./../css/output.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Store" exact component={Store} />
        </Switch>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>H</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
              </Link>
            </li>
            <li>
              <Link to="/Store">
                <span>S</span>
                <span>T</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
              </Link>
            </li>
            {auth0Client.isAuthenticated() ? (
              <li>
                <Link to="/Admin">
                  <span>A</span>
                  <span>D</span>
                  <span>M</span>
                  <span>I</span>
                  <span>N</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
        <hr />
        <div className="contact__container">
          <div className="contact__container__info">
            <h4 className="contact__info">GET IN TOUCH</h4>
            <p className="contact__info">
              If you have any questions, comments, or concerns, we’d love to
              hear from you.
            </p>
            <p className="contact__info">Corporate: (123)-456-789</p>
            <p className="contact__info">Shipping: (123)-654-987</p>
            <p className="contact__info">
              For other inquiries, Please email: FruitCo@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3966720985d969092f20b0f5c097aeb5&auto=format&fit=crop&w=1950&q=80"
              alt="Bowl of fruit"
              className="contact__img"
            />
          </div>
        </div>
        <hr />
        <p className="contact__formtitle">GROW WITH US!</p>
        <div className="input">
          <form
            action="http://localhost:3001/form_submission"
            method="post"
            name="myForm"
          >
            <div id="contactname">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div id="contactemail">
              <label for="email">Email:</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div id="contactzip">
              <label for="zip">Zip-Code:</label>
              <input type="text" id="zip" name="zip" type="number" />
            </div>
            <input type="submit" id="contactbutton" />
          </form>
        </div>
      </div>
    );
  }
}
