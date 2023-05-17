import { Link } from "react-router-dom"

const CategoryCard = ({title,desc,image}) => {
  return (
    <Link to={`/gigs?cat=${title}`}>
    <div className='h-[350px] w-full realtive group rounded-md overflow-hidden'>
      <div className="inset-0 absolute bg-black/50 group-hover:bg-black/20 duration-500 rounded-md " />

<h1 className='absolute left-2 top-12 text-2xl text-white font-semibold capitalize  '>{title}</h1>
<p className='absolute left-2 top-6 text-sm text-white font-semibold capitalize '>{desc}</p>
<img className='h-full object-cover w-full' src={image} alt="" />

    </div>
    </Link>
  )
}

export default CategoryCard