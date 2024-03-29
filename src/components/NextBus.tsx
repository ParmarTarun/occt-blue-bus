import { useEffect, useState } from "react";
import { allstops } from "../data/stopsData";
import BusTime from "./BusTime";
import { nextBusesType } from "../types";
import { findNextBuses } from "../utility";
import { usePreference } from "../context/preference";
import { useSchedule } from "../context/schedule";

const NextBus = () => {
  const { schedule, loadingSchedule } = useSchedule();
  const scheduleData = schedule?.data || undefined;
  const { nextBusTimesCount, nextBusCount } = usePreference();
  const [nextBuses, setNextBuses] = useState<nextBusesType>({});
  const [expanded, setExpanded] = useState(false);
  const [currentNextBusCount, setCurrentNextBusCount] = useState(nextBusCount);
  const totalNextBuses = Object.keys(nextBuses).length;

  const handleStopSelect = (stop: string) => {
    if (!scheduleData) return;
    const buses = findNextBuses(scheduleData, stop);
    setNextBuses(buses);
  };

  const toggleExpand = () => {
    if (expanded) {
      setExpanded(false);
      setCurrentNextBusCount(nextBusCount);
    } else {
      setExpanded(true);
      setCurrentNextBusCount(totalNextBuses);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!loadingSchedule && scheduleData) handleStopSelect(allstops[0]);
  }, [scheduleData]);
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-primary text-2xl font-bold">Next Buses</h1>
        <div>
          <span className="mr-2">@</span>
          <select
            name="stop"
            className="bg-transparent border border-primary rounded-md p-2"
            onChange={(e) => handleStopSelect(e.target.value)}
            disabled={loadingSchedule}
          >
            {allstops.map((stop, i) => (
              <option value={stop} key={i}>
                {stop}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loadingSchedule ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1">
          {Object.entries(nextBuses)
            .slice(0, currentNextBusCount)
            .map(([bus, times], i) => (
              <div key={i} className="p-2 border border-primary rounded-md m-2">
                <h3 className="text-primary mb-1">
                  {bus.replaceAll("_", " ")}
                </h3>
                <div className="grid grid-cols-3">
                  {times.slice(0, nextBusTimesCount).map((time, i) => (
                    <div className="mr-2 mb-1" key={i}>
                      <BusTime time={time} colorClass="text-green-800" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {totalNextBuses - nextBusCount > 0 && (
            <p
              className="text-primary flex justify-center items-center cursor-pointer"
              onClick={() => toggleExpand()}
            >
              <>
                {expanded
                  ? "collapse"
                  : totalNextBuses - nextBusCount + " more"}
                {!expanded && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </>
            </p>
          )}
          {Object.keys(nextBuses).length === 0 && <p>No buses found</p>}
        </div>
      )}
    </div>
  );
};

export default NextBus;
