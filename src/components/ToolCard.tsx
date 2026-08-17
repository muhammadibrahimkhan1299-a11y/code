import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";

import { getFavoriteSlugs, isFavorite, onFavoritesChange, toggleFavorite } from "@/lib/favorites";
import { getCategory, type Tool } from "@/data/types";
import { cn } from "@/lib/utils";

export function FavoriteButton({ slug, className }: { slug: string; className?: string }) {
  const [favorite, setFavorite] = useState(() => isFavorite(slug));

  useEffect(() => {
    const unsubscribe = onFavoritesChange((slugs) => setFavorite(slugs.includes(slug)));
    return unsubscribe;
  }, [slug]);

  return (
    <button
      type="button"
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={favorite}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setFavorite(toggleFavorite(slug));
      }}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
        favorite ? "text-red-500 hover:text-red-500" : "",
        className,
      )}
    >
      <Heart className={cn("size-4", favorite ? "fill-red-500" : "")} aria-hidden="true" />
    </button>
  );
}

export function ToolCard({ tool, showCategory = true }: { tool: Tool; showCategory?: boolean }) {
  return (
    <Link
      to="/$slug"
      params={{ slug: tool.slug }}
      className={cn(
        "group flex h-full flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug text-foreground">{tool.name}</h3>
          <div className="flex items-center gap-1">
            <FavoriteButton slug={tool.slug} />
            <ArrowRight
              className="mt-0.5 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tool.tagline}</p>
      </div>
      {showCategory ? (
        <span className="w-fit rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
          {getCategory(tool.category).name}
        </span>
      ) : null}
    </Link>
  );
}

export function ToolGrid({ tools, columns = 4 }: { tools: Tool[]; columns?: 3 | 4 }) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}

export function favoriteTools(tools: Tool[]): Tool[] {
  const slugs = getFavoriteSlugs();
  return slugs.map((slug) => tools.find((t) => t.slug === slug)).filter((t): t is Tool => Boolean(t));
}