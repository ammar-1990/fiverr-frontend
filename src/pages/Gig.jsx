import { StarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fakeInfo } from "../fakeData";
import Info from "../components/Info";
import Review from "../components/Review";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

const Gig = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-4 pt-10 flex flex-col md:flex-row">
        <div className="flex flex-col gap-6 flex-[2] p-4">
          <p className=" text-gray-500">Fiver{">"}Graphic & Design</p>
          <h1 className=" text-2xl font-bold">
            I will create AI generated art for you
          </h1>
          <div className="flex gap-3 items-center ">
            <img
              src="/images/man.png"
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
            <p className="text-sm text-gray-600">username</p>
            <div className="flex gap-1 items-center text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-6 text-yellow-500" />
                ))}{" "}
              5
            </div>
          </div>
          {/* swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ enabled: true }}
            style={{
              padding: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            className="max-w-[700px] w-full flex-shrink  my-8 "
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="/images/man.png"
                className="max-h-[500px]  object-contain block mx-auto"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/man.png"
                className="max-h-[500px]  object-contain block mx-auto"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/man.png"
                className="max-h-[500px]  object-contain block mx-auto"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/man.png"
                className="max-h-[500px]  object-contain block mx-auto"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/man.png"
                className="max-h-[500px]  object-contain block mx-auto"
                alt="img"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="capitalize text-xl font-bold">About this gig</h1>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            deleniti doloremque libero ipsa nemo veniam officia perferendis
            exercitationem quidem distinctio odit hic expedita molestiae
            consequuntur beatae unde, sit quis officiis laborum inventore
            laudantium nostrum nihil? Pariatur, quos? Quisquam dolor magni eaque
            id necessitatibus illum voluptates obcaecati, fuga consectetur
            deserunt aliquid veritatis ducimus delectus enim ad, minus aliquam
            rerum amet animi possimus et? Ullam dolores quis optio. Repellat,
            blanditiis explicabo praesentium a nisi odio iusto laudantium?
          </p>

          <div className="my-5">
            <h1 className="text-gray-800 p-3 font-semibold text-xl">
              About The Seller
            </h1>
            <div className="flex items-center gap-5">
              <img
                src="/images/man.png"
                className="w-20 h-20 rounded-full"
                alt=""
              />
              <div className="flex flex-col gap-3">
                <p className="text-gray-600">username</p>
                <div className="flex gap-1 items-center text-yellow-500">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} className="h-6 text-yellow-500" />
                    ))}
                  5
                </div>
                <button className="px-3 py-2 self-start rounded-md text-gray-500 border border-gray-500 text-sm">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded-md">
            <div className="flex gap-5 flex-wrap pb-4">
              {fakeInfo.map((el, i) => (
                <Info key={i} {...el} />
              ))}
            </div>

            <p className="pt-4 text-gray-500 border border-b-0 border-l-0 border-r-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              natus impedit officia cumque iusto eveniet necessitatibus optio
              architecto unde nisi corporis totam ipsum vitae a repellendus?
              Ipsum et sequi vero velit rem veritatis. Repudiandae labore
              tempore iure temporibus est? Aut!
            </p>
          </div>
          <h3 className="font-bold text-2xl mt-10">Reviews</h3>
          <div>
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="border gap-5 p-4 rounded-md flex flex-col md:sticky md:top-[150px]">
            <div className="flex items-center justify-between">
              <p className="font-semibold">1 AI generated image</p>
              <span className="text-gray-500 text-lg">$ 59.99</span>
            </div>
            <p className="text-gray-400 text-sm">
              I will create a unique high quality AI generated image based on a
              description that you give me
            </p>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ClockIcon className="h-4 text-gray-500" />{" "}
                <span className="text-gray-600">2 Days Delivery</span>
              </span>
              <span className="flex items-center gap-2">
                <ArrowPathIcon className="h-5 text-gray-600 font-bold" />
                <span className="text-gray-500">3 Revesions</span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1"><CheckIcon className="h-4 text-green-400"/><span className="text-gray-400">Prompt Writing</span></div>
              <div className="flex items-center gap-1"><CheckIcon className="h-4 text-green-400"/><span className="text-gray-400">Artwork Delivery</span></div>
              <div className="flex items-center gap-1"><CheckIcon className="h-4 text-green-400"/><span className="text-gray-400">Image Upscaling</span></div>
              <div className="flex items-center gap-1"><CheckIcon className="h-4 text-green-400"/><span className="text-gray-400">Additional Design</span></div>
            </div>

            <button className="text-white bg-green-400 py-2 rounded-sm">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
