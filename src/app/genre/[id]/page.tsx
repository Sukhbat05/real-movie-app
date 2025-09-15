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
    <div className="w-full mx-10 max-sm:ml-0">
      <div className="text-4xl h-9 mt-13 font-bold ">Search filter</div>
      <div className="flex max-sm:flex-col">
        <div className="w-full  lg:w-1/2 h-500 mt-8 max-sm:hidden">
          <div className="m-auto">
            <p className="text-[24px] text-foreground font-bold ">Genre</p>
            <p className="text-foreground text-[20px] mt-5">
              See lists of movies by genre
            </p>
            <div className="mt-10">
              <GenreList />
            </div>
          </div>
        </div>
        <div className="py-10 w-full lg:w-1/2  ">
          <h2 className="text-2xl font-bold   mx-10">
            {movies?.length} Results for "{genre}"
          </h2>

          <GenreMovieContainer movies={movies} isVertical />
        </div>
        <div className="w-full  lg:w-1/2 h-fit mt-8 hidden max-sm:block my-10">
          <div className="">
            <p className="text-[24px] text-foreground font-bold">Genre</p>
            <p className="text-foreground text-[20px] mt-5">
              See lists of movies by genre
            </p>
            <div className=" max-sm:w-full max-sm:text-[12px] flex">
              <GenreList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
