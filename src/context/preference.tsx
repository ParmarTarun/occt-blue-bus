import { createContext, useContext, useState } from "react";
import { ReactChildrenProps } from "../types";
import { getNextBusTimesCount, updateNextBusTimesCount } from "../utility";

type preferenceContextType = {
  nextBusTimesCount: number;
  setNextBusTimesCount: (p: number) => void;
};

const PreferenceContext = createContext<preferenceContextType>({
  nextBusTimesCount: getNextBusTimesCount(),
  setNextBusTimesCount: () => {},
});

export function usePreference() {
  return useContext(PreferenceContext);
}

export function PreferenceProvider({ children }: ReactChildrenProps) {
  const [nextBusTimesCount, _setNextBusTimesCount] = useState(
    getNextBusTimesCount()
  );

  const setNextBusTimesCount = (p: number) => {
    updateNextBusTimesCount(p);
    _setNextBusTimesCount(p);
  };

  const value = {
    nextBusTimesCount,
    setNextBusTimesCount,
  };
  return (
    <>
      <PreferenceContext.Provider value={value}>
        {children}
      </PreferenceContext.Provider>
    </>
  );
}
