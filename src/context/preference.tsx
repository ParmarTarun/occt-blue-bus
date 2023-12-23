import { createContext, useContext, useState } from "react";
import { ReactChildrenProps } from "../types";
import {
  getNextBusCount,
  getNextBusTimesCount,
  updateNextBusCount,
  updateNextBusTimesCount,
} from "../utility";

type preferenceContextType = {
  nextBusTimesCount: number;
  setNextBusTimesCount: (p: number) => void;
  nextBusCount: number;
  setNextBusCount: (p: number) => void;
};

const PreferenceContext = createContext<preferenceContextType>({
  nextBusTimesCount: getNextBusTimesCount(),
  setNextBusTimesCount: () => {},
  nextBusCount: getNextBusCount(),
  setNextBusCount: () => {},
});

export function usePreference() {
  return useContext(PreferenceContext);
}

export function PreferenceProvider({ children }: ReactChildrenProps) {
  const [nextBusTimesCount, _setNextBusTimesCount] = useState(
    getNextBusTimesCount()
  );
  const [nextBusCount, _setNextBusCount] = useState(getNextBusCount());

  const setNextBusTimesCount = (p: number) => {
    updateNextBusTimesCount(p);
    _setNextBusTimesCount(p);
  };

  const setNextBusCount = (p: number) => {
    updateNextBusCount(p);
    _setNextBusCount(p);
  };

  const value = {
    nextBusTimesCount,
    setNextBusTimesCount,
    nextBusCount,
    setNextBusCount,
  };
  return (
    <>
      <PreferenceContext.Provider value={value}>
        {children}
      </PreferenceContext.Provider>
    </>
  );
}
