import React from 'react'

const NotFound = () => {
  return (
    <div className='shadow-sm  overflow-hidden min-h-[70vh]  z-0 bg-center bg-cover'style={{backgroundImage:'url(/wallpaper/walpaper.jpg)'}}>
         <div className=' flex items-center justify-center bg-black bg-opacity-80 min-h-[100vh]'>
             <div className='text-center'>
             <p className='text-white text-xl'>Opps! the page your are looking for not available</p>
             <p className=' text-white text-8xl font-bold mt-3'>404 Page Not Found</p> 
             </div>
            
         </div>
    </div>
  )
}

export default NotFound