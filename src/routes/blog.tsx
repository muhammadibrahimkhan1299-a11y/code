import { createFileRoute } from "@tanstack/react-router";

import { ToolCard } from "@/components/ToolCard";
import { site } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { getTool } from "@/data/tools";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Guides & How-To Articles | ${site.name}` },
      {
        name: "description",
        content:
          "Practical guides on percentages, GPA, PDF compression, BMI and image compression — with free tools to apply each guide as you read.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "DailyTools guides and articles",
          itemListElement: blogPosts.map((post, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: post.title,
            url: `https://dailytools.spend.workers.dev/blog/${post.slug}`,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="container-page py-8">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-foreground">Guides</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Guides &amp; How-To Articles</h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        Step-by-step guides on the questions people ask most — every guide pairs its
        explanations with a free tool you can use as you read.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-3xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {post.category}
            </span>
            <h2 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
            <p className="mt-auto pt-4 text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </a>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-bold">Tools mentioned in these guides</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts
            .flatMap((post) => post.tools)
            .filter((slug, i, all) => all.indexOf(slug) === i)
            .slice(0, 8)
            .map((slug) => getTool(slug))
            .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))
            .map((tool) => (
              <ToolCard key={tool.slug} tool={tool} showCategory={false} />
            ))}
        </div>
      </section>
    </div>
  );
}