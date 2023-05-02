import db from "../models";
import createNewUser, {
  getAllUser,
  getUserInforById,
  updateUserData,
} from "../services/CRUDServices";

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

let getEditCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    const userData = await getUserInforById(id);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User Not Found!");
  }
};

let putCRUD = async (req, res) => {
  const data = req.body;
  const allUser = await updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};

export { getHomePage, getCRUD, postCRUD, displayGetCRUD, getEditCRUD, putCRUD };
