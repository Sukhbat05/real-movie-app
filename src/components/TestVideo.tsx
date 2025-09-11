import MovieContainer from "@/components/MovieContainer";
import VideoPlayer from "@/components/VideoPlayer";

import { getImagePath } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies,
  getCredits,
} from "@/lib/getMovies";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Movie Studio Clone || Movie Details page",
};

interface Props {
  params: {
    id: string;
  };
}

const MovieDetailsVideo = async ({ params: { id } }: Props) => {
  const movies = await getMovieVideos(id);
  const videos = movies.slice(0, 1).map((movie: any) => ({
    id: movie.id,
    iso_639_1: movie.iso_639_1,
    iso_3166_1: movie.iso_3166_1,
    key: movie.key,
    name: movie.name,
    official: movie.official,
    published_at: movie.published_at,
    site: movie.site,
    size: movie.size,
    type: movie.type,
  }));
  const details: any = await getMovieDetails(id);
  const popoularMovies = await getPopularMovies();
  const credits: any = await getCredits(id);

  const director = credits.crew.find(
    (person: any) => person.job === "Director"
  );
  const writer = credits.crew.find(
    (person: any) => person.department === "Writing"
  );

  return (
    <div>
      <div className="px-10 w-[1080px]  m-auto flex">
        <div className="py-10 flex-col lg:flex-row items-center gap-5 justify-center ">
          <h2 className="text-2xl font-semibold mb-4">
            {details?.original_title}
          </h2>
          <p className="text-foreground  mb-5 font-medium">
            {details.release_date}
          </p>
          <div className="flex gap-4">
            {" "}
            <div className="w-[290px] h-[428px]  rounded-md overflow-hidden group">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
              />
            </div>
            <div className="">
              <VideoPlayer videos={videos} />
            </div>
          </div>
          <div className="w-full lg:w-2/2 flex flex-col gap-2 justify-center mt-5 ">
            <p className="text-foreground text-sm ">
              {details?.genres.map((item: any) => (
                <span
                  key={item?.id}
                  className=" text-foreground font-medium mx-2 border border-foreground p-1 rounded-md "
                >
                  {item?.name}
                </span>
              ))}
            </p>
            <p className="m-1 font-normal text-[15px] mt-5">
              {details?.overview}
            </p>
            <p className="text-foreground text-sm font-bold border-b-2 mt-5">
              Director:{" "}
              <span className="m-1 font-normal text-[15px]">
                {director.name}
              </span>
            </p>
            <p className="text-foreground text-sm font-bold border-b-2 mt-5">
              Writers:{" "}
              <span className="m-1 font-normal text-[15px]">{writer.name}</span>
            </p>
            <p className="text-foreground text-sm font-bold border-b-2 mt-5">
              Stars:{" "}
              {credits?.cast.slice(0, 4).map((item: any) => (
                <span className="m-1 font-normal text-[15px]" key={item?.id}>
                  {item.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 m-auto">
        <MovieContainer
          movies={popoularMovies}
          title="more like this"
          isVertical
        />
      </div>
    </div>
  );
};

export default MovieDetailsVideo;
