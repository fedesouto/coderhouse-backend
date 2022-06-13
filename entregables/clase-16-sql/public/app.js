const socket = io();
const product_form = document.querySelector("#product_form");
const product_title = document.querySelector("#title");
const product_price = document.querySelector("#price");
const product_thumbnail = document.querySelector("#thumbnail");
const products = document.querySelector("#products");
const chat_form = document.querySelector("#chat_form")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const chat = document.querySelector("#chat")

fetch('/chat.hbs')
  .then(response => response.text())
  .then(template => {
    const chatTemplate = Handlebars.compile(template);

fetch('/productList.hbs')
    .then(response => response.text())
    .then(template => {
      const productListTemplate = Handlebars.compile(template);
    

socket.on("init", async (data) => {
  const html = productListTemplate({products: data})  
  products.innerHTML = html;
});
socket.on("product_update", async (data) => {
  const html = productListTemplate({products: data})  
  products.innerHTML = html;
});
socket.on("chat_init", async (data) => {
    const html = chatTemplate({messages: data});
    chat.innerHTML = html
})
socket.on("chat_update", async (data) => {
  const html = chatTemplate({messages: data});
  chat.innerHTML = html
})

product_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const new_product = {
    title: product_title.value,
    price: product_price.value,
    thumbnail: product_thumbnail.value,
  };
  socket.emit("new_product", new_product);
});

chat_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const new_message = {user: email.value, message: message.value}
    socket.emit("new_message", new_message)
    message.value = ""
})})})