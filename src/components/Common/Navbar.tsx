import { Link } from "react-router-dom";

const Navbar = () => {
  // TODO if not auth disable Home and new Blog
  return (
    <nav className="flex py-4 justify-between items-center border-b-[0.1rem] border-b-secondary ">
      <h1>The Dojo Blog</h1>
      <div className="flex gap-6 ">
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={"/create"} className="link">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
