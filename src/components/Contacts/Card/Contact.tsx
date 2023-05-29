import React from "react";
import { Contact as ContactType } from "../../../types";
import {
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaRegEdit,
  FaTrash,
} from "react-icons/fa";
import { useModal } from "../../../hooks/useModal";

import Edit from "../Forms/Edit";
import Delete from "../Forms/Delete";

const Contact = ({ contact }: { contact: ContactType }) => {
  const { toggle, setSelected } = useModal();
  return (
    <div className="flex  m-2 border p-2 py-4 items-center gap-3 bg-white relative">
      <img
        className="w-16 h-16  rounded-full"
        src={"/avatar.png"}
        alt={`${contact.name}'s avatar`}
      />
      <button
        onClick={() => {
          toggle();
          setSelected(<Delete data={contact} />);
        }}
        className="absolute -top-2 -right-2 w-8 h-8 bg-white grid place-items-center rounded-full shadow text-red-500 hover:bg-neutral-100 hover:scale-105 transition"
      >
        <FaTrash />
      </button>
      <button
        onClick={() => {
          toggle();
          setSelected(<Edit data={contact} />);
        }}
        className="absolute  -bottom-2 -left-2 w-8 h-8 border-red-500 grid place-items-center rounded-full shadow text-blue-500 bg-white hover:bg-neutral-100 hover:scale-105 transition"
      >
        <FaRegEdit />
      </button>
      <div>
        <h1 className="text-md text-blue-500 font-bold ">{contact.name}</h1>
        <h2 className="text-sm  mb-1 font-semibold underline">
          Contact Details
        </h2>
        <div className="text-sm">
          <div className="flex gap-3">
            <span>
              <FaPhoneAlt />
            </span>
            <span>{contact.phone}</span>
          </div>
          <div className="flex gap-3">
            <span>
              <FaEnvelope />
            </span>
            <span>{contact.email}</span>
          </div>
          <div className="flex gap-3">
            <span>
              <FaGlobe />
            </span>
            <span>{contact.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
