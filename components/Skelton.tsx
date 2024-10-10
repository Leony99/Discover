import React from 'react'

function Skelton() {
  return (
    <div>
        <div className='shadow-md border-[1px] rounded-xl h-full max-w-sm w-full mx-auto'>
            <div className='animate-pulse flex flex-col'>
                <div className='rounded-t-xl bg-slate-400 h-[200px] w-full object-cover'></div>
                <div className='flex-1 space-y-6 space-x-0 p-2'>
                    <div className='h-2 bg-slate-200 rounded'></div>
                    <div className='space-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-slate-200 rounded col-span-2'></div>
                            <div className='h-2 bg-slate-200 rounded col-span-1'></div>
                        </div>
                        <div className='h-2 bg-slate-200 rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skelton