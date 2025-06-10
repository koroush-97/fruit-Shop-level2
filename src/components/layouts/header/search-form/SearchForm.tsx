import { IconeBox } from "@/components/common";

interface props {
  inputclassname?: string;
}

export function SearchForm({ inputclassname = "" }: props) {
  //TODO should impelement form

  return (
    <form
      name="search-form"
      action="#"
      method="post"
      className="flex items-center"
    >
      <input
        type="text"
        name="search_text"
        placeholder="Search for items"
        className={` ${inputclassname} text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none`}
      />
      <button type="submit">
        <IconeBox icon="icon-search" size={22} badge={0} />
      </button>
    </form>
  );
}
