import React from 'react'
import Link from 'next/link';
import { getAllMovie, getMovie } from '@/services/AllMovie.service';

const CardAllMovieComponent = async ({data}) => {
  return (
    <div className='gap-3 flex overflow-x-auto no-scrollbar'>
        {data.payload?.map((movie)=>(
          <div key={movie.movie_id}>
            <Link href={`/view-movie-detail/${movie.movie_id}`} className="p-5 border w-[320px] h-72 bg-white border-indigo-300 rounded-lg hover:shadow-xl flex flex-col items-center" >
            <img src={movie.image == ""? '../bg_movie.png' : movie.image} className="w-full h-[60%]" />
            <div className="pt-3">
              <h4 className="font-bold text-lg line-clamp-1">{movie.movie_title}</h4>
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">{movie.description}</p>
            </div>
          </Link>
          </div>
        ))}
    </div>
  )
}


export default CardAllMovieComponent