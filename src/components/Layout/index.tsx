import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Modal from "../Core/Modal";
import { useModal } from "../../hooks/useModal";

const Layout = ({ children }: { children: ReactNode }) => {
  const { open, selected, toggle } = useModal();
  return (
    <div>
      {/* Compare this snippet from src/components/Layout/index.tsx: */}
      <Sidebar />
      <div className="pt-[60px] md:pt-0 md:pl-[100px] md:px-6 bg-slate-50 ">
        {children}
      </div>
      <Footer />
      <Modal open={open} data={selected} toggle={toggle} />
    </div>
  );
};

export default Layout;
