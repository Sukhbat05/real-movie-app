import DetailPage from '@/components/DetailPage'
import DetailpageSkeleton from '@/components/DetailPageSkeleton'
import React, { Suspense } from 'react'

export default function MovieDetail(){
  
  return (
   <Suspense fallback={<DetailpageSkeleton/>}>
        <DetailPage />
   </Suspense>
  )
}

