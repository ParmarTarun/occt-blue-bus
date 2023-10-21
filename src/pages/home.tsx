import { useEffect, useState } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";

const HomePage = () => {
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
