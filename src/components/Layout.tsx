import { ReactChildrenProps } from "../types";
import Navbar from "./Navbar";

const Layout = (props: ReactChildrenProps) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Layout;
