import express from "express";
import { getCRUD, getHomePage, postCRUD } from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
