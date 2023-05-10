import React from 'react'
import { footerData } from '../fakeData'
import FooterComponent from './FooterComponent'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsUniversalAccess} from 'react-icons/bs'


const Footer = () => {
  const thefooter= footerData
  return (
    <div className='border border-l-0 border-r-0 border-b-0 p-4'>
<div className='max-w-[1200px] mx-auto'>
  {/* top */}
  <div className='flex flex-wrap gap-5 justify-between'>
{thefooter.map((el,i)=><FooterComponent key={i} el={el} />)}
  </div>
  {/* bottom */}
  <div className='py-6 px-2 border border-l-0 border-r-0 border-b-0 flex items-center justify-between  flex-col md:flex-row gap-5'>
<div className='flex gap-6'>
  <h3 className='text-3xl font-bold text-gray-500'>fiverr.</h3>
  <p className='text-sm text-gray-400 self-end'>© Fiverr International Ltd. 2023</p>
</div>

<div className='flex items-center gap-5 flex-wrap justify-center'>
  <div className='flex gap-6 items-center flex-shrink-0'>
    <span  className='w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center'><AiOutlineTwitter size={20} color='gray' /></span>
    <span className='w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center'><BsFacebook size={20}  color='gray'/></span>
    <span className='w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center'><AiFillLinkedin size={20}  color='gray'/></span>
    <span className='w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center'><BsPinterest size={20}  color='gray'/></span>
    <span className='w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center'><BsInstagram size={20}  color='gray'/></span>





  </div>
  <div className='flex items-center gap-3 flex-shrink-0'>
<span className='flex items-center gap-3 px-2 py-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 cursor-pointer w-fit '><AiOutlineGlobal size={18}  /> <span>English</span></span>
 <span className='flex items-center gap-3 px-2 py-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 cursor-pointer w-fit '>CA$ CAD</span>
  <span className='flex items-center justify-center w-8 h-8 rounded-full border text-gray-500 hover:text-gray-800 cursor-pointer border-gray-500 h hover:bg-gray-200 hover:border-none'><BsUniversalAccess size={20} /></span>
  </div>
</div>
  </div>
</div>

    </div>
  )
}

export default Footer