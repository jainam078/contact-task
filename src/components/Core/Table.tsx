import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Contact } from "../../types";

// components

export default function Table({ data }: { data: Contact[] }) {
  const headings = Object.keys(data[0]);
  return (
    <div className="block w-full overflow-x-auto p-3 pr-5">
      {/* Projects table */}
      <table className="items-center w-full  border-collapse bg-white border">
        <thead className="bg-slate-50">
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                }
              >
                {heading}
              </th>
            ))}

            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.name}
              className="border-b even:bg-slate-50 hover:bg-neutral-50 "
            >
              {headings.map((heading) => (
                <td
                  key={item.name + heading}
                  className="border-t-0 px-6 align-middle border-l-0  w-fit border-r-0 text-xs whitespace-nowrap p-4"
                >
                  {/*@ts-ignore */}
                  {item[heading]}
                </td>
              ))}
              <td className="flex gap-3 py-3">
                <FaTrash size={20} />
                <FaEdit size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
