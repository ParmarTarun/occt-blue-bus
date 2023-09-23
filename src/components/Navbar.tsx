import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent w-full border-b border-primary">
      <div className="p-4 flex items-center justify-between">
        <Link to={"/"} className="text-primary font-bold text-4xl">
          Blue Bus
        </Link>
        <div className="flex gap-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
