import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export function ViewSourceButton({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      View source
      <ArrowTopRightOnSquareIcon
        className="-mr-0.5 h-5 w-5"
        aria-hidden="true"
      />
    </a>
  );
}
