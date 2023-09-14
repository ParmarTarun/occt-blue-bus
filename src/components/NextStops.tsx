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
          {!expand ? (
            <button
              onClick={() => setExpand(true)}
            >{`${stops.length} more`}</button>
          ) : (
            <button className="text-left" onClick={() => setExpand(false)}>
              {stops.map((stop) => (
                <p>{stop.toUpperCase()}</p>
              ))}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NextStops;
