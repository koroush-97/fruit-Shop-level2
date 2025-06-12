import { IconeBox, SimpleProductCard } from "@/components/common";
import { miniProductSlider } from "@/mock/miniProductSlider";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  sliderData: Array<any>;
  nextEl?: string;
  prevEl?: string;
}

export function SimpleProductSlider({ sliderData, nextEl, prevEl }: Props) {
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
        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
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
