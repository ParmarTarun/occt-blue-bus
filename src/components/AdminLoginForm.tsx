import React, { FC, useState } from "react";
import { loginAdmin } from "../api/admin";

interface AdminLoginFormProps {
  setAdminLoggedIn: (p: boolean) => void;
}

const AdminLoginForm: FC<AdminLoginFormProps> = ({ setAdminLoggedIn }) => {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    loginAdmin(secret)
      .then(({ token }) => {
        localStorage.setItem("bbt", token);
        setAdminLoggedIn(true);
        setSecret("");
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="sm:w-1/2 w-full m-auto text-center bg-primary text-secondary py-8 px-4">
      <h3 className="text-3xl">ADMIN LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="basic-input-group mt-4">
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            required
          />
        </div>
        <p className="text-red mb-2 font-semibold">{error}</p>
        {loading ? (
          <p>Validating...</p>
        ) : (
          <button
            className="border border-secondary bg-transparent text-secondary px-2 py-1 rounded-sm text-lg"
            type="submit"
          >
            SUBMIT
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminLoginForm;
