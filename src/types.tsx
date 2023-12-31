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

export type feedbackType = {
  message: string;
  success: boolean;
};
