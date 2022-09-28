const axios = require("axios");
const baseURL = "http://localhost:8080/api/products";
const generateProduct = require('../faker')

console.log("Testing API with axios client...");
//Get all products
(async () => {
  try {
    console.log("GET /api/products");
    const products = await axios.get(baseURL);
    console.log(`Retrieved ${products.data.length} products from the DB.`);
  } catch (error) {
    console.log(error);
  }
})();

//Add a new product
(async () => {
  try {
    console.log("POST /api/products");
    const product = generateProduct()
    const response = await axios.post(baseURL, product);
    console.log("Added a new product ", response.data);
  } catch (error) {
    console.log(error);
  }
})();

//Delete a product

(async () => {
  try {
    console.log("DELETE /api/products/:ID");
    const response = await axios.delete(`${baseURL}/62cd9093448bb0bfa5f0a88f`);
    console.log("Deleted a product", response.data);
  } catch (error) {
    console.log(error);
  }
})();

//Update a product

(async () => {
    try {
        console.log("PUT /api/products/:ID")
        const product = generateProduct()
        const response = await axios.put(`${baseURL}/62c4639b19cd82d473f03f79`, product)
        console.log("Updated a product", response.data)
    } catch (error) {
        console.log(error)
    }
})()