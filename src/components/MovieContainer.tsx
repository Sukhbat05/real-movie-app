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
    <div className="w-[1440px]  m-auto">
      <div className="mx-13 py-2 flex items-center justify-between  relative mb-4">
        <h2 className="text-sm uppercase font-bold tracking-wider">{title}</h2>
        <Link
          href={{ pathname: "/viewmore", query: { title: title } }}
          className=" text-xs text-foreground uppercase px-2 py-1 rounded-md border-indigo-600 font-semibold "
        >
          See more
        </Link>
      </div>
      <div
        className={cn(
          "flex flex-wrap px-5 lg:px-10 py-5 scrollbar-hide my-5",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
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
