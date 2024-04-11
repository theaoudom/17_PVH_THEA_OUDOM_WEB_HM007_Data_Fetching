import React from 'react'
import "@fortawesome/fontawesome-free/css/all.css";
import { getAllMovieById } from '@/services/AllMovie.service';
import { rating } from './rating';

const movieDetail = async ({params}) => {
    // fetch
    const data = await getAllMovieById(params.movieId)
    const movieDetail = data.payload;
    //  convert normal date to standard
    const postedDate = new Date(movieDetail?.posted_at);
    const formattedDate =
    postedDate.toLocaleDateString("en-US", { 
        year: "numeric",
        month: "short",
        day: "numeric",
    }) 
    ", " +
    postedDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
    //  Star from rating
    const stars = rating(data.payload.rating);
    return (
    <div className='bg-red-950 w-full'>
        <div className='bg-red-950 pt-16 w-screen h-screen'>
            <div className="bg-transparent dark:bg-red-950 pt-8 w-full">
                <div className="w-full px-12">
                    <div className="flex flex-col md:flex-row h-[570px] w-full">
                        <div className="md:flex w-[65%] py-5 pb-9">
                            {/* image */}
                            <div className="h-full w-full rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full rounded-md" src={movieDetail.image == ""? '../bg_movie.png' : movieDetail.image} alt="Product Image"/>
                            </div>
                        </div>
                        <div className="md:flex-1 pl-7 h-fit w-[35%] py-2 bg-red-950">
                            <h2 className="text-2xl font-bold text-white dark:text-white mb-1">{movieDetail.director}</h2>
                            <p className="text-white dark:text-gray-300 text-sm">
                                {movieDetail.runtime} minutes
                            </p>
                            <p className="text-white dark:text-gray-300 text-sm italic">
                                {movieDetail.genre} 
                            </p>
                            <div className="flex mb-8">
                                <span className="text-orange-400 dark:text-gray-300">{stars}</span>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-white dark:text-gray-300">{movieDetail.movie_title} ( {movieDetail.released_year} )</span>
                                <p className="text-white dark:text-gray-300 text-sm mt-2">
                                    {movieDetail.description}
                                </p>
                            </div>
                            <p className="text-white pt-20 dark:text-gray-300 text-sm">
                                {formattedDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default movieDetail