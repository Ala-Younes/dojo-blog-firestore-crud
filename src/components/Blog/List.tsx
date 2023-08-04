import { Link } from "react-router-dom";
import { Blog } from "../../Services/Firebase/db";

interface BlogListProps {
  blogs: Blog[];
  onDelete: (id: string) => void;
}

const BlogList = ({ blogs, onDelete }: BlogListProps) => {
  const handleDelete = (id: string): void => {
    onDelete(id);
  };

  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {blogs.length > 0 ? (
        blogs.map(({ id, author, title }) => (
          <div
            key={id}
            className="px-3 py-4 mx-5 ring ring-black shadow-2xl hover:bg-gray-200 rounded-2xl"
          >
            <Link to={`/blogs/${id}`} key={id} className="">
              <div className="">
                <h2>{title}</h2>
                <p className="pb-2">Written by {author}</p>
              </div>
            </Link>
            <button className="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <Link
          to={"/create"}
          className="text-2xl pt-8 hover:underline underline-offset-8 md:col-span-2 lg:col-span-3 text-center"
        >
          📝 Please Add a Blog 🖊️
        </Link>
      )}
    </div>
  );
};

export default BlogList;
