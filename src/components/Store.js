import React, { Component } from "react";
import "./../css/output.css";
import logo from "./../images/logo2.png";
import { Route, Link, Switch } from "react-router-dom";
import Contact from "./Contact";
import App from "../App";
import Product from "./Product";
import auth0Client from "./../auth0/Auth";

export default class Store extends Component {
  render() {
    let productList = this.props.products.map((product, index) => {
      return (
        <Product
          name={product.name}
          price={product.price}
          description={product.description}
          availability={product.availability}
          img={product.productImageurl}
          key={index}
          index={index}
        />
      );
    });
    let filteredProductList = this.props.filteredProducts.map(
      (product, index) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            description={product.description}
            availability={product.availability}
            img={product.productImageurl}
            key={index}
            index={index}
          />
        );
      }
    );
    return (
      <div>
        <Switch>
          <Route path="/Contact" exact component={Contact} />
          <Route path="/" exact component={App} />
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
              <Link to="/Contact">
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
        <ul>
          <li>Filter Category:</li>
          <li className="filterList" onClick={this.props.handleShowAll}>
            Show All
          </li>
          <li className="filterList" onClick={this.props.handlePomeFilter}>
            Pomes
          </li>
          <li className="filterList" onClick={this.props.handleBerryFilter}>
            Berries
          </li>
          <li className="filterList" onClick={this.props.handleCitrusFilter}>
            Citrus
          </li>
          <li className="filterList" onClick={this.props.handlePepoFilter}>
            Pepos
          </li>
        </ul>
        <ul>
          <li>Filter Price:</li>
          <li className="filterList" onClick={this.props.handleShowAll}>
            Show All
          </li>
          <li className="filterList" onClick={this.props.handleUnderFilter}>
            Under $1
          </li>
          <li className="filterList" onClick={this.props.handleOverFilter}>
            Over $1
          </li>
        </ul>
        <hr />
        <div className="store">
          {this.props.isFiltered ? filteredProductList : productList}
        </div>
      </div>
    );
  }
}
