import { getMenuApiCall } from "@/api/Menu";
import { IconeBox } from "@/components/common";
import { browserCategoryMock } from "@/mock/browserCategory";
import { menuMock } from "@/mock/menu";
import { useQuery } from "@tanstack/react-query";

import Link from "next/link";

export function Menu() {
  const { data: menuData } = useQuery({
    queryKey: [getMenuApiCall.name],
    queryFn: () => getMenuApiCall(),
  });

  console.log("menuData", menuData);

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
          className=" hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default"
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

            {browserCategoryMock.map((item, index) => {
              return (
                <IconeBox
                  key={index}
                  icon={item.icon}
                  size={30}
                  title={item.title}
                  titleClassname={"text-heading-sm text-blue-300"}
                  linkclassname={
                    "flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                  }
                  path={item.iconPath}
                />
              );
            })}

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
          {menuMock.map((item, index) => {
            return (
              <li key={index}>
                {item.icon ? (
                  <IconeBox {...item} size={24} titleClassname="text-center" />
                ) : (
                  <Link href={item.icon} className="flex items-center gap-1">
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
