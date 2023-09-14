export const getCurrentTime = () => {
  const d = new Date();
  return d.toLocaleTimeString([], { timeStyle: "short" });
};

export const isPastTime = (time: string) => {
  const time1 = new Date().toLocaleTimeString([], { timeStyle: "short" });
  const time2 = time;

  const AmOrPm1 = time1.split(" ")[1];
  const AmOrPm2 = time2.split(" ")[1];

  if (AmOrPm1 !== AmOrPm2) {
    if (AmOrPm1 === "AM") return false;
    return true;
  } else {
    const hour1 = +time1.split(":")[0];
    const hour2 = +time2.split(":")[0];

    if (hour1 === hour2) {
      const mins1 = +time1.split(":")[1].split(" ")[0];
      const mins2 = +time2.split(":")[1].split(" ")[0];
      if (mins1 < mins2) return false;
      return true;
    }

    if (hour1 < hour2) return false;
    return true;
  }
};
