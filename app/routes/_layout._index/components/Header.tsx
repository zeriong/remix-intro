import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-brand-400 px-8 w-full h-[86px]">
      <Link to="/" className="text-4xl font-extrabold flex items-center w-fit">
        <span className="text-brand-500 text-5xl">Z</span>
        -Convertor
      </Link>
      <button
        type="button"
        className="rounded-md px-5 py-3 font-extrabold border-brand-400 text-[20px] hover:text-white hover:bg-brand-500
            transition-all"
      >
        Menu
      </button>
    </header>
  );
}
