import Link from "next/link";
import { Banner } from "./_components/Banner";

export default async function Homepage() {
  return (
    <div className="flex flex-col px-16 py-24 w-10/12 items-center gap-8">
      <h1 className="text-4xl text-green-500">Homepage</h1>
      <div className="flex flex-col items-center gap-4">
        <Link className="text-sm text-white underline" href="/cached-clock">
          Cached clock
        </Link>
        <Link
          className="text-sm text-white underline"
          href="/cached-delayed-clock"
        >
          Cached delayed clock
        </Link>
        <Link className="text-sm text-white underline" href="/uncached-clock">
          Uncached clock
        </Link>
        <Link className="text-sm text-white underline" href="/memoization">
          Memoization
        </Link>
        <Link className="text-sm text-white underline" href="/revalidation">
          Revalidation
        </Link>
      </div>
    </div>
  );
}
