import "./App.css";
import BusComponent from "./components/BusComponent";
import Navbar from "./components/Navbar";

type routeProps = {
  [key: string]: {
    [key: string]: string[][];
  };
};

function App() {
  const routes: routeProps = {
    Title: {
      subtitle1: [
        ["option", "option", "option"],
        [
          "adsdsds",
          "bgfgdfs",
          "adsdsdSs",
          "bgfgdfsas",
          "adsdsdss",
          "bgfgdfsss",
        ],
      ],
      subtitle2: [
        ["option", "option", "option"],
        ["adsdsds", "bgfgdfs"],
      ],
      subtitle3: [["option", "option", "option"], []],
      subtitle4: [["option", "option", "option"], []],
    },
    Title2: {
      subtitle1: [["option", "option", "option"], []],
      subtitle2: [["option", "option", "option"], []],
      subtitle3: [["option", "option", "option"], []],
      subtitle4: [["option", "option", "option"], []],
    },
    Title3: {
      subtitle1: [["option", "option", "option"], []],
      subtitle2: [["option", "option", "option"], []],
      subtitle3: [["option", "option", "option"], []],
      subtitle4: [["option", "option", "option"], []],
    },
    Title4: {
      subtitle1: [["option", "option", "option"], []],
      subtitle2: [["option", "option", "option"], []],
      subtitle3: [["option", "option", "option"], []],
      subtitle4: [["option", "option", "option"], []],
    },
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="flex flex-wrap justify-around">
        {Object.entries(routes).map(([bus, busData]) => (
          <BusComponent busTitle={bus} busData={busData} />
        ))}
      </div>
    </div>
  );
}

export default App;
