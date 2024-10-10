const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const textQuery = searchParams.get("textQuery")
  const url = "https://places.googleapis.com/v1/places:searchText"

  const body = {
    textQuery,
  };

  const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY!,
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.rating,places.photos",
      },
      body: JSON.stringify(body),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
  });
}