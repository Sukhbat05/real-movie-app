"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Movie } from "../../type";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { FaStar } from "react-icons/fa";
import { DialogDemo } from "./VideoDialog";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoPlay({
      delay: 2000,
    }),
  ]);
  console.log("movies", movies);
  return (
    <div className="overflow-hidden cursor-pointer relative" ref={emblaRef}>
      <div className="flex">
        {movies?.slice(0, 5).map((movie) => (
          <div
            key={movie?.id}
            className="flex-full relative flex-[0_0_100%] min-w-0 px-2"
          >
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080}
              priority={true}
            />
            <div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full p-10 space-y-5 text-white">
              <p className="h-6 text-3xl">Now Playing:</p>
              <h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
              <div className=" flex items-center gap-2  m-2 text-foreground">
                <FaStar color="orange" />
                <span className="text-2xl text-foreground ">
                  {movie?.vote_average}/10
                </span>
              </div>
              <p className="max-w-xl line-clamp-3 text-[20px]">
                {movie?.overview}
              </p>
              <div>
                <DialogDemo />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
