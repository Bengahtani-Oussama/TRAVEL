import Hotel_Model from '../Models/Hotel_Model.js';
import Rooms_Model from '../Models/Rooms_Model.js';

//CREATE HOTEL
export const CreateHotel = async (req, res, next) => {
  const newHotel = new Hotel_Model(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// UPDATE HOTEL
export const UpdateHotel = async (req, res, next) => {
  try {
    const updateddHotel = await Hotel_Model.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateddHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE HOTEL
export const DeleteHotel = async (req, res, next) => {
  try {
    await Hotel_Model.findByIdAndRemove(req.params.id);
    res.status(200).json('Hotel has been deleted.');
  } catch (err) {
    next(err);
  }
};

// GET HOTEL
export const GetHotel = async (req, res, next) => {
  try {
    const Hotel = await Hotel_Model.findById(req.params.id);
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};

// GET ALL HOTELS
export const GetAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Hotels = await Hotel_Model.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max | 99999 },
    }).limit(req.query.limit);
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
};

// Count By City
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel_Model.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// Count By Type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel_Model.countDocuments({ type: 'hotel' });
    const apartmentCount = await Hotel_Model.countDocuments({
      type: 'apartment',
    });
    const resortCount = await Hotel_Model.countDocuments({ type: 'resort' });
    const villaCount = await Hotel_Model.countDocuments({ type: 'villas' });
    const cabinCount = await Hotel_Model.countDocuments({ type: 'cabin' });

    res.status(200).json([
      { type: 'hotel', count: hotelCount },
      { type: 'apartment', count: apartmentCount },
      { type: 'resort', count: resortCount },
      { type: 'villas', count: villaCount },
      { type: 'cabin', count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

// GET ALL HOTEL ROOMS
export const GetHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel_Model.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Rooms_Model.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
