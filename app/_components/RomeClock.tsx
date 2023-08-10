import { getFormattedTime } from "../_utils/formatTime";
import { TimeApiResponse, simulateDelay } from "../_utils/time";

type ClockProps = {
  title: string;
  delay?: number;
  fetchParams?: RequestInit;
};

async function getTime(
  delay: number,
  fetchParams?: RequestInit
): Promise<string> {
  await simulateDelay(delay);
  const response = await fetch(
    "https://worldtimeapi.org/api/timezone/Europe/Rome",
    fetchParams
  );
  const { datetime } = (await response.json()) as TimeApiResponse;
  return getFormattedTime(datetime);
}

export const RomeClock = async function ({
  title,
  delay = 0,
  fetchParams,
}: ClockProps) {
  const time = await getTime(delay, fetchParams);
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 min-w-[120px] items-center justify-center">
        {time}
      </div>
    </div>
  );
};

export const RomeClockFallback = function ({
  title,
}: Pick<ClockProps, "title">) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex items-center">{title}</div>
      <div className="flex h-10 rounded text-black bg-gray-200 px-2.5 py-1 min-w-[120px] items-center justify-center animate-pulse"></div>
    </div>
  );
};
