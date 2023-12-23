import { useEffect } from "react";
import { RoutesProvider } from "../context/route";
import { usePreference } from "../context/preference";
import NextBusTimesCountSlider from "../components/NextBusTimesCountSlider";
import NextBusCountSlider from "../components/NextBusCountSlider";

const Preferences = () => {
  const {
    nextBusTimesCount,
    setNextBusTimesCount,
    nextBusCount,
    setNextBusCount,
  } = usePreference();

  useEffect(() => {
    // set values from localSTorage on first load
    setNextBusTimesCount(nextBusTimesCount);
    setNextBusCount(nextBusCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoutesProvider>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-primary text-2xl font-bold">Preferences</h1>
      </div>
      <div className="sm:flex sm:gap-4">
        <NextBusCountSlider
          nextBusCount={nextBusCount}
          setNextBusCount={setNextBusCount}
        />
        <NextBusTimesCountSlider
          nextBusTimesCount={nextBusTimesCount}
          setNextBusTimesCount={setNextBusTimesCount}
        />
      </div>
    </RoutesProvider>
  );
};

export default Preferences;
