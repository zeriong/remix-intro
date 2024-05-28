/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */
import { PassThrough } from "stream";
import { isbot } from "isbot";
import { EntryContext } from "@remix-run/node";
import { ServerStyleSheet } from "styled-components";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { ReactNode } from "react";

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  return new Promise((resolve, reject) => {
    let didError = false;
    const sheet = new ServerStyleSheet();

    const { pipe, abort } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer context={remixContext} url={request.url} />
      ) as ReactNode,
      {
        [callbackName]: () => {
          const body = new PassThrough({
            transform: (chunk, _, done) => {
              const stringChunk = (chunk as Buffer).toString();

              done(
                undefined,
                Buffer.from(
                  stringChunk.replace("__STYLES__", sheet.getStyleTags())
                )
              );
            },
          });

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(body as never, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
