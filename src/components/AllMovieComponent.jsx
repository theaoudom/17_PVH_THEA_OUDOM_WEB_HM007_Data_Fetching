import React from 'react'
import { getAllMovie } from '@/services/AllMovie.service'
import CardAllMovieComponent from './CardAllMovieComponent'

const AllMovieComponent = async () => {
  const dataAllMovie = await getAllMovie()
  return (
    <div>
        <div>
            <h1 className='font-bold text-xl text-white mb-4'>All Movies &gt;</h1>
            <div>
              <CardAllMovieComponent data={dataAllMovie}/>
            </div>
        </div>
    </div>
  )
}

export default AllMovieComponent