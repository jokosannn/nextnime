import PopulerManga from '@/components/Fragments/PopulerManga'
import RecomendationManga from '@/components/Fragments/RecomendationManga'

export default function MangaPage() {
  return (
    <section className="wrapper">
      <PopulerManga />
      <RecomendationManga />
    </section>
  )
}
