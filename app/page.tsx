import Link from "next/link";
import { makeId } from "./_utils/id";

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
        <Link
          className="text-sm text-white underline"
          href={`/uncached-clock-with-parameter/${makeId(5)}`}
        >
          Uncached clock with parameter
        </Link>
        <Link
          className="text-sm text-white underline"
          href={`/param-with-no-clock/${makeId(5)}`}
        >
          Page with parameter
        </Link>
        <Link className="text-sm text-white underline" href={`/headers-read`}>
          Page with headers read
        </Link>
      </div>
    </div>
  );
}
