import { Outlet } from "@remix-run/react";
import Header from "~/routes/_layout/components/Header";
import Aside from "~/routes/_layout/components/Aside";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Aside />
    </>
  );
}
