import React from 'react'
import { BiBookOpen } from "react-icons/bi";

const Weekend = () => {
  return (
    <div>
        <div>
        <p className='text-5xl font-semibold text-[white]' >Build in a weekend.</p>
        <p className='text-[#3FCF8E] text-5xl font-semibold' >Scale to millions.</p>
        <p className='pt-5 text-[gray] text-xl font-semibold' >Supabase is an open source Firebase alternative. Start your project with a Postgres Database, Authentication, instant APIs, Realtime subscriptions and Storage.</p>  </div>
    <div className='flex pt-10' >
                <div>
                    
                   <button class="bg-[#3FCF8E] text-[white] text-md hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
    <span className='pr-2 ' >Start your project</span> 
 

</button>

                </div>
                <div className='pl-2' >
                   <button class="bg-[#343434] text-md text-[white] hover:bg-gray-400  shadow  border border-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
   <BiBookOpen color="white" /> <span className='pl-2 ' >Documentation</span> 
 

</button>

                </div>
            </div>
    </div>

  )
}

export default Weekend