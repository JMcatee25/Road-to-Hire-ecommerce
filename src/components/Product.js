import React, { Component } from "react";
import "./../css/output.css";

export default class Product extends Component {
  render() {
    return (
      <div className="product__container">
        <img className="product__img" src={this.props.img} alt="" />
        <div className="product__container__info">
          <p>{this.props.name}</p>
          <p>${this.props.price}</p>
          <p className="product__description">{this.props.description}</p>
          <p>{this.props.availability}</p>
        </div>
      </div>
    );
  }
}
