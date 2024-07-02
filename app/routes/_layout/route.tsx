import { Link, Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <header className="flex justify-between items-center border-b border-brand-400 px-8 w-full h-[84px]">
        <Link
          to="/"
          className="text-4xl font-extrabold flex items-center w-fit"
        >
          <span className="text-brand-500 text-5xl">Z</span>
          -Convertor
        </Link>
        <button className="border rounded-md px-5 py-3 font-extrabold border-brand-400 bg-brand-500 text-[20px] text-white">
          Menu
        </button>
      </header>
      <Outlet />
    </>
  );
}
