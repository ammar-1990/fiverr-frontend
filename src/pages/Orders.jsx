


import {EnvelopeIcon} from '@heroicons/react/24/solid'
import newAxios from '../utils/axiosRequest'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

const {user:currentUser} = useAuth()


const fetchOrders = () => {
  const theData = newAxios
    .get(`/orders`)
    .then((res) => res.data)
    .catch((err) => console.log(err.response.data));
  return theData;
};

const { isLoading, error, data } = useQuery({
  queryKey: ["orders"],
  queryFn: fetchOrders,
});


const queryClient = useQueryClient();
const navigate = useNavigate()

useEffect(() => {
  return () => {
    queryClient.removeQueries("orders");

  };
}, [queryClient]);


const handleContact = async (el)=>{
const sellerId = el.sellerId
const buyerId = el.buyerId
const id = sellerId + buyerId + "-" + el.gigId

try {

  const res =await newAxios(`/conversations/${id}`)
  navigate(`/message/${res.data.id}`)
}
 catch (error) {
  console.log(error)
  if(error.response.status === 404){
    const res =await newAxios.post(`/conversations`,{to:currentUser.isSeller ? buyerId : sellerId,gigId:el.gigId})
    navigate(`/message/${res.data.id}`)
  }


}
}
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

            <th className='py-3'>Contact</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <tr><td>Loading...</td></tr> : error ? <tr><td>Someting wnt wrong!</td></tr> : data?.map((el,i)=>(<tr key={el._id} className='odd:bg-teal-50 h-[60px]'>

            <td className=''><img src={el.img} className='h-[40px]  object-contain' alt='img'/></td>
            <td className=''>{el.title}</td>
            <td className=''>$ {el.price}</td>
          
            <td className=''><button className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full"><EnvelopeIcon className="h-5 text-white" onClick={()=>handleContact(el)} /></button></td>
          </tr>))}

          {data?.length === 0 && <tr><td>no orders</td></tr>}
        </tbody>
      </table>

    </div>
  </div>
  )
}

export default Orders