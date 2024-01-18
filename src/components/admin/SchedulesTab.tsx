import { useEffect, useState } from "react";
import ScheduleEditor from "./ScheduleEditor";
import { getAllSchedules, getSchedule } from "../../api/schedule";
import { scheduleType } from "../../types";
import ScheduleCards from "./ScheduleCards";

const SchedulesTab = () => {
  const [schedules, setSchedules] = useState<scheduleType[]>([]);
  const [currentSchedule, setCurrentSchedule] = useState<scheduleType | null>(
    null
  );
  const [scheduleLoading, setScheduleLoading] = useState(false);

  const fetchSchedules = () => {
    getAllSchedules()
      .then(({ schedules }) => setSchedules(schedules))
      .catch((e) => {
        alert("Failed to load schedules");
        console.log(e);
      });
  };

  const handleCardClick = (name: string) => {
    if (name === currentSchedule?.name) return;
    setScheduleLoading(true);
    getSchedule(name)
      .then(({ schedule }) => setCurrentSchedule(schedule))
      .catch((e) => {
        alert("Failed to fetch schedule");
        console.log(e);
      })
      .finally(() => setScheduleLoading(false));
  };

  useEffect(() => fetchSchedules(), []);

  if (schedules.length === 0) return <p>Loading...</p>;

  return (
    <div className="lg:w-1/2 lg:m-auto">
      <ScheduleCards schedules={schedules} handleCardClick={handleCardClick} />
      {scheduleLoading ? (
        <p>Loading...</p>
      ) : (
        <>{currentSchedule && <ScheduleEditor schedule={currentSchedule} />}</>
      )}
    </div>
  );
};

export default SchedulesTab;
