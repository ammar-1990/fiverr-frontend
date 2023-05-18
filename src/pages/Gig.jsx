import { StarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Info from "../components/Info";
import { useQueryClient } from "@tanstack/react-query";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import newAxios from "../utils/axiosRequest";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";

const Gig = () => {
  const params = useParams();
  const id = params.id;
  const [errorGig,setErrorGig] = useState('')

  const fetchGigs = () => {
    const theData = newAxios
      .get(`/gigs/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));
    return theData;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["singleGig"],
    queryFn: fetchGigs,
  });

const userId = data?.userId
  const {
    isLoading: isLoadngUser,
    error: errorUser,
    data: dataUser,
   
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const theData = newAxios
        .get(`/users/${data?.userId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));
      return theData;
    },
    enabled:!!userId
  });

  const queryClient = useQueryClient();


  useEffect(() => {
    return () => {
      queryClient.removeQueries("user");
      queryClient.removeQueries("singleGig");
    };
  }, [queryClient]);


const navigate = useNavigate()

  const handleOrder = async ()=>{
    setErrorGig('')
try {
  const res = await newAxios.post(`/orders/${id}`)

  navigate('/orders')
} catch (error) {
setErrorGig(error.response.data)
}
   
  }
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="max-w-[1200px] mx-auto p-4 pt-10 flex flex-col lg:flex-row">
          <div className="flex flex-col gap-6 flex-[2] p-4">
            <p className=" text-gray-500">Fiver{">"}Graphic & Design</p>
            <h1 className=" text-2xl font-bold capitalize">{data?.title}</h1>
            {isLoadngUser ? (
              "Loading..."
            ) : error ? (
              "Something went wrong"
            ) : (
              <div className="flex gap-3 items-center ">
                <img
                  src={
                    dataUser?.img ||
                    "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                  }
                  className="w-12 h-12 rounded-full object-contain"
                  alt=""
                />
                <p className="text-sm text-gray-600 capitalize">
                  {dataUser?.username}
                </p>
                <div className="flex gap-1 items-center text-yellow-500">
                  {!isNaN(Math.round(data?.totalStars / data?.startNumber)) &&
                    Array(Math.round(data?.totalStars / data?.startNumber))
                      .fill()
                      .map((_, i) => (
                        <StarIcon key={i} className="h-6 text-yellow-500" />
                      ))}{" "}
                  {!isNaN(Math.round(data?.totalStars / data?.startNumber)) &&
                    Math.round(data?.totalStars / data?.startNumber)}
                </div>
              </div>
            )}
            {/* swiper */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              navigation={{ enabled: true }}
              style={{
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              className="max-w-[700px] w-full flex-shrink  my-8 bg-gray-100 "
              slidesPerView={1}
            >
              {data?.images.map((el, i) => (
                <SwiperSlide key={i}>
                  <img
                    className="max-h-[400px]  object-contain block mx-auto"
                    src={el}
                    alt="img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h1 className="capitalize text-xl font-bold">About this gig</h1>
            <p className="text-gray-700">{data?.desc}</p>

            {isLoadngUser ? (
              "Loading"
            ) : errorUser ? (
              "Someting went wrong"
            ) : (
              <div className="my-5">
                <h1 className="text-gray-800 p-3 font-semibold text-xl">
                  About The Seller
                </h1>
                <div className="flex items-center gap-5">
                  <img
                    src={
                      dataUser?.img ||
                      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                    }
                    className="w-16 h-16 rounded-full object-contain cursor-pointer shadow-sm shadow-black"
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-gray-600 capitalize">
                      {dataUser?.username}
                    </p>
                    <div className="flex gap-1 items-center text-yellow-500">
                      {!isNaN(
                        Math.round(data?.totalStars / data?.startNumber)
                      ) &&
                        Array(Math.round(data?.totalStars / data?.startNumber))
                          .fill()
                          .map((_, i) => (
                            <StarIcon key={i} className="h-6 text-yellow-500" />
                          ))}{" "}
                      {!isNaN(
                        Math.round(data?.totalStars / data?.startNumber)
                      ) && Math.round(data?.totalStars / data?.startNumber)}
                    </div>
                    <button className="px-3 py-2 self-start rounded-md text-gray-500 border border-gray-500 text-sm">
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="p-4 border rounded-md">
              <div className="flex gap-5 flex-wrap pb-4">
                <Info title={"From"} info={dataUser?.country} />
                <Info title={"Avg Response time"} info={"3 hours"} />
                <Info title={"Member since"} info={"Aug 2022"} />
                <Info title={"Last delivery"} info={"One day"} />
                <Info title={"Language"} info={"English"} />
              </div>

              <p className="pt-4 text-gray-500 border border-b-0 border-l-0 border-r-0">
                {dataUser?.desc}
              </p>
            </div>
            <Reviews id={id} />
          </div>
          <div className="flex-1 ">
            <div className="border gap-5 p-4 rounded-md flex flex-col md:sticky md:top-[150px]">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{data?.shortTitle}</p>
                <span className="text-gray-500 text-lg">$ {data?.price}</span>
              </div>
              <p className="text-gray-400 text-sm">{data?.shortDesc}</p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ClockIcon className="h-4 text-gray-500" />{" "}
                  <span className="text-gray-600">
                    {data?.deliveryTime} Days Delivery
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <ArrowPathIcon className="h-5 text-gray-600 font-bold" />
                  <span className="text-gray-500">
                    {data?.revesionNumber} Revesions
                  </span>
                </span>
              </div>

              <div>
                {data?.features.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <CheckIcon className="h-4 text-green-400" />
                    <span className="text-gray-400">{el}</span>
                  </div>
                ))}
              </div>

              <button onClick={handleOrder} className="text-white bg-green-400 py-2 rounded-sm">
                Continue
              </button>
              {errorGig&&<p className="text-red-500 text-sm py-6">{errorGig}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
