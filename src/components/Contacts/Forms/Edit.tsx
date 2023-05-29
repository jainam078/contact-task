import React, { useEffect, useState } from "react";
import ModalContent from "../../Core/ModalContent";
import Input from "../../Core/Input";
import { Contact } from "../../../types";
import { useModal } from "../../../hooks/useModal";
import { useDispatch } from "react-redux";
import { updateContact } from "../../../redux/slices/contacts";

const Edit = ({ data }: { data: Contact }) => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    website: "",
    phone: "",
  });

  useEffect(() => {
    setFormData(data);
  }, [data]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();
  const { toggle } = useModal();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggle();
    dispatch(
      updateContact({ id: data.id as string, updatedContact: formData })
    );
  };
  return (
    <ModalContent title="Edit Contact">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 my-2">
          <Input
            name="name"
            label="Name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="phone"
            label="Phone"
            value={formData.phone}
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
            value={formData.email}
          />
          <Input
            name="website"
            label="Website"
            placeholder="Website"
            onChange={handleChange}
            value={formData.website}
          />
        </div>

        <button className=" my-3 flex mx-auto bg-blue-500 p-1 px-3 rounded-lg text-white hover:bg-blue-600">
          Edit
        </button>
      </form>
    </ModalContent>
  );
};

export default Edit;
