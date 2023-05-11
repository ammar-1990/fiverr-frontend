import {StarIcon} from '@heroicons/react/24/solid'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
import {HandThumbDownIcon} from '@heroicons/react/24/outline'

const Review = () => {
  return (
    <div className='flex flex-col gap-4 border border-t-0 border-l-0 border-r-0  pb-12 mb-12'>
        <div className="flex gap-4 items-center">
          <img src="/images/man.png"  className="w-10 h-10 rounded-full object-cover" alt="person"/>
          <div>
            <p className="font-bold">username</p>
            <div className="flex gap-2 text-gray-500">
              <span>flag</span> <span>USA</span>
            </div>
          </div>
        </div>

        <div className='flex gap-1 text-yellow-500 items-center'>
          {Array(5).fill().map((_,i)=><StarIcon key={i} className='h-4 text-yellow-500' />)}
          5
        </div>
        <p className='text-gray-400 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam optio enim nulla temporibus obcaecati odio deserunt inventore eaque. Provident iure possimus magni ipsam culpa libero, velit eos deleniti voluptate unde architecto cumque! Laudantium ipsa at exercitationem magnam possimus eaque itaque? </p>
    <div className='flex items-center gap-5'>
      <span className='font-bold'>Helpful?</span>
      <span className='flex items-center gap-3 font-bold'><HandThumbUpIcon className='h-4 cursor-pointer' /> Yes</span>
      <span className='flex items-center gap-3 font-bold'><HandThumbDownIcon className='h-4 cursor-pointer' /> No</span>
    </div>
    
    
    </div>
  )
}

export default Review