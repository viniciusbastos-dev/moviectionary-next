import React from "react";
import { Media } from "@/@types/types";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";

async function getData(): Promise<Media[]> {
  const res = await fetch(
    `https://moviectionary.vercel.app/api/trending/all/day?lang=pt-BR`,
    { next: { revalidate: 1800 } }
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  const topTrending = data[0];
  return (
    <>
      <Hero data={topTrending} />
      <Carousel data={data} />
    </>
  );
}
