import ProfileUser from '@/components/Fragments/ProfileUser';
import Session from '@/utils/session';
import { img } from '@/utils/img';

export default async function Profile() {
  const user: any = await Session();

  return (
    <section className="wrapper">
      <ProfileUser img={user?.image ? user?.image : img.Profile} name={user?.name} />
    </section>
  );
}
