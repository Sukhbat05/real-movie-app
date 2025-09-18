import Link from "next/link";
import { Movie } from "../../type";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MovieContainer = ({ title, movies, isVertical }: Props) => {
  return (
    <div className="w-full  m-auto justify-center max-w-[1440px]">
      <div className="mx-20 py-2 flex items-center  justify-between relative mb-4 ">
        <h2 className="text-sm uppercase font-bold tracking-wider ">{title}</h2>
        <Link
          href={{ pathname: "/seemore", query: { title: title } }}
          className=" text-xs text-foreground uppercase px-2 py-1 rounded-md border-indigo-600 font-semibold "
        >
          See more
        </Link>
      </div>
      <div
        className={cn(
          "flex flex-wrap m-auto px-5 lg:px-10 py-5 scrollbar-hide  ",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex  space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl  max-sm:hidden">
                  <p className="font-bold">
                    {movie?.title} ({movie?.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie?.overview}</p>
                </div>
              </div>
            ))
          : movies
              ?.slice(0, 10)
              .map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieContainer;
