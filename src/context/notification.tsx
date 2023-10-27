import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactChildrenProps, notificationType } from "../types";
import { getUserNotiNumber, updateNotiNumber } from "../utility";
import { getNotifications } from "../api/notification";

type notificationContextType = {
  notifications: notificationType[];
  setNotifications: Dispatch<SetStateAction<notificationType[]>>;
  currentNotiNumber: number;
  updateCurrentNotificationNumber: () => void;
  fetchNotifications: () => void;
};

const initialValues: notificationContextType = {
  notifications: [],
  setNotifications: () => {},
  currentNotiNumber: getUserNotiNumber(),
  updateCurrentNotificationNumber: () => {},
  fetchNotifications: () => {},
};

const NotificationContext =
  createContext<notificationContextType>(initialValues);

export function useNotifications() {
  return useContext(NotificationContext);
}

export function NotificationsProvider({ children }: ReactChildrenProps) {
  const [notifications, setNotifications] = useState(
    initialValues.notifications
  );
  const [currentNotiNumber, setCurrentNotiNumber] = useState(
    initialValues.currentNotiNumber
  );

  const updateCurrentNotificationNumber = () => {
    updateNotiNumber(notifications.length);
    setCurrentNotiNumber(notifications.length);
  };
  const fetchNotifications = () => {
    getNotifications()
      .then(({ notifications }) => setNotifications(notifications))
      .catch((e: Error) => console.log(e));
  };

  const value = {
    notifications,
    setNotifications,
    currentNotiNumber,
    updateCurrentNotificationNumber,
    fetchNotifications,
  };
  return (
    <>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
}
