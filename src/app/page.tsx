import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogDemo } from "@/components/VideoDialog";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const nowPlaying = await getNowPlayingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="w-[1440px]   justify-center m-auto ">
      <CaroselBanner />
      <div className="flex flex-col  mt-23 m-auto">
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={popularMovies} title="Popular" />

        <MovieContainer movies={topRatedMovies} title="Top Rated" />
      </div>
    </main>
  );
}
