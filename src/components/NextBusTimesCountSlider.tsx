import { FC } from "react";

interface nextBusTimesCountSliderProps {
  setNextBusTimesCount: (p: number) => void;
  nextBusTimesCount: number;
}

const NextBusTimesCountSlider: FC<nextBusTimesCountSliderProps> = ({
  nextBusTimesCount,
  setNextBusTimesCount,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:w-max align-center px-2">
      <div>
        <p className="text-lg">Next Bus Count:</p>
        <i className="opacity-50">Set the count of next buses </i>
      </div>
      <div className="md:w-52 sm:w-full">
        <input
          type="range"
          name="nextbuscount"
          min="1"
          max="5"
          onChange={(e) => setNextBusTimesCount(+e.target.value)}
          className="w-full bg-primary"
          value={nextBusTimesCount}
        />
        <div className="flex justify-between">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default NextBusTimesCountSlider;
