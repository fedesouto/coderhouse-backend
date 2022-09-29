// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp()

app.handle("/", async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset-UTF-8"
        }),
        body: ReactDOMServer.renderToString(
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Servest react</title>
                </head>
            <body>
                <h1>Hola</h1>
            </body>
            </html>
        )
    })
})

app.listen({port: 8080})