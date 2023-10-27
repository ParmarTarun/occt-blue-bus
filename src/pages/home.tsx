import { useEffect, useState } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";
import { useNotifications } from "../context/notification";

const HomePage = () => {
  const { fetchNotifications } = useNotifications();
  useEffect(() => {
    fetchNotifications();
  }, []);
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
