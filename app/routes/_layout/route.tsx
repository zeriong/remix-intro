import { Outlet } from "@remix-run/react";
import Header from "~/routes/_layout._index/components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
