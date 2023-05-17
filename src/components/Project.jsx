
import { Link } from "react-router-dom"
import newAxios from '../utils/axiosRequest'
import { useEffect, useState } from "react";

const Project = ({cover,userId,title , _id}) => {
const [user,setUser] = useState(null)
useEffect(()=>{
const getUser = async ()=>{

  try {
    const res = await newAxios(`/users/${userId}`)
    setUser(res.data)
  } catch (error) {
    console.log(error)
  }
}

getUser()

},[userId])
 


  return (
    <Link to={`/gig/${_id}`}>
    <div className="shadow-md rounded-md overflow-hidden">
<img src={cover} alt=""  className='h-[200px] w-full object-cover'/>
<div className='flex gap-4 items-center p-4'>
    <img src={user?.img} alt="" className='w-12 h-12 rounded-full object-contain' />
    <div className='flex flex-col gap-1 '>
        <span className='font-semibold text-xs'>{title}</span>
        <span className='text-sm text-gray-600'>{user?.username}</span>
    </div>
</div>

    </div>
    </Link>
  )
}

export default Project