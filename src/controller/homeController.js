import db from "../models";
import createNewUser, { getAllUser } from "../services/CRUDServices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  const data = await createNewUser(req.body);
  return res.send("post CRUD from sever");
};

let displayGetCRUD = async (req, res) => {
  const data = await getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

export { getHomePage, getCRUD, postCRUD, displayGetCRUD };
