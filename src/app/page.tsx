import Loading from '@/components/atom/loading'
import Populer from '@/components/fragments/Populer'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Populer />
      </Suspense>
    </section>
  )
}
