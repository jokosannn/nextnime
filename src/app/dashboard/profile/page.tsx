import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'

export default async function Profile() {
  const { user }: any = await getServerSession(authOptions)
  console.log(user)
  // const { data: session, status } = useSession()
  // console.log({ session, status })
  return <section className="wrapper">name: {user.name}</section>
}
