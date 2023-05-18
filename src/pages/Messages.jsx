import { Link } from "react-router-dom";

import Moment from 'react-moment';
import newAxios from '../utils/axiosRequest'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

const Messages = () => {
const { user:currentUser } = useAuth()
  const fetchConversations = () => {
    const theData = newAxios
      .get(`/conversations`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));
    return theData;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: fetchConversations,
  });


  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn:(id)=>newAxios.put(`/conversations/${id}`),onSuccess:()=>{queryClient.invalidateQueries(['conversations'])}
  })



const handleClick = (id)=>{
mutate(id)
}



useEffect(()=>{
  return () => {
    queryClient.removeQueries("conversations");

  };
},[queryClient])

  return (
    <div>
    {isLoading ? 'Loading...' : error ? 'something went wrong' :<div className='max-w-[1200px] mx-auto p-4'>
      <div className='py-4 flex items-center justify-between '>
        <p className='font-bold text-2xl'>Messages</p>
   
      </div>

      <table  className='my-6 w-full text-left '>
        <thead>
          <tr>
            <th className='px-3 py-3 w-[10%]'>Buyer</th>
            <th className='px-3 w-[45%] py-3 truncate'>Last Message</th>
            <th className='px-3 py-3'>Date</th>
            <th className='px-3 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 && <tr><td>no messages</td></tr>}
          {data?.map((el,i)=>(<tr key={el?.id} className={`${ ((currentUser.isSeller && !el.readBySeller) || (!currentUser.isSeller && !el.readByBuyer)) ?'bg-teal-50': 'bg-gray-100'} h-[80px] `}>

           
            <td className='px-3 font-semibold'>{currentUser.isSeller? el.buyerId : currentUser._id}</td>
            <td className='px-3 text-gray-500'><Link className="truncate" to={`/message/${el?.id}`}>{el?.lastMessage || '...'}</Link></td>
            <td className='px-3 text-gray-500'>{<Moment fromNow date={el?.updatedAt} />}</td>
            <td className='px-3'>{((currentUser.isSeller && !el.readBySeller) || (!currentUser.isSeller && !el.readByBuyer)) && <button onClick={()=>{handleClick(el._id)}} className="p-2 text-white font-semibold bg-green-400 rounded-sm">Mark As Read</button>}</td>
          </tr>))}
        </tbody>
      </table>

    </div>}
  </div>
  )
}

export default Messages