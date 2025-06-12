import { IconeBox } from "../icone-box";

interface Props {
  rate: number;
}

export function Rating({ rate }: Props) {
  let stare = [];
  let notstart = [];

  for (let i = 0; i < rate; i++) {
    stare.push(
      <li className="flex">
        <IconeBox icon="icon-star-full" size={12} />
      </li>
    );
  }

  for (let i = rate; i < 5; i++) {
    notstart.push(
      <li className="flex">
        <IconeBox icon="icon-star-empty" size={12} />
      </li>
    );
  }

  return (
    <>
      <ul className="flex gap-1">
        {stare} {notstart}
      </ul>
      <div className="text-xsmall text-gray-500 font-lato"> {rate} </div>
    </>
  );
}
