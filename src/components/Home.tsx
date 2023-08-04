import BlogList from "./Blog/List";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import AuthorFilter from "./Blog/Filter";
import BlogService, { Blog } from "../Services/Firebase/db";

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      await BlogService.getAll()
        .then((blogs) => {
          setBlogs(blogs);
          setFilteredBlogs(blogs);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    await BlogService.remove(id)
      .then(() => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
        setFilteredBlogs(blogs.filter((blog) => blog.id !== id));
        toast.success("Success deleting blog");
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        if (error instanceof Error) {
          toast.error(error.message);
        }
      });
  };

  const handleSelect = (author: string) => {
    switch (author.toLowerCase()) {
      case "mario":
        setFilteredBlogs(blogs.filter((blog) => blog.author === "mario"));
        break;
      case "yoshi":
        setFilteredBlogs(blogs.filter((blog) => blog.author === "yoshi"));
        break;
      default:
        setFilteredBlogs(blogs);
        break;
    }
  };

  return (
    <div className="pt-8">
      <AuthorFilter onFilter={handleSelect} />
      <BlogList onDelete={(id) => handleDelete(id)} blogs={filteredBlogs} />
    </div>
  );
};

export default Home;
