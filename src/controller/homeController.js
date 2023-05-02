import db from "../models";
import createNewUser from "../services/CRUDServices";

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
  console.log(data);
  return res.send("post CRUD from sever");
};

export { getHomePage, getCRUD, postCRUD };
