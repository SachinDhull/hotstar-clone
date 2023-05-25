import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rows from '../components/Rows'
import requests from '../Requests'
import axios from 'axios'
import Movie from '../components/Movie'



const About = () => {
  const [query ,setQuery] = useState('')
  const [movies,setMovies] = useState([])

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=7143b8ade453058bf9abca487c08038d&query=${query}`



  const getAllMovies =()=>{
    axios.get(requests.requestPopular)
    .then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    })
  }

  const handleChange = (e) =>{
    console.log(e.target.value);
    setQuery(e.target.value)
  }

  const getSearchMovies = ()=>{
    axios.get(searchUrl)
    .then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    })
  }

  useEffect(()=>{
    if(query===''){
      getAllMovies()
    }
    else{
    getSearchMovies()
    }

  },[query])
  return (
    <div onChange={handleChange} className='ml-24 flex justify-center'>
      <input className='absolute m-10 rounded-full w-3/5 bg-gray-700 h-[50px] p-5 text-white' placeholder='Search a movie'></input>
      <div className='ml-14 mt-[200px]'>
        {
          movies.map((item)=>{
            {return(<Movie id={item.id} key={item.id} item={item}></Movie>)}
          })
        }
      </div>
      
    </div>
  )
}

export default About
