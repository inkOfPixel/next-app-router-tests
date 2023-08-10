import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";
import { DualClock, DualClockFallback } from "../_components/DualClock";
import Link from "next/link";

export default async function Page2() {
  return (
    <div className="flex flex-col gap-4 w-10/12 items-center">
      <div className="text-lg text-lime-500">Page 2</div>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Force no cache clock" cacheParams="no-cache" />
      </Suspense>
      <Suspense fallback={<DualClockFallback />}>
        <DualClock title="Force cache clock" cacheParams="force-cache" />
      </Suspense>
      <Link className="text-sm text-white underline" href="page-1">
        Go to page 1
      </Link>
    </div>
  );
}
