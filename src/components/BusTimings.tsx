import React from "react";

interface busTimingsProps {
  times: string[];
}

const BusTimings = ({ times }: busTimingsProps) => {
  return (
    <div className="bg-light rounded-lg mt-4 text-black p-2">
      {times.map((time) => (
        <p>{time}</p>
      ))}
    </div>
  );
};

export default BusTimings;
