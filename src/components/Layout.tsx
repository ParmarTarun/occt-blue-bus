import { ReactChildrenProps } from "../types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: ReactChildrenProps) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="p-4 min-h-[82vh]">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
