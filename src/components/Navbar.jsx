import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import newAxios from "../utils/axiosRequest";

const Navbar = () => {
  const { user: currentUser,loading,dispatch } = useAuth();
  const { pathname } = useLocation();
  console.log(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutHandler = async () => {
    try {

      await newAxios.post('auths/logout')
      localStorage.removeItem('currentUser')
      dispatch({type:'LOGOUT'})
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <header
      className={`sticky top-0   ${
        scrolled || pathname !== "/" ? "bg-white" : "bg-green-900 "
      } duration-500 ease-out z-10`}
    >
      <div className="max-w-[1200px]  mx-auto flex justify-between items-center py-5 px-3">
        <Link to={"/"}>
          <div
            className={`font-bold text-3xl  ${
              scrolled || pathname !== "/" ? "text-black" : "text-white"
            }`}
          >
            fiverr<span className="text-green-300">.</span>
          </div>
        </Link>
       {!loading && <nav
          className={`flex gap-3 md:gap-10 text-xs md:text-base ${
            scrolled || pathname !== "/" ? "text-black" : "text-white"
          } font-semibold text-sm items-center`}
        >
          <span className="navLink  hidden sm:block ">Fiver business</span>
          <span className="navLink hidden sm:block">Explore</span>
          <span className="navLink hidden sm:block">English</span>
          {!currentUser && <Link to='/login' className="navLink">Sign in</Link>}
          {!currentUser?.isSeller && (
            <span className="navLink">Become a seller</span>
          )}
          {!currentUser && (
           <Link to='/register'><button  className="p-2 px-4 border-white border rounded-lg  hover:border-green-400 hover:bg-green-400">
              Join
            </button></Link> 
          )}
          {currentUser && (
            <div
              onClick={() => setShowMenu((prev) => !prev)}
              className="relative flex items-center  gap-4 cursor-pointer"
            >
              <img
                className="h-8 rounded-full object-cover "
                src={
                  currentUser.img ||
                  "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                }
                alt="profile"
              />
              <span className='capitalize'>{currentUser?.username}</span>
              {showMenu && (
                <div className="p-6 flex flex-col gap-3 absolute top-12  bg-white border rounded-lg w-56 right-0 text-gray-500">
                  {currentUser?.isSeller && (
                    <div className="flex flex-col gap-3">
                      <Link  className="hover:bg-gray-300 hover:text-white  px-4 py-2 rounded-md w-full " to={"/mygigs"}>
                        <span >Gigs</span>
                      </Link>
                      <Link className="hover:bg-gray-300 hover:text-white  px-4 py-2 rounded-md w-full " to={"/add"}>
                        <span >Add new gig</span>
                      </Link>
                    </div>
                  )}
                  <Link className="hover:bg-gray-300 hover:text-white  px-4 py-2 rounded-md w-full " to={"/orders"}>
                    <span >Orders</span>
                  </Link>
                  <Link className="hover:bg-gray-300 hover:text-white  px-4 py-2 rounded-md w-full " to={"/messages"}>
                    <span >Messages</span>
                  </Link>
                  <span className="hover:bg-gray-300 hover:text-white  px-4 py-2 rounded-md w-full " onClick={logoutHandler}>Log out</span>
                </div>
              )}
            </div>
          )}
        </nav>}
      </div>
      {(scrolled || pathname !== "/") && (
        <div className="border border-l-0 border-r-0 border-gray-400">
          <div className="max-w-[1200px] mx-auto flex justify-between  py-1 text-gray-500 overflow-x-scroll gap-8 scroll myScroll">
            <Link className="flex-shrink-0" to={"/"}>
              <span>Graphics & Design</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              <span>Video & Animation</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              <span>Writing & Translation</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              {" "}
              <span>AI Services</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              <span>Digital Marketing</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              <span>Music & Audio</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              <span>Programming & Tech</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              {" "}
              <span>Business</span>
            </Link>
            <Link className="flex-shrink-0" to={"/"}>
              {" "}
              <span>Lifestyle</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
