import { Link, Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <header className="border-b border-brand-400 py-6 px-8">
        <Link to="/" className="text-4xl font-extrabold flex items-center">
          <span className="text-brand-500 text-5xl">Z</span>
          -Convertor
        </Link>
      </header>
      <Outlet />
    </>
  );
}
