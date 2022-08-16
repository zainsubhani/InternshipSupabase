import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

const TwitterReview = (props) => {
  return (
    <div>
      <div className="h-auto p-7  w-content bg-[#232323] rounded-md">
        <div className="flex items-center">
          <div>
            <span className="inline-block relative">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span />
              <AiFillTwitterCircle
                size={20}
                className="absolute -top-2 bg-[white] rounded-full left-0 bottom-0 text-[#00ACEE] "
              />{" "}
            </span>
          </div>
          <div className="pl-2 text-[white] font-semibold">{props.name}</div>
        </div>
        <div className="pt-2">
          <p className="text-[#A0A0A0] text-base ">{props.des}</p>
        </div>
      </div>
    </div>
  );
};

export default TwitterReview;
