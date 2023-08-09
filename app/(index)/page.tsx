import { Suspense } from "react";
import { Clock, ClockFallback } from "./components/Clock";
import { DualClock, DualClockFallback } from "./components/DualClock";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 w-10/12 items-center">
      <Suspense fallback={<ClockFallback />}>
        <Clock title="Cached clock" />
      </Suspense>
      <Suspense fallback={<ClockFallback />}>
        <Clock title="No cache clock" cacheParams="no-cache" />
      </Suspense>
      <Suspense fallback={<DualClockFallback />}>
        <DualClock title="Cached dual clock" />
      </Suspense>
    </div>
  );
}
