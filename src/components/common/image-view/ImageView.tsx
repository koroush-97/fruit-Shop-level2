import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
}

export function ImageView({ classname = "", src, alt, width, height }: Props) {
  return (
    <Image
      src={src}
      className={classname}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
