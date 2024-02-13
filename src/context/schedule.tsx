import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactChildrenProps, scheduleType } from "../types";
import { getSchedule } from "../api/schedule";
import { getScheduleFromCache, setScheduleInCache } from "../api/cache";

type scheduleContextType = {
  schedule: scheduleType | null;
  loadingSchedule: boolean;
  setSchedule: Dispatch<SetStateAction<scheduleType | null>>;
  fetchSchedule: (p: string) => void;
};

const initialValues: scheduleContextType = {
  schedule: null,
  loadingSchedule: false,
  setSchedule: () => {},
  fetchSchedule: () => {},
};

const ScheduleContext = createContext<scheduleContextType>(initialValues);

export function useSchedule() {
  return useContext(ScheduleContext);
}

export function ScheduleProvider({ children }: ReactChildrenProps) {
  const [schedule, setSchedule] = useState(initialValues.schedule);
  const [loading, setLoading] = useState(false);

  const fetchSchedule = (name: string) => {
    // check in cache
    const cachedSchedule = getScheduleFromCache(name);
    if (cachedSchedule) {
      setSchedule(cachedSchedule);
      return;
    }
    // get from api
    setLoading(true);
    getSchedule(name)
      .then(({ schedule }) => {
        setScheduleInCache(name, schedule);
        setSchedule(schedule);
      })
      .catch((e: Error) => {
        alert("Failed to fetch schedule");
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  const value = {
    loadingSchedule: loading,
    schedule,
    setSchedule,
    fetchSchedule,
  };
  return (
    <>
      <ScheduleContext.Provider value={value}>
        {children}
      </ScheduleContext.Provider>
    </>
  );
}
