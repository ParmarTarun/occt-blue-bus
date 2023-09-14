import { useState } from "react";
import BusStop from "./BusStop";
import BusTimings from "./BusTimings";

interface BusComponentProps {
  busData: {
    [key: string]: string[];
  };
  busTitle: string;
}

const BusComponent = ({ busData, busTitle }: BusComponentProps) => {
  const [activeBusStop, setActiveButStop] = useState("");

  const updateActiveBusStop = (stop: string) => {
    if (activeBusStop === stop) setActiveButStop("");
    else setActiveButStop(stop);
  };

  return (
    <div className="p-4 text-primary">
      <div className="border-b border-primary w-1/4">
        <h3 className="text-2xl">{busTitle.toUpperCase()}</h3>
      </div>
      <div className="flex justify-start p-6 w-full text-primary">
        <div className="flex justiify-between gap-4">
          {Object.entries(busData).map(([busStop, times], i) => (
            <div className="flex flex-col items-center" key={i}>
              <button onClick={() => updateActiveBusStop(busStop)}>
                <BusStop title={busStop} />
              </button>
              {activeBusStop === busStop && <BusTimings times={times} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusComponent;
