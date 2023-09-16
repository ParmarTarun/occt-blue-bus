import { busDataType } from "../types";
import BusStop from "./BusStop";
import NextStops from "./NextStops";
import StopDetails from "./StopDetails";

interface BusComponentProps {
  busData: busDataType;
  busTitle: string;
}

const BusComponent = ({ busData, busTitle }: BusComponentProps) => {
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
    <div className="m-2 p-2 text-primary">
      <div className="border-b border-primary">
        <h3 className="text-2xl">{busTitle.toUpperCase().replace("_", " ")}</h3>
      </div>

      <div className="flex flex-col justiify-between p-3">
        {Object.entries(busData).map(([busStop, [timings, stops]], i) => (
          <div key={i}>
            <button
              className=" p-2 bg-transparent border border-primary text-primary"
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
    </div>
  );
};

export default BusComponent;
