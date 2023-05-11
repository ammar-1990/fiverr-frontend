import { Link } from 'react-router-dom'
import { myGigs } from '../fakeData'
import {TrashIcon} from '@heroicons/react/24/solid'

const MyGigs = () => {
  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-4'>
        <div className='py-4 flex items-center justify-between '>
          <p className='font-bold text-2xl'>Gigs</p>
          <Link to={'/add'}><button className='bg-green-400 text-white font-semibold p-2 rounded-md text-sm'>Add New Gig</button></Link>
        </div>

        <table  className='my-6 w-full text-left  '>
          <thead>
            <tr >
              <th className='py-3'>Image</th>
              <th className='w-[40%] py-3'>Title</th>
              <th className='py-3'>Price</th>
              <th className='py-3'>Sales</th>
              <th className='py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {myGigs.map((el,i)=>(<tr className='odd:bg-teal-50 h-[60px]'>

              <td className=''><img src={el.img} className='h-[40px]  object-contain' alt='img'/></td>
              <td className=''>{el.title}</td>
              <td className=''>$ {el.price}</td>
              <td className=''>{el.sales}</td>
              <td className=''><TrashIcon className='h-5 text-red-500 cursor-pointer' /></td>
            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default MyGigs