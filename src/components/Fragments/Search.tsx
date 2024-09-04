'use client';

import { getDataResponse } from '@/utils/api';
import CardAnime from '../CardAnime';
import CardManga from '../CardManga';
import useFetch from '@/hooks/useFetch';
import LoadingSpinner from '../Loading/LoadingSpinner';

interface IPropsSearch {
  searchQuery: string;
  searchType: string;
}

export default function Search({ searchQuery, searchType }: IPropsSearch) {
  const decodedQuery = decodeURI(searchQuery);
  // const data = await getDataResponse(`/${searchType}?q=${decodedQuery}`);
  const { data, loading }: any = useFetch(`/${searchType}?q=${decodedQuery}`);

  if (data?.data?.length === 0) return <p className="text-red-500">Sorry, Results not found!</p>;

  return (
    <>
      {loading ? (
          <LoadingSpinner />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg text-black-gray font-semibold">
              {`search ${searchType} ${
                data?.data?.length > 1 ? 'results' : 'result'
              } of '${decodedQuery}'`}
            </h1>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {data?.data?.map((item: any, index: number) => (
              <div key={index}>
                {searchType === 'anime' ? <CardAnime data={item} /> : <CardManga data={item} />}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
