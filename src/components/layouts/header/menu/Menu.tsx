import { IconeBox } from "@/components/common";
import { useMenu } from "@/hooks/use-menu";
import { EntityType, MenuItemType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Menu() {
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

  const { data: mainMenuItems } = useMenu({ position: "main_menu" });
  const { data: categoryMenuItems } = useMenu({ position: "brows-category" });

  const categoriesMenuClickHandler = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    e.stopPropagation();
    setShowCategoryMenu((prevState) => !prevState);
  };

  const categoryBodyClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const clickHandler = () => {
      setShowCategoryMenu(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <>
      <div id="all_categories" className="relative">
        <div
          onClick={categoriesMenuClickHandler}
          className="inline-flex  cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center"
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
        </div>

        <div
          id="all_categories_box"
          onClick={categoryBodyClickHandler}
          className={`${
            showCategoryMenu ? "flex" : "hidden"
          } lg:absolute z-20 bg-white left-0 top-16 w-full  md:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 lg:p-[30px] hover:cursor-default`}
        >
          <div
            id="all_cat_inner_box"
            className=" flex flex-wrap justify-between w-full gap-y-[15px]"
          >
            {categoryMenuItems &&
              categoryMenuItems.data.map(
                (item: EntityType<MenuItemType>, index: number) => {
                  return (
                    <IconeBox
                      key={index}
                      linkclassname={
                        "flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"
                      }
                      link={item.attributes.link}
                      icon={item.attributes.icon_name}
                      size={30}
                      title={item.attributes.title}
                      titleClassname="text-heading-sm text-blue-300"
                      path={item.attributes.icon_path}
                    />
                  );
                }
              )}

            <div
              id="more_categories"
              className="cursor-pointer flex gap-4 items-center lg:text-center lg:justify-center w-full mt-[17px]"
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
          {mainMenuItems &&
            mainMenuItems.data.map(
              (item: EntityType<MenuItemType>, index: number) => {
                return (
                  <li key={index}>
                    {item.attributes.icon_name ? (
                      <IconeBox
                        titleClassname="text-black"
                        link={item.attributes.link}
                        icon={item.attributes.icon_name}
                        title={item.attributes.title}
                        size={24}
                      />
                    ) : (
                      <Link
                        href={item.attributes.link}
                        className="flex items-center gap-1"
                      >
                        {item.attributes.title}
                      </Link>
                    )}
                  </li>
                );
              }
            )}
        </ul>
      </nav>
    </>
  );
}
