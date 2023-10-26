import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-transparent w-full border-t border-primary">
      <div className="p-4 flex items-center justify-end ">
        <div className="flex gap-2 text-primary">
          <Link to={"/admin"}>Admin</Link> |<Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
