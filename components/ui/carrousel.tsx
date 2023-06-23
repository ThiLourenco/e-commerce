"use client"

import dynamic from "next/dynamic";
import { BearSlideCard } from "bear-react-carousel";

import "bear-react-carousel/dist/index.css";

const BearCarousel = dynamic(
  () => import("bear-react-carousel").then((mod) => mod), {ssr: false}
);

const Carousel = () => {
  const images = [
    { id: 1, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
    { id: 2, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
    { id: 3, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" }
  ];

  const bearSlideItemData = images.map((row) => {
    return {
      key: row.id,
      children: <BearSlideCard bgUrl={row.imageUrl} />
    };
  });

  return <BearCarousel data={bearSlideItemData} height="300px" />;
}

export default Carousel;