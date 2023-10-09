import { allstops } from "../data/stopsData";
import BusTime from "./BusTime";

const NextBus = () => {
  const times = ["12:45 PM", "12:45 PM", "12:45 PM"];

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-primary text-2xl font-bold">Next Buses</h1>
        <select
          name="stop"
          className="bg-transparent border border-primary rounded-md p-2"
        >
          {allstops.map((stop, i) => (
            <option value={stop} key={i}>
              {stop}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3">
        {times.map((time, i) => (
          <div
            className="border border-green-800 p-1 rounded-md mr-2 mb-2"
            key={i}
          >
            <BusTime time={time} colorClass="text-green-800" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextBus;
