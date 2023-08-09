import { getFormattedTime } from "../_utils/formatTime";
import { TimeApiResponse, simulateDelay } from "../_utils/time";
import Loader from "./Loader";

type DualClockProps = {
  title: string;
  cacheParams?: RequestCache;
};

async function getTime(cacheParams: RequestCache): Promise<string> {
  const response = await fetch("http://worldtimeapi.org/api/ip", {
    cache: cacheParams,
  });
  await simulateDelay(2000);
  const { datetime } = (await response.json()) as TimeApiResponse;
  return getFormattedTime(datetime);
}

export const DualClock = async function ({
  title,
  cacheParams = "default",
}: DualClockProps) {
  const time1 = await getTime(cacheParams);
  const time2 = await getTime(cacheParams);

  return (
    <div className="grid grid-cols-3 gap-2 w-1/2">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center">
        {time1}
      </div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center">
        {time2}
      </div>
    </div>
  );
};

export const DualClockFallback = function () {
  return (
    <div className="grid grid-cols-3 gap-2 w-1/2">
      <div className="flex items-center">
        <Loader />
      </div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center animate-pulse"></div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center animate-pulse"></div>
    </div>
  );
};
