fetch("./templates/chat.hbs")
  .then((response) => response.text())
  .then((template) => {
    const chatTemplate = Handlebars.compile(template);

    fetch("./templates/productList.hbs")
      .then((response) => response.text())
      .then((template) => {
        const productListTemplate = Handlebars.compile(template);

        const socket = io();
        const product_form = document.querySelector("#product_form");
        const product_title = document.querySelector("#title");
        const product_price = document.querySelector("#price");
        const product_thumbnail = document.querySelector("#thumbnail");
        const chat_form = document.querySelector("#chat_form");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
        const chat = document.querySelector("#chat");
        const welcome_bar = document.querySelector("#welcome-bar");
        const logout_button_container = document.querySelector(
          "#logout-button-container"
        );

        fetch("/users/data")
          .then((res) => res.json())
          .then((user) => (welcome_bar.innerHTML = `Bienvenido ${user.name} (${user.username})`));

        const logout_button = document.createElement("button");
        logout_button.classList.add("btn", "btn-danger");
        logout_button.innerHTML = "Cerrar sesion";
        logout_button.addEventListener("click", async () => {
          const response = await fetch("/users/logout");
          const name = await response.text();
          const template_response = await fetch("./templates/logout.hbs");
          const template = await template_response.text();
          const logoutTemplate = Handlebars.compile(template);
          const html = logoutTemplate({ nombre: name });
          document.querySelector("body").innerHTML = html;

          setTimeout(() => {
            location.reload()
          }, 2000)
        });
        logout_button_container.appendChild(logout_button);

      
        socket.on("chat_init", async (data) => {
          const html = chatTemplate({ messages: await data });
          chat.innerHTML = html;
        });
        socket.on("chat_update", async (data) => {
          const html = chatTemplate({ messages: await data });
          chat.innerHTML = html;
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
            sender: email.value,
            message: message.value
          };
          socket.emit("new_message", new_message);
          message.value = "";
        });
      });
  });
