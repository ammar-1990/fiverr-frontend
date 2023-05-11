
import { myGigs } from "../fakeData"
import {EnvelopeIcon} from '@heroicons/react/24/solid'

const Orders = () => {

const currentUser = {
  id: "12",
  name: "ammar",
  isSeller: true,
};

  return (
    <div>
    <div className='max-w-[1200px] mx-auto p-4'>
      <div className='py-4 flex items-center justify-between '>
        <p className='font-bold text-2xl'>Orders</p>
   
      </div>

      <table  className='my-6 w-full text-left  '>
        <thead>
          <tr >
            <th className='py-3'>Image</th>
            <th className='w-[40%] py-3'>Title</th>
            <th className='py-3'>Price</th>
            <th className='py-3'>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th className='py-3'>Contact</th>
          </tr>
        </thead>
        <tbody>
          {myGigs.map((el,i)=>(<tr className='odd:bg-teal-50 h-[60px]'>

            <td className=''><img src={el.img} className='h-[40px]  object-contain' alt='img'/></td>
            <td className=''>{el.title}</td>
            <td className=''>$ {el.price}</td>
            <td className=''>{el.sales}</td>
            <td className=''><button className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full"><EnvelopeIcon className="h-5 text-white" /></button></td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
  )
}

export default Orders