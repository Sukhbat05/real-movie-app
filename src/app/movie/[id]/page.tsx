import DetailPage from "@/components/DetailPage";
import DetailpageSkeleton from "@/components/DetailPageSkeleton";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetail({ params }: Props) {
  const route = await params;
  const id = route.id;
  return (
    <Suspense fallback={<DetailpageSkeleton />}>
      <DetailPage id={id} />
    </Suspense>
  );
}
