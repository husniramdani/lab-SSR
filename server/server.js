import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/App";

const port = 8000;
const app = express();

// represents a regular expression that matches a single forward slash '/', meaning it will
// only be triggered if the requested URL is exactly '/'. Essentially, this middleware function
// acts as a route handler that handles requests to the root of the web application.
app.use("^/$", (req, res, next) => {
  // using encoding utf-8
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) return res.status(500).send("something went wrong");

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

// serve static file from build folder
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.listen(port, () => {
  console.log(`App run on ${port}`);
});
