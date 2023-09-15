import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";
import { routes } from "./data/routesData";

const App = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="p-4">
        <div className="mt-4">
          <h1 className="text-primary text-2xl font-bold">
            Schedule (Week days)
          </h1>
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
