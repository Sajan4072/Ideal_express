import Link from 'next/link'
import React from 'react'

const track = () => {
  return (
     <Track />
  )
}

export default track

const  Track=()=>{
    return(
        <div className='shadow-sm  overflow-hidden min-h-[20vh]  z-0 bg-center bg-cover'style={{backgroundImage:'url(/walpaper/walpaper.jpg)'}}>
         <div className='text-white pt-32  px-2 md:px-24 min-h-[15vh]  bg-black bg-opacity-60 w-full '>
          <div className='grid grid-cols-2   w-full'>
                    <div className='justify-self-start'>
                        <p className='text-xl font-bold'>Ideal Tracking</p>
                    </div>
                 </div> 
          </div>
        </div>
    )
}
