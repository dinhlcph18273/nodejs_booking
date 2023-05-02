import express from "express";
import {
  displayGetCRUD,
  getCRUD,
  getHomePage,
  postCRUD,
} from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
