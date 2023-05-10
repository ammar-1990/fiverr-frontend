import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { fakeGigs } from "../fakeData";
import GigCard from '../components/GigCard'

const Gigs = () => {

const [open, setOpen] = useState(false)
const [sort, setSort] = useState('sales')


const setTheSort=(type)=>{
setSort(type)
setOpen(false)
}

const data = fakeGigs
  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-4">
        <span className="py-10 block text-gray-500">
          Fiverr>Graphic& Designs
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
              className="outline-none p-2 border rounded-md"
              type="text"
              placeholder="min"
            />
            <input
              className="outline-none p-2 border rounded-md"
              type="text"
              placeholder="max"
            />
            <button className="px-4 py-1 text-white bg-green-400 rounded-md font-semibold">
              Apply
            </button>
          </div>
          <div className="flex items-center gap-4 relative">
            <span className="text-gray-500 text-sm">Sorting By</span>
            <span className="font-bold capitalize">{sort === 'sales' ? 'best selling' : 'newest'}</span>
            <ChevronDownIcon onClick={()=>setOpen(prev=>!prev)}  className="h-5 text-gray-500 cursor-pointer" />
          { open && <div className="absolute top-6 right-0 px-4 py-2 border rounded-md flex flex-col bg-white z-10">
            { sort ==='sales' && <span onClick={()=>setTheSort('createdAt')} className="cursor-pointer">Newest</span>}
           {  sort === 'createdAt' &&<span onClick={()=>setTheSort('sales')}  className="cursor-pointer">Best Selling</span>}
            </div>}
          </div>
        </div>

        <div className="flex gap-8 items-center justify-between flex-wrap my-20">
{data.map(gig=><GigCard key={gig.id} {...gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
