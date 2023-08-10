import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";

export default async function Page1() {
  return (
    <div className="flex flex-col gap-4 w-10/12 items-center">
      <div className="text-lg text-lime-500">Page 1</div>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Force cache clock" cacheParams="force-cache" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="No cache clock" cacheParams="no-cache" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" cacheParams="no-store" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" cacheParams="only-if-cached" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" cacheParams="reload" />
      </Suspense>
      <Link className="text-sm text-white underline" href="page-2">
        Go to page 2
      </Link>
    </div>
  );
}
