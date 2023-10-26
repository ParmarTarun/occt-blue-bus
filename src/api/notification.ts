import axios from "axios";
import { notificationType } from "../types";

type getNotificationsType = () => Promise<{
  notifications: notificationType[];
}>;

export const postNotification = async (message: string) => {
  const url = process.env.REACT_APP_NOTIFICATIONS_ENDPOINT;
  if (!url) throw new Error("Endpoint for notifications is missing");
  return axios.post(url, { message }).then((res) => res.data);
};

export const getNotifications: getNotificationsType = async () => {
  const url = process.env.REACT_APP_NOTIFICATIONS_ENDPOINT;
  if (!url) throw new Error("Endpoint for notifications is missing");
  return axios.get(url).then((res) => res.data);
};
