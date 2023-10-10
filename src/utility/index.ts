import { routeProps } from "../data/routesData";

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
  return {
    WS_OUT: ["12:45 PM", "12:40 PM", "12:45 PM"],
    DCL_OUT: ["12:45 PM", "12:45 PM", "12:45 PM"],
  };
};
