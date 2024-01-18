import { FC } from "react";
import { scheduleType } from "../../types";

interface ScheduleCardsProps {
  schedules: scheduleType[];
  handleCardClick: (p: string) => void;
}

const ScheduleCards: FC<ScheduleCardsProps> = ({
  schedules,
  handleCardClick,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 my-4">
      {schedules.map((s, i) => {
        const created = new Date(s.createdAt).toLocaleString();
        return (
          <button
            className="text-left"
            onClick={() => handleCardClick(s.name)}
            key={i}
          >
            <div className="col-span-1 bg-primary text-secondary p-4 rounded-lg shadow-lg border border-transparent hover:border-lightHighlight">
              <h3 className="text-2xl">{s.name}</h3>
              <p className="italic mt-2">Created: {created}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ScheduleCards;
