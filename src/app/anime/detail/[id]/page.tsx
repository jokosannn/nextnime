import DetailAnime from '@/components/Anime/DetailAnime'

const DetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="wrapper">
      <DetailAnime id={params.id} />
    </section>
  )
}

export default DetailPage
