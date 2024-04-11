import { getAllMovie } from '@/services/AllMovie.service'
import React from 'react'
import CardComponent from './CardComponent';

const GenreMovieComponent = async () => {
    const res = await getAllMovie(); 
    const uniqueGenre = new Set(); 

    res.payload.forEach(element => {
      if(element.genre){
        uniqueGenre.add(element.genre)
      }
    });
    
    const unique = Array.from(uniqueGenre);
    console.log("Value from API : ",unique);
  return (
    <div>
        {unique.map((genre)=>(
            <div className='mt-3'>
            <h1 className='font-bold text-xl text-white mb-4'>{genre} Movie &gt;</h1>
            <div>
                <CardComponent data={genre} />
            </div>
        </div>
        ))}
    </div>
  )
}

export default GenreMovieComponent