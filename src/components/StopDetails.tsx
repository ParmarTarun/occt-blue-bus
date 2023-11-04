import React, { useState } from "react";
import BusTimings from "./BusTimings";
import RouteComponent from "./RouteComponent";
import { busDataType, routeDataType } from "../types";

interface stopDetailsProps {
  id: string;
  timings: string[];
  busData: busDataType;
}

const StopDetails = ({ id, timings, busData }: stopDetailsProps) => {
  const [route, setRoute] = useState<routeDataType>({});
  const showRoute = (busIndex: number) => {
    // console.log(busData, busIndex);
    let currentRoute: routeDataType = {};
    Object.entries(busData).forEach(([stop, data]) => {
      currentRoute[stop] = data[0][busIndex];
    });
    setRoute(currentRoute);
  };

  return (
    <div>
      {
        <div
          className="
          border
        border-primary
        rounded-b-lg
        rounded-tr-2xl
        text-sm
        text-black 
        p-2
        min-h-48
        hidden"
          id={id}
        >
          {!Object.keys(route).length ? (
            <>
              <BusTimings times={timings} showRoute={showRoute} />
              <div className="text-primary">
                <i>Click on time to see whole route</i>
              </div>
            </>
          ) : (
            <RouteComponent route={route} unsetRoute={() => setRoute({})} />
          )}
        </div>
      }
    </div>
  );
};

export default StopDetails;
