import axios from "axios";
import { scheduleBodyType, scheduleType } from "../types";

type getScheduleType = (
  name: string
) => Promise<{ message: string; schedule: scheduleType }>;

export const postSchedule = async (data: scheduleBodyType) => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios
    .post(url, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("bbt")}` },
    })
    .then((res) => res.data);
};

export const getSchedule: getScheduleType = async (name: string) => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios.get(url + "/" + name).then((res) => res.data);
};