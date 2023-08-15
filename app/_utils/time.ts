export type TimeApiResponse = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export const simulateDelay = function (ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function getFormattedTime(dateTime: string): string {
  const d = new Date(dateTime);
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const ms = d.getMilliseconds();
  return `${padZero(h)}:${padZero(m)}:${padZero(s)}.${ms}`;
}

function padZero(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
