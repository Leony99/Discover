import React, { useEffect, useState } from 'react'

function PlaceCard({ place }: any) {
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
        <div className='flex flex-col w-full border-[1px] rounded-xl h-full shadow-md cursor-pointer'>
            <img src={photoUrl? photoUrl : "/placeholder.png"} alt="locationImage" 
            className='w-full h-[200px] object-cover rounded-t-xl'/>
            <div className='p-2 flex flex-col gap-1 flex-grow justify-between'>
                <h2 className="line-clamp-2">{place.displayName.text}</h2>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-[--logo-color]">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='text-[12px] line-clamp-2 text-gray-400'>{place.formattedAddress}</h2>
                </div>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[--logo-color]">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='text-[12px] line-clamp-2 text-gray-400 tracking-wider'>{place.rating}</h2>
                </div>
            </div>
        </div>
    )
}

export default PlaceCard