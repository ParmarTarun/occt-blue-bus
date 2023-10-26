import { useEffect, useState } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";
import { useNotifications } from "../context/notification";
import { getNotifications } from "../api/notification";

const HomePage = () => {
  const { setNotifications } = useNotifications();
  useEffect(() => {
    getNotifications()
      .then(({ notifications }) => setNotifications(notifications))
      .catch((e: Error) => console.log(e));
  }, []);
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
