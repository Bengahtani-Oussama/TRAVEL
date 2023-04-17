import express from "express";
import {
  DeleteUser,
  GetAllUsers,
  GetUser,
  UpdateUser,
} from "../Controles/Users_Controls.js";

import User_Model from "../Models/User_Model.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, you are logged in and you can delete All accounts!");
// });

//UPDATE
router.put("/:id", verifyUser, UpdateUser);

//DELETE
router.delete("/:id", verifyUser, DeleteUser);

// GET
router.get("/:id", verifyUser, GetUser);

// GET ALL
router.get("/", verifyAdmin, GetAllUsers);
export default router;
