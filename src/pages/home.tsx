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
      {/* <div className="m-auto w-max text-2xl italic">
        <p className="">Currently under maintenance!</p>
      </div> */}
    </RoutesProvider>
  );
};

export default HomePage;
