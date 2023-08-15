import Link from "next/link";
import { Banner } from "../../_components/Banner";
import { ViewSourceButton } from "../../_components/ViewSourceButton";

export async function generateStaticParams() {
  return [{ "sample-param": "pippo" }];
}

export default async function UncachedClockWithParameterPage({
  params,
}: {
  params: any;
}) {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-400">
        Uncached clock + {params["sample-param"]}
      </h1>
      <Banner>This page just include a parameter</Banner>
      <Link className="text-sm text-white underline" href="/">
        Go to homepage
      </Link>
      <ViewSourceButton link="https://github.com/inkOfPixel/next-app-router-tests/blob/main/app/uncached-clock-with-parameter/[sample-param]/page.tsx" />
    </div>
  );
}
