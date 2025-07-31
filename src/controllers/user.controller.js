// ✅ Correct
import asyncHandler from "../utils/asyncHandler.js";

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
  console.log("email:", email);
});

export { registerUser }; // ✅ Correct: named export
