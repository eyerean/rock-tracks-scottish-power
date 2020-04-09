export const getReadableTimeByMs = (ms: number): string => {
  let seconds: number | string = Math.floor((ms / 1000) % 60);
  let minutes: number | string = Math.floor((ms / (1000 * 60)) % 60);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


export const getReadableDateByISODate = (ISODate: string): string => {
  const date = new Date(ISODate);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  
  return `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`;
}