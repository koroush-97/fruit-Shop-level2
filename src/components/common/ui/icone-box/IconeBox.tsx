import Link from "next/link";

interface props {
  icon: string;
  size?: number;
  link?: string;
  title?: string;
  hideTitleOnMobile?: boolean;
  badge?: number;
  titleClassname?: string;
  path?: number;
  linkclassname?: string;
}

export function IconeBox({
  icon,
  size = 22,
  link,
  title,
  hideTitleOnMobile = false,
  badge = 0,
  titleClassname = " text-medium text-gray-500 font-lato",
  path = 0,
  linkclassname = "",
}: props) {
  let span = [];
  for (let i = 1; i <= path; i++) {
    span.push(<span className={`path${i}`}></span>);
  }

  // TODO load menu data from api

  if (link) {
    return (
      <Link
        className={` flex items-center ${linkclassname} cursor-pointer`}
        href={link ?? "#"}
      >
        {badge ? (
          <div className="relative ">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
              {badge}
            </span>

            <i className={`${icon} text-[${size}px]`}>{span}</i>
          </div>
        ) : (
          <i className={`${icon} text-[${size}px]`}>{span}</i>
        )}

        {title && (
          <div
            className={` ml-1 ${
              hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"
            } ${titleClassname}`}
          >
            {title}
          </div>
        )}
      </Link>
    );
  } else {
    return (
      <>
        {badge ? (
          <div className="relative ">
            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
              {badge}
            </span>

            <i className={`${icon} text-[${size}px]`}>{span}</i>
          </div>
        ) : (
          <i className={`${icon} text-[${size}px]`}>{span}</i>
        )}

        {title && (
          <div
            className={` ml-1 ${
              hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"
            } ${titleClassname}`}
          >
            {title}
          </div>
        )}
      </>
    );
  }
}
