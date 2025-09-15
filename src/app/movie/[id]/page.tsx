import MovieContainer from "@/components/MovieContainer";

import { YouTubeDialog } from "@/components/YouTubeDialog";

import { getImagePath } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies,
  getCredits,
} from "@/lib/getMovies";

import Image from "next/image";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const MovieDetails = async ({ params: { id } }: Props) => {
  const videos: any = await getMovieVideos(id);
  const trailer = videos.find(
    (v: any) => v.site === "YouTube" && v.type === "Trailer"
  );

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
      <div className="px-10 w-full  m-auto flex">
        <div className="py-10 flex-col lg:flex-row items-center gap-5 justify-center ">
          <h2 className="text-2xl font-semibold mb-4">
            {details?.original_title}
          </h2>
          <p className="text-foreground  mb-5 font-medium">
            {details.release_date}
          </p>
          <div className="flex gap-4 max-sm:flex-col">
            {" "}
            <div className="w-[290px] h-[428px]  rounded-md overflow-hidden group max-sm:w-25 max-sm:h-37 max-sm:hidden">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
              />
            </div>
            <div className="w-[760px] h-[428px] relative rounded-md overflow-hidden group max-sm:w-full max-sm:h-37">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1440}
                height={1080}
                className="w-full  h-full  object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
              />

              <div className="absolute top-80 left-10 bg-white text-black rounded-2xl ">
                <YouTubeDialog videoKey={trailer.key} />
              </div>
            </div>
          </div>
          <div className="max-sm:flex ">
            <div className="w-[290px] h-[428px] hidden rounded-md overflow-hidden group max-sm:w-25 max-sm:h-37 max-sm:block mt-5">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
              />
            </div>
            <div className="w-full lg:w-2/2 flex flex-col gap-2 justify-center mt-5 max-sm:w-50">
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
                <span className="m-1 font-normal text-[15px]">
                  {writer.name}
                </span>
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
      </div>

      <div className="mt-6 m-auto flex-wrap ">
        <MovieContainer movies={popoularMovies} title="more like this" />
      </div>
    </div>
  );
};

export default MovieDetails;
