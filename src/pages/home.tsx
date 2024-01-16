import { useEffect } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { RoutesProvider } from "../context/route";
import { useNotifications } from "../context/notification";

const HomePage = () => {
  const { fetchNotifications } = useNotifications();
  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
