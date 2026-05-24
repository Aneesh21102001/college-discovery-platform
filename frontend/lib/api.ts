const DEFAULT_API_BASE_URL = "http://localhost:5000";

function normalizeBaseUrl(value?: string) {
  const candidate = value?.trim() || DEFAULT_API_BASE_URL;
  return candidate.endsWith("/") ? candidate : `${candidate}/`;
}

export function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return new URL(
    normalizedPath,
    normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL)
  ).toString();
}

export async function fetchApiJson<T>(path: string) {
  const response = await fetch(buildApiUrl(path), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Request failed for ${path} with status ${response.status}`);
  }

  return (await response.json()) as T;
}
