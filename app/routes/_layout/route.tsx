import { Outlet } from "@remix-run/react";
import Header from "~/routes/_layout/components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 w-full grow">
        <Outlet />
      </main>
    </>
  );
}
