

const Info = ({title,info}) => {
  return (
    <div className="flex flex-col  min-w-[40%] flex-shrink-0 flex-1">
        <h4 className="text-gray-500">{title}</h4>
        <p>{info}</p>
    </div>
  )
}

export default Info