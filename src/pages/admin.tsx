import React from "react";
import NotificationForm from "../components/NotificationForm";

const AdminPage = () => {
  return (
    <div>
      <h2 className="text-2xl">Admin Dashboard</h2>
      <div className="grid grid-cols-3 pt-4">
        <div className="col-span-1">
          <NotificationForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
