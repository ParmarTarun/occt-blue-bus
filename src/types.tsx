import { ReactNode } from "react";

export type routeDataType = {
  [key: string]: string;
};

export type busDataType = {
  [key: string]: string[][];
};

export type ReactChildrenProps = {
  children: ReactNode;
};

export type nextBusesType = {
  [key: string]: string[];
};

export type notificationType = {
  id: string;
  notiNumber: number;
  message: string;
  createdAt: string;
};

// {
//   WS_OUT: ["12:45 PM", "12:45 PM", "12:45 PM"],
//   DCL_OUT: ["12:45 PM", "12:45 PM", "12:45 PM"],
// }
