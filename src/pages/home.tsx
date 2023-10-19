import { useEffect } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";

const HomePage = () => {
  useEffect(() => {
    const notice = localStorage.getItem("notice");
    if (!notice) {
      localStorage.setItem("notice", "true");
      alert("For fall break please refer the pdf!");
    }
    console.log("notice", notice);
  }, []);
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
