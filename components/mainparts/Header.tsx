import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="pl-11 pr-4 py-1 text-sm bg-white text-slate-800 border border-slate-200 rounded-xl outline-none shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:shadow-[0_10px_15px_-3px_rgba(99,102,241,0.1),0_4px_6px_-2px_rgba(99,102,241,0.05)]">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="search"
          placeholder={`بحث...`}
          className="pl-11 pr-4 py-1 text-sm bg-white text-slate-800 border-none focus:outline-none max-w-100"
        />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} color="dodgerblue" />
        <img width={30} height={30} className="bg-gray-600 rounded-full mx-4" />
        <p className="hidden sm:flex">
          <FontAwesomeIcon icon={faAngleDown} color="dodgerblue" />
          مازن مصطفى
        </p>
      </div>
    </header>
  );
};

export default Header;
