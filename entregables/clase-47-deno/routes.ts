import { addColor, getColors } from "./services.ts";
import { Router, viewEngine, oakAdapter, handlebarsEngine } from "./deps.ts";

const router = new Router();
router.use(viewEngine(oakAdapter, handlebarsEngine, {viewRoot: './views'}))
router
  .get("/", (ctx) => {
    ctx.response.body = getColors();
  })
  .post("/", async (ctx) => {
    const { color } = await ctx.request.body().value;
    console.log(color);
    ctx.response.body = addColor(color);
  })
  .get("/index", async (ctx, next) => {
    await ctx.render("index.hbs", {colors: getColors()})
  });

export default router;
