import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogEdit from "./Edit";
import { Blog } from "../../data";
import BlogService from "../../Services/Firebase/db";

interface RouteParams {
  id: string;
}

const BlogDetails = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await BlogService.getAll().then((currentBlogs) => {
          setBlogs(currentBlogs);
        });
      } catch (error) {
        console.log("Error getting data from firestore");
      }
    };
    fetchBlogs();
  }, []);

  const { id }: RouteParams = useParams();
  const blog = blogs?.find((blog) => blog.id === id);

  const handleUpdate = async () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit ? (
        <div className="mt-8 p-8 bg-slate-100">
          {blog && (
            <article className="flex flex-col gap-4 items-center mx-auto">
              <h2 className="bg-gray-200 w-full">
                <span className="text-black font-bold"> Title : </span>
                {blog.title}
              </h2>
              <p className="bg-gray-300 w-full">
                <span className="text-black text-xl font-bold">
                  Written by :
                </span>
                {blog.author}
              </p>
              <p className="bg-gray-400 w-full">
                <span className="text-black text-xl font-bold">Content :</span>
                {blog.body}
              </p>
              <button className="button max-w-md w-full" onClick={handleUpdate}>
                Update
              </button>
            </article>
          )}
        </div>
      ) : (
        <BlogEdit blog={blog} />
      )}
    </>
  );
};

export default BlogDetails;
