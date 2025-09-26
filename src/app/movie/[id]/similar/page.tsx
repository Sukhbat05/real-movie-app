import React from "react";
import { getSimilarMovies } from "@/lib/getMovies";
import SimilarContainer from "@/components/SimilarContainer";

type SimilarPageProps = {
  params: Promise<{ id: string }>;
};

const Similar = async ({ params }: SimilarPageProps) => {
  const dynamicRoute = await params;
  const id = dynamicRoute.id;
  const similarMovies = await getSimilarMovies(id);
  console.log(id);
  return (
    <div>
      <SimilarContainer
        id={id}
        movies={similarMovies}
        title="more like this"
        isVertical={true}
      />
    </div>
  );
};

export default Similar;
