import React, { Component } from "react";
import "./../css/output.css";

export default class AdminProduct extends Component {
  render() {
    const myid = this.props.id;
    return (
      <form
        className="product__container Admin__container"
        onSubmit={e => this.props.handleFormSubmit(e, this.props.id)} // eslint-disable-line semi
      >
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="text"
            defaultValue={this.props.name}
            className="product__name AdminEdit"
            name="name"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__name AdminEdit">{this.props.name}</p>
        )}
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="number"
            defaultValue={this.props.price}
            className="product__price AdminEdit"
            name="price"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__price AdminEdit">{this.props.price}</p>
        )}
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="text"
            defaultValue={this.props.description}
            className="product__description__Admin AdminEdit"
            name="description"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__description__Admin AdminEdit">
            {this.props.description}
          </p>
        )}
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="text"
            defaultValue={this.props.availability}
            className="product__availability AdminEdit"
            name="availability"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__availability AdminEdit">
            {this.props.availability}
          </p>
        )}
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="text"
            defaultValue={this.props.category}
            className="product__availability AdminEdit"
            name="category"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__availability AdminEdit">
            {this.props.category}
          </p>
        )}
        {this.props.isEditing && this.props.id === this.props.wantedEditId ? (
          <input
            type="text"
            defaultValue={this.props.img}
            className="product__url AdminEdit"
            name="productImageurl"
            onChange={this.props.handleFormInput}
          />
        ) : (
          <p className="product__url AdminEdit">{this.props.img}</p>
        )}
        <button
          onClick={() => this.props.handleEdit(this.props.id)}
          className="editButton"
          type={
            this.props.isEditing && this.props.id === this.props.wantedEditId
              ? "button"
              : "submit"
          }
        >
          {this.props.isEditing && this.props.id === this.props.wantedEditId
            ? "Save"
            : "Edit"}
        </button>
        <button
          className="XButton"
          onClick={() => this.props.handleDeleteProduct(this.props.id)}
        >
          X
        </button>
      </form>
    );
  }
}
