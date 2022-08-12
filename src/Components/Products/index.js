import React from 'react'



const Products = (props) => {
  return (
    <div className='h-auto' >
        <div className='flex items-center p-20 ' >
            <div className='w-7 h-7 px-1 py-1 bg-[white]  text-center rounded-md' >
              {props.icon}

            </div>
        
            <div className='pl-2 text-white font-semibold text-lg' >
                {props.icondes}

            </div>
                    </div>
        <div>
                {props.des}
            </div>

    </div>
  )
}

export default Products