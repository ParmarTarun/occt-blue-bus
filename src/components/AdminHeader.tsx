import React, { FC, useState } from "react";

interface AdminHeaderProps {
  setAdminLoggedIn: (p: boolean) => void;
  currentTabIndex: number;
  setCurrentTabIndex: (p: number) => void;
}

const AdminHeader: FC<AdminHeaderProps> = ({
  setAdminLoggedIn,
  currentTabIndex,
  setCurrentTabIndex,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("bbt");
    setAdminLoggedIn(false);
  };
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">Admin Dashboard</h2>
      <nav>
        <ul className="flex gap-2 admin-nav">
          {["Schedules", "Notifications"].map((h, i) => (
            <li
              className={`${currentTabIndex === i ? "active" : ""}`}
              onClick={() => setCurrentTabIndex(i)}
              key={i}
            >
              {h}
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="bg-darkHighlight text-primary px-2 py-1 rounded-sm font-semibold"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default AdminHeader;
