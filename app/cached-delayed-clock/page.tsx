import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";
import { ViewSourceButton } from "../_components/ViewSourceButton";
import { Banner } from "../_components/Banner";
import { RomeClock, RomeClockFallback } from "../_components/RomeClock";

export default async function CachedDelayedClockPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">Cached delayed clock page</h1>
      <Banner>
        The second clock fetch data with a 2s delay. The page is still generated
        at build time and the api response is still fetched from data cache. So
        no delay is visible
      </Banner>
      <div className="flex flex-col gap-4 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" fetchParams={{ cache: "force-cache" }} />
        </Suspense>
        <Suspense fallback={<RomeClockFallback title="Cached Rome clock" />}>
          <RomeClock
            title="Cached Rome clock"
            delay={2000}
            fetchParams={{ cache: "force-cache" }}
          />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/cached-delayed-clock/page.tsx" />
    </div>
  );
}
