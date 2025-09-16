"use client";

import Link from "next/link";
import { useState } from "react";
import { Genre } from "../../type";
import { IoChevronForward } from "react-icons/io5";

interface GenreListProps {
  genres: Genre[];
}

const GenreListClient = ({ genres }: GenreListProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-wrap gap-4 m-4 max-sm:gap-1">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className={`h-8 m-2 rounded-md flex justify-center items-center border ${
            selectedGenreId === genre.id
              ? "bg-gray-500 text-white border-secondary"
              : "border-gray-200"
          }`}
        >
          <Link
            href={`/genre/${genre.id}?genre=${genre.name}`}
            className="mx-2 font-bold flex items-center"
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name} <IoChevronForward />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GenreListClient;
