import { useState } from "react";
import { busDataType } from "../types";
import BusStop from "./BusStop";
import NextStops from "./NextStops";
import StopDetails from "./StopDetails";

interface BusComponentProps {
  busData: busDataType;
  busTitle: string;
  expanded: boolean;
}

const BusComponent = ({ busData, busTitle, expanded }: BusComponentProps) => {
  const [expand, setExpand] = useState(expanded);

  const toggleTimings = (id: string) => {
    const el = document.querySelector<HTMLElement>("#" + id);
    if (el)
      if (el.classList.contains("grid")) {
        el.classList.remove("grid");
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
        el.classList.add("grid");
      }
  };

  return (
    <div className="m-2 p-2 text-primary min-w-98">
      <div
        className="flex items-center justify-between border-b border-primary w-56 cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h3 className="text-2xl">
          {busTitle.toUpperCase().replaceAll("_", " ")}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {expand && (
        <div className="flex flex-col p-3">
          {Object.entries(busData).map(([busStop, [timings, stops]], i) => (
            <div key={i}>
              <button
                className=" p-2 bg-primary border border-primary text-secondary"
                onClick={() => toggleTimings(`${busTitle}_${i}`)}
              >
                <BusStop title={busStop} />
              </button>
              <StopDetails
                id={`${busTitle}_${i}`}
                timings={timings}
                busData={busData}
              />
              {Object.entries(busData).length - 1 !== i && ( // dont show next stops for last stop
                <NextStops stops={stops} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusComponent;
