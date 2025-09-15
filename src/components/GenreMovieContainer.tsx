import Link from "next/link";
import { Movie } from "../../type";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import GenreMovieCard from "./GenreMovieCard";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const GenreMovieContainer = ({ title, movies, isVertical }: Props) => {
  return (
    <div>
      <div className="mx-13 py-2 flex items-center   relative mb-4">
        <h2 className="text-sm uppercase font-bold tracking-wider">{title}</h2>
      </div>
      <div
        className={cn(
          "flex space-x-4 flex-wrap  lg:px-10  scrollbar-hide ml-5",
          isVertical && "space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <GenreMovieCard movie={movie} />
                <div className="max-w-2xl">
                  <hr className="mb-3" />
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default GenreMovieContainer;
