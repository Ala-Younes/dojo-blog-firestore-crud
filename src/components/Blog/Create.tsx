import { useState } from "react";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import BlogService from "../../Services/Firebase/db";

const BlogCreate = () => {
  // TODO use react hook form + zod
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    BlogService.create(blog)
      .then(() => {
        history.push("/");
        toast.success("Blog Added Successfully!");
      })
      .catch(() => {
        toast.error("An error occurred while adding the blog.");
      });
  };

  return (
    <div className="pt-8 my-auto text-center flex flex-col items-center justify-center gap-8">
      <h2>Add a New Blog</h2>
      <form className="w-96" onSubmit={handleSubmit}>
        <label className="text-left block">Blog title:</label>
        <input
          className="w-full px-2 py-4 rounded-lg border border-gray-300"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="text-left block">Blog body:</label>
        <textarea
          className="w-full px-2 py-4 rounded-lg border border-gray-300"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-left block">Blog author:</label>
        <select
          className="w-full py-2 rounded-lg border border-gray-300"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending ? (
          <button className="button mt-8">Add A blog</button>
        ) : (
          <button className="button mt-8">Add Blog ...</button>
        )}
      </form>
    </div>
  );
};

export default BlogCreate;
