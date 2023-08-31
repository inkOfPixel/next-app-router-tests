import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import { Banner } from "../_components/Banner";
import { Clock, ClockFallback } from "../_components/Clock";
import { ViewSourceButton } from "../_components/ViewSourceButton";

export default async function HeadersReadNoCachePage() {
  const readonlyHeaders = headers();
  console.log(readonlyHeaders);

  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">Headers read no cache page</h1>
      <Banner>
        This page is fetching data via a fetch requests with no specified cache
        parameter. By default this means that the api response is fetched and
        cached at build time. However this page is also reading and logging
        headers.
      </Banner>
      <div className="flex flex-col gap-4 p-4 items-center border border-solid rounded-md">
        <Suspense fallback={<ClockFallback title="Cached clock" />}>
          <Clock title="Cached clock" />
        </Suspense>
      </div>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/headers-read/page.tsx" />
    </div>
  );
}
