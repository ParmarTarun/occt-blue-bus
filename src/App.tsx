import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";
import { routes } from "./data/routesData";
import { getCurrentTime } from "./utility";

const App = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="flex flex-wrap justify-left">
        {Object.entries(routes).map(([bus, busData]) => (
          <BusComponent busTitle={bus} busData={busData} />
        ))}
      </div>
    </div>
  );
};

export default App;
