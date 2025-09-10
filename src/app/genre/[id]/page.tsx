import GenreList from "@/components/GenreList";
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
    <div className="w-[1440px] m-auto ">
      <div className="text-4xl h-9 mt-13 font-bold">Search filter</div>
      <div className="flex">
      <div className="w-[720px]  h-500 mt-8">
        <div>
          <p className="text-[24px] text-foreground font-bold">Genre</p>
          <p className="text-foreground text-[20px] mt-5">See lists of movies by genre</p>
          <div className="mt-10">
            <GenreList />
          </div>
        </div>
      </div>
      <div className="py-10 w-full lg:w-1/2 m-auto ml-">
        <h2 className="text-2xl font-bold   mx-10">
          {movies?.length} Results for "{genre}"
        </h2>

        <GenreMovieContainer movies={movies} isVertical />
      </div>
      </div>
    </div>
  );
};

export default GenrePage;
