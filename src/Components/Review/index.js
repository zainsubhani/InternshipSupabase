import React from "react";
import { FiGithub } from "react-icons/fi";
import Button1 from "../button/button1";
import Button2 from "../button/button2";

const Review = (props) => {
  return (
    <div>
      <div className="bg-[#232323] w-[100%] h-[200px] py-6 px-8">
        <p className="text-[white] font-semibold text-lg">{props.title}</p>
        <p className="text-[gray]  my-5 ">{props.subtitle}</p>
        <div className="flex items-center">
          
          <p className="pb-5">
            <img
              className="inline-block h-6 w-6 rounded-full"
              src={props.icon}
              alt=""
            />
            <span className="text-gray-300 font-semibold ml-2">{props.icondes}</span>
          </p>
        </div>
      </div>
      <div className="py-4 px-8 bg-[#282828] ">
        <div className="flex flex-row items-center">
          <div className="">
            <p className="text-[gray]">{props.subdes} </p>
          </div>
          <div className="pl-1">
            <span>
              <FiGithub color="gray" />
            </span>
          </div>
        </div>
        <div className="flex items-center mt-5">
         {props.showbutton && <div className="mr-2">
            <Button1 />
          </div>}
          <div  >
            <Button2 name={props.btext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
