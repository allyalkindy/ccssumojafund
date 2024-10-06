import express from "express";
import { userModel } from "../models/userModel.js";

const router = express.Router();


// Get all users from the database
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json({
      counts: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});



// Post user to the databse
router.post("/", async (req, res) => {
    console.log(req.body);
  try {
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.status(400).send("All fields are required");
    }
    const newUser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      PaidUpTo:req.body.PaidUpTo,
      isAdmin: req.body.isAdmin,
    };
    const user = await userModel.create(newUser);
    return res.status(201).send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});


// get only one user with id from databse

router.get("/:id", async (req, res) => {
  

  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});


// update a user from database using id

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.status(400).send({ message: "all field are required" });
    }
    const { id } = req.params;
    const result = await userModel.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "the user is not found " });
    }
    return res.status(200).send({ message: "the user was updated succesful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
});


//Delete user by id

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "the user was not found" });
    }
    return res.status(200).send({ message: "The user was deleted succesful" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});






export default router;
