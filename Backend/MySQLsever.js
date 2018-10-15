var mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
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

var connection = mysql.createConnection({
  host: "road2hire.ninja",
  user: "r2hstudent", //your username
  password: "SbFaGzNgGIE8kfP",
  database: "jmcatee" //the name of your db
});

app.get("/products", function(req, res) {
  connection.query("select * from ecommerceproducts", function(error, results) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get("/form_submission", function(req, res) {
  connection.query("select * from contactinfos", function(error, results) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post("/products", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO ecommerceproducts SET ?", postData, function(
    error
  ) {
    if (error) throw error;
    res.redirect("http://localhost:3000/Admin");
  });
});

app.put("/products", function(req, res) {
  connection.query(
    "UPDATE `ecommerceproducts` SET `name`=?,`price`=?,`description`=?,`category`=?,`availability`=?,`productImageurl`=? where `productID`=?",
    [
      req.body.name,
      req.body.price,
      req.body.description,
      req.body.category,
      req.body.availability,
      req.body.productImageurl,
      req.body.productID
    ],
    function(error, results) {
      if (error) throw error;
      res.redirect("http://localhost:3000/Admin");
    }
  );
});

app.delete("/products/:id", function(req, res) {
  const id = req.params.id;
  connection.query(
    `DELETE FROM ecommerceproducts WHERE productID=${id}`,
    function(error) {
      if (error) throw error;
      res.redirect("http://localhost:3000/Admin");
    }
  );
});

app.listen(3001);
