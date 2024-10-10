'use client'

import { useState } from "react";

import Hero from "../components/Hero";
import PlaceList from "../components/PlaceList";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPlaceList = async (value:string) => {
    setIsLoading(true);
    setPlaceList([]);
    const res = await fetch("/api/places?textQuery=" + value);
    const data = await res.json();
    setPlaceList(data.places);
    setIsLoading(false);
  }

  return (
    <div>
      <Hero getPlaceList={getPlaceList} />
      {placeList? <PlaceList isLoading={isLoading} placeList={placeList} /> : null}
    </div>
  );
}
