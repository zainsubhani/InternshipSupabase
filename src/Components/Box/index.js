import React from "react";
import '../Box/style.css'

const Box = (props) => {
  
  return (
    <div>
      <div className=" overflow-hidden  bg-[#18181A] ">
        <img
          src={props.pic}
          alt=""
          className="object-contain  w-[400px] h-[280px]   rounded-lg zoom"
        />
      </div>
      <div className="pt-10">
        <p className="text-[white] text-2xl font-semibold">{props.des}</p>
        <p className="pt-5 text-[gray] text-xl align-left font-semibold">
          {props.subdes}
        </p>
      </div>
    </div>
  );
};

export default Box;
