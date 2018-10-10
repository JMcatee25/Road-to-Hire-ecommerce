const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
var { productModel } = require("./models/products");
var { contactInfo } = require("./models/contactinfo");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    //For contact form info
    extended: true
  })
);

app.get("/products", (req, res, next) => {
  productModel
    .find({})
    .then(product => res.send(product))
    .catch(err => res.status(400).send(err));
});

app.get("/form_submission", (req, res, next) => {
  contactInfo
    .find({})
    .then(info => res.send(info))
    .catch(err => res.status(400).send(err));
});

app.get("/products/:id", (req, res, next) => {
  const id = req.params.id;
  productModel
    .findById(id)
    .then(product => {
      if (product) {
        res.send(product);
      } else {
        res.status(404).send("Unable to find ID");
      }
    })
    .catch(err => res.status(400).send(err));
});

app.delete("/products/:id", (req, res, next) => {
  const id = req.params.id;
  productModel
    .findByIdAndDelete(id)
    .then(productDeleted => {
      if (productDeleted) {
        res.send(productDeleted);
      } else {
        res.status(404).send("Unable to find ID");
      }
    })
    .catch(err => res.status(400).send(err));
});

app.post("/products/", (req, res, next) => {
  const {
    name,
    price,
    description,
    category,
    availability,
    productImageurl
  } = req.body;
  const product = new productModel({
    name,
    price,
    description,
    category,
    availability,
    productImageurl
  });
  product
    .save()
    .then(productAdded =>
      res.status(200).redirect("http://localhost:3000/Admin")
    )
    .catch(err => res.status(400).send(err));
});

app.post("/form_submission", (req, res, next) => {
  const { name, email, zip } = req.body;
  const formInfo = new contactInfo({
    name,
    email,
    zip
  });
  formInfo
    .save()
    .then(() => {
      res.status(200).redirect("http://localhost:3000/contact");
    })
    .catch(err => res.status(400).send(err));
});

app.put("/products/:id", (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    price,
    description,
    category,
    availability,
    productImageurl
  } = req.body;
  productModel
    .findById(id)
    .then(product => {
      if (!product) {
        return res.status(404).send("unable to find ID");
      }
      if (name !== "") {
        product.set({
          name
        });
      }
      if (price !== "") {
        product.set({
          price
        });
      }
      if (description !== "") {
        product.set({
          description
        });
      }
      if (category !== "") {
        product.set({
          category
        });
      }
      if (availability !== "") {
        product.set({
          availability
        });
      }
      if (productImageurl !== "") {
        product.set({
          productImageurl
        });
      }
      product.save().then(updatedProduct => res.send(updatedProduct));
      // .then(updatedProduct => res.redirect("http://localhost:3000/Admin"));
    })
    .catch(err => res.status(400).send(err));
});

app.listen(3001);
