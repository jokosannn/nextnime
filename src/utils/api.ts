export const fetchDataApi = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
