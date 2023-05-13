import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryCard from './CategoryCard';
import Project from './Project';
const Slider = ({data,projects}) => {


  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {enabled: true},
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {enabled: true},
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {enabled: true},
    },
    780: {
      slidesPerView: 4,
      spaceBetween: 21,
      navigation: {enabled: true},
    },
    1000: {
      slidesPerView: projects ? 4 : 5,
      spaceBetween: 21,
      navigation: {enabled: true},
      
      
    }
  };


  return (
    <Swiper
    modules={[Navigation, Pagination]}

    breakpoints={breakpoints}
    navigation={{enabled:true}}
 style={{padding:"20px",paddingTop:'10px',paddingBottom:'10px'}}
 
    className='mx-auto max-w-[1200px] overflow-auto my-28 '
      spaceBetween={20}
      slidesPerView={5}
 
      
    >
        {projects ? data.map(el=><SwiperSlide key={el.id}><Project {...el} /></SwiperSlide>) : data.map(el=><SwiperSlide key={el.id}><CategoryCard {...el} /></SwiperSlide>)}
    

    </Swiper>
  )
}

export default Slider