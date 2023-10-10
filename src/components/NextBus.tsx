import { useEffect, useState } from "react";
import { allstops } from "../data/stopsData";
import BusTime from "./BusTime";
import { useRoutes } from "../context/route";
import { nextBusesType } from "../types";
import { findNextBuses } from "../utility";

const NextBus = () => {
  const defaultNextBusCount = 3;
  const { routes } = useRoutes();
  const totalNextBuses = Object.keys(routes).length;
  const [nextBuses, setNextBuses] = useState<nextBusesType>({});
  const [expanded, setExpanded] = useState(false);
  const [nextBusCount, setNextBusCount] = useState(defaultNextBusCount);

  const handleStopSelect = (stop: string) => {
    const buses = findNextBuses(routes, stop);
    setNextBuses(buses);
  };

  const toggleExpand = () => {
    if (expanded) {
      setExpanded(false);
      setNextBusCount(defaultNextBusCount);
    } else {
      setExpanded(true);
      setNextBusCount(totalNextBuses);
    }
  };

  useEffect(() => handleStopSelect(allstops[0]), [routes]);

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
          >
            {allstops.map((stop, i) => (
              <option value={stop} key={i}>
                {stop}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1">
        {Object.entries(nextBuses)
          .slice(0, nextBusCount)
          .map(
            ([bus, times], i) =>
              !!times.length && (
                <div
                  key={i}
                  className="p-2 border border-primary rounded-md m-2"
                >
                  <h3 className="text-primary mb-1">
                    {bus.replaceAll("_", " ")}
                  </h3>
                  <div className="grid grid-cols-3">
                    {times.slice(0, 3).map((time, i) => (
                      <div className="mr-2" key={i}>
                        <BusTime time={time} colorClass="text-green-800" />
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        <p
          className="text-primary flex justify-center items-center"
          onClick={() => toggleExpand()}
        >
          {expanded
            ? "collapse"
            : totalNextBuses - defaultNextBusCount + " more"}
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
        </p>
      </div>
    </div>
  );
};

export default NextBus;
