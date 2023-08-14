import Link from "next/link";
import { Suspense } from "react";
import { Banner } from "../_components/Banner";
import { Clock, ClockFallback } from "../_components/Clock";
import { ViewSourceButton } from "../_components/ViewSourceButton";

export default async function UncachedClockPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">Memoization</h1>
      <Banner>
        Multiple request with the same options are memoized inside the same
        render pass.
      </Banner>
      <div className="flex flex-col gap-4 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Uncached clock 1s" />}>
          <Clock
            title="Uncached clock 1s"
            delay={1000}
            fetchParams={{ cache: "no-store" }}
          />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Uncached clock 2s" />}>
          <Clock
            title="Uncached clock 2s"
            delay={2000}
            fetchParams={{ cache: "no-store" }}
          />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Uncached clock 3s" />}>
          <Clock
            title="Uncached clock 3s"
            delay={3000}
            fetchParams={{ cache: "no-store" }}
          />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/memoization/page.tsx" />
    </div>
  );
}
