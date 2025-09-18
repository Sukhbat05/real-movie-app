import HomePage from "@/components/HomePage";
import HomepageSkeleton from "@/components/HomepageSkeleton";

import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HomepageSkeleton/>}>
      <HomePage />
    </Suspense>
  );
}

