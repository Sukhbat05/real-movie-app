import Link from "next/link";
import { Genres } from "../../type";
import { IoChevronForward } from "react-icons/io5";
import GenreListClient from "./GenreListClient";

const GenreList = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return <GenreListClient genres={data.genres} />;
};

export default GenreList;
