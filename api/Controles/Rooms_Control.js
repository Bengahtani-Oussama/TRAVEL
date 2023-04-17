import Hotel_Model from "../Models/Hotel_Model.js";
import Rooms_Model from "../Models/Rooms_Model.js";

// CREATE ROOM
export const CreateRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Rooms_Model(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel_Model.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// UPDATE ROOM
export const UpdateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Rooms_Model.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

// UPDATE ROOM AVAILABILITY
export const UpdateRoomAvailability = async (req, res, next) => {
  try {
    await Rooms_Model.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

// DELETE ROOM
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Rooms_Model.findByIdAndDelete(req.params.id);
    try {
      await Hotel_Model.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

// GET ROOM
export const getRoom = async (req, res, next) => {
  try {
    const room = await Rooms_Model.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// GET ALL ROOMS
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Rooms_Model.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
