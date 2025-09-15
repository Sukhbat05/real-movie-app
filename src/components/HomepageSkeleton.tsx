import React from "react";
import { Skeleton } from "./ui/skeleton";
import { id } from "zod/v4/locales";

const HomepageSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-screen h-[600px]" />
      <div className="flex justify-between mt-10 mx-20 m-auto">
        <Skeleton className="w-[250px] h-8"></Skeleton>
        <Skeleton className="w-[250px] h-8"></Skeleton>
      </div>
      <div className="flex gap-10 mt-8 flex-wrap justify-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton className="w-[230px] h-[430px]" key={i}/>
        ))}
      </div>
    </div>
  );
};

export default HomepageSkeleton;
