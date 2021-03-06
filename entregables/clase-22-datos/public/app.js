const socket = io();
const product_form = document.querySelector("#product_form");
const product_title = document.querySelector("#title");
const product_price = document.querySelector("#price");
const product_thumbnail = document.querySelector("#thumbnail");
const products = document.querySelector("#products");
const chat_form = document.querySelector("#chat_form");
const email = document.querySelector("#email");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const alias = document.querySelector("#alias");
const avatar = document.querySelector("#avatar");
const message = document.querySelector("#message");
const chat = document.querySelector("#chat");
const chatTitle = document.querySelector('#chat-title')


const authorSchema = new normalizr.schema.Entity(
  "authors",
  {},
  { idAttribute: "email" }
);
const messageSchema = new normalizr.schema.Entity(
  "messages",
  {
    author: authorSchema,
  },
  { idAttribute: "_id" }
);

const calculateCompression = (normalized, denormalized) => {
  const compressed = JSON.stringify(normalized).length
  const uncompressed = JSON.stringify(denormalized).length
  const compression = (compressed / uncompressed) * 100
  return compression.toFixed(2)
}


fetch("/chat.hbs")
  .then((response) => response.text())
  .then((template) => {
    const chatTemplate = Handlebars.compile(template);

    fetch("/productList.hbs")
      .then((response) => response.text())
      .then((template) => {
        const productListTemplate = Handlebars.compile(template);

        socket.on("init", async (data) => {
          const html = productListTemplate({ products: data });
          products.innerHTML = html;
        });
        socket.on("product_update", async (data) => {
          const html = productListTemplate({ products: data });
          products.innerHTML = html;
        });
        socket.on("chat_init", async (data) => {
          const denormalizedData = normalizr.denormalize(data.result, [messageSchema], data.entities).reverse()
          const html = chatTemplate({ messages:  denormalizedData});
          chat.innerHTML = html;
          chatTitle.innerHTML = `Compresi??n: ${calculateCompression(data, denormalizedData)}%`
        });
        socket.on("chat_update", async (data) => {
          const denormalizedData = normalizr.denormalize(data.result, [messageSchema], data.entities).reverse()
          const html = chatTemplate({ messages: denormalizedData });
          chat.innerHTML = html;
          chatTitle.innerHTML = `Compresi??n: ${calculateCompression(data, denormalizedData)}%`
        });

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
          const new_message = {
            author: {
              email: email.value,
              name: nombre.value,
              lastname: apellido.value,
              age: edad.value,
              alias: alias.value,
              avatar: avatar.value,
            },
            text: message.value,
            timestamp: new Date().toLocaleString(),
          };
          socket.emit("new_message", new_message);
          message.value = "";
        });
      });
  });
