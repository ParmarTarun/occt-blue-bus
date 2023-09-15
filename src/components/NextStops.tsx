import { useState } from "react";

interface NextStopProps {
  stops: string[];
}

const NextStops = ({ stops }: NextStopProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="border-l border-primary p-4">
      {!!stops.length && (
        <div className=" text-primary font-normal text-md">
          <button
            onClick={() => setExpand(!expand)}
            className="flex items-center"
          >
            {`${stops.length} stops`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {expand && (
            <div className="text-left">
              {stops.map((stop) => (
                <p>{stop.toUpperCase()}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NextStops;
