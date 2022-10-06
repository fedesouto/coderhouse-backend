import { Application, viewEngine, handlebarsEngine, oakAdapter } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();

app.use(viewEngine(oakAdapter, handlebarsEngine, {viewRoot: './views'}))

app.use(router.routes())


console.log('Server listening!')
await app.listen({port: 8080})