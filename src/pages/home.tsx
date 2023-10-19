import { useEffect } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";

const HomePage = () => {
  useEffect(() => {
    alert("For fall break please refer the pdf!");
  }, []);
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
