import Session from '@/utils/session'

export default async function Profile() {
  const user: any = await Session()
  console.log(user)
  return (
    <section className="wrapper">
      <p>name: {user?.name}</p>
      <p>role: {user?.role}</p>
    </section>
  )
}
