// import Search from '@/components/Fragments/Search';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import React, { Suspense } from 'react';
const Search = React.lazy(() => import('@/components/Fragments/Search'));

const SearchPageAnime = async ({
  searchParams,
}: {
  searchParams?: {
    query: string;
    type: string;
  };
}) => {
  return (
    <section className="wrapper">
      <Suspense fallback={<LoadingSpinner />}>
        <Search searchQuery={searchParams?.query!!} searchType={searchParams?.type!!} />
      </Suspense>
    </section>
  );
};

export default SearchPageAnime;
