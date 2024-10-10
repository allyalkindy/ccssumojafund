import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

dotenv.config();

const personSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    PaidUpTo: { type: Date, required: false, default: Date.now() },
     joinedAt: { type: Date, required: false, default: Date.now() },
  },
  { timestamps: true }
);

personSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15m",
    }
  );
  return token;
};

export const userModel = mongoose.model("userModel", personSchema);

export const validate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().label("Full Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    isAdmin: Joi.boolean().optional().label("Admin Status"),
    isActive: Joi.boolean().optional().label("Active Status"),
    PaidUpTo: Joi.date().optional().label("Paid Up To Date"),
    joinedAt: Joi.date().optional().label("Joined At")
  });

  return schema.validate(data);
};
