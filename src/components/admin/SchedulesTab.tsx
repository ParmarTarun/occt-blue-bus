import { useEffect, useState } from "react";
import ScheduleEditor from "./ScheduleEditor";
import { getAllSchedules } from "../../api/schedule";
import { scheduleType } from "../../types";

const SchedulesTab = () => {
  const [schedules, setSchedules] = useState<scheduleType[]>([]);

  const fetchSchedules = () => {
    getAllSchedules().then(({ schedules }) => setSchedules(schedules));
  };

  useEffect(() => fetchSchedules(), []);

  if (!schedules.length) return <p>No Schedules Found</p>;

  return (
    <div className="">
      <ScheduleEditor schedule={schedules[0]} />
    </div>
  );
};

export default SchedulesTab;
