import { useEffect, useState } from "react";
import ScheduleEditorTable from "./ScheduleEditorTable";
import { useSchedule } from "../../context/schedule";

const SchedulesTab = () => {
  const { schedule } = useSchedule();
  const [data, setData] = useState(schedule?.data);
  const [openedBus, setOpenedBus] = useState("");
  const [edited, setEdited] = useState(false);
  const toggleSchedule = (bus: string) => {
    // reset the current busData if opened tab is closed directly after editing
    if (edited) {
      resetData(openedBus);
      setEdited(false);
    }
    if (openedBus === bus) {
      setOpenedBus("");
    } else {
      setOpenedBus(bus);
    }
  };

  const resetData = (bus: string) => {
    setEdited(false);
    setData({
      ...data,
      [bus]: schedule?.data[bus] || {},
    });
  };

  const saveData = () => {
    alert("Make Api Call with data state");
    setEdited(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    bus: string,
    stop: string,
    index: number
  ) => {
    if (!data) return;
    // updates the specific bus time based on all the data
    setEdited(true);
    const { timings, nextStops } = data[bus][stop];
    const newTimes = [
      ...timings.slice(0, index),
      e.target.value,
      ...timings.slice(index + 1),
    ];
    setData({
      ...data,
      [bus]: {
        ...data[bus],
        [stop]: { timings: newTimes, nextStops },
      },
    });
  };

  const addRow = (bus: string, i: number) => {
    if (!data) return;
    let newBusData = { ...data[bus] };
    Object.keys(data[bus]).forEach((stop) => {
      const { timings, nextStops } = data[bus][stop];
      newBusData[stop] = {
        nextStops,
        timings: [
          ...timings.slice(0, i + 1),
          "00:00 AM",
          ...timings.slice(i + 1),
        ],
      };
    });
    setData({
      ...data,
      [bus]: newBusData,
    });
  };

  useEffect(() => setData(schedule?.data), [schedule]);
  if (!data) return <p>Data Not Found!</p>;
  return (
    <div className="schedule-editor lg:w-1/2 lg:m-auto">
      {Object.entries(data).map(([bus, busData], i) => {
        return (
          <section className="schedule-wrapper" key={i}>
            <button
              className="schedule-header w-full text-left"
              onClick={() => toggleSchedule(bus)}
            >
              {bus}
            </button>
            <div className="h-1 bg-primary" />
            <div
              className={`schedule-table ${openedBus !== bus ? "hidden" : ""}`}
            >
              <ScheduleEditorTable
                bus={bus}
                handleChange={handleChange}
                busData={busData}
                addRow={addRow}
              />
              {edited && (
                <div className="text-end p-2">
                  <button
                    className="bg-darkHighlight px-2 py-1 rounded-md text-primary mr-2"
                    onClick={() => resetData(bus)}
                  >
                    RESET
                  </button>
                  <button
                    className="bg-lightHighlight px-2 py-1 rounded-md text-primary"
                    onClick={saveData}
                  >
                    SAVE
                  </button>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SchedulesTab;
