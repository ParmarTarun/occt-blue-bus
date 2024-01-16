import React, { useEffect, useState } from "react";
import { loginAdmin, validateToken } from "../api/admin";
import { useAdmin } from "../context/admin";
import NotificationForm from "../components/NotificationForm";
import AdminLoginForm from "../components/AdminLoginForm";
import AdminHeader from "../components/AdminHeader";
import ScheduleEditor from "../components/ScheduleEditor";

const adminTabContents = [<ScheduleEditor />, <NotificationForm />];

const AdminPage = () => {
  const { adminLoggedIn, setAdminLoggedIn } = useAdmin();
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const checkForAdmin = () => {
    const token = localStorage.getItem("bbt");
    if (!token) return;
    setLoading(true);
    validateToken(token)
      .then(() => setAdminLoggedIn(true))
      .catch(() => setAdminLoggedIn(false))
      .finally(() => setLoading(false));
  };

  useEffect(checkForAdmin, []);

  if (loading)
    return (
      <div className="w-100">
        <h2 className="w-min m-auto">Loading....</h2>
      </div>
    );
  if (!adminLoggedIn)
    return <AdminLoginForm setAdminLoggedIn={setAdminLoggedIn} />;
  return (
    <div>
      <AdminHeader
        setAdminLoggedIn={setAdminLoggedIn}
        setCurrentTabIndex={setCurrentTabIndex}
        currentTabIndex={currentTabIndex}
      />
      <div className="mt-4">{adminTabContents[currentTabIndex]}</div>
    </div>
  );
};

export default AdminPage;
