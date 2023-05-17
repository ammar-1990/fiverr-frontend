import { Link } from 'react-router-dom'
import {TrashIcon} from '@heroicons/react/24/solid'
import newAxios from '../utils/axiosRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/authContext'
import { useEffect } from 'react'

const MyGigs = () => {
const {user:currentUser} = useAuth()



  const fetchIndividuals = () => {
    const theData = newAxios
      .get(`/gigs?userId=${currentUser._id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));
    return theData;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["individuals"],
    queryFn: fetchIndividuals,
    enabled:!!currentUser?._id
  });
console.log(data)
console.log(currentUser?._id)

const queryClient = useQueryClient();

useEffect(() => {
  return () => {
    queryClient.removeQueries("individuals");
   
  };
}, [queryClient]);


const {
  mutate,
  isLoading: sendLoad,
  error: sendError,
} = useMutation({
  mutationFn: (id) => newAxios.delete(`/gigs/${id}`),
  onSuccess: () => {
    queryClient.invalidateQueries(["individuals"]);
  },
});




const handleDelete = async (id)=>{


  mutate(id)
}

if(!currentUser?.isSeller) return <p className='h-full w-full text-gray-700 flex items-center justify-center text-6xl capitalize py-20'> only for sellers</p>
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
              <th className='py-3'>Cat</th>
              <th className='py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
        
            {isLoading ? <tr><td>Loading...</td></tr> : error? <tr><td>something went wrong!</td></tr>:data?.map((el,i)=>(<tr key={el._id} className='odd:bg-teal-50 h-[60px]'>

              <td className=''><img src={el.cover} className='h-[40px]  object-contain' alt='img'/></td>
              <td className=''>{el.title}</td>
              <td className=''>$ {el.price}</td>
              <td className=''>{el.cat}</td>
              <td onClick={()=>handleDelete(el._id)} className=''><TrashIcon className='h-5 text-red-500 cursor-pointer' /></td>
            </tr>))}
            {data?.length === 0 && <tr><td>no gigs</td></tr>}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default MyGigs