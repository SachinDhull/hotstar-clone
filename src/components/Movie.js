import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../pages/Modal'
import { Link } from 'react-router-dom'

const Movie = ({item,id}) => {

  const [movieId ,setMovieId] = useState('')

  const handleClick = (id) =>{
    setMovieId(id)
    // console.log(id)
    window.scrollTo(0, 0)

  }



  // console.log(movieId)
  
  
  return (
    <>  
    <Link to={`/modal/${id}`}>
        <div onClick={()=>{handleClick(id)}} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto border-s-black hover:h-[90px]' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        </div>
        
        </div> 
        </Link>

        
    </>
  )
}

export default Movie