export const msToReadableTime = (ms: number): string => {
  let seconds: number | string = Math.floor((ms / 1000) % 60);
  let minutes: number | string = Math.floor((ms / (1000 * 60)) % 60);
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return `${minutes}:${seconds}`;
}
