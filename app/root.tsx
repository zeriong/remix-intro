import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import React from "react";

import { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Z-Convertor" },
    {
      property: "og:title",
      content: "Z-Convertor",
    },
    { name: "description", content: "Z-Convertor" },
    { name: "robots", content: "noindex,nofollow" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
