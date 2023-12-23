import { useEffect } from "react";
import { RoutesProvider } from "../context/route";
import { preferencesType } from "../types";
import { usePreference } from "../context/preference";
import NextBusTimesCountSlider from "../components/NextBusTimesCountSlider";

const Preferences = () => {
  const { nextBusTimesCount, setNextBusTimesCount } = usePreference();

  const localPreferences: () => preferencesType = () => {
    // get next bus count from localstorage or send default from context
    const nbtc = parseInt(localStorage.getItem("nbtc") || "0");
    return {
      nextBusTimesCount: nbtc || nextBusTimesCount,
    };
  };

  useEffect(() => {
    // set next bus count value from localSTorage on first load
    const { nextBusTimesCount } = localPreferences();
    setNextBusTimesCount(nextBusTimesCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoutesProvider>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-primary text-2xl font-bold">Preferences</h1>
      </div>
      <NextBusTimesCountSlider
        nextBusTimesCount={nextBusTimesCount}
        setNextBusTimesCount={setNextBusTimesCount}
      />
    </RoutesProvider>
  );
};

export default Preferences;
