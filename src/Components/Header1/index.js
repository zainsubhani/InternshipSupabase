import React from 'react'
import {MdKeyboardArrowRight  } from "react-icons/md";



const Header1 = () => {
  return (
    <div>
        <div className='w-min-screen font-semibold text-[white] p-3 bg-[#41B67E]' >
            <div className='flex items-center justify-center' >
                <div className='pr-2' >
                    Launch Week 5
                </div >
                <div className='pl-2 border-l-2 border-[white] flex items-center' >
                   <div>Get your ticket now </div>
                    <div className='pl-2'>
                    <span><MdKeyboardArrowRight color='gray'/></span>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header1