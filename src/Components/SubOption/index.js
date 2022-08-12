import React from 'react'
import Box from '../../assets/images/case-study-monitoro.png'
import Search from '../../assets/images/search.PNG'
const Latest = () => {

  return (
    <div className='border-[0.3px]	 border-gray-800' >
        <div className='  p-5 ' >
        <p  className='text-[gray] font-semibold' >Latest case studies</p>
        </div>
    <div className=' ml-5 pr-20 ' >
        <div className='flex items-center border-[1px] border-gray-800 w-content p-5 hover:bg-[black] ' >
            <div className='pr-5 flex flex-col' >
                <div>
                <img src={Box} alt="" className='w-[100px] h-[80px] ' />
</div>
            </div>
            <div className='text-sm px-5' >
                <p className='text-[white] text-md font-semibold' >A web crawler handling millions of API requests.</p>
                <p className='text-[gray] text-md font-semibold' >See how Monitoro built an automated a scraping plaform using Supabase.</p>
            </div>
        </div>
    </div>
    <div className='pr-20 ml-5 mt-5 mb-10 ' >
        <div className='flex items-center border-[1px] border-gray-800 w-content p-5 hover:bg-[black]  ' >
            <div className='pr-5 flex flex-col' >
                <div>
                <img src={Search} alt="" className='  w-[100px] h-[80px] ' />
</div>
            </div>
            <div className='text-sm px-5' >
                <p className='text-[white] text-md font-semibold' >Counter-fraud watchlist for the fintech industry.</p>
                <p className='text-[gray] text-md font-semibold' >See how Xendit use Supabase to build a full-text search engine.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Latest