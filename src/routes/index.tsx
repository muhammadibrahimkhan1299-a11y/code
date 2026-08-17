import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { AdSlot } from "@/components/AdSlot";
import { ToolCard, ToolGrid } from "@/components/ToolCard";
import { ToolSearch } from "@/components/ToolSearch";
import { site } from "@/config/site";
import { popularTools, recentTools, tools, toolsByCategory } from "@/data/tools";
import { categories } from "@/data/types";
import { getFavoriteSlugs, onFavoritesChange } from "@/lib/favorites";
import { getRecentSlugs } from "@/lib/recently-used";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Fast, Free & Private Online Tools` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Fast, Free & Private Online Tools` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${site.name} — Fast, Free & Private Online Tools` },
      { name: "twitter:description", content: site.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          description: site.description,
          potentialAction: {
            "@type": "SearchAction",
            target: "/tools?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Section({
  title,
  description,
  href,
  children,
}: {
  title: string;
  description: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        {href ? (
          <a href={href} className="text-sm font-semibold text-primary hover:underline">
            View all →
          </a>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

const trustBadges = [
  "No sign-up needed",
  "Files never leave your device",
  "No cookies, no tracking",
];

function Home() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>(() => getFavoriteSlugs());
  const [recentSlugs, setRecentSlugs] = useState<string[]>(() => getRecentSlugs());

  useEffect(() => {
    const unsubscribe = onFavoritesChange(setFavoriteSlugs);
    return unsubscribe;
  }, []);

  const bySlug = (slug: string) => tools.find((t) => t.slug === slug);
  const favorites = favoriteSlugs.map(bySlug).filter((t): t is NonNullable<typeof t> => Boolean(t));
  const recent = recentSlugs
    .map(bySlug)
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="container-page pb-8">
      <section className="py-14 text-center sm:py-20">
        <p className="mx-auto w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          {site.tagline}
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Fast, Free & Private Online Tools
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Calculate, convert, compress, generate, shorten and manage your everyday tasks—all in one
          place. Every tool runs in your browser, so your data never leaves your device.
        </p>
        <div className="mx-auto mt-8 max-w-2xl">
          <ToolSearch size="lg" autoFocus={false} />
        </div>
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      <AdSlot position="header" className="mb-6" />

      {recent.length > 0 ? (
        <Section title="Recently used" description="Pick up where you left off." href="/tools">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recent.slice(0, 8).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Section>
      ) : null}

      {favorites.length > 0 ? (
        <Section title="Your favorites" description="Saved on this device only.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.slice(0, 8).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section title="Most popular" description="The tools people reach for every day." href="/tools">
        <ToolGrid tools={popularTools()} />
      </Section>

      <Section title="Recently added" description="Fresh tools, newest first." href="/tools">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentTools(6).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>

      <AdSlot position="between-sections" className="mt-12" />

      {categories.map((category) => (
        <Section
          key={category.id}
          title={category.name}
          description={category.short}
          href={`/category/${category.slug}`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolsByCategory(category.id)
              .slice(0, 8)
              .map((tool) => (
                <ToolCard key={tool.slug} tool={tool} showCategory={false} />
              ))}
          </div>
        </Section>
      ))}

      <AdSlot position="footer" className="mt-14" />
    </div>
  );
}