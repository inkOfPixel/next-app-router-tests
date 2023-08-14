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
        This page is fetching data via a fetch request with no specified cache
        parameter. By default this means that the api response is fetched and
        cached at build time. As a consequence the page is fetched immediately
        and the response from the api is stored indefinitely in the Next.js data
        cache.
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
        The memoization logic seems to be slightly different
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
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/other-page/page.tsx" />
    </div>
  );
}
