import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videofiele: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    title: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true, trim: true, index: true },
    duration: { type: Number, required: true, trim: true, index: true },
    views: { type: Number, default: 0, index: true },
    isPublic: { type: Boolean, default: true, index: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
VideoSchema.plugin(mongooseAggregatePaginate);
export const VideoSchema = new Schema("video", VideoSchema);
