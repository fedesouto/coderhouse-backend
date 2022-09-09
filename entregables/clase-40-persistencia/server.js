
const express = require("express");
const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const cluster = require("cluster");
const cantCpus = require("os").cpus().length;
const compression = require("compression");

const isLoggedin = require('./api/middlewares/login')
const passport = require("./utils/passport");
const sessionRouter = require("./api/routes/session.routes");
const args = require("./utils/commandParser");
const {
  requestLogger,
  requestWarnLogger,
} = require("./api/middlewares/requestLogger");
const miscRouter = require("./api/routes/misc.routes");
const ioController = require("./api/controllers/io.controller");
const { MONGODB_URI_SESSIONS, PORT } = require("./config");

if (args.mode === "cluster" && cluster.isPrimary) {
  console.log(`Primary: ${process.pid}`);
  for (let i = 0; i < cantCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Cluster ${worker.process.pid} salio`);
  });
} else {

  const app = express();
  const httpServer = new HttpServer(app);
  const ioServer = new IOServer(httpServer);

  //Middlewares

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
        mongoUrl: MONGODB_URI_SESSIONS,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      }),
      cookie: {
        maxAge: 60000,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.get('/', isLoggedin);
  app.use(compression());
  app.use(requestLogger);
  
  app.use(express.static("public"));

  // Routes

  app.use("/", sessionRouter);
  app.use("/api/test", miscRouter)

  // Websocket event handlers

  ioServer.on("connection", async (socket) => ioController(socket, ioServer));

  //404
  
  app.get("*", requestWarnLogger, (_req, res) => {
    res.status(404).send("Not found");
  });

  const port = PORT || 8080
  httpServer.listen(port, () => {
    console.log(
      `Server listening on port ${port} en modo ${args.mode} (PID ${process.pid})`
    );
  });
}
