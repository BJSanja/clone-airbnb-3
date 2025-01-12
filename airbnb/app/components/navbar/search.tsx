"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className=" *
     border-[1px] w-full  py-2 rounded-full md:w-auto 

     shadow-sm 
     hover:shadow-md 
     transition 
     cursor-pointer

     "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold ">anywhere</div>
        <div
          className="hidden  sm:block text.sm font-semibold px-6 border-x-[1]
                flex-1 text-center "
        >
          {" "}
          any week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guest</div>
          <div className="p-2 text-white rounded-full bg-rose-500 ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
