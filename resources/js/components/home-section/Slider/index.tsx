// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
// import { slide1, slide2, slide3 } from ''
import { slide1, slide2, slide3 } from '@/assets/images/slide';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const photos = [slide1, slide2, slide3];

const Slider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full select-none lg:w-0 ${className}`}>
      {/* slide */}
      <div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          {photos.map((photo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-white text-center text-[18px]"
            >
              <img
                src={photo}
                alt=""
                className="block h-auto w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* list */}
      <div></div>
    </div>
  );
};

export default Slider;
