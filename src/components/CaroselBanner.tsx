import { getMovieVideos, getNowPlayingMovies } from "@/lib/getMovies";
import HeroCarousel from "./HeroCareusol";

interface Props {
  id?: string;
  keywords?: string;
}

const CaroselBanner = async ({ id, keywords }: Props) => {
  const movies = await getNowPlayingMovies(id, keywords);
  
 

  return <HeroCarousel movies={movies}  />;
};

export default CaroselBanner;
