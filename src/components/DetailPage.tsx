import { YouTubeDialog } from "@/components/YouTubeDialog";

import { getImagePath } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getMovieVideos,
  getCredits,
  getSimilarMovies,
} from "@/lib/getMovies";

import Image from "next/image";
import React from "react";
import SimilarContainer from "./SimilarContainer";

const DetailPage = async ({ id }: { id: string }) => {
  const videos: any = await getMovieVideos(id);
  const trailer = videos.find(
    (v: any) => v.site === "YouTube" && v.type === "Trailer"
  );

  const details: any = await getMovieDetails(id);
  const similarMovies = await getSimilarMovies(id);
  const credits: any = await getCredits(id);

  const director = credits.crew.find(
    (person: any) => person.job === "Director"
  );
  const writer = credits.crew.find(
    (person: any) => person.department === "Writing"
  );

  console.log(trailer);

  return (
    <div>
      <div className="px-10 w-full flex justify-center ">
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

              <div className="absolute top-90 left-10 bg-white text-black rounded-2xl max-sm:top-25 max-sm:left-2">
                <YouTubeDialog videoKey={trailer ? trailer.key : ""} />
              </div>
            </div>
          </div>
          <div className="max-sm:flex gap-8">
            <div className="w-[290px] h-[428px] hidden rounded-md overflow-hidden group max-sm:w-25 max-sm:h-37 max-sm:block mt-5">
              <Image
                src={getImagePath(details?.backdrop_path)}
                alt={details?.title}
                width={1440}
                height={1080}
                className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
              />
            </div>
            <div className=" lg:w-2/2 flex flex-col gap-2 justify-center mt-5 max-sm:w-50">
              <div className="max-sm:flex flex-wrap ">
                <div className="text-foreground text-sm ">
                  {details?.genres.map((item: any) => (
                    <span
                      key={item?.id}
                      className=" text-foreground font-medium mx-2  flex-col border border-foreground p-1 rounded-md "
                    >
                      {item?.name}
                    </span>
                  ))}
                </div>
              </div>
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
        <SimilarContainer
          id={id}
          movies={similarMovies}
          title="more like this"
          isVertical={false}
        />
      </div>
    </div>
  );
};

export default DetailPage;
