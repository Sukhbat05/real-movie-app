"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Movie } from "../../type";

import { CarouselCard } from "./CarouselCard";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoPlay({
      delay: 2500,
    }),
  ]);
  return (
    <div
      className="overflow-hidden cursor-pointer relative w-full m-auto "
      ref={emblaRef}
    >
      <div className="flex">
        {movies?.slice(0, 5).map((movie) => (
          <CarouselCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
