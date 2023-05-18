import Review from "./Review"
import newAxios from '../utils/axiosRequest'
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Reviews = ({id}) => {


    const [desc,setDesc]=useState('')
    const [star,setStar]=useState('')
   
    const fetchReviews = () => {

       
        const theData = newAxios
          .get(`/reviews/${id}`)
          .then((res) => res.data)
          .catch((err) => console.log(err.response.data));
        return theData;
      };
    const queryClient = useQueryClient()
      const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: fetchReviews,
      });

      const {mutate,isLoading:loading,error:reError} = useMutation({
        mutationFn:(review)=>newAxios.post('/reviews',review),onSuccess:()=>{queryClient.invalidateQueries(['reviews'])}
      })

    
      
const handleSubmit = (e)=>{
e.preventDefault()




mutate({gigId:id,desc,star})

setDesc('');
setStar('')

}

  return (

    <div>
<h3 className="font-bold text-2xl my-10">Reviews</h3>

{isLoading ? 'Loading...':error? "something went wrong" :(
    <div>
        {data?.map((review)=><Review key={review._id} {...review} />)}
    </div>
)
}


<form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
<h3 className="text-xl text-gray-600 py-4">Add a review</h3>

<input type="text" className="input" placeholder="How do you think" onChange={e=>setDesc(e.target.value)} value={desc} />
<select className="input cursor-pointer" onChange={e=>setStar(e.target.value)}>
    <option value="1">1 start</option>
    <option value="2">2 start</option>
    <option value="3">3 start</option>
    <option value="4">4 start</option>
    <option value="5">5 start</option>
</select>
<button disabled={!desc || !star || loading} className="text-white bg-green-400 py-3 disabled:bg-gray-400 ">{loading? 'Loading':'Send'}</button>
{reError && <p className="text-red-400 text-xs uppercase">{reError.response.data}</p>}

</form>


    </div>
  )
}

export default Reviews