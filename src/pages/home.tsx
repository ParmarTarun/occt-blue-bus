import { useEffect } from "react";
import NextBus from "../components/NextBus";
import Schedule from "../components/Schedule";
import { ScheduleProvider } from "../context/schedule";
import { useNotifications } from "../context/notification";

const HomePage = () => {
  const { fetchNotifications } = useNotifications();
  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScheduleProvider>
      <NextBus />
      <Schedule />
    </ScheduleProvider>
  );
};

export default HomePage;
