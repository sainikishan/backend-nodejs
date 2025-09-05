import { user } from "../models/User.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, password, email } = req.body;

  if ([fullname, username, password, email].some((f) => !f?.trim()))
    throw new ApiError(400, "All fields are required");

  const existedUser = await user.findOne({
    $or: [{ username: username.toLowerCase() }, { email }],
  });
  if (existedUser) throw new ApiError(409, "User already exists");

  const avatarPath = req.files?.avatar?.[0]?.path;
  const coverPath = req.files?.coverimage?.[0]?.path;

  if (!avatarPath || !coverPath)
    throw new ApiError(400, "Avatar and Cover Image are required");

  const avatarUpload = await uploadCloudinary(avatarPath);
  const coverUpload = await uploadCloudinary(coverPath);

  if (!avatarUpload?.url || !coverUpload?.url)
    throw new ApiError(500, "Image upload failed");

  // Generate refresh token
  const refreshToken = jwt.sign(
    { id: new Date().getTime() }, // you can replace with user id after creation
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d" }
  );

  // Create user
  const newUser = await user.create({
    fullname,
    username: username.toLowerCase(),
    password,
    email,
    avatar: avatarUpload.url,
    coverImage: coverUpload.url,
    refreshToken, // ✅ satisfies schema
  });

  const { password: _, ...userData } = newUser.toObject();

  res.status(201).json({
    status: true,
    message: "User registered successfully",
    data: userData,
  });
});
