import React from 'react'
import { BiMessageRounded } from "react-icons/bi";

const Community = () => {
  return (
    <div className='w-min-screen h-[40vh] text-[white] border-t-2 border-gray-500 ' >
        <div className='flex items-center justify-center h-full flex-col' >
            <div>
                <p className='text-3xl text-center font-semibold' >Join the community</p>
                <p className='text-[gray] pt-5 text-md align-right font-semibold'>Supported by a network of early advocates, contributors, and champions.</p>
            </div>
            <div className='flex pt-10' >
                <div>
                    
                   <button class="bg-[#343434] text-md hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
    <span className='pr-2 ' >GitHub discussions</span> <BiMessageRounded color="gray" />
 

</button>

                </div>
                <div className='pl-2' >
                   <button class="bg-[#343434] text-md hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
    <span className='pr-2 ' >Discord</span> <BiMessageRounded color="gray" />
 

</button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Community