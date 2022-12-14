import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";



const Button2 = ({name}) => {

  return (
    <div >
        <button class="bg-[gray]-300 text-xs hover:bg-gray-400  shadow text-gray-300 border border-gray-700 font-bold py-1 px-2 rounded inline-flex items-center">
  <span className='pr-2' >{name}</span>
  
 <FiArrowUpRight size={15} color="gray"/>
</button>
    </div>
  )
}

export default Button2
