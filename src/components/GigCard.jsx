import { Link } from "react-router-dom"
import {StarIcon} from '@heroicons/react/24/solid'
import {HeartIcon} from '@heroicons/react/24/solid'


const GigCard = ({title ,desc, username ,price,star,pp,img}) => {
  return (
    <Link to={'/gig/123'}>
        <div className="border w-[265px]">
          <img src={img} alt="img" className="h-[150px] w-full object-cover"/>  

          <div className="p-4 border border-t-0 border-r-0 border-l-o">
<div className="flex items-center gap-3">
    <img className="w-8 h-8 rounded-full object-cover" src={pp} alt="profile" />
    <p className="text-gray-500">{username}</p>
</div>

<p className="py-3 text-gray-400 text-sm">{desc}</p>
<span className="flex items-center gap-1 cursor-pointer">
    <StarIcon className="h-4 text-yellow-500" />
    <span className="text-yellow-500">{star}</span>
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