import { useState } from "react";
import axios from 'axios'
import newAxios from '../utils/axiosRequest'
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [country, setCountry] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const [file, setFile] = useState(null);
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState('')

const {dispatch} = useAuth()

const navigate = useNavigate()
  const upload = async(file)=>{
    if(!file) {
      return ''
    }
const data = new FormData()
data.append('file',file)
data.append('upload_preset','fiverr')


try{
const res = await axios.post('https://api.cloudinary.com/v1_1/drhzjli1l/image/upload',data)
const {url} = res.data

return url

}catch(err){
console.log(err)


}
  }



 const handleSubmit = async (e)=>{
  setLoading(true)
  setError('')
e.preventDefault()
 const img = await upload(file)
  const theUser  ={username,email,password,country,img,isSeller,phone,desc}
  try{
  
    await newAxios.post('/auths/register',theUser)
    dispatch({type:'LOGIN',payload:theUser})
    localStorage.setItem('currentUser',JSON.stringify(theUser))
    navigate('/')
 
  }catch(err){
    setError(err.response.data)
console.log(err)
  }finally{
    setLoading(false)
    setUsername('')
    setEmail('')
    setPassword('')
    setPhone('')
    setDesc('')
    setFile(null)
    setCountry('')
    setIsSeller(false)
   
   
  
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-[800px] flex  gap-10 flex-col md:flex-row mx-auto mt-[50px] p-2">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className=" text-zinc-700 text-3xl font-semibold">
            Create a new account
          </h1>
          <label className="capitalize ">username</label>
          <input
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="input"
            type="text"
            placeholder="enter your name"
          />
          <label className="capitalize ">email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input"
            type="email"
            placeholder="enter your email"
          />
          <label className="capitalize">password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            placeholder="enter your password"
          />
          <label className="capitalize ">profile picture</label>
          <input
            className="input"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="capitalize ">country</label>
          <input
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            className="input"
            type="text"
            placeholder="enter your country"
          />
          <button disabled={!username || !email || !password || !country || loading} className={`bg-green-400 text-white font-bold py-3 disabled:bg-gray-400`}>
         {loading ? 'Loading...' : 'Register'}
          </button>

          <p>back to <span className="hover:underline"><Link to={'/login'}>Login.</Link></span></p>

          {error &&<p className="text-sm text-red-400 py-4">{error}</p>}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h1 className=" text-zinc-700 text-3xl font-semibold">
            I want to become a seller
          </h1>
          <div className="flex gap-5">
            <span>Activate the seller account</span>
            <div
              onClick={() => setIsSeller((prev) => !prev)}
              className={`w-[65px] relative p-3 px-1 h-[12px] bg-gray-300 rounded-full flex items-center cursor-pointer duration-300  ${
                isSeller ? " bg-green-400" : "bg-zinc-300"
              }  `}
            >
              <div
                className={` absolute ease-in-out transition-all duration-300 ${
                  isSeller ? "right-0 " : "right-[70%] "
                } w-[20px] h-[20px] rounded-full  bg-white`}
              ></div>
            </div>
          </div>

          <label className="capitalize ">phone number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="input"
            type="text"
            placeholder="enter a phone number"
          />
          <label className="capitalize ">Description</label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className="resize-none h-40 input"
            placeholder="A short description about yourself"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
