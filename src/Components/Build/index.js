import React from 'react'

const Build = () => {
  return (
    <div className=' max-w-full bg-[#1C1C1C]  mt-10 border-y-2 border-[gray] h-[60vh] 	' >
        <div className='flex items-center justify-center h-3/6 mt-10	'>
        <div className='lg:text-3xl font-semibold text-[white]  inline-flex sm:flex flex-col ' >
        
            <div className='text-[gray]' >
            <p>Build in a weekend,</p>
        </div>
        <div className='pl-3'  >
            <p>scale to millions</p>
        </div>
        
        </div>
        </div>
        <div className='text-center'  >
            <button class="bg-[#3FCF8E] hover:[#7FDFB3] text-[white] font-bold py-2 px-2 rounded inline-flex items-center">
  Start your project
</button>
        </div>
    
    </div>
  )
}

export default Build