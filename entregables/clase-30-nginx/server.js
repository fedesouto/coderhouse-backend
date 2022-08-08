require("dotenv").config();

const express = require("express");
const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const { fork } = require("child_process");
const cluster = require("cluster");
const cantCpus = require("os").cpus().length;

const passport = require("./utils/passport");
const chatDao = require("./daos/chatDao");
const productDao = require("./daos/productDao");
const createRandomProductList = require("./utils/randomProduct");
const normalizedChats = require("./utils/chatNormalizer");
const isLoggedIn = require("./middlewares/login");
const sessionRouter = require("./routes/session.routes");
const args = require("./utils/commandParser");
const getServerInfo = require("./utils/info.controllers");

if (args.mode === "cluster" && cluster.isPrimary) {
  console.log(`Primary: ${process.pid}`);
  for (let i = 0; i < cantCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Cluster ${worker.process.pid} salio`);
  });
} 

else {
  const app = express();
  const httpServer = new HttpServer(app);
  const ioServer = new IOServer(httpServer);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      rolling: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI_SESSIONS,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      }),
      cookie: {
        maxAge: 60000,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.get("/", isLoggedIn);

  app.use(express.static("public"));

  app.use("/", sessionRouter);

  //random products

  app.get("/api/productos-test", (req, res, next) => {
    const products = createRandomProductList();
    res.json(products);
  });

  app.get("/info", getServerInfo);

  app.get("/api/randoms", (req, res, next) => {
    const cant = Number(req.query.cant) || 100000000;
    const forked = fork("./utils/apirandoms.js");
    forked.send(cant);
    forked.on("message", (message) => {
      res.json(message);
    });
  });

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

  httpServer.listen(args.port, () => {
    console.log(
      `Server listening on port ${args.port} en modo ${args.mode} (PID ${process.pid})`
    );
  });
}
