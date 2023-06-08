import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import axios from 'axios'
import Modal from '../pages/Modal'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Rows = ({id,fetchUrl,title,rowId}) => {
    const [movie,setMovie] = useState()
    const [active,setAcive] = useState(false)
    useEffect(()=>{
      axios.get(fetchUrl)
      .then((response)=>{
        setMovie(response.data.results)
      })
    },[fetchUrl])


    const scrollLeft = () =>{
      console.log('clicked');
      let slider = document.getElementById('slider'+rowId)
      slider.scrollLeft=slider.scrollLeft-500 
      
    }
    const scrollRight = () =>{
      console.log('clicked');
      let slider = document.getElementById('slider'+rowId)
      slider.scrollLeft=slider.scrollLeft+500  
      
    }

  return (
    <>
    <h2 className='ml-24 font-bold text-white'>{title}</h2>
     <div className='ml-12 lg:ml-24 md:ml-24 sm:ml-24 relative flex items-center group'>
      
      <MdChevronLeft onClick={scrollLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
     
      <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
      {movie?.map(item=>{return(<Movie id={item.id} key={item.id} item={item}></Movie>)})}
      </div>
      <MdChevronRight onClick={scrollRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>  
      {active ? (<Modal/>): ('')}
    </>
  )
}

export default Rows


