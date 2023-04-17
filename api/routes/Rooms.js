import express from "express";
import {
  CreateRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  UpdateRoom,
  UpdateRoomAvailability,
} from "../Controles/Rooms_Control.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, CreateRoom);

//UPDATE
router.put("/:id", verifyAdmin, UpdateRoom);
router.put("/availability/:id", UpdateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

export default router;
