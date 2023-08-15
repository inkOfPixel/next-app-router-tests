import Link from "next/link";
import { Suspense } from "react";
import { Banner } from "../_components/Banner";
import { Clock, ClockFallback } from "../_components/Clock";
import { ViewSourceButton } from "../_components/ViewSourceButton";

export default async function UncachedClockPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">Revalidation</h1>
      <Banner>
        This page includes a clock that is revalidated every minute.
      </Banner>
      <div className="flex flex-col gap-4 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Uncached clock" />}>
          <Clock
            title="Uncached clock"
            fetchParams={{ next: { revalidate: 60 } }}
            delay={2000}
          />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/uncached-clock/page.tsx" />
    </div>
  );
}
