import { articles } from "@/lib/articles";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-sm tracking-wide text-foreground">
          AgenticEverything
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#approach"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Approach
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#thinking"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Thinking
            </a>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium bg-accent text-background px-4 py-2 rounded hover:bg-accent-hover transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="py-32 md:py-44">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
          AI Readiness for Agencies
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 max-w-4xl">
          Your agency bought AI tools. The work still runs the same way it did
          two years ago.
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12">
          Agentic Everything helps agencies and creative teams close the gap
          between buying AI subscriptions and actually changing how the work gets
          done. Through embedded, retainer-based engagements, I work alongside
          your leadership and your team to redesign operations and build the kind
          of capability that shows up in the output.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-6 py-3 rounded hover:bg-accent-hover transition-colors"
          >
            Book a Discovery Call
          </a>
          <a
            href="#thinking"
            className="inline-flex items-center justify-center text-sm font-medium border border-border text-foreground px-6 py-3 rounded hover:border-muted transition-colors"
          >
            Read the Thinking
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      heading: "Efficiency is a race to the bottom",
      body: "The default AI strategy at most agencies is to compress timelines and cut headcount. The problem is every other shop is doing the same thing, which means the only thing left to compete on is price. The agencies pulling ahead are using AI to do work they couldn't do at their size before, not grinding out the same deliverables cheaper.",
    },
    {
      heading: "A third of your team is working around the tools",
      body: "When leadership frames AI as \"do more with less,\" employees do the math on what that means for them. If I become ten times more productive, what happens next? Nobody has answered that question, and people have been through enough transformation initiatives to know when they're the input rather than the beneficiary.",
    },
    {
      heading: "Personal productivity hasn't become organizational value",
      body: "Everyone on your team has their own AI habits and prompting workflows, and none of it connects to how the agency actually operates. Getting from a collection of personal hacks to something that shows up on the income statement requires building systems, which is a different project than handing everyone a subscription.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          The Problem
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-2xl">
          Most agencies are solving for the wrong thing.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.heading}
              className="bg-surface-raised border border-border rounded-lg p-8"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                {problem.heading}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const models = [
    {
      label: "Traditional Consultant",
      description:
        "Shows up for a week, evaluates the operation from outside, and leaves you with a recommendations deck in a shared drive that you're expected to implement on your own.",
    },
    {
      label: "Internal Hire",
      description:
        "Has good instincts but gets absorbed by team politics and the status quo within a quarter. Needs permission to change anything, and permission moves slowly inside most agencies.",
    },
    {
      label: "Agentic Operator",
      description:
        "Comes in from outside with a different set of references, builds the first version of the thing while everyone watches, and the capability spreads from there. Peer energy, not mandates.",
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          The Approach
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-2xl">
          An embedded operator, not a consultant.
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
          There&apos;s a gap inside agencies right now that nobody has posted a
          job listing for. It sits between the executives who know things need to
          change and the teams who don&apos;t know where to start. Closing that
          gap requires someone who embodies what the future of the work looks
          like, sitting right there in the building, doing it where everyone can
          see. Someone who thinks in strategy but builds the thing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div key={model.label} className="border border-border rounded-lg p-8">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
                {model.label}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const pillars = [
    {
      number: "01",
      title: "Executive Alignment",
      description:
        "Working with agency leadership to reframe AI from a cost-cutting tool into a capability engine. The real work here is answering the question your team is actually asking: if I become ten times more productive, what happens next? If leadership can answer that honestly, adoption follows. If they can't, no training program will fix it.",
    },
    {
      number: "02",
      title: "Team Enablement",
      description:
        "Teaching practitioners how to use AI inside their actual workflows, paired with enough strategic context to know whether the output is any good. The tool accelerates the judgment of someone who already knows what good looks like, which means senior people get faster while junior people need mentorship on evaluation, not just prompting.",
    },
    {
      number: "03",
      title: "Operational Redesign",
      description:
        "Auditing and rebuilding how the work actually happens inside your agency: the tools your team uses, how handoffs and onboarding work, the cadence of feedback and improvement. Treating your team's operating environment the way you'd treat a product, with the people doing the work as the users, on a regular improvement cycle.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          How It Works
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-2xl">
          Three pillars of an embedded engagement.
        </h2>
        <div className="space-y-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8"
            >
              <p className="font-mono text-sm text-accent">{pillar.number}</p>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-2xl">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-muted leading-relaxed max-w-2xl">
            This is a monthly, embedded engagement. I work alongside your team
            for a sustained period, long enough to understand the real dynamics
            and build capability that lasts after I leave. If you&apos;re looking
            for a one-day workshop or a slide deck, this isn&apos;t the right
            fit.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-6 py-3 rounded hover:bg-accent-hover transition-colors mt-8"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}

function ThinkingSection() {
  const featured = articles.slice(0, 5);

  return (
    <section id="thinking" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          Thinking
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-2xl">
          The thesis behind the practice.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article) => (
            <a
              key={article.slug}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg p-8 hover:border-muted transition-colors"
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
                {article.tag}
              </p>
              <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {article.excerpt}
              </p>
              <p className="font-mono text-xs text-muted mt-4">
                {article.date}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/thinking"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Read everything &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection() {
  return (
    <section id="background" className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          Background
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-2xl">
          Fifteen years of building across industries.
        </h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-muted leading-relaxed">
            I&apos;m TJ Cichecki. I&apos;ve spent fifteen years running
            Workhorse Collective, a brand strategy and creative direction studio
            in Washington, DC, working across government, tech, hospitality,
            nonprofits, and startups. For the last two years I&apos;ve been
            integrating AI into real client work. That started with rebuilding my
            own brand workshop process, then moved into redesigning how creative
            teams operate day to day, and along the way I started writing
            publicly about what was working and what wasn&apos;t.
          </p>
          <p className="text-muted leading-relaxed">
            The cross-industry range matters for this kind of work. Fifteen years
            across that many contexts means I&apos;ve seen which operating
            patterns actually serve a purpose and which ones are just category
            inertia that nobody questioned because everyone in the industry does
            it the same way. That outside perspective is the whole point of an
            embedded engagement.
          </p>
          <p className="text-muted leading-relaxed">
            When I rebuilt my own workshop process with AI tools, post-session
            processing time dropped by sixty percent, but the more interesting
            result was that the workshops themselves got better. When I
            wasn&apos;t scrambling to capture every statement, I could actually
            pay attention to what people meant, not just what they said.
            That&apos;s the version of AI integration I bring into client
            engagements: the version where the work improves because the human
            gets to be more present, not less.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-mono text-2xl text-foreground">15</p>
            <p className="text-sm text-muted mt-1">Years in practice</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-foreground">6</p>
            <p className="text-sm text-muted mt-1">Industries deep</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-foreground">2</p>
            <p className="text-sm text-muted mt-1">Years building with AI</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-foreground">DC</p>
            <p className="text-sm text-muted mt-1">Based in Washington</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscoveryCTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          Start Here
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Let&apos;s talk about what&apos;s in the way.
        </h2>
        <p className="text-muted leading-relaxed mb-10 max-w-xl mx-auto">
          If your agency has the AI subscriptions but the work still looks the
          same as last year, that&apos;s the gap this practice exists to close.
          Book a 30-minute discovery call and we&apos;ll figure out whether an
          embedded engagement makes sense for where your team is right now.
        </p>
        <a
          href="mailto:tj@wrkhrs.co?subject=AgenticEverything%20Discovery%20Call"
          className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-8 py-4 rounded hover:bg-accent-hover transition-colors"
        >
          Book a Discovery Call
        </a>
        <p className="text-sm text-muted mt-6">
          Or email directly:{" "}
          <a
            href="mailto:tj@wrkhrs.co"
            className="text-foreground hover:text-accent transition-colors"
          >
            tj@wrkhrs.co
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted">
          &copy; 2026 Agentic Everything. Washington, DC.
        </p>
        <div className="flex gap-6">
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
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <ApproachSection />
        <HowItWorks />
        <ThinkingSection />
        <BackgroundSection />
        <DiscoveryCTA />
      </main>
      <Footer />
    </>
  );
}
