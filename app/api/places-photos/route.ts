const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function GET(request: Request) {
    const urlParams = new URL(request.url).searchParams;
    const photoName = urlParams.get('photoName');
    const photoheight = 400;
    const url = `https://places.googleapis.com/v1/${photoName}/media?key=${API_KEY}&maxHeightPx=${photoheight}`;

    if (!photoName) {
        return new Response('Photo name is required', { status: 400 });
    }

    const res = await fetch(url, {
        method: 'GET',
    });

    if (!res.ok) {
        return new Response('Error fetching the photo', { status: res.status });
    }

    const imageBuffer = await res.arrayBuffer();

    return new Response(imageBuffer, {
        headers: { 'Content-Type': 'image/jpeg' },
    });
}