import React from 'react'
interface Container {
  children: React.ReactNode,
  icon?: React.ReactNode,
  title?: string

}
const Container = ({ children, title, icon }: Container) => {
  return (
    <div className='block w-full overflow-x-auto flex-1 animate-slow'>
      <div className='flex justify-between mt-2 mb-3 pb-2 '>
        <p className='  text-xl font-bold'>{title}</p>
        {icon}
      </div>
      {children}
    </div>
  )
}

export default Container