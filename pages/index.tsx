import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Billboard from '@/components/billboard'
import Navbar from '@/components/navbar'
import MovieList from '@/components/movie-list'
import useMovieList from '@/hooks/useMovieList'

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

  const { data: movies = [] } = useMovieList()

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title='Trending now' data={movies}/>
      </div>
    </>
  )
}
