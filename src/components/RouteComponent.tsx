import { routeDataType } from "../types";
import { isPastTime } from "../utility";

interface routeComponentProps {
  route: routeDataType;
  unsetRoute: () => void;
}

const RouteComponent = ({ route, unsetRoute }: routeComponentProps) => {
  return (
    <>
      <div className="flex gap-2 p-1">
        <div onClick={unsetRoute}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div>
          {Object.entries(route).map(([bus, time]) => {
            const colorClass = isPastTime(time) ? "text-red" : "text-green-800";
            return (
              <div className="grid grid-cols-2 gap-2" key={time}>
                <h2>{bus.toUpperCase()}</h2>
                <div className="flex">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RouteComponent;
