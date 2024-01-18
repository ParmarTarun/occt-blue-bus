import axios from "axios";
import { scheduleBodyType, scheduleType } from "../types";

type getScheduleType = (
  name: string
) => Promise<{ message: string; schedule: scheduleType }>;

type updateScheduleType = (
  data: scheduleBodyType
) => Promise<{ message: string; schedule: scheduleType }>;

type getAllSchedulesType = () => Promise<{
  message: string;
  schedules: scheduleType[];
}>;

export const updateSchedule: updateScheduleType = async (
  data: scheduleBodyType
) => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios
    .put(url + "/" + data.name, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("bbt")}` },
    })
    .then((res) => res.data);
};

export const postSchedule = async (data: scheduleBodyType) => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios
    .post(url, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("bbt")}` },
    })
    .then((res) => res.data);
};

export const getAllSchedules: getAllSchedulesType = async () => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios.get(url).then((res) => res.data);
};

export const getSchedule: getScheduleType = async (name: string) => {
  const url = process.env.REACT_APP_SCHEDULES_ENDPOINT;
  if (!url) throw new Error("Endpoint for schedules is missing");
  return axios.get(url + "/" + name).then((res) => res.data);
};
