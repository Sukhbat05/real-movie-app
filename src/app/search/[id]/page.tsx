import GenreMovieContainer from "@/components/GenreMovieContainer";
import GenreList from "@/components/GenreList";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

interface Props {
  params: {
    id: string;
  };
}

const SearchPage = async ({ params: { id } }: Props) => {
  const termToUse = decodeURI(id);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  console.log("FOUND MOVIES", movies);
  return (
    <div className="w-full ">
      <h2 className="text-4xl font-bold px-10 m-5 max-sm:text-2xl">
        Results for {termToUse}
      </h2>
      <div className="flex max-sm:flex-col max-sm:w-full justify-center">
        <div className="py-10 max-w-screen-xl  w-full ">
          <GenreMovieContainer
            movies={movies}
            title="Searched Movies"
            isVertical
          />
          <div className="max-sm:hidden ">
            <GenreMovieContainer
              movies={popularMovies}
              title="You may also like"
            />
          </div>
        </div>
        <div className="w-full h-fit my-8">
          <div className="ml-4 ">
            <p className="text-[24px] text-foreground font-bold">Genre</p>
            <p className="text-foreground text-[20px] mt-1">
              See lists of movies by genre
            </p>
            <div className="max-sm:w-full max-sm:text-[12px] flex">
              <GenreList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
