import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    loop={true}
    centeredSlides={true}
        autoplay={{
          delay: 1900,
          disableOnInteraction: false,
        }}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: false }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img style={{width:"100%",height:"450px"}} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide><img style={{width:"100%",height:"450px"}} src="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width:"100%",height:"450px"}} src="https://transcosmos.co.uk/wp-content/uploads/2015/10/technology-customer-support1-2000x1200.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width:"100%",height:"450px"}} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" alt="" /></SwiperSlide>
         </Swiper>
  );
}

export default Slider