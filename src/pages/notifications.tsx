import { useEffect } from "react";
import { useNotifications } from "../context/notification";

const Notifications = () => {
  const { notifications, updateCurrentNotificationNumber, currentNotiNumber } =
    useNotifications();

  useEffect(() => {
    setTimeout(updateCurrentNotificationNumber, 10000);
  }, []);

  return (
    <div>
      <div className="m-auto w-1/2">
        {notifications.map((notification, i) => (
          <div key={i} className="border rounded-md border-primary mt-4">
            <div className="px-4 py-2 bg-primary text-secondary flex justify-between">
              <h3>{notification.createdAt}</h3>
              <p className="text-darkHighlight">
                {currentNotiNumber < notification.notiNumber ? "NEW" : ""}
              </p>
            </div>
            <p className="px-8 py-4">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
