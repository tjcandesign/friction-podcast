import { articles } from "@/lib/articles";
import { articleContent } from "@/lib/article-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Agentic Everything`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) notFound();

  const otherArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="font-mono text-sm tracking-wide text-foreground"
          >
            AgenticEverything
          </a>
          <a
            href="/#pricing"
            className="text-sm font-medium bg-accent text-background px-4 py-2 rounded hover:bg-accent-hover transition-colors"
          >
            See Pricing
          </a>
        </div>
      </nav>
      <main className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="/thinking"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; All articles
          </a>
          <header className="mt-8 mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
              {article.tag}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.15] mb-6">
              {article.title}
            </h1>
            <p className="font-mono text-xs text-muted">
              By TJ Cichecki &middot; {article.publishedDate}
            </p>
          </header>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <hr className="border-border my-16" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
              More from Thinking
            </p>
            <div className="space-y-1">
              {otherArticles.map((a) => (
                <a
                  key={a.slug}
                  href={a.url}
                  className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-4 border-b border-border hover:bg-surface-raised -mx-4 px-4 rounded transition-colors"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent shrink-0 md:w-28">
                    {a.tag}
                  </p>
                  <p className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                    {a.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            &copy; 2026 Agentic Everything. Washington, DC.
          </p>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="/thinking"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Thinking
            </a>
            <a
              href="mailto:tj@wrkhrs.co"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
