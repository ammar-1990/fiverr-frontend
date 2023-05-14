import { Link } from "react-router-dom"

const CategoryCard = ({title,desc,image}) => {
  return (
    <Link to={'/gigs?cat=test'}>
    <div className='h-[300px] w-full'>
<p className='absolute left-2 top-2 text-gray-100 text-xs font-semibold capitalize'>{desc}</p>
<h1 className='absolute left-2 top-6 text-2xl text-white font-semibold capitalize'>{title}</h1>
<img className='h-full object-cover w-full' src={image} alt="" />

    </div>
    </Link>
  )
}

export default CategoryCard