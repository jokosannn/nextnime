'use client';
<<<<<<< HEAD

=======
>>>>>>> 655893d9354db2b156d2759619df06068c8916f2
import { getDataResponse } from '@/utils/api';
import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
<<<<<<< HEAD
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(null);
=======
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
>>>>>>> 655893d9354db2b156d2759619df06068c8916f2
    setLoading(true);
    getDataResponse(url)
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [url]);

  return { data, loading };
}
