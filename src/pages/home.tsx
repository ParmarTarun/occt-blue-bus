import { useEffect, useState } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";
import { useNotifications } from "../context/notification";
import axios from "axios";

const HomePage = () => {
  const { setNotifications } = useNotifications();
  useEffect(() => {
    const url = process.env.REACT_APP_NOTIFICATIONS_ENDPOINT;
    if (!url) throw new Error("Endpoint for notifications is missing");
    axios
      .get(url)
      .then(({ data }) => setNotifications(data.notifications))
      .catch((e) => console.log(e));
  }, []);
  return (
    <RoutesProvider>
      <NextBus />
      <Schedule />
    </RoutesProvider>
  );
};

export default HomePage;
