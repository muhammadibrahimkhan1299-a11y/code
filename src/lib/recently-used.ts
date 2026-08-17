/**
 * Recently used tools stored in localStorage (most recent first, capped).
 * Pure client-side — no cookies, no tracking.
 */
const KEY = "dailytools:recent";
const MAX = 8;

export function getRecentSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function touchRecent(slug: string): void {
  try {
    const next = [slug, ...getRecentSlugs().filter((s) => s !== slug)].slice(0, MAX);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — fail silently */
  }
}