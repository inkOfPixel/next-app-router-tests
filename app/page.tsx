import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "./_components/Clock";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default async function Homepage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center">
      <h1 className="text-4xl text-green-500">Homepage</h1>
      <div className="flex flex-col gap-4 mt-8 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Same as above" />}>
          <Clock title="Same as above" />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Force cache clock" />}>
          <Clock
            title="Force cache clock"
            fetchParams={{ cache: "force-cache" }}
          />
        </Suspense>
        <Suspense fallback={<ClockFallback title="No cache clock" />}>
          <Clock title="No cache clock" fetchParams={{ cache: "no-cache" }} />
        </Suspense>
        <Suspense fallback={<ClockFallback title="No store clock" />}>
          <Clock title="No store clock" fetchParams={{ cache: "no-store" }} />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Reload clock" />}>
          <Clock title="Reload clock" fetchParams={{ cache: "reload" }} />
        </Suspense>
        <Suspense fallback={<ClockFallback title="Revalidate clock (5s)" />}>
          <Clock
            title="Revalidate clock (5s)"
            fetchParams={{ cache: "default", next: { revalidate: 5 } }}
          />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline mt-8" href="/other-page">
        Go to other page
      </Link>
      <div className="mt-8">
        <a
          href="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/page.tsx"
          target="_blank"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View source
          <ArrowTopRightOnSquareIcon
            className="-mr-0.5 h-5 w-5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
