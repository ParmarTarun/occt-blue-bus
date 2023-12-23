import { routeProps } from "../data/routesData";
import { nextBusesType } from "../types";
import {
  DEFAULT_NEXT_BUS_COUNT,
  DEFAULT_NEXT_BUS_TIMES_COUNT,
} from "./constants";

export const getCurrentTime = () => {
  const d = new Date();
  return d.toLocaleTimeString([], { timeStyle: "short" });
};

export const getCurrentday = () => {
  const d = new Date();
  return d.getDay();
};

export const isWeekend = () => {
  const dayIndex = getCurrentday();
  if (dayIndex === 6 || dayIndex === 0) return true;
  return false;
};

export const isPastTime = (time: string) => {
  const currentTime = new Date().toLocaleTimeString([], { timeStyle: "short" });
  const busTime = time;

  const currentAmorPm = currentTime.split(" ")[1];
  const busAmorPm = busTime.split(" ")[1];

  if (currentAmorPm === "AM" && busAmorPm === "PM") return false;
  if (currentAmorPm === "PM" && busAmorPm === "AM") return true;

  const currentHour = +currentTime.split(":")[0];
  const busHour = +busTime.split(":")[0];

  if (busHour === 12 && currentHour === 12) {
    const currentMin = +currentTime.split(":")[1].split(" ")[0];
    const busMin = +busTime.split(":")[1].split(" ")[0];
    if (currentMin < busMin) return false;
    return true;
  }
  if (busHour === 12 && currentHour !== 12) {
    return true;
  }
  if (busHour !== 12 && currentHour === 12) {
    return false;
  }
  if (busHour === currentHour) {
    const currentMin = +currentTime.split(":")[1].split(" ")[0];
    const busMin = +busTime.split(":")[1].split(" ")[0];
    if (currentMin < busMin) return false;
    return true;
  }
  if (busHour > currentHour) {
    return false;
  } else {
    return true;
  }

  // if (currentHour < busHour) return false;
  // return true;
};

export const findNextBuses = (routes: routeProps, stop: string) => {
  let nextBuses: nextBusesType = {};

  Object.entries(routes).forEach(([bus, route]) => {
    if (route.hasOwnProperty(stop)) {
      const times = route[stop][0].filter((time) => !isPastTime(time));
      if (times.length > 0) nextBuses[bus] = times;
    }
  });

  return nextBuses;
};

export const getUserNotiNumber = () => {
  // read current notification number for that user
  const notiNumber = parseInt(localStorage.getItem("nc") || "0");
  return notiNumber;
};
export const updateNotiNumber = (number: number) => {
  // update current notification number for that user
  localStorage.setItem("nc", number.toString());
};

export const getNextBusTimesCount = () => {
  // read current nextBusTimesCount for that user
  const nextBusTimesCount = parseInt(
    localStorage.getItem("nbtc") || DEFAULT_NEXT_BUS_TIMES_COUNT.toString()
  );
  return nextBusTimesCount;
};
export const updateNextBusTimesCount = (number: number) => {
  // update current nextBusTimesCount for that user
  localStorage.setItem("nbtc", number.toString());
};

export const getNextBusCount = () => {
  // read current nextBusCount for that user
  const nextBusCount = parseInt(
    localStorage.getItem("nbc") || DEFAULT_NEXT_BUS_COUNT.toString()
  );
  return nextBusCount;
};
export const updateNextBusCount = (number: number) => {
  // update current nextBusCount for that user
  localStorage.setItem("nbc", number.toString());
};
