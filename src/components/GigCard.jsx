import { Link } from "react-router-dom"
import {StarIcon} from '@heroicons/react/24/solid'
import {HeartIcon} from '@heroicons/react/24/solid'
import { useQuery } from "@tanstack/react-query"
import newAxios from '../utils/axiosRequest'


const GigCard = ({title ,desc, username,_id ,price,totalStars,startNumber,cover,images,userId}) => {



  const fetchGigs = ()=>{
    const theData =newAxios.get(`users/${userId}`).then(res=>res.data)
    return theData
     }
   
   
     const { isLoading, error, data } = useQuery({
       queryKey: ['userInfo'],
       queryFn: fetchGigs
     })






  return (
    <Link to={`/gig/${_id}`}>
        <div className="border w-[265px]">
          <div className="pt-4">    <img src={cover} alt="img" className="h-[150px] w-full object-contain"/>  </div>
      

          <div className="p-4 border border-t-0 border-r-0 border-l-o">
{isLoading? 'Loading':error?"something went wrong" : <div className="flex items-center gap-3">
    <img className="w-8 h-8 rounded-full object-contain" src={data.img} alt="profile" />
    <p className="text-gray-500">{data.username}</p>
</div>}
<h1 className="py-1 capitalize text-gray-600 text-lg font-semibold ">{title}</h1>
<p className="py-3 text-gray-400 text-sm">{desc}</p>
<span className="flex items-center gap-1 cursor-pointer">
    <StarIcon className="h-4 text-yellow-500" />
    <span className="text-yellow-500">{!isNaN(Math.round(totalStars/startNumber)) && Math.round(totalStars/startNumber)}</span>
    </span>
          </div>
          <div className="p-4 flex items-center justify-between">
<HeartIcon className="h-4 text-gray-500 cursor-pointer" />
<div className="text-gray-500 flex flex-col gap-1 items-end text-xs">
    <span >STARTING AT</span>
    <span>$ {price} <sup className="text-[7px]">99</sup></span>
</div>
          </div>
        </div>
    </Link>
  )
}

export default GigCard