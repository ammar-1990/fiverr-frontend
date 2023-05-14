import { useState } from "react";
import newAxios from "../utils/axiosRequest";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const {dispatch} = useAuth()


  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await newAxios.post(
        "/auths/login",
        {
          username,
          password,
        },
 
      );
      console.log(res.data);
      dispatch({type:'LOGIN',payload:res.data})
      localStorage.setItem('currentUser',JSON.stringify(res.data))
      navigate('/')
      setUsername('')
      setPassword('')
      setError('')
    } catch (err) {
      console.log(err);
      setError(err.response.data)
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandle}
        className="max-w-[500px] min-w-[350px] mx-auto mt-[200px] flex flex-col gap-4 p-4"
      >
        <h1 className="text-4xl font-bold text-zinc-600 mb-[50px]">Sign in </h1>
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="input"
          required
          type="text"
          placeholder="enter your email"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input"
          required
          type="password"
          placeholder="enter your password"
        />
        <button
          disabled={!username || !password}
          className="bg-green-400 text-white font-bold py-4 mt-[20px] disabled:bg-gray-500"
          >
          Login
        </button>
          {error && <p className="text-red-400 text-sm py-2">{error}</p>}


          <p>don't have an account? <span className="hover:underline"><Link to={'/register'}>Sign up.</Link></span></p>
      </form>
    </div>
  );
};

export default Login;
