/**
 * Favorites stored in localStorage. No cookies, no tracking — the list lives
 * only on the visitor's device.
 */
const KEY = "dailytools:favorites";

export function getFavoriteSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavoriteSlugs().includes(slug);
}

export function toggleFavorite(slug: string): boolean {
  const current = getFavoriteSlugs();
  const next = current.includes(slug)
    ? current.filter((s) => s !== slug)
    : [slug, ...current];
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — fail silently */
  }
  return !current.includes(slug);
}

export function onFavoritesChange(listener: (slugs: string[]) => void): () => void {
  const handler = (e: StorageEvent) => {
    if (e.key === KEY) listener(getFavoriteSlugs());
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}