import GenreMovieContainer from "@/components/GenreMovieContainer";
import MovieContainer from "@/components/MovieContainer";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="w-[1440px] m-auto flex">
      <div className="w-[720px] bg-red-500 h-500 mt-37"></div>
      <div className="py-10 w-full lg:w-1/2 m-auto ml-">
        <h2 className="text-2xl font-bold   mx-10">
          {movies?.length} Results for "{genre}"
        </h2>

        <GenreMovieContainer movies={movies} isVertical />
      </div>
    </div>
  );
};

export default GenrePage;
