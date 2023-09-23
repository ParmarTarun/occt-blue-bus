import { useEffect, useState } from "react";
import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";
import { routesWeekly } from "./data/routesData";
import { routesWeekends } from "./data/routesData";
import { isWeekend } from "./utility";

const App = () => {
  const [routes, setRoutes] = useState(routesWeekends);
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

  useEffect(() => updateData(isWeekend()), []);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="p-4">
        <div className="mt-4 flex items-center justify-between px-4 py-2">
          <h1 className="text-primary text-2xl font-bold">
            Schedule {weekend ? "(Weekend)" : "(Weekdays)"}
          </h1>
          <div className="border border-primary p-0 md:flex rounded-lg">
            <button
              className={` md:px-3 sm:px-1 py-1 w-full ${
                weekend
                  ? "bg-transparent text-primary"
                  : "bg-primary text-darkHighlight"
              }`}
              onClick={() => updateData(false)}
            >
              Weekday
            </button>
            <button
              className={` md:px-3 sm:px-1 py-1 w-full ${
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
    </div>
  );
};

export default App;
