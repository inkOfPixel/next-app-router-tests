import { getFormattedTime } from "../_utils/formatTime";
import { TimeApiResponse, simulateDelay } from "../_utils/time";

type DualClockProps = {
  title: string;
  delay?: number;
  fetchParams?: RequestInit;
};

async function getTime(
  delay: number,
  fetchParams?: RequestInit
): Promise<string> {
  await simulateDelay(delay);
  const response = await fetch("http://worldtimeapi.org/api/ip", fetchParams);
  const { datetime } = (await response.json()) as TimeApiResponse;
  return getFormattedTime(datetime);
}

export const DualClock = async function ({
  title,
  delay = 0,
  fetchParams,
}: DualClockProps) {
  const time1 = await getTime(delay, fetchParams);
  const time2 = await getTime(delay, fetchParams);

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex flex-col gap-2">
        <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center">
          {time1}
        </div>
        <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center">
          {time2}
        </div>
      </div>
    </div>
  );
};

export const DualClockFallback = function ({
  title,
}: Pick<DualClockProps, "title">) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex flex-col gap-2">
        <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center animate-pulse"></div>
        <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center animate-pulse"></div>
      </div>
    </div>
  );
};
