import { getFormattedTime } from "../_utils/formatTime";
import { TimeApiResponse, simulateDelay } from "../_utils/time";

type ClockProps = {
  title: string;
  fetchParams?: RequestInit;
};

async function getTime(fetchParams?: RequestInit): Promise<string> {
  const response = await fetch("http://worldtimeapi.org/api/ip", fetchParams);
  await simulateDelay(2000);
  const { datetime } = (await response.json()) as TimeApiResponse;
  return getFormattedTime(datetime);
}

export const Clock = async function ({ title, fetchParams }: ClockProps) {
  const time = await getTime(fetchParams);
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 min-w-[120px] items-center justify-center">
        {time}
      </div>
    </div>
  );
};

export const ClockFallback = function ({ title }: Pick<ClockProps, "title">) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 min-w-[120px] items-center justify-center animate-pulse"></div>
    </div>
  );
};
