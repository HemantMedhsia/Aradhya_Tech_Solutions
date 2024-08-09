import mongoose from "mongoose";
import { Content } from "./Content.js";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  content: [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

BlogSchema.post("findOneAndDelete", async (blog) => {
  if (blog.content.length) {
    let result = await Content.deleteMany({ _id: { $in: blog.content } });
  }
});

export const Blog = new mongoose.model("Blog", BlogSchema);
