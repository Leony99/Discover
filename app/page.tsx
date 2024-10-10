'use client'

import { useState } from "react";

import Hero from "../components/Hero";
import PlaceList from "../components/PlaceList";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  const getPlaceList = async (value:string) => {
    setPlaceList([]);
    const res = await fetch("/api/places?textQuery=" + value);
    const data = await res.json();

    setPlaceList(data.places);
  }

  return (
    <div>
      <Hero getPlaceList={getPlaceList} />
      {placeList? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
