import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

import GigCard from '../components/GigCard'
import { useQuery } from "@tanstack/react-query";
import newAxios from '../utils/axiosRequest'
import { useLocation } from "react-router-dom";


const Gigs = () => {
const {search} = useLocation()
const [open, setOpen] = useState(false)
const [sort, setSort] = useState('price')
const minRef = useRef()
const maxRef = useRef()
  const fetchGigs = ()=>{
 const theData =newAxios.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res=>res.data)
 return theData
  }

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: fetchGigs
  })

  console.log(data)

useEffect(()=>{refetch();console.log(sort)},[sort,refetch])






const setTheSort=(type)=>{
setSort(type)
setOpen(false)
}

const apply = ()=>{
  refetch()
}
  return (
    <div className="overflow-hidden">
      <div className="max-w-[1200px] mx-auto p-4">
        <span className="py-10 block text-gray-500">
          Fiverr{'>'}Graphic& Designs
        </span>
        <h1 className="text-3xl font-bold py-4">AI Artists</h1>
        <p className="text-gray-500">
          Explore the boundaries of art and technologies with Fiverr's AI
          artists
        </p>
        <div className="flex justify-between items-center">
          <div className="flex  gap-3 py-4">
            <span className="text-gray-500 self-center text-lg">Budget</span>
            <input
            ref={minRef}
              className="outline-none p-2 border rounded-md"
              type="text"
              placeholder="min"
            />
            <input
            ref={maxRef}
              className="outline-none p-2 border rounded-md"
              type="text"
              placeholder="max"
            />
            <button onClick={apply} className="px-4 py-1 text-white bg-green-400 rounded-md font-semibold">
              Apply
            </button>
          </div>
          <div className="flex items-center gap-4 relative">
            <span className="text-gray-500 text-sm">Sorting By</span>
            <span className="font-bold capitalize">{sort === 'price' ? 'best selling' : 'newest'}</span>
            <ChevronDownIcon onClick={()=>setOpen(prev=>!prev)}  className="h-5 text-gray-500 cursor-pointer" />
          { open && <div className="absolute top-6 right-0 px-4 py-2 border rounded-md flex flex-col bg-white z-10">
            { sort ==='price' && <span onClick={()=>setTheSort('createdAt')} className="cursor-pointer">Newest</span>}
          {  sort === 'createdAt' &&<span onClick={()=>setTheSort('price')}  className="cursor-pointer">Best Selling</span>}
            </div>}
          </div>
        </div>

        <div className="flex gap-8 items-center justify-center md:justify-between flex-wrap my-20">
{isLoading ? 'Loading' : error ? 'something went wrong' : data?.map(gig=><GigCard key={gig._id} {...gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
