import { getNestedDataResponse, reproduce } from '@/utils/api';
import Link from 'next/link';
import CardManga from '../CardManga';
import { Suspense } from 'react';
import LoadingCard from '../Loading/LoadingCard';

const RecomendationManga = async () => {
    const data: any = await getNestedDataResponse('/recommendations/manga', 'entry');
    const result: object[] = reproduce(data, 7);

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-5">
                <Link
                    href="/manga/recomendations/1"
                    className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
                >
                    Recomendations
                </Link>
            </div>
            <div className="grid-card">
                {result?.map((item: object, index: number) => (
                    <Suspense key={index} fallback={<LoadingCard />}>
                        <CardManga key={index} data={item} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default RecomendationManga;
