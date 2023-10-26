import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h2 className="text-2xl">Admin Dashboard</h2>
      <div className="grid grid-cols-3 pt-4">
        <div className="col-span-1">
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
              />
            </div>
            <div className="text-end">
              <button className="bg-darkHighlight px-2 py-1 rounded-sm text-secondary mb-2">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
