import styled from "styled-components";
import { Outlet } from "@remix-run/react";

export default function Default() {
  return (
    <div>
      <div>헤더</div>
      <Main>
        <Outlet />
      </Main>
      <div>푸터</div>
    </div>
  );
}

const Main = styled.main`
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
`;
