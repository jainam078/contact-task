import React from "react";
import { Path } from "../../types";

import { FaAddressBook, FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
const paths: Path[] = [
  {
    name: "Contacts",
    link: "/",
    icon: <FaAddressBook />,
  },
  {
    name: "Charts",
    link: "/charts",
    icon: <FaChartArea />,
  },
];
const Sidebar = () => {
  return (
    <div className="fixed left-0 w-full md:w-[100px] bg-blue-700 shadow md:border-r md:h-screen md:py-40 px-3 z-[2]">
      <ul className="flex justify-center md:flex-col  gap-4 text-neutral-100">
        {paths.map((path, index) => {
          return (
            <Link to={path.link}>
              <div
                key={index}
                className="flex gap-1 p-2 flex-col items-center hover:bg-white hover:text-blue-500 rounded "
              >
                <span className="text-2xl">{path.icon}</span>
                <span className="text-xs">{path.name}</span>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
