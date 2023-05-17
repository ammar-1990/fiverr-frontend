
import Featured from "../components/Featured"
import Slider from "../components/Slider"
import TrustedBy from "../components/TrustedBy"
import Features from "../components/Features"
import { fakeData } from "../fakeData"
import FeaturesTwo from "../components/FeaturesTwo"
import { useEffect } from "react"
import newAxios from '../utils/axiosRequest'
import { useQuery, useQueryClient } from "@tanstack/react-query"



const Home = () => {
 
  const {
    isLoading,
    error,
    data:many,
   
  } = useQuery({
    queryKey: ["many"],
    queryFn: () => {
      const theData = newAxios
        .get(`/gigs/many`)
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));
      return theData;

    },
    
  });

  console.log(many)

  const queryClient = useQueryClient();
useEffect(()=>{

  return ()=>{  queryClient.removeQueries("many");
}


},[queryClient])

const data = fakeData


  return (
    <div >
<Featured />
<TrustedBy />
<Slider data={data} category={true} />
<Features />
<FeaturesTwo />
{isLoading ? 'Loading..' : error ? 'something went wrong' : <Slider data={many} projects={true} />}

      
    </div>
  )
}

export default Home