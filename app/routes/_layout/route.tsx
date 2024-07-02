import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <header className="">헤더</header>
      <Outlet />
    </>
  );
}
