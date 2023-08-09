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
