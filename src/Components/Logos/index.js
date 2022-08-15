import React from "react";
import LGO1 from "../../assets/images/LGO1.png";
import LGO2 from "../../assets/images/LGO2.png";
import LGO3 from "../../assets/images/LGO3.png";
import LGO4 from "../../assets/images/LGO4.png";
const LOGOS = () => {
  return (
    <div className=" px-20 ">
      <p className="text-[#606060] text-xs font-medium">backend by</p>
      <div className="flex pt-3">
        <div>
          <img src={LGO1} alt="" className="h-8 pr-5 sm:h-8 md:pr-10" />
        </div>
        <div>
          <img src={LGO2} alt="" className="h-8 pr-5 sm:h-8 md:pr-10" />
        </div>
        <div>
          <img src={LGO3} alt="" className="h-8 pr-5 sm:h-8 md:pr-10" />
        </div>
        <div>
          <img src={LGO4} alt="" className="h-8 pr-5 sm:h-8 md:pr-10" />
        </div>
      </div>
    </div>
  );
};

export default LOGOS;
