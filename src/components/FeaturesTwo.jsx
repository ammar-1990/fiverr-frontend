import Feature from './Feature'
import { secondFeatures } from '../fakeData'

const FeaturesTwo = () => {
    const data = secondFeatures
  return (
<div className="bg-[#0d084d] text-white py-28" >
<div className="max-w-[1200px] mx-auto flex items-center justify-center gap-12 flex-col lg:flex-row p-4">
<div className="flex-shrink-0 flex-[1]">
    <div className='flex items-center gap-3'><p className='text-3xl py-5'><span className='font-bold'>fiverr</span> business.</p> <span className='flex items-center justify-center px-3  bg-blue-600 rounded-full'>new</span></div>
    <h1 className="text-3xl font-bold">A solution built for <span className='italic font-semibold'>business</span></h1>
    <p className='text-lg my-6'>Upgrade to a curated experience to access vetted <br/> talent and exclusive tools</p>
    <div className="max-w-[500px] mb-12">
    {data.map((el,i)=><Feature white key={i} {...el} />)}
    </div>
<button className='text-white rounded-md bg-green-400 px-4 py-2 hover:bg-green-500 mt-'>Explore Fiverr Business</button>
</div>
<div className='flex-[1]'><img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" /></div>
</div>

    </div>
  )
}

export default FeaturesTwo