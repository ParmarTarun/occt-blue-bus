import React, { useEffect, useState } from "react";
import { loginAdmin, validateToken } from "../api/admin";
import { useAdmin } from "../context/admin";
import NotificationForm from "../components/NotificationForm";

const AdminPage = () => {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { adminLoggedIn, setAdminLoggedIn } = useAdmin();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    loginAdmin(secret)
      .then(({ token }) => {
        localStorage.setItem("bbt", token);
        setAdminLoggedIn(true);
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  const checkForAdmin = () => {
    const token = localStorage.getItem("bbt");
    if (!token) return;
    validateToken(token)
      .then(() => setAdminLoggedIn(true))
      .catch(() => setAdminLoggedIn(false));
  };

  const handleLogout = () => {
    localStorage.removeItem("bbt");
    setAdminLoggedIn(false);
  };

  useEffect(checkForAdmin, []);

  if (adminLoggedIn)
    return (
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Admin Dashboard</h2>
          <button
            className="bg-darkHighlight text-primary px-2 py-1 rounded-sm font-semibold"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        <div className="grid grid-cols-3 pt-4">
          <div className="col-span-1">
            <NotificationForm />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="w-1/2 m-auto text-center bg-primary text-secondary py-8 px-4">
        <h3 className="text-3xl">ADMIN LOGIN</h3>
        <div className="basic-input-group mt-4">
          <input
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <p className="text-red mb-2 font-semibold">{error}</p>
        {loading ? (
          <p>Validating...</p>
        ) : (
          <button
            className="border border-secondary bg-transparent text-secondary px-2 py-1 rounded-sm text-lg"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
