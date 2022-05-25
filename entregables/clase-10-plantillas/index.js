const express = require("express");
const productRouter = require("./product.routes");
const { engine } = require("express-handlebars");
const productos = require("./productController");

const app = express();

//HANDLEBARS
/* app.engine('.hbs', engine({
    extname: ".hbs",
    defaultLayout: "index.hbs"
}))
app.set("view engine", "hbs")
app.set("views", "./views") */

//PUG
/* app.set("views", "./views/pug");
app.set("view engine", "pug"); */

//EJS
app.set("view engine", "ejs")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productRouter);
app.use(express.static("public"));

//HANDLEBARS
/* app.get("/productos", (req, res) => {
  res.render("productList", { products: productos.getAll() });
}); */

//PUG
/* app.get("/productos", (req, res) => {
  res.render("productList", productos.getAll());
}); */

//EJS
app.get("/productos", (req, res) => {
    res.render("ejs/pages/productList", {products: productos.getAll()})
})


app.listen(8080, () => {
  console.log("server listening");
});
