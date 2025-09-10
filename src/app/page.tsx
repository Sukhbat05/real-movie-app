import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
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

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();

  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="w-[1440px]   justify-center m-auto">
      <Carousel className="w-full ">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-[900px]">
                <img
                  className="absolute"
                  src="https://mag.lexus.co.uk/wp-content/uploads/sites/3/2022/08/lsescnet-10-scaled.jpg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col space-y-2 mt-23">
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={popularMovies} title="Popular" />

        <MovieContainer movies={topRatedMovies} title="Top Rated" />
      </div>
    </main>
  );
}
