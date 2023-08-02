import "dotenv";

export function addHostName(url: string): string {
  return process.env.REACT_APP_URL + "/" + url;
}
