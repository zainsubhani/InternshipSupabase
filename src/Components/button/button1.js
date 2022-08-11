import React from 'react'
import { TiInfo } from "react-icons/ti";



const Button1 = () => {
  return (
    <div>
        <button class="bg-[#1374EF]  text-gray-200 text-xs py-1 px-2 rounded inline-flex items-center">
 <TiInfo/> <span className='pl-2' >Deploy</span>
</button>
    </div>
  )
}

export default Button1
