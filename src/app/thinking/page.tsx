import { articles } from "@/lib/articles";

export const metadata = {
  title: "Thinking | Agentic Everything",
  description:
    "Published writing on AI adoption, agency operations, workforce transformation, and the future of creative work.",
};

export default function ThinkingPage() {
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
            href="/#contact"
            className="text-sm font-medium bg-accent text-background px-4 py-2 rounded hover:bg-accent-hover transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>
      <main className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
            Thinking
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 max-w-2xl">
            Writing about AI, agencies, and how work actually changes.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
            These are the ideas behind the practice, all of them grounded in
            two years of integrating AI into real client work and fifteen years
            of watching how creative teams actually operate.
          </p>
          <div className="space-y-1">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-border hover:bg-surface-raised -mx-4 px-4 rounded transition-colors"
              >
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent shrink-0 md:w-32">
                  {article.tag}
                </p>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors mb-1">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted shrink-0">
                  {article.date}
                </p>
              </a>
            ))}
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
