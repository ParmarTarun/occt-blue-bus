import { useEffect } from "react";
import { useNotifications } from "../context/notification";
import { ScaleLoader } from "react-spinners";

const Notifications = () => {
  const {
    notifications,
    updateCurrentNotificationNumber,
    currentNotiNumber,
    fetchNotifications,
    loadingNotifs,
  } = useNotifications();

  useEffect(() => {
    if (notifications.length > 0)
      // avoid updating when the notifications are yet to be fetched
      setTimeout(updateCurrentNotificationNumber, 5000);
    else {
      fetchNotifications();
    }
  }, []);

  return (
    <div>
      <div className="m-auto sm:w-1/2 w-full">
        {loadingNotifs && <ScaleLoader />}
        {!loadingNotifs && notifications.length === 0 && (
          <p>No notifications yet</p>
        )}
        {notifications.map((notification, i) => (
          <div
            key={i}
            className="border text-primary rounded-md border-primary mt-4 break-words"
          >
            <div className="px-4 py-2 bg-primary text-secondary flex justify-between">
              <h3>{notification.createdAt.split(" ")[0]}</h3>
              <p className="text-darkHighlight">
                {currentNotiNumber < notification.notiNumber ? "NEW" : ""}
              </p>
            </div>
            <p className="px-8 py-4 font-medium">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
