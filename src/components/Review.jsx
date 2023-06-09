import {StarIcon} from '@heroicons/react/24/solid'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
import {HandThumbDownIcon} from '@heroicons/react/24/outline'
import newAxios from '../utils/axiosRequest'

import { useEffect, useState } from 'react'

const Review = ({userId,desc,star}) => {

  const [theUser,setTheUser] = useState(null)

useEffect(()=>{
newAxios
.get(`/users/${userId}`).then((res)=>{setTheUser(res.data)})

},[userId])





if(!theUser) return 'Loading...'
  return (
    <div className='flex flex-col gap-4 border border-t-0 border-l-0 border-r-0  pb-12 mb-12'>
 <div className="flex gap-4 items-center">
          <img src={theUser?.img ||  "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"} className="w-10 h-10 rounded-full object-cover" alt="person"/>
          <div>
            <p className="font-bold capitalize">{theUser?.username}</p>
            <div className="flex gap-2 text-gray-500">
             <span>{theUser?.country}</span>
            </div>
          </div>
        </div>

        <div className='flex gap-1 text-yellow-500 items-center'>
          {Array(star).fill().map((_,i)=><StarIcon key={i} className='h-4 text-yellow-500' />)}
         {star}
        </div>
        <p className='text-gray-400 py-4'>{desc} </p>
    <div className='flex items-center gap-5'>
      <span className='font-bold'>Helpful?</span>
      <span className='flex items-center gap-3 font-bold'><HandThumbUpIcon className='h-4 cursor-pointer' /> Yes</span>
      <span className='flex items-center gap-3 font-bold'><HandThumbDownIcon className='h-4 cursor-pointer' /> No</span>
    </div>
    
    
    </div>
  )
}

export default Review