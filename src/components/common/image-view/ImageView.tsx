// import Image from "next/image";

// interface Props {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   classname?: string;
// }

// export function ImageView({ classname = "", src, alt, width, height }: Props) {
//   const isRemote = src.substring(0, 8) === "/uploads";
//   if (src)
//     return (
//       <Image
//         src={`${isRemote ? "https://nest.navaxcollege.com" + src : src} `}
//         className={classname}
//         alt={alt}
//         width={width}
//         height={height}
//       />
//     );
//   else {
//     return (
//       <Image
//         src={"/assets/image/Logo.png"}
//         className={classname}
//         alt={alt}
//         width={width}
//         height={height}
//       />
//     );
//   }
// }
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
}

export function ImageView({ classname = "", src, alt, width, height }: Props) {
  const isRemote = src.substring(0, 8) === "/uploads";
  if (src.length > 0)
    return (
      <Image
        src={`${isRemote ? "https://nest.navaxcollege.com" + src : src}`.trim()}
        className={classname}
        alt={alt}
        width={width}
        height={height}
      />
    );
  else {
    return (
      <Image
        src="/assets/images/Logo.png"
        className={classname}
        alt={alt}
        width={width}
        height={height}
      />
    );
  }
}
