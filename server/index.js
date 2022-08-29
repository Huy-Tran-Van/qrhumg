// #region Global Imports
// import next from "next";
// import express from "express";
// import path from "path";
// #endregion Global Imports
// require("dotenv").config();
const next = require('next');
const { parse } = require('url')
const express = require('express');
const { createServer } = require('http');
const path = require('path');
const createRouter = require('./routes');

// #region Local Imports
// import createRouter from "./routes";
// #endregion Local Imports

const port = parseInt(process.env.PORT || "3030", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const route = createRouter(process.env.STATIC_PATH);
const handler = route.getRequestHandler(app);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
      }`
    );
  })
  // const server = express();

  // const routes = createRouter(process.env.STATIC_PATH);
  // const handler = routes.getRequestHandler(app);

  // app.setAssetPrefix(process.env.STATIC_PATH);
  // server.use(express.static(path.join(__dirname, "./public")));

  // server.get("*", (req, res) => handler(req, res));

  // server.listen(port);

  // // eslint-disable-next-line no-console
  // console.log(
  //   `> Server listening at http://localhost:${port} as ${
  //     dev ? "development" : process.env.NODE_ENV
  //   }`
  // );
});
