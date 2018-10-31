import React, { Component } from "react";
import "./css/output.css";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/signin";
import Callback from "./auth0/callback";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Home from "./components/Home";
import SecuredRoute from "./securedRoutes/securedRoute";
import Admin from "./components/Admin";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      contactinfo: [],
      filteredProducts: [],
      isLoading: true,
      isFiltered: false,
      isSwitched: "Products",
      isEditing: false,
      wantedEditId: "",
      name: "",
      price: "",
      category: "",
      description: "",
      productImageurl: "",
      availability: ""
    };
    this.handlePomeFilter = this.handlePomeFilter.bind(this);
    this.handleBerryFilter = this.handleBerryFilter.bind(this);
    this.handleCitrusFilter = this.handleCitrusFilter.bind(this);
    this.handlePepoFilter = this.handlePepoFilter.bind(this);
    this.handleOverFilter = this.handleOverFilter.bind(this);
    this.handleUnderFilter = this.handleUnderFilter.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleProductAdminSwitch = this.handleProductAdminSwitch.bind(this);
    this.handleContactAdminSwitch = this.handleContactAdminSwitch.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // Next.js
  componentDidMount() {
    const url = `http://localhost:3001/products`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          products: json
        });
      })
      .catch(function(error) {
        this.setState({
          isLoading: false
        });
        console.log(error);
      });

    fetch("http://localhost:3001/form_submission")
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          contactinfo: json
        });
      })
      .catch(function(error) {
        this.setState({
          isLoading: false
        });
        console.log(error);
      });
  }

  // Filter methods, (Need to fix this)
  handleShowAll() {
    this.setState({
      isFiltered: false
    });
  }

  handlePomeFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.category === "Pome"
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  handleBerryFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.category === "Berry"
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  handleCitrusFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.category === "Citrus"
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  handlePepoFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.category === "Pepo"
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  handleOverFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.price > 1
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  handleUnderFilter() {
    const filteringProducts = this.state.products.filter(
      product => product.price < 1
    );
    this.setState({
      isFiltered: true,
      filteredProducts: filteringProducts
    });
  }

  //Handles Admin functions

  handleProductAdminSwitch() {
    let AdminSwitch = "Products";
    this.setState({
      isSwitched: AdminSwitch
    });
  }

  handleContactAdminSwitch() {
    let AdminSwitch = "Contacts";
    this.setState({
      isSwitched: AdminSwitch
    });
  }

  handleDeleteProduct(id) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
    window.location.reload();
  }

  handleDeleteContact = id => {
    fetch(`http://localhost:3001/form_submission/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
    window.location.reload();
  };

  showModal() {
    const modal = document.querySelector(".modal");
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  }

  handleEdit(id) {
    let sentFormId = id;
    let AdminEdit = !this.state.isEditing;
    this.setState({
      isEditing: AdminEdit,
      wantedEditId: sentFormId
    });
  }

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (e, id) => {
    const {
      name,
      price,
      description,
      availability,
      category,
      productImageurl
    } = this.state;
    let reqbody = {
      name,
      price,
      description,
      availability,
      category,
      productImageurl,
      productID: id
    };
    this.handleEditFetch(reqbody);
  };

  handleEditFetch = reqbody => {
    fetch(
      `http://localhost:3001/products`, // eslint-disable-line semi
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqbody)
      }
    )
      .then(response => console.log(response))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="App">
        <SignIn />
        <Route
          exact
          // path="/callback"
          path={process.env.PUBLIC_URL + "/callback"}
          component={Callback}
        />
        <SecuredRoute
          // path={process.env.PUBLIC_URL + "/Admin"}
          path="/Admin"
          component={Admin}
          products={this.state.products}
          contactInfo={this.state.contactinfo}
          handleProductAdminSwitch={this.handleProductAdminSwitch}
          handleContactAdminSwitch={this.handleContactAdminSwitch}
          handleFormInput={this.handleFormInput}
          handleFormSubmit={this.handleFormSubmit}
          isSwitched={this.state.isSwitched}
          wantedEditId={this.state.wantedEditId}
          showModal={this.showModal}
          handleDeleteProduct={this.handleDeleteProduct}
          handleDeleteContact={this.handleDeleteContact}
          handleEdit={this.handleEdit}
          isEditing={this.state.isEditing}
        />
        <Switch>
          <Route
            // path="/"
            path={process.env.PUBLIC_URL + "/"}
            exact
            render={props => <Home {...props} state={this.state} />}
          />
          <Route
            //  path="/Contact"
            path={process.env.PUBLIC_URL + "/Contact"}
            exact
            component={Contact}
          />
          <Route
            path={process.env.PUBLIC_URL + "/Store"}
            // path="/Store"
            exact
            render={props => (
              <Store
                {...props}
                handleOverFilter={this.handleOverFilter}
                handleUnderFilter={this.handleUnderFilter}
                handleShowAll={this.handleShowAll}
                handlePomeFilter={this.handlePomeFilter}
                handleBerryFilter={this.handleBerryFilter}
                handleCitrusFilter={this.handleCitrusFilter}
                handlePepoFilter={this.handlePepoFilter}
                products={this.state.products}
                filteredProducts={this.state.filteredProducts}
                isFiltered={this.state.isFiltered}
                isAuthed={true}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
