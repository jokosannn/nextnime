import DetailAnime from '@/components/Anime/DetailAnime'
import React from 'react'

const DetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="wrapper">
      <h1>DetailPage</h1>
      <DetailAnime id={params.id} />
    </section>
  )
}

export default DetailPage
