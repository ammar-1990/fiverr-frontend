import {CheckCircleIcon} from '@heroicons/react/24/outline'

const Feature = ({title,desc,white}) => {
  return (
    <div className={`flex flex-col ${white ? 'my-1' :"my-8" } `}>
       <div    className='flex items-center gap-2 '> 
<CheckCircleIcon className='h-6 text-gray-400' />
       <h3 className={`${white ? 'text-white' :'text-gray-500' } font-semibold`}>{title}</h3>
     

        </div>
        <p className='text-gray-400 mt-4'>{desc}</p>
    </div>
  )
}

export default Feature