import express from "express";
import {
  deleteCRUD,
  displayGetCRUD,
  getCRUD,
  getEditCRUD,
  getHomePage,
  postCRUD,
  putCRUD,
} from "../controller/homeController";
import { handleLogin } from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.post("/put-crud", putCRUD);
  router.get("/delete-crud", deleteCRUD);

  router.post("/api/login", handleLogin);

  return app.use("/", router);
};

module.exports = initWebRoutes;
