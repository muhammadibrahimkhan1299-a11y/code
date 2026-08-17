import { createFileRoute } from "@tanstack/react-router";

import { ToolCard } from "@/components/ToolCard";
import { site } from "@/config/site";
import { blogBySlug, blogPosts } from "@/data/blog";
import { getTool, relatedTools } from "@/data/tools";

const BASE_URL = "https://dailytools.spend.workers.dev";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogBySlug.get(params.slug);
    if (!post) {
      return { meta: [{ title: `Not found — ${site.name}` }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${post.title} | ${site.name}` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${BASE_URL}/blog/${post.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/blog` },
                  { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
                ],
              },
              {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.publishedAt,
                ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
                author: { "@type": "Organization", name: site.name },
                publisher: { "@type": "Organization", name: site.name },
                mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogBySlug.get(slug);

  if (!post) {
    return (
      <div className="container-page flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Guide not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The article you are looking for does not exist or was moved.
          </p>
          <a
            href="/blog"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Browse all guides
          </a>
        </div>
      </div>
    );
  }

  const firstTool = post.tools[0] ? getTool(post.tools[0]) : undefined;
  const featured = firstTool ? relatedTools(firstTool) : [];

  return (
    <div className="container-page py-8">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/blog" className="hover:text-primary">
          Guides
        </a>
        <span className="mx-2">/</span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="prose-tool max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {post.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Updated{" "}
            {new Date(post.updatedAt ?? post.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="mt-5 text-lg text-foreground">{post.description}</p>

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-5 shadow-card">
            <h2 className="text-sm font-bold">Tools for this guide</h2>
            <div className="mt-4 space-y-3">
              {post.tools
                .map((slug) => getTool(slug))
                .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))
                .map((tool) => (
                  <a
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="block rounded-xl border border-border p-3 transition hover:border-primary hover:shadow-lift"
                  >
                    <span className="text-sm font-semibold">{tool.name}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{tool.tagline}</span>
                  </a>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {featured.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Related tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} showCategory={false} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-xl font-bold">More guides</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 4)
            .map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-border p-4 transition hover:border-primary hover:shadow-lift"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {p.category}
                </span>
                <h3 className="mt-1.5 text-sm font-bold leading-snug">{p.title}</h3>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}