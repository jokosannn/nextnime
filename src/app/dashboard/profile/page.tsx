import ProfileUser from '@/components/Fragments/ProfileUser'
import Session from '@/utils/session'
import { img } from '@/utils/img'
// import Collection from '@/components/Fragments/Collection'

export default async function Profile() {
  const user: any = await Session()

  return (
    <section className="wrapper">
      <ProfileUser img={user?.img ? user?.img : img.Profile} name={user?.name} />
      {/* <Collection title="Anime" /> */}
    </section>
  )
}
