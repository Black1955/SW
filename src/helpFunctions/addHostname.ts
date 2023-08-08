export function addHostName(
  url: string,
  policy: string,
  signature: string
): string {
  return !url || !url.length
    ? ""
    : `${url}?policy=${policy}&signature=${signature}`;
}
