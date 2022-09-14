const express = require('express');
const app = express();
const {engine} = require('express-handlebars')

app.engine('.hbs', engine({
    extname: ".hbs",
    defaultLayout: "index.hbs"
}))
const data = {
    nombre: "Federico", apellido: "Souto", edad: 27, email: "fgs@fgs.com", telefono: 12341234
}

app.set("view engine", "hbs")
app.set("views", "./views")

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("main", data)
})

app.listen(8080, () => {
    console.log("listening")
})