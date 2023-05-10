import { fakeFeatures } from "../fakeData"
import Feature from "./Feature"


const Features = () => {

    const data = fakeFeatures
  return (
    <div className="bg-[#f1fdf7] py-28" >
<div className="max-w-[1200px] mx-auto flex items-center justify-center gap-12 flex-col lg:flex-row p-4">
<div className="">
    <h1 className="sm:text-3xl font-bold text-xl">A whole world of freelance talent <br/>at your fingertips</h1>
    <div className="max-w-[500px]">
    {data.map((el,i)=><Feature key={i} {...el} />)}
    </div>

</div>
<div><video src="/videos/test.mp4" controls className="max-w-[620px] w-full" /></div>
</div>

    </div>
  )
}

export default Features