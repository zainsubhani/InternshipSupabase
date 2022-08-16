import React from "react";
import { FiGithub } from "react-icons/fi";
const Supabase = () => {
  return (
    <div className="w-min-screen h-[40vh] text-[white] border-t-2 border-gray-500 mt-10">
      <div className="flex items-center justify-center h-full flex-col">
        <div className="px-5">
          <p className="lg:text-3xl md:text-2xl text-2xl sm:text-center text-center font-semibold">
            What can you build with supabase?
          </p>
          <p className="text-[gray] pt-5 text-md align-right sm:text-center text-center  font-semibold">
            There are many example apps and starter projects to get going
          </p>
        </div>
        <div className="flex pt-10">
          <div>
            <button class="bg-[#343434] text-md hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
              <span className="pl-2">View all examples</span>
            </button>
          </div>
          <div className="pl-2">
            <button class="bg-[#343434] text-md hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
              <FiGithub color="gray" />{" "}
              <span className="pl-2">Offical github library</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supabase;
