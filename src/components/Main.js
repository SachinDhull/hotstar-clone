import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(requests.requestUpcoming)
        .then(response=>(setMovies(response.data.results)))
        
    },[])
    // console.log(movies)

    const singleMovie = movies[Math.floor(Math.random()*movies.length)]

  return (
    <div className='w-full h-[550px] bg-black'>
        <div className='ml-24 w-full h-full '>
        <div className='absolute w-[250px] h-[550px] bg-gradient-to-r from-black'></div>
        <img className=' w-full h-full object-cover'src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`} alt={singleMovie?.title}/>
        </div>
        <div className='ml-24 absolute top-[20%] '>
        <div className='bg-gradient-to-r text-center p-2 justify-center from-black h-[40px]'><p className='font-bold text-white'>{singleMovie?.title}</p></div>
        
        <div className='list-none flex space-x-4 my-4 bg-gradient-to-r text-center p-2 justify-center from-black h-[40px]'>
            <li className='font-bold text-white'>Ratings :{singleMovie?.vote_average}</li> 
    
            <li className='font-bold text-white'>Releaase :{singleMovie?.release_date}</li>
            </div>
        <div className='py-4'>
        <button className='rounded hover:bg-gray-200 duration-300 bg-gray-100/25 text-white font-bold border-gray-300 py-2 px-5 mx-4'>Watch Trailer</button>
        <button className='rounded hover:bg-gray-200 duration-300 bg-gray-100/25 text-white font-bold border-gray-300 py-2 px-5'>+</button>
        {/* <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button> */}
      </div>
        </div>
 
      
      
    </div>
  )
}

export default Main