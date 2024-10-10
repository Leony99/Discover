import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-3 shadow-sm px-5'>
        <div className='flex gap-3 items-center cursor-pointer'>
            <img src="/logo.png" alt="logo" width={50} height={50} />
            <h2 className='text-[25px] text-[--logo-color] 
            tracking-widest font-semibold'>DISCOVER</h2>
        </div>
        <ul className='flex gap-8 items-center'>
            <li className='text-[18px] hover:text-[--logo-color] cursor-pointer'>Home</li>
            <li className='text-[18px] hover:text-[--logo-color] cursor-pointer'>About us</li>
            <li className='text-[18px] hover:text-[--logo-color] cursor-pointer'>Contact us</li>
        </ul>
    </div>
  )
}

export default Header