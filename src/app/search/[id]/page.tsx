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

  return (
    <div className="w-[1440px] m-auto">
       <h2 className="text-4xl font-bold px-10 m-5 ">Results for {termToUse}</h2>
    <div className="flex">
 
      <div className="py-10 max-w-screen-xl mx-auto w-[720px] ">
       
        <GenreMovieContainer movies={movies} title="Searched Movies" isVertical/>
        <GenreMovieContainer movies={popularMovies} title="You may also like" />
      </div>
      <div className="w-[720px]  h-500 mt-8">
        <div className="">
          <p className="text-[24px] text-foreground font-bold">Genre</p>
          <p className="text-foreground text-[20px] mt-1">See lists of movies by genre</p>
          <div>
            <GenreList />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchPage;
