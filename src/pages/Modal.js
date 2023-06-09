import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Modal = () => {
  const [active,setActive] = useState(false)
  const [item,setItem] = useState({})
  const [videos,setVideos] = useState([])
  const params = useParams()
  useEffect(()=>{
    const getMovie = async () =>{
      const result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7143b8ade453058bf9abca487c08038d&append_to_response=videos
      `)
      const data = await result.json()
      // console.log(data.vote_average)
      // console.log(typeof(result?.vote_average));
      // let value = data.videos.results.map((item)=>
      // console.log(item.key))
     
      setItem(data)
      setVideos(data.videos.results[videos.length])
      console.log(videos);
    }
    getMovie()
    },[])
  return (
    <>
        <div className='md:ml-24 flex lg:flex-row md:flex-row sm:flex flex-col lg:gap-20 md:gap-5 '>
      <div className='absolute lg:w-[100px] md:w-[100px] sm:w-0  min-h-screen bg-gradient-to-r from-black '></div>
       <img className=' lg:w-2/6 object-cover  md:w-2/5' src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}></img>
       <div className='flex flex-col gap-10'>
       <h1 className='text-white font-bold lg:ml-0 md:ml-0 sm:ml-0 ml-14 text-[20px] lg:text-[50px] md:text-[50px] sm:text-[50px] '>{item?.original_title}</h1>
       <h1 className='text-white font-bold italic lg:ml-0 md:ml-0 sm:ml-0  ml-14'>{item?.tagline}</h1>
       <h1 className='text-white font-bold ml-14 lg:ml-0 md:ml-0 sm:ml-0 '>Release-Date: {item?.release_date}</h1>
       <p className='text-white font-bold ml-14 lg:ml-0 md:ml-0 sm:ml-0 '>Ratings: {item?.vote_average}</p>
       <p className='text-white w-90% lg:w-[90%] lg:ml-0 md:ml-0 sm:ml-0  ml-14 sm:w-[90%] md:w-[90%]'>{item?.overview}</p>
       <h2 className='text-white  lg:ml-0 md:ml-0 sm:ml-0  ml-14'><b>VIDEO:</b> {videos?.name}</h2>
       <iframe className='lg:ml-0 md:ml-0 sm:ml-0  ml-8 w-[90%] h-[100%]' src={`https://www.youtube.com/embed/${videos?.key}`}></iframe>

       </div>
 
    

       {/* {
        videos.map((item)=>{
          <video>
            <source src={`https://www.youtube.com/watch?v=${item.key}`}></source>
          </video>
        })
       } */}
    </div>
    </>

  )
}

export default Modal
