"use client";

import { useEffect, useState } from "react";
import { Movie } from "../../type";
import { getMovieVideos } from "@/lib/getMovies";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { FaStar } from "react-icons/fa";
import { YouTubeDialog } from "./YouTubeDialog";

type trailerType = {
  key: string;
};

export const CarouselCard = ({ movie }: { movie: Movie }) => {
  const [trailer, setTrailer] = useState<trailerType>({ key: "" });
  useEffect(() => {
    const getMovieTrailer = async () => {
      console.log("id", movie.id);
      const videos: any = await getMovieVideos(movie.id);
      console.log("VIDEOS", videos);
      const trailer: trailerType = videos.find(
        (v: any) => v.site === "YouTube" && v.type === "Trailer"
      );
      console.log("Trailer", trailer);
      setTrailer(trailer);
    };
    getMovieTrailer();
  }, []);
  return (
    <div
      key={movie?.id}
      className="flex-full relative flex-[0_0_100%] min-w-0 px-2 max-h-[1000px]"
    >
      <Image
        className="w-full"
        src={getImagePath(movie?.backdrop_path, true)}
        alt={movie?.title}
        width={1920}
        height={1080}
        priority={true}
      />

      <div className="max-sm:hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full p-10  text-white space-y-5 max-lg:-top-10 max-md:space-y-1">
        <p className="h-6 text-3xl max-md:text-2xl">Now Playing:</p>
        <h2 className="text-5xl font-bold max-w-xl max-md:text-3xl">
          {movie?.title}
        </h2>
        <div className=" flex items-center gap-2  m-2 text-foreground ">
          <FaStar color="orange" />
          <span className="text-2xl text-white max-md:text-xl">
            {movie?.vote_average}/10
          </span>
        </div>
        <p className="max-w-xl line-clamp-3 text-[20px] max-md:text-[15px]">
          {movie?.overview}
        </p>
        <div className="bg-secondary w-30 rounded-md text-foreground">
          <YouTubeDialog videoKey={trailer.key} />
        </div>
      </div>
      <div className="hidden max-sm:block max-sm:mx-5 ">
        <div className="flex justify-between mt-5">
          <div>
            <p className="h-6 text-[14px]">Now Playing:</p>
            <h2 className="text-[24px] font-bold max-w-xl">{movie?.title}</h2>
          </div>
          <div className=" flex items-center gap-2  m-2 text-foreground">
            <FaStar color="orange" />
            <span className="text-2xl text-white ">
              {movie?.vote_average}/10
            </span>
          </div>
        </div>
        <p className="max-w-xl line-clamp-3 text-[20px] mt-5">
          {movie?.overview}
        </p>

        <div className=" max-sm:mt-5 hidden max-sm:block">
          <YouTubeDialog videoKey={trailer.key} />
        </div>
      </div>
    </div>
  );
};
