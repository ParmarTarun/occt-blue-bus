import { scheduleType } from "../types";

export const getScheduleFromCache: (p: string) => scheduleType | null = (
  name
) => {
  const schedule = localStorage.getItem(name);
  if (!schedule) return null;
  return JSON.parse(schedule);
};

export const setScheduleInCache: (p: string, data: scheduleType) => void = (
  name,
  data
) => {
  // set schedule in localstorage with name as key
  localStorage.setItem(name, JSON.stringify(data));
  return;
};
