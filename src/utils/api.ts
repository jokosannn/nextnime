export const fetchDataApi = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getRecomendationsAnime = async (url: string, entry: string) => {
  const res = await fetchDataApi(url)
  return res.data.flatMap((item: any) => item[entry])
}

export const reproduce = (data: any, gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const response = data.slice(first, last)

  return response
}
