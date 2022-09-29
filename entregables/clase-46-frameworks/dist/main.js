"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'client'));
    app.use(cookieParser());
    app.use(session({
        secret: 'secreto',
        saveUninitialized: false,
        resave: false,
        rolling: true,
        cookie: {
            maxAge: 60000,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map