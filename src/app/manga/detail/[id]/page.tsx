import DetailManga from '@/components/Manga/DetailManga'

const DetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="wrapper">
      <DetailManga id={params.id} />
    </section>
  )
}

export default DetailPage
