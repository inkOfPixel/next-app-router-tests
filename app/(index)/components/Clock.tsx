import { getFormattedTime } from "../utils/formatTime";
import { TimeApiResponse, simulateDelay } from "../utils/time";
import Loader from "./Loader";

type ClockProps = {
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

export const Clock = async function ({
  title,
  cacheParams = "default",
}: ClockProps) {
  const time = await getTime(cacheParams);
  return (
    <div className="grid grid-cols-2 gap-2 w-1/2">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center">
        {time}
      </div>
    </div>
  );
};

export const ClockFallback = function () {
  return (
    <div className="grid grid-cols-2 gap-2 w-1/2">
      <div className="flex items-center">
        <Loader />
      </div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 items-center justify-center animate-pulse"></div>
    </div>
  );
};
