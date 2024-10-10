import React, { useState } from 'react'

import PlaceCard from './PlaceCard'
import SideDrawer from './SideDrawer'
import Skelton from './Skelton';

function PlaceList({ placeList }:any) {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const closeDrawer = () => {
    setSelectedPlace(null);
  }
  
  return (
    <div className='px-[10px] md:px-[120px] mt-10 relative z-10 mb-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {placeList.map((place:any, index:number) => (
            <div key={index} className='hover:scale-105 transition-all' onClick={() => setSelectedPlace(place)}>
              <PlaceCard place={place}/>
            </div>
          ))}
        </div>
        {placeList.length == 0 ? 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Skelton key={index} />
          ))}
        </div> : null}
        {selectedPlace?
        <div className='fixed top-0 right-0'>
          <SideDrawer place={selectedPlace} closeDrawer={closeDrawer} />
        </div> : null}
    </div>
  )
}

export default PlaceList