import { isPastTime } from "../utility";

interface busTimingsProps {
  times: string[];
  id: string;
}

const BusTimings = ({ times, id }: busTimingsProps) => {
  return (
    <div
      className="
        bg-light
        rounded-b-lg
        rounded-tr-2xl
        text-sm
        text-black 
        p-2
        grid-cols-3
        hidden"
      id={id}
    >
      {times.map((time, i) => {
        const colorClass = isPastTime(time) ? "text-red-800" : "text-green-800";
        return (
          <div className="mr-2" key={i}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${colorClass} inline-block`}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className={colorClass}>{time}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BusTimings;
