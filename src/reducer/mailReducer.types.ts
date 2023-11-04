import { Mail } from "../types";

export type MailStateType = {
  data: Mail[];
  showStarred: boolean;
  showUnread: boolean;
  spam: Mail[];
  trash: Mail[];
};

export type MailActionType =
  | {
      type: "STAR_MAIL";
      payload: string;
    }
  | {
      type: "DELETE_MAIL";
      payload: Mail;
    }
  | {
      type: "DELETE_FOREVER";
      payload: Mail;
    }
  | {
      type: "UNREAD_MAIL";
      payload: string;
    }
  | {
      type: "MARK_AS_READ";
      payload: string;
    }
  | {
      type: "ADD_TO_SPAM";
      payload: Mail;
    }
  | {
      type: "REMOVE_FROM_SPAM";
      payload: Mail;
    }
  | {
      type: "TOGGLE_UNREAD";
    }
  | {
      type: "TOGGLE_STARRED";
    };
