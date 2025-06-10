import React from "react";
import { IconeBox, ImageView } from "@/components/common";
import { Logo } from "@/components/common";
import Link from "next/link";
import { SearchForm } from "./search-form";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="mb-[33px]">
      <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
        <Logo />
        <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
          <SearchForm inputclassname={"py-[15px]"} />
        </div>

        <ul className="hidden lg:flex gap-5">
          <li className="flex gap-2 cursor-pointer">
            <IconeBox
              icon="icon-user"
              size={24}
              title="Account"
              link="#"
              hideTitleOnMobile={true}
              badge={0}
              linkclassname="flex items-center justify-between"
              titleClassname="ml-2 ml-2 text-medium text-gray-500"
            />
          </li>
          <li className="flex gap-2 cursor-pointer">
            <IconeBox
              icon="icon-shopping-cart"
              size={24}
              title={"Card"}
              link="#"
              badge={2}
              hideTitleOnMobile={true}
              linkclassname="flex items-center "
              titleClassname="ml-2 text-medium text-gray-500"
            />
          </li>
        </ul>
        <button
          id="menu_btn"
          className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]"
        >
          <span className="w-full h-[1.5px] bg-black inline-block rounded" />
          <span className="w-full h-[1.5px] bg-black inline-block rounded" />
          <span className="w-full h-[1.5px] bg-black inline-block rounded" />
        </button>
      </div>
      <div className="border-gray-200 border-y h">
        <div className="container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex absolute top-0 bottom-0 -left-[100%] lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50">
          <Menu />

          <div className="hidden lg:flex items-center shrink-0 gap-3">
            <IconeBox
              icon={
                "icon-headset  xl:text-[32px] 2xl:text-[36px] aspect-square"
              }
              size={30}
              link={"#"}
            />

            <div>
              <Link
                href="tel:19008888"
                className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4"
              >
                1900-8888
              </Link>
              <div className="font-lato text-xsmall">
                <span className="hidden xl:inline-block">24/7 </span>Support
                Center
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px]  items-end">
          <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px] ">
            <SearchForm />
          </div>
          <ul className="flex gap-5 items-center justify-center h-auto ">
            <li className="flex gap-2 cursor-pointer">
              <IconeBox
                icon="icon-user"
                size={24}
                title="Account"
                link="#"
                hideTitleOnMobile={true}
                linkclassname="flex items-center justify-between"
                titleClassname="ml-2 ml-2 text-medium text-gray-500"
              />
            </li>
            <li className="flex gap-2 cursor-pointer">
              <IconeBox
                icon="icon-shopping-cart"
                size={24}
                title={"Card"}
                link="#"
                hideTitleOnMobile={true}
                linkclassname="flex items-center "
                titleClassname="ml-2 text-medium text-gray-500"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
