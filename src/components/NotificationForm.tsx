import React, { useState } from "react";
import { postNotification } from "../api/notification";
import { feedbackType } from "../types";

const NotificationForm = () => {
  const [message, setMessage] = useState("");
  const [feedback, _setFeedback] = useState<feedbackType>({
    message: "",
    success: false,
  });

  const setFeedback = (feedback: feedbackType) => {
    _setFeedback(feedback);
    if (feedback.success) {
      setTimeout(() => _setFeedback({ message: "", success: false }), 3000);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postNotification(message)
      .then((data) => {
        setMessage("");
        setFeedback({ message: "Notification submitted!", success: true });
      })
      .catch((e) => {
        setFeedback({ message: "Failed to submit!", success: false });
        console.log(e);
      });
  };

  return (
    <div className="lg:w-1/2 lg:m-auto">
      <div className="bg-primary px-4 py-2 text-secondary">
        <h3 className="text-lg">Notifcations</h3>
      </div>
      <div className="bg-lightHighlight px-4 py-2">
        <div className="basic-input-group">
          <h3>Message Body</h3>
          <textarea
            className="border-b border-primary w-full"
            placeholder="write a new notification here"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {!!feedback.message && (
          <p className={`text-${feedback.success ? "primary" : "red"}`}>
            {feedback.message}
          </p>
        )}
        <div className="text-end">
          <button
            className="bg-darkHighlight px-2 py-1 rounded-sm text-secondary mb-2"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
