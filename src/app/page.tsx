import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();

  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="w-full  justify-center m-auto  max-sm:flex-col">
      <CaroselBanner />
      <div className="flex flex-col  mt-23 m-auto">
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={popularMovies} title="Popular" />

        <MovieContainer movies={topRatedMovies} title="Top Rated" />
      </div>
    </main>
  );
}
