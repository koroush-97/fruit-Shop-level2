interface props {
  sliderData: Array<any>;
  nextEl?: string;
  prevEl?: string;
}

import { ProductDealsCard } from "@/components/common";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function DealsOfTheDay({ nextEl, prevEl, sliderData }: props) {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      spaceBetween={16}
      slidesPerView={1}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      }}
    >
      {sliderData.map((slideData, index) => (
        <SwiperSlide key={index}>
          <ProductDealsCard data={slideData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
