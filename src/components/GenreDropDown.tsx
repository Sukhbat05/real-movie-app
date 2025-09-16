import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Genres } from "../../type";

const GenreDropDown = async () => {
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

  return (
    <div className="max-sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-foreground flex items-center  text-[14px] font-medium  border border-foreground m-2 w-25 h-10 justify-center rounded-md ">
          <ChevronDown className="ml-1  items-center" size={20} /> Genre
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[600px]">
          <DropdownMenuLabel className="text-[24px] text-foreground ml-4 ">
            Genre
          </DropdownMenuLabel>
          <DropdownMenuLabel className="text-[16px] ml-4 ">
            See lists of movies by genre
          </DropdownMenuLabel>
          <div className="flex w-[577px]  flex-wrap gap-2 m-4">
            {data?.genres?.map((genre) => (
              <DropdownMenuItem
                key={genre?.id}
                className="border border-gray-200 h-5 "
              >
                <Link href={`/genre/${genre?.id}?genre=${genre.name}`}>
                  {genre?.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GenreDropDown;
