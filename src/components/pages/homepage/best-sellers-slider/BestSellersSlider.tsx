import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimpleProductCard } from "@/components/common";

interface props {
  sliderData: Array<any>;
  nextEl?: string;
  prevEl?: string;
}

export default function BestSellersSlider({
  sliderData,
  nextEl,
  prevEl,
}: props) {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      spaceBetween={16}
      slidesPerView={2}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      }}
    >
      {sliderData.map((slideData, index) => (
        <SwiperSlide key={index}>
          <SimpleProductCard data={slideData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
