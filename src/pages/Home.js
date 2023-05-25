import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Requests'
import Modal from './Modal'

const Home = () => {
  return (
    <div >
      <Main/>
      <Rows rowId='1' title='POPULAR' fetchUrl={requests.requestPopular}></Rows>
      <Rows rowId='2' title='TOP RATED' fetchUrl={requests.requestTopRated}></Rows>
      <Rows rowId='3' title='TRENDING' fetchUrl={requests.requestTrending}></Rows>
      <Rows rowId='4' title='UPCOMING' fetchUrl={requests.requestUpcoming}></Rows>
    </div>
  )
}

export default Home
