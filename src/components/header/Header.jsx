import React from 'react'

const Header = ({ title }) => {
  return (
    <div className=' w-full flex flex-col bg-slate-50 items-center py-[70px]'>
      <div className='italic w-full m-8 text-3xl text-slate-700 
        text-center font-bold'>
        <p>{title}</p>
      </div>
      <span className="h-1 w-3/4 m-4 bg-teal-100 lg:w-1/2"></span>
    </div>
  )
}

export default Header
