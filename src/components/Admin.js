import React, { Component } from "react";
import logo from "./../images/logo2.png";
import "./../css/output.css";
import AdminContact from "./AdminContact";
import AdminProduct from "./ProductAdmin";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  render() {
    console.log(this.props.props.products);
    let AdminProductList = this.props.props.products.map((product, index) => {
      return (
        <AdminProduct
          name={product.name}
          price={product.price}
          description={product.description}
          availability={product.availability}
          category={product.category}
          img={product.productImageurl}
          handleDeleteProduct={this.props.props.handleDeleteProduct}
          handleEdit={this.props.props.handleEdit}
          handleFormInput={this.props.props.handleFormInput}
          handleFormSubmit={this.props.props.handleFormSubmit}
          wantedEditId={this.props.props.wantedEditId}
          isEditing={this.props.isEditing}
          key={index}
          index={index}
          id={product.productID}
        />
      );
    });
    let ContactList = this.props.props.contactInfo.map((info, index) => {
      return (
        <AdminContact
          name={info.name}
          email={info.email}
          zip={info.zip}
          key={index}
          index={index}
        />
      );
    });
    return (
      <div>
        <div className="modal">
          <form
            className="form1"
            action="http://localhost:3001/products"
            method="post"
            name="myForm"
          >
            <div id="contactname">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div id="contactemail">
              <label for="email">Price</label>
              <input type="number" id="price" name="price" />
            </div>
            <div id="contactzip">
              <label for="zip">Description</label>
              <input id="description" name="description" type="text" />
            </div>
            <div id="contactzip">
              <label for="zip">Category</label>
              <input id="category" name="category" type="text" />
            </div>
            <div id="contactzip">
              <label for="zip">Availability</label>
              <input id="availability" name="availability" type="text" />
            </div>
            <div id="contactzip">
              <label for="zip">Product Image Url</label>
              <input id="productImageurl" name="productImageurl" type="text" />
            </div>
            <input
              type="submit"
              id="contactbutton"
              className="inlinemargintop0"
            />
            <button
              className="inlinemargintop0"
              onClick={this.props.props.showModal}
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="admin__switchButtons__container">
          {this.props.isSwitched === "Products" ? (
            <button
              className="admin__switchButtons currenttab"
              onClick={this.props.props.handleProductAdminSwitch}
            >
              Products
            </button>
          ) : (
            <button
              className="admin__switchButtons"
              onClick={this.props.props.handleProductAdminSwitch}
            >
              Products
            </button>
          )}
          {this.props.isSwitched === "Products" ? (
            <button
              className="admin__switchButtons"
              onClick={this.props.props.handleContactAdminSwitch}
            >
              Contact Info
            </button>
          ) : (
            <button
              className="admin__switchButtons currenttab"
              onClick={this.props.props.handleContactAdminSwitch}
            >
              Contact Info
            </button>
          )}
        </div>
        <div className="Admin__list">
          <div className="Admin__Header inlinemargintop0">
            <ul>
              <li className="product__name margintop">
                {this.props.isSwitched === "Products"
                  ? "Product Name"
                  : "Contact Name"}
              </li>
              {this.props.isSwitched === "Products" ? (
                <li className="product__price margintop">Product Price</li>
              ) : null}
              <li className="product__description__Admin margintop">
                {this.props.isSwitched === "Products"
                  ? "Product Description"
                  : "Contact Zipcode"}
              </li>
              {this.props.isSwitched === "Products" ? (
                <li className="product__availability margintop">
                  Product Availability
                </li>
              ) : null}
              {this.props.isSwitched === "Products" ? (
                <li className="product__availability margintop">
                  Product Category
                </li>
              ) : null}
              <li className="product__url margintop">
                {this.props.isSwitched === "Products"
                  ? "Image Url"
                  : "Contact Email"}
              </li>
            </ul>
          </div>
          {this.props.isSwitched === "Products" ? (
            <button
              className="product__container Admin__container AddButton"
              onClick={this.props.props.showModal}
            >
              <img
                src="https://image.flaticon.com/icons/png/512/16/16909.png"
                alt="Plus sign"
                className="AddButton__picture"
              />
              <p className="addItem">Add Item</p>
            </button>
          ) : null}
          <div>
            {this.props.isSwitched === "Products"
              ? AdminProductList
              : ContactList}
          </div>
        </div>
      </div>
    );
  }
}
