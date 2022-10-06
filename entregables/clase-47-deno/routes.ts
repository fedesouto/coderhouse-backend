import { addColor, getColors } from "./services.ts";
import { Router, viewEngine, oakAdapter, handlebarsEngine } from "./deps.ts";

const router = new Router();
router.use(viewEngine(oakAdapter, handlebarsEngine, {viewRoot: './views'}))
router
  .get("/colors", (ctx) => {
    ctx.response.body = getColors();
  })
  .post("/colors", async (ctx) => {
    const { color } = await ctx.request.body().value;
    ctx.response.body = addColor(color);
  })
  .get("/", async (ctx, _next) => {
    await ctx.render("index.hbs", {colors: getColors()})
  });

export default router;
