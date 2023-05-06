import db from "../models";
import bcrypt from "bcryptjs";

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      const isExist = await checkUserEmail(email);
      if (isExist) {
        // user allready exist
        // compare password
        const user = await db.User.findOne({
          where: { email },
          attributes: ["email", "roleId", "password"],
          raw: true,
        });

        if (user) {
          let check = await bcrypt.compareSync(password, user.password);

          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found~`;
        }
      } else {
        // return error
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Plz try other email!`;
      }

      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

const checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export { handleUserLogin, checkUserEmail };
