import { useState } from "react";
import BusStop from "./BusStop";
import BusTimings from "./BusTimings";
import NextStops from "./NextStops";

interface BusComponentProps {
  busData: {
    [key: string]: string[][];
  };
  busTitle: string;
}

const BusComponent = ({ busData, busTitle }: BusComponentProps) => {
  const [activeBusStop, setActiveButStop] = useState("udc");

  const updateActiveBusStop = (stop: string) => {
    if (activeBusStop === stop) setActiveButStop("");
    else setActiveButStop(stop);
  };

  return (
    <div className="p-4 text-primary">
      <div className="border-b border-primary w-1/4">
        <h3 className="text-2xl">{busTitle.toUpperCase()}</h3>
      </div>
      <div className="p-6 w-full text-primary">
        <div className="flex flex-col justiify-between">
          {Object.entries(busData).map(([busStop, [timings, stops]], i) => (
            <div key={i}>
              <button onClick={() => updateActiveBusStop(busStop)}>
                <BusStop title={busStop} />
              </button>
              {busStop === activeBusStop && <BusTimings times={timings} />}
              {Object.entries(busData).length - 1 !== i && ( // dont show next stops for last stop
                <NextStops stops={stops} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusComponent;
