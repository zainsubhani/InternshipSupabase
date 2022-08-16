import React from "react";
import "../Box/style.css";

const Box = (props) => {
  return (
    <div>
      <div className=" overflow-hidden  bg-[#18181A] ">
        <img
          src={props.pic}
          alt=""
          className="object-contain  md:w-[400px] w-[350px] md:h-[280px] h-[250px]   rounded-lg zoom"
        />
      </div>
      <div className="pt-10">
        <p className="text-[white] md:text-2xl text-xl font-semibold">
          {props.des}
        </p>
        <p className="md:pt-5 pt-2 text-[gray] md:text-xl text-md align-left font-semibold">
          {props.subdes}
        </p>
      </div>
    </div>
  );
};

export default Box;
