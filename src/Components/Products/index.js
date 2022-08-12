import React from 'react'
import { IoIosArrowForward } from "react-icons/io";




const Products = (props) => {
  return (
    <div className='h-content p-20 ' >
        <div className='flex items-center ' >
            <div className='w-7 h-7 px-1 py-1 bg-[white]  text-center rounded-md' >
              {props.icon}

            </div>
        
            <div className='pl-2 text-white font-semibold text-lg' >
                {props.icondes}

            </div>
                    </div>
        <div className='text-[gray] pt-5' >
                {props.des}
            </div>
            <div className='flex items-center text-[gray]'>
<div><button>learn more </button>
</div>
<div>
  <span><IoIosArrowForward/></span>
</div>
            </div>
            
    </div>
  )
}

export default Products