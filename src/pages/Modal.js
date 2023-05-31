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
      // console.log(data)
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
       <h1 className='text-white font-bold text-[50px] '>{item?.original_title}</h1>
       <h1 className='text-white font-bold italic'>{item?.tagline}</h1>
       <h1 className='text-white font-bold '>Release-Date: {item?.release_date}</h1>
       <p className='text-white w-[550px] md:w-[90%]'>{item?.overview}</p>
       <h2 className='text-white '><b>VIDEO:</b> {videos?.name}</h2>
       <iframe className='h-[90%] w-[90%]' src={`https://www.youtube.com/embed/${videos?.key}`}></iframe>

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
