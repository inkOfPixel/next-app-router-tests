import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";
import { ViewSourceButton } from "../_components/ViewSourceButton";
import { Banner } from "../_components/Banner";
import { RomeClock, RomeClockFallback } from "../_components/RomeClock";

export default async function CachedClockPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">Cached clock page</h1>
      <Banner>
        This page is fetching data via a cached fetch requests. This means that
        the api response is fetched and cached at build time. The page is
        statically generated.
        <br />
        <br />
        The data cache key is built considering the url of the request and the
        specified options (see{" "}
        <Link
          className="underline"
          href="https://github.com/vercel/next.js/blob/2e67454ae565ac443d100841d400d411d65df0ef/packages/next/src/server/lib/incremental-cache/index.ts#L361-L377"
        >
          here
        </Link>
        ).
        <br />
        <br />
        Here is an example of a data cache entry on the local filesystem during
        dev:
        <details>
          <summary>Open sample</summary>
          <pre>
            <code
              className="bg-gray-400  block whitespace-pre-wrap break-words"
              dangerouslySetInnerHTML={{
                __html: `{
  "kind": "FETCH",
  "data": {
    "headers": {
      "access-control-allow-credentials": "true",
      "access-control-allow-origin": "*",
      "access-control-expose-headers": "",
      "cache-control": "max-age=0, private, must-revalidate",
      "content-encoding": "gzip",
      "content-length": "259",
      "content-type": "application/json; charset=utf-8",
      "cross-origin-window-policy": "deny",
      "date": "Mon, 14 Aug 2023 20:51:49 GMT",
      "fly-request-id": "01H7TX3EXEHVKEDEFB9PKE7DBD-fra",
      "server": "Fly/49bc237b (2023-08-04)",
      "vary": "accept-encoding",
      "via": "1.1 fly.io",
      "x-content-type-options": "nosniff",
      "x-download-options": "noopen",
      "x-frame-options": "SAMEORIGIN",
      "x-permitted-cross-domain-policies": "none",
      "x-ratelimit-limit": "1800",
      "x-ratelimit-remaining": "1798",
      "x-ratelimit-reset": "1692046800",
      "x-request-from": "2001:b07:a15:8c51:f0d8:4847:afd1:a808",
      "x-request-id": "F3tbJ4Z3irzQwuHNBS3B",
      "x-request-regions": "a/fra;s/cdg",
      "x-response-origin": "568399da455498",
      "x-runtime": "354Âµs",
      "x-xss-protection": "1; mode=block"
    },
    "body": "eyJhYmJyZXZpYXRpb24iOiJDRVNUIiwiY2xpZW50X2lwIjoiMjAwMTpiMDc6YTE1OjhjNTE6ZjBkODo0ODQ3OmFmZDE6YTgwOCIsImRhdGV0aW1lIjoiMjAyMy0wOC0xNFQyMjo1MTo1MC4zMjY0NzgrMDI6MDAiLCJkYXlfb2Zfd2VlayI6MSwiZGF5X29mX3llYXIiOjIyNiwiZHN0Ijp0cnVlLCJkc3RfZnJvbSI6IjIwMjMtMDMtMjZUMDE6MDA6MDArMDA6MDAiLCJkc3Rfb2Zmc2V0IjozNjAwLCJkc3RfdW50aWwiOiIyMDIzLTEwLTI5VDAxOjAwOjAwKzAwOjAwIiwicmF3X29mZnNldCI6MzYwMCwidGltZXpvbmUiOiJFdXJvcGUvUm9tZSIsInVuaXh0aW1lIjoxNjkyMDQ2MzEwLCJ1dGNfZGF0ZXRpbWUiOiIyMDIzLTA4LTE0VDIwOjUxOjUwLjMyNjQ3OCswMDowMCIsInV0Y19vZmZzZXQiOiIrMDI6MDAiLCJ3ZWVrX251bWJlciI6MzN9",
    "status": 200,
    "tags": ["/cached-clock/page", "/cached-delayed-clock/page"],
    "url": "https://worldtimeapi.org/api/timezone/Europe/Rome"
  },
  "revalidate": 31536000
}`,
              }}
            ></code>
          </pre>
        </details>
      </Banner>
      <div className="flex flex-col gap-4 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" fetchParams={{ cache: "force-cache" }} />
        </Suspense>
        <Suspense fallback={<RomeClockFallback title="Cached Rome clock" />}>
          <RomeClock
            title="Cached Rome clock"
            fetchParams={{ cache: "force-cache" }}
          />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/cached-clock/page.tsx" />
    </div>
  );
}
