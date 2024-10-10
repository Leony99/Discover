import React, { useEffect, useState } from 'react'

function SideDrawer({ place, closeDrawer }:any) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!place.photos || place.photos.length === 0) {
        setPhotoUrl(null);
        return;
      }
      const photoName = place.photos[0].name;

      try {
        const res = await fetch(`/api/places-photos?photoName=${photoName}`);
        if (res.ok) {
          const blob = await res.blob();
          const imageUrl = URL.createObjectURL(blob);
          setPhotoUrl(imageUrl);
        } else {
          console.error('Failed to fetch photo');
        }
      } catch (error) {
        console.error('Error fetching photo', error);
      }
    };

    fetchPhoto();
  }, [place]);

  return (
    <div className='flex flex-col h-screen w-screen sm:w-[400px] bg-white shadow-md p-5 sticky'>
      <button onClick={() => closeDrawer()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>
      <div>
        <h2 className="line-clamp-2 text-[23px] font-semibold mb-3">{place.displayName.text}</h2>
        <img src={photoUrl? photoUrl : "/placeholder.png"} alt="locationImage" 
            className='w-full h-[170px] rounded-xl'/>
      </div>
      <div className='flex gap-2 mt-3 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-8 h-8 text-[--logo-color]">
        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
        </svg>
        <h2 className='text-[16px] text-gray-400 line-clamp-2'>{place.formattedAddress}</h2>
      </div>
      <div className='flex gap-2 mt-3 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[--logo-color]">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        <h2 className='text-[16px] line-clamp-2 text-gray-400 tracking-wider'>{place.rating}</h2>
      </div>
      <div className="flex-grow mt-3">
        <iframe
          className='rounded-xl'
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
            + "&q=" + place.formattedAddress}>
        </iframe>
      </div>
    </div>
  )
}

export default SideDrawer