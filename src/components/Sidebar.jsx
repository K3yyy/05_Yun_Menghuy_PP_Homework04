// In Sidebar.jsx
import React from "react";
import { sidebarList } from "../data/sidebarList";
import { LogOutIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="p-4 bg-white shadow-xl w-[310px] min-h-screen flex flex-col">
      <div className="flex gap-3 items-center p-4 border-b border-gray-200">
        <img
          src="/images/HRD Logo New.png"
          alt="hrd logo"
          width={50}
          height={50}
        />
        <h2 className="text-md font-semibold leading-tight">
          Korea Software <br /> HRD Center
        </h2>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="space-y-3">
          {sidebarList?.map((option) => (
            <div
              key={option?.id}
              className={`${
                option?.id === 1 && "bg-gray-100"
              } flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200`}
            >
              <option.icon className="w-5 h-5 text-gray-700" />
              <p className="text-base">{option.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200">
          <LogOutIcon className="w-5 h-5 text-gray-700" />
          <p className="text-base">Logout</p>
        </div>
      </div>
    </div>
  );
}
