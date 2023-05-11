import { Link } from "react-router-dom";
import { fakeMessages } from "../fakeData"
import Moment from 'react-moment';


const Messages = () => {

  

  return (
    <div>
    <div className='max-w-[1200px] mx-auto p-4'>
      <div className='py-4 flex items-center justify-between '>
        <p className='font-bold text-2xl'>Orders</p>
   
      </div>

      <table  className='my-6 w-full text-left  '>
        <thead>
          <tr>
            <th className='py-3 w-[10%]'>Buyer</th>
            <th className='w-[65%] py-3 truncate'>Last Message</th>
            <th className='py-3'>Date</th>
            <th className='py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeMessages.map((el,i)=>(<tr className={`${ !el.isRead &&'bg-teal-50'} h-[60px]`}>

           
            <td className='p-3 font-semibold'>{el.buyer}</td>
            <td className=' text-gray-500'><Link to={'/message/12'}>{el.lastmessage}</Link></td>
            <td className=' text-gray-500'>{<Moment fromNow date={el.date} />}</td>
            <td className=''>{!el.isRead && <button className="p-2 text-white font-semibold bg-green-400 rounded-sm">Mark As Read</button>}</td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
  )
}

export default Messages