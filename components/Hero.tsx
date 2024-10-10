import React, { useState } from 'react'

import category from '../data/category'

function Hero({ getPlaceList }:any) {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div>
            <div className='text-center mt-[50px]'>
                <img src="/city.jpg" alt="city" height={200} 
                className='w-full absolute mt-[50px] z-0 opacity-40' />
                <div className='relative z-10'>
                    <h2 className='text-[55px] text-[--logo-color] tracking-widest'>
                        DISCOVER
                    </h2>
                    <h2 className='text-[18px]'>Discover the best places to explore</h2>
                    <div className='mt-5 flex gap-2 items-center justify-center'>
                        <input type="text" placeholder='Search anything'
                        onChange={(e) => setSearchInput(e.target.value)}
                        className='bg-white p-3 px-5 w-[36%] border-[1px] rounded-full shadow-sm outline-[--logo-color]' />
                        <button 
                        onClick={() => getPlaceList(searchInput)}
                        className='bg-[--logo-color] rounded-full p-3 shadow-md cursor-pointer hover:scale-110 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className='w-6 h-6 text-white'>
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='mt-5 flex flex-col justify-center items-center'>
                        <h2>Or browse category</h2>
                        <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center mt-3 gap-5'>
                            {category.map((item, index) => (
                                <div key={index} 
                                className='border-[1px] w-[60px] p-4 bg-white rounded-full flex justify-center items-center
                                border-[--logo-color] hover:scale-110 cursor-pointer transition-all'
                                onClick={() => getPlaceList(item.name)}>
                                    <img src={item.icon} alt={item.name} width={20} height={20} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero