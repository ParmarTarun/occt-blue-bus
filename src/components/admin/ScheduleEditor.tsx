import { FC, useState } from "react";
import ScheduleEditorTable from "./ScheduleEditorTable";
import { scheduleType } from "../../types";
import { updateSchedule } from "../../api/schedule";

interface ScheduleEditorProps {
  schedule: scheduleType;
}

const ScheduleEditor: FC<ScheduleEditorProps> = ({ schedule: cSchedule }) => {
  const [schedule, setSchedule] = useState(cSchedule);
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
    setSchedule({
      ...cSchedule,
      data: {
        ...cSchedule.data,
        [bus]: cSchedule.data[bus],
      },
    });
  };

  const saveData = () => {
    updateSchedule({ name: schedule.name, data: schedule.data })
      .then(({ schedule }) => {
        setSchedule(schedule);
        setEdited(false);
      })
      .catch((e) => {
        alert("Failed to udpate the schedule");
        console.log(e);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    bus: string,
    stop: string,
    index: number
  ) => {
    // updates the specific bus time based on all the data
    setEdited(true);
    const { timings, nextStops } = schedule.data[bus][stop];
    const newTimes = [
      ...timings.slice(0, index),
      e.target.value,
      ...timings.slice(index + 1),
    ];
    setSchedule({
      ...schedule,
      data: {
        ...schedule.data,
        [bus]: {
          ...schedule.data[bus],
          [stop]: { timings: newTimes, nextStops },
        },
      },
    });
  };

  const addRow = (bus: string, i: number) => {
    let newBusData = { ...schedule.data[bus] };
    Object.keys(schedule.data[bus]).forEach((stop) => {
      const { timings, nextStops } = schedule.data[bus][stop];
      newBusData[stop] = {
        nextStops,
        timings: [
          ...timings.slice(0, i + 1),
          "00:00 AM",
          ...timings.slice(i + 1),
        ],
      };
    });
    setSchedule({
      ...schedule,
      data: {
        ...schedule.data,
        [bus]: newBusData,
      },
    });
    setEdited(true);
  };

  const removeRow = (bus: string, i: number) => {
    let newBusData = { ...schedule.data[bus] };
    Object.keys(schedule.data[bus]).forEach((stop) => {
      const { timings, nextStops } = schedule.data[bus][stop];
      newBusData[stop] = {
        nextStops,
        timings: [...timings.slice(0, i), ...timings.slice(i + 1)],
      };
    });
    setSchedule({
      ...schedule,
      data: {
        ...schedule.data,
        [bus]: newBusData,
      },
    });
    setEdited(true);
  };

  return (
    <div className="schedule-editor ">
      <h2 className="text-4xl uppercase font-semibold">{schedule.name}</h2>
      {Object.entries(schedule.data).map(([bus, busData], i) => {
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
                removeRow={removeRow}
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

export default ScheduleEditor;
