import { Link } from "react-router-dom"

const FooterComponent = ({el}) => {
  return (
    <div className='p-6 flex-shrink-0'>
        <h1 className='text-lg font-semibold'>{el.title}</h1>
        <div>
          {  el.content.map((ele,i)=><p key={i} className='py-3 text-gray-600 hover:underline'><Link to='/'>{ele}</Link></p>)}
        </div>
    </div>
  )
}

export default FooterComponent