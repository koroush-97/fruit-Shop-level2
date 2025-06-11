import { ImageView } from "@/components/common";
import { featuredCategoriesMock } from "@/mock/featuredCategories";
import Link from "next/link";

interface props {}

export function FeaturedCategories({}: props) {
  return (
    <div className="flex flex-wrap justify-between gap-[24px]">
      {featuredCategoriesMock.map((item, index) => {
        return (
          <Link
            style={{ backgroundImage: item.color }}
            key={index}
            href={item.link}
            className="flex flex-col justify-center items-center text-blue-300 bg-green-100 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl"
          >
            <ImageView
              classname={"mb-2 lg:mb-4"}
              src={item.img}
              alt="cat"
              height={84}
              width={93}
            />

            <h3 className="text-[12px] text-bold sm:text-heading-sm md:text-heading6 text-center">
              {item.title}
            </h3>
            <span className="text-xsmall text-gray-400 hidden lg:flex">
              {item.items} items
            </span>
          </Link>
        );
      })}
    </div>
  );
}
