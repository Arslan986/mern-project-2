import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    status: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.method.isPasswordCorrect = async (password) => {
  return await bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = function () {
  Jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_Expiry,
    }
  );
};
userSchema.method.generateRefreshToken = function () {
  Jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_Expiry,
    }
  );
};

export const User = mongoose.model("User", userSchema);
