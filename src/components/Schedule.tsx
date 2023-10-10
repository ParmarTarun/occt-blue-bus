import { useEffect, useState } from "react";
import BusComponent from "../components/BusComponent";
import { routesWeekly } from "../data/routesData";
import { routesWeekends } from "../data/routesData";
import { isWeekend } from "../utility";
import { useRoutes } from "../context/route";
const Schedule = () => {
  const { routes, setRoutes } = useRoutes();

  const [weekend, setWeekend] = useState(true);

  const updateData = (wknd: boolean) => {
    if (wknd) {
      setWeekend(true);
      setRoutes(routesWeekends);
    } else {
      setWeekend(false);
      setRoutes(routesWeekly);
    }
  };
  useEffect(() => {
    setRoutes(routesWeekends);
    updateData(isWeekend());
  }, []);
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-2xl font-bold">
          Schedule {weekend ? "(Weekend)" : "(Weekday)"}
        </h1>
        <div className="border border-primary p-0 md:flex rounded-lg">
          <button
            className={` md:px-3 sm:px-1 py-1 w-full rounded-t-lg ${
              weekend
                ? "bg-transparent text-primary"
                : "bg-primary text-darkHighlight"
            }`}
            onClick={() => updateData(false)}
          >
            Weekday
          </button>
          <button
            className={` md:px-3 sm:px-1 py-1 w-full rounded-b-lg ${
              weekend
                ? "bg-primary text-darkHighlight"
                : "bg-transparent text-primary"
            }`}
            onClick={() => updateData(true)}
          >
            Weekend
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-left">
        {Object.entries(routes).map(([bus, busData], i) => (
          <BusComponent key={i} busTitle={bus} busData={busData} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
