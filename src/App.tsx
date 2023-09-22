import { useEffect, useState } from "react";
import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";
import { routesWeekly } from "./data/routesData";
import { routesWeekends } from "./data/routesData";
import { getCurrentday } from "./utility";

const App = () => {
  const [routes, setRoutes] = useState(routesWeekends);

  const isWeekend = () => {
    const dayIndex = getCurrentday();
    if (dayIndex === 6 || dayIndex === 7) return true;
    return false;
  };

  useEffect(() => {
    if (isWeekend()) setRoutes(routesWeekends);
    else setRoutes(routesWeekly);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="p-4">
        <div className="mt-4">
          <h1 className="text-primary text-2xl font-bold">Schedule</h1>
          <span></span>
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
