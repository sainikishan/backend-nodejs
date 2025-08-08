import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload file to Cloudinary
 * @param {string} localFilePath - Path of the file to upload
 * @returns {object|null} - Cloudinary response or null if failed
 */
const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded successfully:", response.url);

    // Remove local file after successful upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove local file if upload fails
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error("❌ Error uploading file:", error);
    return null;
  }
};

export { uploadCloudinary };
