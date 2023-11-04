import React from "react";
import { Link } from "react-router-dom";
import { useMail } from "../context/MailProvider";
import { Mail } from "../types";

type MailCardProps = Mail & {
  isInSpam?: boolean;
  isInTrash?: boolean;
  noDetail?: boolean;
};

export function MailCard({
  mId,
  subject,
  content,
  isStarred,
  unread,
  noDetail,
  isInSpam,
  isInTrash
}: MailCardProps) {
  const { dispatch } = useMail();

  return (
    <li
      className="mail-list-item"
      style={{ backgroundColor: unread ? "#F2F6FC" : "#fff" }}
    >
      <div>
        <div className="mail-header">
          <h2>Subject: {subject} </h2>
          <button
            onClick={() =>
              dispatch({
                type: "STAR_MAIL",
                payload: mId
              })
            }
          >
            {isStarred ? "Unstar" : "Star"}
          </button>
        </div>
        <p>{content}</p>
        <div className="mail-actions">
          {noDetail && (
            <Link
              to={`/mail/${mId}`}
              onClick={() => dispatch({ type: "MARK_AS_READ", payload: mId })}
            >
              View Details{" "}
            </Link>
          )}
          <div>
            {isInTrash ? (
              <button
                className="delete"
                onClick={() =>
                  dispatch({
                    type: "DELETE_FOREVER",
                    payload: { mId, subject, content, isStarred, unread }
                  })
                }
              >
                Delete forever
              </button>
            ) : (
              <button
                className="delete"
                onClick={() =>
                  dispatch({
                    type: "DELETE_MAIL",
                    payload: { mId, subject, content, isStarred, unread }
                  })
                }
              >
                Delete
              </button>
            )}
            <button
              className="unread"
              onClick={() => dispatch({ type: "UNREAD_MAIL", payload: mId })}
            >
              Mark as {unread ? "Read" : "Unread"}
            </button>
            {isInSpam ? (
              <button
                className="spam"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_SPAM",
                    payload: { mId, subject, content, isStarred, unread }
                  })
                }
              >
                Move to Inbox
              </button>
            ) : (
              <button
                className="spam"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_SPAM",
                    payload: { mId, subject, content, isStarred, unread }
                  })
                }
              >
                Report spam
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
