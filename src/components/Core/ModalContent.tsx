import React, { ReactNode } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";

const ModalContent = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const { toggle } = useModal();
  return (
    <div className="left-0 absolute w-full h-full flex items-center justify-center">
      <div className="bg-white min-w-[280px] max-w-2xl p-3 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={toggle}>
            <FaRegTimesCircle size={30} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalContent;
