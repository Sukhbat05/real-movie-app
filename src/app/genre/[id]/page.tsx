import GenreList from "@/components/GenreList";
import GenreMovieContainer from "@/components/GenreMovieContainer";
import MovieContainer from "@/components/MovieContainer";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { getDiscoverMovies } from "@/lib/getMovies";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
    page: string;
  };
}

const GenrePage = async ({
  params: { id },
  searchParams: { genre, page },
}: Props) => {
  const movies = await getDiscoverMovies(id, undefined, page);
  const url = `/genre/${id}?genre=${genre}`;
  return (
    <div className="w-full mx-10 max-sm:ml-0">
      <div className="text-4xl h-9 mt-13 font-bold ">Search filter</div>
      <div className="flex max-sm:flex-col">
        <div className="w-full  lg:w-1/2 h-500 mt-8 max-sm:hidden">
          <div className="m-auto">
            <p className="text-[24px] text-foreground font-bold ">Genre</p>
            <p className="text-foreground text-[20px] mt-5">
              See lists of movies by genre
            </p>
            <div className="mt-10">
              <GenreList />
            </div>
          </div>
        </div>
        <div className="py-10 w-full lg:w-1/2  ">
          <h2 className="text-2xl font-bold   mx-10">
            {movies?.length} Results for "{genre}"
          </h2>

          <GenreMovieContainer movies={movies} isVertical />
        </div>
        <div className="w-full  lg:w-1/2 h-fit mt-8 hidden max-sm:block my-10">
          <div>
            <p className="text-[24px] text-foreground font-bold">Genre</p>
            <p className="text-foreground text-[20px] mt-5">
              See lists of movies by genre
            </p>
            <div className=" max-sm:w-full max-sm:text-[12px] flex">
              <GenreList />
            </div>
          </div>
        </div>
      </div>
      <Pagination className="flex justify-center mb-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`${url}&page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={1 === Number(page)}
              href={`${url}&page=1`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <>
            {Array.from({ length: 100 })
              .splice(4, Number(page) + 4)
              .map((_, i) => (
                <div key={i}>
                  {i !== 0 && (
                    <PaginationItem>
                      <PaginationLink
                        isActive={i + 1 === Number(page)}
                        href={`${url}&page=${i + 1}`}
                      >
                        {i + 1}
                        {/* {Number(page) >= 7 ? i++ : i + 1 === Number(page)} */}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                </div>
              ))}
          </>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`${url}&page=5`}>5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`${url}&page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GenrePage;
