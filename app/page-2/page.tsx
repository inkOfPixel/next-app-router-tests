import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";

export default async function Page2() {
  return (
    <div className="flex flex-col gap-4 w-10/12 items-center">
      <div className="text-lg text-lime-500">Page 2</div>
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
        <Clock title="No store clock" cacheParams="no-store" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Reload clock" cacheParams="reload" />
      </Suspense>
      <Link className="text-sm text-white underline" href="page-1">
        Go to page 1
      </Link>
    </div>
  );
}
