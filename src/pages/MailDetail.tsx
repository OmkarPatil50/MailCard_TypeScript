import React from "react";
import { useParams } from "react-router-dom";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { Mail } from "../types";

export default function MailDetail() {
  const { mailId } = useParams();

  const { data } = useMail();

  function getMailDetails(mails: Mail[], mailId?: string): Mail | undefined {
    return mails.find((mail) => mail.mId === mailId);
  }

  const mail = getMailDetails(data, mailId);

  if (!mail) {
    return <p>Mail not found</p>;
  }

  return (
    <>
      <MailCard {...mail} />
    </>
  );
}
