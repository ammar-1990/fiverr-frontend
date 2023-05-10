import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Featured = () => {
  return (
    <div className=' bg-green-900'> 
        
        <div className='max-w-[1200px] mx-auto flex md:items-center flex-col lg:flex-row p-4 lg:p-3 lg:pb-0 pb-0'>
    <section className='space-y-10 lg:w-[70%] '>
        {/* text */}
    <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-white whitespace-nowrap'>Find the perfect <span className='italic font-[300]'> freelance</span> services <br/>for your business</h1>
    {/* inout */}
    <div className='flex w-full '>
        <div className=' flex-1 flex gap-1  min-w-[25px] items-center bg-white p-2 rounded-l-md'>
<MagnifyingGlassIcon className='h-6 text-gray-500' />
<input type='text' className='p-1 flex-1 min-w-[25px] outline-none' />

        </div>
        <button className='text-white px-4 bg-green-400 rounded-r-md'>Search</button>
    </div>
    {/* buttons */}

    <div className='flex items-start gap-4 w-full text-white sm:text-base text-xs'>
        <span>Popular:</span>
        <div className='flex flex-wrap gap-2'>
        <button className='border px-3 py-1 rounded-full  flex-shrink-0'>Web Design</button>
        <button className='border px-3 py-1 rounded-full flex-shrink-0'>WordPress</button>
        <button className='border px-3 py-1 rounded-full flex-shrink-0'>Logo Design</button>
        <button className='border px-3 py-1 rounded-full flex-shrink-0'>All Services</button>
        </div>
     
    </div>
    </section>
    <section> 
        <img src='/images/man.png'  alt='person'  className='object-contain'/>
    </section>
   
        </div></div>
   
  )
}

export default Featured