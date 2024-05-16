<<<<<<< HEAD
import Search from '@/components/Fragments/Search';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import React, { Suspense } from 'react';

export default function SearchPageAnime({
=======
// import Search from '@/components/Fragments/Search';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import React, { Suspense } from 'react';
const Search = React.lazy(() => import('@/components/Fragments/Search'));

const SearchPageAnime = async ({
>>>>>>> 655893d9354db2b156d2759619df06068c8916f2
  searchParams,
}: {
  searchParams?: {
    query: string;
    type: string;
  };
<<<<<<< HEAD
}) {
=======
}) => {
>>>>>>> 655893d9354db2b156d2759619df06068c8916f2
  return (
    <section className="wrapper">
      <Suspense fallback={<LoadingSpinner />}>
        <Search searchQuery={searchParams?.query!!} searchType={searchParams?.type!!} />
      </Suspense>
    </section>
  );
<<<<<<< HEAD
}
=======
};

export default SearchPageAnime;
>>>>>>> 655893d9354db2b156d2759619df06068c8916f2
