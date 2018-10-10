import React, { Component } from "react";
import "./../css/output.css";
import logo from "./../images/logo2.png";
import { Link } from "react-router-dom";
import ImgSlider from "./ImgSlider";
import auth0Client from "./../auth0/Auth";

export default class Home extends Component {
  render() {
    return (
      <div className="c-home">
        <div className="avatar">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Fruit.Co</h1>
        <p>Deliciousness at Your Door!</p>
        <nav>
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <span>H</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/Store"}>
                <span>S</span>
                <span>T</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/Contact"}>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
              </Link>
            </li>
            {auth0Client.isAuthenticated() ? (
              <li>
                <Link to={process.env.PUBLIC_URL + "/Admin"}>
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
        <br />
        {this.props.state.isLoading ? null : (
          <ImgSlider products={this.props.state.products} />
        )}
      </div>
    );
  }
}
