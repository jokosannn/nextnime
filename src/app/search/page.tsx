import Search from '@/components/Fragments/Search';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import React, { Suspense } from 'react';

export default function SearchPageAnime({
  searchParams,
}: {
  searchParams?: {
    query: string;
    type: string;
  };
}) {
  return (
    <section className="wrapper">
      <Suspense fallback={<LoadingSpinner />}>
        <Search searchQuery={searchParams?.query!!} searchType={searchParams?.type!!} />
      </Suspense>
    </section>
  );
}
