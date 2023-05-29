import React, { FormEvent, useState } from "react";
import ModalContent from "../../Core/ModalContent";
import Input from "../../Core/Input";
import { Contact } from "../../../types";
import { useModal } from "../../../hooks/useModal";
import { addContact } from "../../../redux/slices/contacts";
import { useDispatch } from "react-redux";

const Add = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    website: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { toggle } = useModal();
  const handleSub = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact(formData));
    toggle();
  };
  return (
    <ModalContent title="Add Contact">
      <form onSubmit={handleSub}>
        <div className="flex gap-3 my-2">
          <Input
            name="name"
            label="Name"
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            name="phone"
            label="Phone"
            placeholder="Phone"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3 my-2">
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="website"
            label="Website"
            placeholder="Website"
            onChange={handleChange}
          />
        </div>

        <button className=" my-3 flex mx-auto bg-blue-500 p-1 px-3 rounded-lg text-white hover:bg-blue-600">
          Add
        </button>
      </form>
    </ModalContent>
  );
};

export default Add;
