import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from "../../utils/interface";

export const SearchBar: React.FC<SearchBarProps> = ({ query, handleSearch, message }) => {
  return (
    <div className="flex justify-end mt-2 mb-12">
      <label
        className="bg-white flex border py-2 px-2 rounded-full focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          placeholder={message}
          className="text-n-5 flex items-center pl-4 py-2 rounded-full flex-1 outline-none bg-white"
          value={query}
          onChange={handleSearch}
        />
        <button 
        style={{backgroundColor: '#8e44ad'}}
        className="w-auto px-4 py-2 fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">
          <div className="relative">
            <FaSearch />
          </div>
        </button>
      </label>
    </div>
  );
};
