import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Suspense } from "react";
import { Clock, ClockFallback } from "../_components/Clock";

export default async function OtherPage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center">
      <h1 className="text-4xl text-green-400">Other page</h1>
      <div className="flex flex-col gap-4 mt-8 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline mt-8" href="/">
        Go to homepage
      </Link>
      <div className="mt-8">
        <a
          href="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/other-page/page.tsx"
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
