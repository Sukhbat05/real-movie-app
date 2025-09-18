"use client";
import { Movie } from "../../type";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  const hanldeRoute = () => {
    router.push(`/movie/${movie?.id}`);
  };
  return (
    <div
      onClick={hanldeRoute}
      className="h-[430px] bg-secondary    relative #F4F4F5 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg m-5 max-sm:w-[150px] max-sm:h-[300px] max-sm:m-2 rounded-md"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-100 dark:to-[#1A1C29]/80 z-10" /> */}

      <Image
        src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
        alt={movie?.title}
        width={1920}
        height={1080}
        priority={true}
        unoptimized
        className="w-[230px] h-[340px] object-cover shadow-md shadow-gray-900 drop-shadow-xl max-sm:w-[150px] max-sm:h-[230px]  rounded-md"
      />
      <div className=" flex items-center gap-2  m-2 text-foreground text-[16px] mt-2 max-sm:text-[12px]">
        <FaStar color="orange" />
        <span>{movie?.vote_average}/10</span>
      </div>
      <p className="absolute z-20 bottom-2 left-2 text-foreground text-[18px] max-sm:text-[14px]">
        {movie?.title}
      </p>
    </div>
  );
};

export default MovieCard;
