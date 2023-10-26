import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactChildrenProps, notificationType } from "../types";
import {
  getCurrentTime,
  getUserNotiNumber,
  updateNotiNumber,
} from "../utility";

type notificationContextType = {
  notifications: notificationType[];
  setNotifications: Dispatch<SetStateAction<notificationType[]>>;
  currentNotiNumber: number;
  updateCurrentNotificationNumber: () => void;
};

const initialValues: notificationContextType = {
  notifications: [],
  setNotifications: () => {},
  currentNotiNumber: getUserNotiNumber(),
  updateCurrentNotificationNumber: () => {},
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

  const value = {
    notifications,
    setNotifications,
    currentNotiNumber,
    updateCurrentNotificationNumber,
  };
  return (
    <>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
}
