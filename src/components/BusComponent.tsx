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
  const [activeBusStop, setActiveBusStop] = useState("");

  return (
    <div className="p-4 text-primary">
      <div className="border-b border-primary w-1/2">
        <h3 className="text-2xl">{busTitle.toUpperCase()}</h3>
      </div>
      <div className="p-6 w-full text-primary">
        <div className="flex gap-4">
          <div className="flex flex-col justiify-between">
            {Object.entries(busData).map(([busStop, [timings, stops]], i) => (
              <div key={i}>
                <button
                  className={`border border-primary rounded-2xl p-2 ${
                    activeBusStop === busStop ? "bg-light" : "bg-primary"
                  }`}
                  onClick={() => setActiveBusStop(busStop)}
                >
                  <BusStop title={busStop} />
                </button>
                {Object.entries(busData).length - 1 !== i && ( // dont show next stops for last stop
                  <NextStops stops={stops} />
                )}
              </div>
            ))}
          </div>
          {activeBusStop && <BusTimings times={busData[activeBusStop][0]} />}
        </div>
      </div>
    </div>
  );
};

export default BusComponent;
