import Link from "next/link";
import { ImageView } from "../../image-view";

export function Logo() {
  return (
    <Link href={"/"}>
      <ImageView
        classname={"w-[117px] lg:w-[242px]"}
        src={"/assets/images/Logo.png"}
        height={66}
        alt={"logo"}
        width={242}
      />
    </Link>
  );
}
