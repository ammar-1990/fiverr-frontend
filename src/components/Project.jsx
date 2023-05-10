import { Link } from "react-router-dom"

const Project = ({username,img,pp,cat}) => {
  return (
    <Link to='/'>
    <div className="shadow-md rounded-md overflow-hidden">
<img src={img} alt=""  className='h-[200px] w-full object-cover'/>
<div className='flex gap-4 items-center p-4'>
    <img src={pp} alt="" className='w-12 h-12 rounded-full object-cover' />
    <div className='flex flex-col gap-1 '>
        <span className='font-semibold'>{cat}</span>
        <span className='text-sm text-gray-600'>{username}</span>
    </div>
</div>

    </div>
    </Link>
  )
}

export default Project