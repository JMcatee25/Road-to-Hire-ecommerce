import React, { Component } from "react";
import "./../css/output.css";

export default class AdminContact extends Component {
  render() {
    return (
      <div className="product__container Admin__container">
        <p className="product__name">{this.props.name}</p>
        <p className="product__name">{this.props.zip}</p>
        <p className="product__description__Admin">{this.props.email}</p>
        <button
          className="XButton"
          onClick={() => this.props.handleDeleteContact(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}
