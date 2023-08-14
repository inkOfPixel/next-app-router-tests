import { PropsWithChildren } from "react";

export function Banner({ children }: PropsWithChildren<{}>) {
  return (
    <div className="max-w-2xl px-3 py-2 rounded bg-gray-300 text-black">
      {children}
    </div>
  );
}
