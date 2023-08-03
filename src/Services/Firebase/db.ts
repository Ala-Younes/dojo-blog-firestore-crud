import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Blog } from "../../../data";

export const blogCollectionRef = collection(db, "blogs");

const getAllBlogs = async (): Promise<Blog[]> => {
  try {
    const querySnapshot = await getDocs(blogCollectionRef);
    const blogs = querySnapshot.docs.map((doc) => {
      const { author, body, title } = doc.data();
      return {
        id: doc.id,
        author,
        body,
        title,
      };
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs. Please try again later.");
  }
};

const createBlog = async (blog: Partial<Blog>) => {
  try {
    await addDoc(blogCollectionRef, blog);
  } catch (error) {
    console.error("Error adding blog:", error);
    throw new Error("Failed to create the blog. Please try again later.");
  }
};

const updateBlog = async (blogId: string, updatedBlog: Partial<Blog>) => {
  try {
    const blogDocRef = doc(blogCollectionRef, blogId);
    await updateDoc(blogDocRef, updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    throw new Error("Failed to update the blog. Please try again later.");
  }
};

const deleteBlog = async (blogId: string) => {
  try {
    const blogDocRef = doc(blogCollectionRef, blogId);
    await deleteDoc(blogDocRef);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("Failed to delete the blog. Please try again later.");
  }
};

const BlogService = {
  getAll: getAllBlogs,
  create: createBlog,
  update: updateBlog,
  remove: deleteBlog,
};

export default BlogService;
