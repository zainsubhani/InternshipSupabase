import React,{useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header1 = () => {
    const [show,setShow]=useState(true)
  return (
    <>
    {show ?   <div className="w-min-screen">
      <div className="flex  font-semibold text-[white] p-3 bg-[#41B67E]">
        <div className=" w-[100%]  flex items-center justify-center">
          <div className="pr-2">Launch Week 5</div>
          <div className="pl-2 border-l-2 border-[white] flex items-center">
            <div>Get your ticket now </div>
            <div className="pl-2">
              <span>
                <MdKeyboardArrowRight color="gray" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[10%]">
          <div onClick={()=>setShow(false)}>
            <p className="text-[gray]">x</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>:""}   {/*else part  */}
  
    </>

  );
};

export default Header1;
