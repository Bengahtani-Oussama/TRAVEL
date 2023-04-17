import express from "express";
import {
  countByCity,
  countByType,
  CreateHotel,
  DeleteHotel,
  GetAllHotels,
  GetHotel,
  GetHotelRooms,
  UpdateHotel,
} from "../Controles/Hotel_Control.js";
import Hotel_Model from "../Models/Hotel_Model.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, CreateHotel);

//UPDATE
router.put("/:id", verifyAdmin, UpdateHotel);

//DELETE
router.delete("/:id", verifyAdmin, DeleteHotel);

// GET
router.get("/find/:id", GetHotel);

// GET ALL
router.get("/", GetAllHotels);

// Count filter
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", GetHotelRooms);

export default router;
