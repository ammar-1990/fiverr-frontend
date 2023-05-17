import { Link } from "react-router-dom"

const CategoryCard = ({title,desc,image}) => {
  return (
    <Link to={`/gigs?cat=${title}`}>
    <div className='h-[300px] w-full'>

<h1 className='absolute left-2 top-6 text-sm text-white font-semibold capitalize p-1 bg-slate-800 rounded-lg'>{title}</h1>
<img className='h-full object-cover w-full' src={image} alt="" />

    </div>
    </Link>
  )
}

export default CategoryCard