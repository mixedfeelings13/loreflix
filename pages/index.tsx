import useCurrentUser from '@/hooks/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser()
  return (
    <>
      <title>Loreflix</title>
      <link rel="icon" href="/favicon.ico" />
      <h1 className="text-2xl text-green-500">Loreflix</h1>
      <p className="text-white">Welcome, {user?.name}</p>
      <button 
        className="h-10 w-full bg-white"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </>
  )
}
