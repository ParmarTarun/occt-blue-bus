import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactChildrenProps, routeType } from "../types";

type routeContextType = {
  routes: routeType;
  setRoutes: Dispatch<SetStateAction<routeType>>;
};

const initialValues: routeContextType = {
  routes: {},
  setRoutes: () => {},
};

const RouteContext = createContext<routeContextType>(initialValues);

export function useRoutes() {
  return useContext(RouteContext);
}

export function RoutesProvider({ children }: ReactChildrenProps) {
  const [routes, setRoutes] = useState(initialValues.routes);

  const value = { routes, setRoutes };
  return (
    <>
      <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
    </>
  );
}
