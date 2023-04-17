import User_Model from "../Models/User_Model.js";

// UPDATE User
export const UpdateUser = async (req, res, next) => {
  try {
    const updateddUser = await User_Model.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateddUser);
  } catch (err) {
    next(err);
  }
};

// DELETE User
export const DeleteUser = async (req, res, next) => {
  try {
    await User_Model.findByIdAndRemove(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

// GET User
export const GetUser = async (req, res, next) => {
  try {
    const user = await User_Model.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// GET ALL UserS
export const GetAllUsers = async (req, res, next) => {
  try {
    const users = await User_Model.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
