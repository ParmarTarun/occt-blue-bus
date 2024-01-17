import React, { FC } from "react";
import { busDataType } from "../../types";

interface ScheduleEditorTableProps {
  bus: string;
  busData: busDataType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    bus: string,
    stop: string,
    index: number
  ) => void;
  addRow: (bus: string, i: number) => void;
}

const ScheduleEditorTable: FC<ScheduleEditorTableProps> = ({
  bus,
  busData,
  handleChange,
  addRow,
}) => {
  const totalTimes = Object.values(busData)[0]["timings"].length;
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          {Object.keys(busData).map((stop) => (
            <th key={stop}>{stop}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array(totalTimes)
          .fill(0)
          .map((_, j) => (
            <tr key={j}>
              {Object.entries(busData).map(([stop, data], k) => (
                <td key={k}>
                  <input
                    type="text"
                    value={data["timings"][j]}
                    className=""
                    onChange={(e) => handleChange(e, bus, stop, j)}
                  />
                </td>
              ))}
              <td className="flex gap-1">
                <button onClick={() => addRow(bus, j)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ScheduleEditorTable;
