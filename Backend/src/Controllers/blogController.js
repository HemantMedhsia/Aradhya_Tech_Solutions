import { Blog } from "../Models/Blog.js";
import { Content } from "../Models/Content.js";
import cloudinary from "../Utils/cloudinaryConfig.js";

export const getBlogData = async (req, res) => {
  const data = await Blog.find().populate("content");
  res.send(data);
};

export const setBlogData = async (req, res) => {
  try {
    // Check if the image was uploaded
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    // Extract blog data
    // console.log(req.file);
    const { title, author, slug } = req.body;
    const imageUrl = req.file.path; // Use the path or URL returned by Cloudinary

    // Create and save the blog
    const blog = new Blog({
      title,
      author,
      slug,
      img: imageUrl, // Use the image URL
    });

    await blog.save();

    res.status(201).send("New Blog Created Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getContent = async (req, res) => {
  const content = await Content.find();
  if (!content) {
    return res.status(404).send("Content not found");
  }
  res.send(content);
};

export const setBlogContentData = async (req, res) => {
  const blogData = await Blog.findById(req.params.id);
  if (!blogData) {
    return res.status(404).send("Blog not found");
  }

  const newContent = await new Content(req.body);
  const newContentData = await newContent.save();

  blogData.content.push(newContentData._id);
  await blogData.save().then(() => {
    res.status(201).json({
      message: `review sucessfully added to the listing : ${blogData.title}`,
    });
  });
};

//   try {
//     const Blogdata = await Blog.findByIdAndDelete(req.params.id);
//     console.log(Blogdata);

//     if (!Blogdata) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     res.status(200).json({ message: "Blog deleted successfully" });
//   } catch (err) {
//     res.send(err.message);
//   }
// };

export const deleteBlogData = async (req, res) => {
  try {
    // Find the blog by ID and delete it
    const blog = await Blog.findByIdAndDelete(req.params.id);
    console.log(blog);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Extract the public_id from the image URL if you don't store it separately
    const imageUrl = blog.img;
    
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0]; // Adjust the parsing based on your URL structure
   
    // Delete the image from Cloudinary if publicId is available
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }
   

    res.status(200).json({ message: "Blog and image deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog and image:", err);
    res.status(500).send(err.message);
  }
};

// Update Blog Data
export const updateBlogData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { ...updateData });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteContentData = async (req, res) => {
  try {
    const { id, contentid } = req.params; // Extract both parameters from req.params

    // Update the blog by removing the content reference
    const BlogData = await Blog.findByIdAndUpdate(id, {
      $pull: { content: contentid },
    });
    if (!BlogData) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete the content
    const deletedContent = await Content.findByIdAndDelete(contentid);
    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.status(200).json({ message: "Content Deleted Successfully" });
  } catch (err) {
    res.status(500).send(err.message); // Use status 500 for server errors
  }
};

export const getSingleBlogData = async (req, res) => {
  try {
    const singleBlogData = await Blog.findById(req.params.id).populate(
      "content",
    );
    if (!singleBlogData) {
      res.status(400).json({ message: "Someting Went Wrong" });
    }
    res.send(singleBlogData);
  } catch (err) {
    res.send(err.message);
  }
};
