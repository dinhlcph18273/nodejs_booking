import express from "express";
import {
  displayGetCRUD,
  getCRUD,
  getEditCRUD,
  getHomePage,
  postCRUD,
  putCRUD,
} from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.post("/put-crud", putCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
