import { Banner, DealsOfTheDay, IconeBox, Section } from "@/components";
import { FeaturedCategories, MiniProductSlider } from "@/components";
import { SimpleProductSlider } from "@/components";
import { popularProducts } from "@/mock/PopularProducts";
import { PopularFruit } from "@/mock/PopularFruit";
import BestSellersSlider from "@/components/pages/homepage/best-sellers-slider/BestSellersSlider";
import { BestSellers } from "@/mock/BestSellers";

import { DealsOfTheDaysMock } from "@/mock/DealsOfTheDayMock";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section>
        <Banner
          bgImage="/assets/images/banner_bg.png"
          image="/assets/images/fresh-apples.png"
          subtitle="Sign up for the daily newsletter"
          title="Dont miss amazing grocey deals"
        />
      </Section>

      <Section>
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300"> Featured Categories </h2>
        </div>
        <FeaturedCategories />
      </Section>

      <Section>
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300"> Featured Categories </h2>
        </div>
        <MiniProductSlider />
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
          <div className="flex items-center gap-3">
            <IconeBox
              icon="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
            <IconeBox
              icon="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
          </div>
        </div>

        <SimpleProductSlider
          nextEl=".swiper-nav-right"
          prevEl=".swiper-nav-left"
          sliderData={popularProducts}
        />
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
          <div className="flex items-center gap-3">
            <IconeBox
              icon="swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
            <IconeBox
              icon="swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"
              size={24}
            />
          </div>
        </div>
        <SimpleProductSlider
          nextEl=".swiper-nav-right2"
          prevEl=".swiper-nav-left2"
          sliderData={PopularFruit}
        />
      </Section>

      <Section>
        <div>
          <div className="flex justify-between mb-[50px]">
            <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
              Best Sellers
            </h2>
          </div>
          <div className="flex gap-[24px]">
            <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
              <h3 className="text-heading2 text-blue-300">
                Bring nature into your home
              </h3>
              <a
                href="#"
                className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5"
              >
                <div className="text-xsmall text-white">Shop now</div>
                <i className="icon-arrow-small-right text-[24px]" />
              </a>
            </div>
            <BestSellersSlider sliderData={BestSellers} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex justify-between items-center mb-[50px]">
          <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
            Deals Of The Days
          </h2>
          <Link className="flex items-center" href="#">
            All Deals <IconeBox icon={"icon-angle-small-right "} size={24} />
          </Link>
        </div>

        <DealsOfTheDay sliderData={DealsOfTheDaysMock} />
      </Section>
    </>
  );
}
