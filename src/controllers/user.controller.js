// ✅ Correct
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { user } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  // return res.status(200).json({
  //   message: "User registered successfully",
  // });
  // Simulating user registration logic
  //all step get user detalis from frontend
  //vaLIDATE NOT EMPTY
  //check if user already exists username or email
  //check for images avtar and coverImage
  //upload them to cloudinary
  //create user object- cretae user in database
  //remove passowrd from  refrwsh tpken field fron response
  //check for user creation
  //return success message with user details
  const { fullname, email, username, passowrd } = req.body;
  // console.log("email:", email);
  // if (fullname === "") {
  //   throw new ApiError(400,"fullname Is Required");
  // }
  if (
    [fullname, email, username, passowrd].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  // check if user already exists
  const existedUser = user.finOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }
  //handel image
  const avataLoalPath = req.files?.avatar;
  [0]?.path;
  console.log("avataLoalPath:", avataLoalPath);
  const LocalPath = req.files?.coverImage[0]?.path;
  console.log("LocalPath:", LocalPath);
});

export { registerUser }; // ✅ Correct: named export
