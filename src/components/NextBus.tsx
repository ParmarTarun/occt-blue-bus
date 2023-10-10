import { useEffect, useState } from "react";
import { allstops } from "../data/stopsData";
import BusTime from "./BusTime";
import { useRoutes } from "../context/route";
import { nextBusesType } from "../types";
import { findNextBuses } from "../utility";

const NextBus = () => {
  const [nextBuses, setNextBuses] = useState<nextBusesType>({});
  const { routes } = useRoutes();

  const handleStopSelect = (stop: string) => {
    const buses = findNextBuses(routes, stop);
    setNextBuses(buses);
  };

  useEffect(() => handleStopSelect(allstops[0]));

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-primary text-2xl font-bold">Next Buses</h1>
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
      <div>
        {Object.entries(nextBuses).map(([bus, times], i) => (
          <div key={i}>
            <h3 className="mb-2 mt-4 text-primary">
              {bus.replaceAll("_", " ")}
            </h3>
            <div className="grid grid-cols-3">
              {times.map((time, i) => (
                <div
                  className="border border-green-800 p-1 rounded-md mr-2"
                  key={i}
                >
                  <BusTime time={time} colorClass="text-green-800" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextBus;
