import { Link, useLocation } from "@remix-run/react";
import { HEADER_LIST } from "~/constants/header";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log("path: ", location.pathname);
  }, []);
  return (
    <header className="flex items-center border-b border-brand-400 px-8 w-full min-h-[86px]">
      <Link
        to="/"
        className="text-4xl font-extrabold flex items-center w-fit mr-14"
      >
        <span className="text-brand-500 text-5xl">Z</span>
        -Convertor
      </Link>
      <ul className="flex gap-10 items-center">
        {HEADER_LIST.map((item, idx) => {
          // pathName에 따른 active 상태
          const isActive =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.includes(item.to);

          return (
            <li key={idx} className="relative flex gap-10 items-center">
              <Link
                to={item.to}
                className={`font-bold text-[24px] ${
                  isActive ? "text-default-black" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>

              {idx !== HEADER_LIST.length - 1 && (
                <p className="h-[20px] w-[2px] bg-brand-500" />
              )}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
