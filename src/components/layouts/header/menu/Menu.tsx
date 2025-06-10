import { IconeBox } from "@/components/common";
import Link from "next/link";

export function Menu() {
  return (
    <>
      <div
        id="all_categories"
        className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center"
      >
        <IconeBox icon={"icon-apps text-[24px]"} size={24} />

        <IconeBox
          icon={"text-medium"}
          size={24}
          title={"Browse All Categories"}
          link={"#"}
          titleClassname="text-medium"
        />

        <IconeBox icon={"icon-angle-small-down"} size={24} />
        <div
          id="all_categories_box"
          className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default"
        >
          <div
            id="all_cat_inner_box"
            className="flex flex-wrap justify-between gap-y-[15px]"
          >
            <IconeBox
              link={"#"}
              icon="icon-groceries-1"
              title="Milks and Dairies"
              size={30}
              titleClassname="text-heading-sm text-blue-300"
              path={7}
              linkclassname={
                "flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
              }
            />
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-drinks-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </i>
              <div className="text-heading-sm text-blue-300">
                Wines &amp; Drinks
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-dress-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>
              <div className="text-heading-sm text-blue-300">
                Clothing &amp; beauty
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-crab-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
              </i>
              <div className="text-heading-sm text-blue-300">Fresh Seafood</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-pet-food-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
              </i>
              <div className="text-heading-sm text-blue-300">
                Pet Foods &amp; Toy
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-sweet-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
              </i>
              <div className="text-heading-sm text-blue-300">Fast food</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-dairy-products-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </i>
              <div className="text-heading-sm text-blue-300">
                Baking material
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-grocery-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
              </i>
              <div className="text-heading-sm text-blue-300">Vegetables</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <i className="icon-fruit-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </i>
              <div className="text-heading-sm text-blue-300">Fresh Fruit</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
            >
              <span className="icon-milk-products-1 text-[30px]">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </span>
              <div className="text-heading-sm text-blue-300">
                Bread and Juice
              </div>
            </Link>
            <div
              id="more_categories"
              className="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]"
            >
              <i className="icon-add text-[24px]" />
              <div className="text-heading-sm text-blue-300">
                More Categories
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="main_menu">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
          <li>
            <Link href="#" className="flex flex-row gap-2 items-center">
              <i className="icon-flame text-[24px]" />
              <div className="text-heading6 lg:text-heading-sm xl:text-heading6">
                Hot Deals
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-row">
              Food
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-row">
              Vegetables
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
