const express = require("express");
const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");
const passport = require('./utils/passport')
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const chatDao = require("./daos/chatDao");
const productDao = require("./daos/productDao");
const createRandomProductList = require("./utils/randomProduct");
const normalizedChats = require("./utils/chatNormalizer");
const mongodbUriSessions = require("./utils/config");
const isLoggedIn = require("./middlewares/login");
const sessionRouter = require("./routes/session.routes");

const app = express();
const httpServer = new HttpServer(app);
const ioServer = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "secreto",
    saveUninitialized: false,
    resave: false,
    rolling: true,
    store: MongoStore.create({
      mongoUrl: mongodbUriSessions,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    cookie: {
      maxAge: 600000
    }
  })
);
app.use(passport.initialize())
app.use(passport.session())



app.get('/', isLoggedIn)

app.use(express.static("public"));

app.use('/', sessionRouter)


//random products

app.get('/api/productos-test', (req, res, next) => {
    const products = createRandomProductList()
    res.json(products)
}) 

// websockets

ioServer.on("connection", async (socket) => {
  console.log("new connection");
  socket.emit("init", await productDao.getAll());
  socket.emit("chat_init", normalizedChats(await chatDao.getAll()));
  socket.on("new_product", async (new_product) => {
    await productDao.addItem(new_product);
    ioServer.sockets.emit("product_update", await productDao.getAll());
  });
  socket.on("new_message", async (new_message) => {
    await chatDao.addItem(new_message);
    ioServer.sockets.emit(
      "chat_update",
      normalizedChats(await chatDao.getAll())
    );
  });
});

httpServer.listen(8080, () => {
  console.log("server listening");
});
