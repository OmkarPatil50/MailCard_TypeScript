import { ReactNode } from "react";
import { MailStateType, MailActionType } from "../reducer/mailReducer.types";

export interface MailProviderProps {
  children: ReactNode;
}

export interface MailContextValue extends MailStateType {
  dispatch: React.Dispatch<MailActionType>;
}
