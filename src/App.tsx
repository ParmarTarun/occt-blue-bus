import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";

function App() {
  const routes = {
    "dcl in": {
      udc: ["10:25 AM", "10:28 AM", "10:34 AM"],
      "Leroy/murray": ["10:25 AM", "10:28 AM", "10:34 AM"],
      "riverside/columb": ["10:25 AM", "10:28 AM", "10:34 AM"],
      "Union/campus": ["10:25 AM", "10:28 AM", "10:34 AM"],
    },
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <BusComponent busTitle={"dcl in"} busData={routes["dcl in"]} />
    </div>
  );
}

export default App;
