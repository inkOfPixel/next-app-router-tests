import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";

export default async function OtherPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center">
      <h1 className="text-4xl text-lime-400">Other page</h1>
      <div className="flex flex-col gap-4 mt-8 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline mt-8" href="/">
        Go to homepage
      </Link>
    </div>
  );
}
