import { MailStateType, MailActionType } from "./mailReducer.types";

export const mailReducer = (
  state: MailStateType,
  action: MailActionType
): MailStateType => {
  switch (action.type) {
    case "STAR_MAIL":
      return {
        ...state,
        data: state.data.map((mail) =>
          mail.mId === action.payload
            ? { ...mail, isStarred: !mail.isStarred }
            : mail
        )
      };
    case "DELETE_MAIL":
      return {
        ...state,
        data: state.data.filter((mail) => mail.mId !== action.payload.mId),
        trash: [...state.trash, action.payload]
      };
    case "DELETE_FOREVER":
      return {
        ...state,
        trash: state.trash.filter((mail) => mail.mId !== action.payload.mId)
      };
    case "UNREAD_MAIL":
      return {
        ...state,
        data: state.data.map((mail) =>
          mail.mId === action.payload ? { ...mail, unread: !mail.unread } : mail
        )
      };
    case "MARK_AS_READ":
      return {
        ...state,
        data: state.data.map((mail) =>
          mail.mId === action.payload ? { ...mail, unread: false } : mail
        )
      };
    case "ADD_TO_SPAM":
      return {
        ...state,
        data: state.data.filter((mail) => mail.mId !== action.payload.mId),
        spam: [...state.spam, action.payload]
      };

    case "REMOVE_FROM_SPAM":
      return {
        ...state,
        data: [...state.data, action.payload],
        spam: state.spam.filter((mail) => mail.mId !== action.payload.mId)
      };

    case "TOGGLE_UNREAD":
      return (state = {
        ...state,
        showUnread: !state.showUnread
      });

    case "TOGGLE_STARRED":
      return (state = {
        ...state,
        showStarred: !state.showStarred
      });
    default:
      return state;
  }
};
