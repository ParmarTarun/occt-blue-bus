import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactChildrenProps } from "../types";

type adminContextType = {
  adminLoggedIn: boolean;
  setAdminLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AdminContext = createContext<adminContextType>({
  adminLoggedIn: false,
  setAdminLoggedIn: () => {},
});

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }: ReactChildrenProps) {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  const value = {
    adminLoggedIn,
    setAdminLoggedIn,
  };
  return (
    <>
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
    </>
  );
}
