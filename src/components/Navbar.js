import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
    const navigate = useNavigate()
    const [active,setActive] = useState(false)


  return (
    <>
    <div onMouseOver={(e)=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} className='fixed bg-gradient-to-r from-black min-h-screen w-[100px] duration-500 hover:w-[200px] p-4 hover:p-10 flex flex-col items-left mb-4 z-50 '>
    <Link to='/'><img className={active?`h-[60px] `:null}  src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg'></img></Link>
      <div className='fixed mt-[200px] gap-4 text-white flex flex-col place-content-around'>
        <Link to='/'>
        <button className='flex items-center gap-4 hover:font-bold duration-300 hover:text-lg' ><AiFillHome size={20}/><span>{active?('Home'):('')}</span> </button>
        </Link>
        <Link to='/about'>
        <button className='flex items-center gap-3 hover:font-bold duration-300 hover:text-lg' ><BiSearch size={25}/>{active?('Search'):('')}</button>
        </Link>
      </div>
    </div>
    </>


  )
}

export default Navbar


// border-2 border-green-600