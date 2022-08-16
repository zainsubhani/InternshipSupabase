import React from "react";
import LGO1 from "../../assets/images/LGO1.png";
import LGO2 from "../../assets/images/LGO2.png";
import LGO3 from "../../assets/images/LGO3.png";
import LGO4 from "../../assets/images/LGO4.png";
const LOGOS = () => {
  return (
    <div className="pt-10">
      <p className="text-[#606060] text-xs font-medium">backend by</p>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-10 pt-3">
        <div className="flex ">
          <img src={LGO1} alt="" className="h-8  pr-3   " />

          <img src={LGO2} alt="" className="h-6 w-[100px]  " />
        </div>
        <div>
          <img src={LGO3} alt="" className="h-6 w-[100px]  " />
        </div>
        <div>
          <img src={LGO4} alt="" className="h6  w-[100px]   " />
        </div>
      </div>
    </div>
  );
};

export default LOGOS;
