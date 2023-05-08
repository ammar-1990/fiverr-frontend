import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {


const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
const handleScroll = ()=>{
  if(window.scrollY > 0)
  setScrolled(true)
  else
  setScrolled(false)
}
   window.addEventListener('scroll',handleScroll)

   return ()=>{ window.removeEventListener('scroll',handleScroll)}
  },[])

  return (
    <header className={`sticky top-0   ${scrolled ? 'bg-white' :'bg-green-900 ' } duration-500 ease-out`}>
      <div className='max-w-[1200px]  mx-auto flex justify-between items-center py-5'>
     <Link to={'/'}><div className={`font-bold text-3xl  ${scrolled? 'text-black':'text-white'}`}>fiverr<span className='text-green-300'>.</span></div></Link> 
      <nav className={`flex gap-10 ${scrolled?'text-black' : 'text-white'} font-semibold text-sm items-center`}>
        <span className='navLink'>Fiver business</span>
        <span className='navLink'>Explore</span>
        <span className='navLink'>English</span>
        <span className='navLink'>Sign in</span>
        <span className='navLink'>Become a seller</span>
        <button className='p-2 px-4 border-white border rounded-lg  hover:border-green-400 hover:bg-green-400'>Join</button>
      </nav>
      </div>
     { scrolled && <div className='border border-l-0 border-r-0 border-gray-400'>
      <div className='max-w-[1200px] mx-auto flex justify-between  py-1 text-gray-500'>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
      </div>
      </div>}
      <hr/>
    </header>
  )
}

export default Navbar