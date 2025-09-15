import Link from "next/link";
import { Genres } from "../../type";
import { IoChevronForward } from "react-icons/io5";

const GenreList = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <div className="flex w-[600px]  flex-wrap gap-4 m-4 max-sm:gap-1">
      {data?.genres?.map((genre) => (
        <div
          key={genre?.id}
          className="border border-gray-200 h-8 m m-2 rounded-md flex justify-center items-center"
        >
          <Link
            href={`/genre/${genre?.id}?genre=${genre.name}`}
            className="mx-2 font-bold flex items-center"
          >
            {genre?.name} <IoChevronForward />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
