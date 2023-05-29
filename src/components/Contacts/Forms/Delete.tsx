import React from "react";
import ModalContent from "../../Core/ModalContent";
import { useModal } from "../../../hooks/useModal";
import { Contact } from "../../../types";
import { deleteContact } from "../../../redux/slices/contacts";
import { useDispatch } from "react-redux";

const Delete = ({ data }: { data: Contact }) => {
  const { toggle } = useModal();

  const dispatch = useDispatch();
  const handleDelete = () => {
    toggle();
    dispatch(deleteContact(data.id as string));
    console.log("Delete");
  };
  return (
    <ModalContent title="Delete Contact">
      <div className="flex justify-center">
        <p className="my-2">Are you sure you want to delete this contact?</p>
      </div>
      <div className="flex justify-center my-2">
        <button
          className="bg-red-500 text-white p-1 px-3 rounded-lg hover:bg-blue-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </ModalContent>
  );
};

export default Delete;
