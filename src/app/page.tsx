import { articles } from "@/lib/articles";
import { RotatingHeadline } from "@/components/rotating-headline";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-sm tracking-wide text-foreground">
          Agentic_Everything
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
            href="#pricing"
            className="text-sm font-medium bg-accent text-background px-4 py-2 rounded hover:bg-accent-hover transition-colors"
          >
            See Pricing
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/studio.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <p className="font-mono text-sm md:text-base uppercase tracking-[0.15em] text-accent mb-6">
          AI readiness for modern agencies.
        </p>
        <RotatingHeadline
          headlines={[
            "We help agencies utilize AI to create competitive advantage at scale.",
            "We help agencies turn AI into an unfair advantage.",
            "We turn AI into momentum.",
            "AI systems built for the agency at scale.",
            "We help agencies operationalize AI.",
            "We help agencies move faster with AI.",
            "We build AI tooling that creates momentum.",
            "Built for agencies that need an AI edge.",
            "We turn AI experimentation into real advantage.",
          ]}
        />
        <a
          href="#approach"
          className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-6 py-3 rounded hover:bg-accent-hover transition-colors"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
}

function GapSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          The Opportunity
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.15] mb-8 max-w-3xl">
          The agencies that figure this out first will be the ones everyone
          else is trying to catch.
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-6">
          Most agencies bought the subscriptions and ran the lunch-and-learns,
          but the work still runs the same way it did two years ago. The gap
          between having AI tools and actually changing how the work gets done
          is where this practice lives.
        </p>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          Closing that gap is a different project than handing everyone a
          subscription. It requires someone embedded in the operation who can
          work across leadership, team process, and the tools themselves, all
          at the same time.
        </p>
      </div>
    </section>
  );
}

function PanelPhoto() {
  return (
    <section>
      <img
        src="/images/ai-panel.png"
        alt="TJ Cichecki speaking on The Future of Creative and AI panel, 2024"
        className="w-full h-auto"
      />
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
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {problem.heading}
              </h3>
              <p className="text-base text-muted leading-relaxed">
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
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>
      ),
    },
    {
      label: "Internal Hire",
      description:
        "Has good instincts but gets absorbed by team politics and the status quo within a quarter. Needs permission to change anything, and permission moves slowly inside most agencies.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
    },
    {
      label: "Agentic Operator",
      description:
        "Comes in from outside with a different set of references and builds the first version of the thing while everyone watches, so the capability spreads organically from there instead of being pushed down through mandates.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          The Approach
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-2xl">
          An embedded AI operator, not a consultant.
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
              <div className="mb-4">{model.icon}</div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
                {model.label}
              </p>
              <p className="text-base text-muted leading-relaxed">
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
      <div className="max-w-6xl mx-auto px-6">
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
            href="#pricing"
            className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-6 py-3 rounded hover:bg-accent-hover transition-colors mt-8"
          >
            See Pricing
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
              className="group border border-border rounded-lg p-8 hover:border-muted transition-colors"
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
                {article.tag}
              </p>
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">
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

function FounderSection() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          Meet the Founder
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              TJ Cichecki
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m a designer and creative technologist in Washington, DC.
                I&apos;ve spent the last fifteen years as Principal Designer at
                Workhorse Collective, a creative branding agency.
              </p>
              <p className="text-muted leading-relaxed">
                For the last two years I&apos;ve been deeply integrating AI into
                real client work and delivering real results. I&apos;ve been
                building with these tools since the first iteration and
                they&apos;ve only gotten more powerful over time.
              </p>
              <p className="text-muted leading-relaxed">
                I work to bring AI integration into client engagements and help
                give agencies the tools to move faster and create far more than
                ever before.
              </p>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-8">
              <div>
                <p className="font-mono text-2xl text-foreground">15</p>
                <p className="text-sm text-muted mt-1">Years in practice</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-foreground">2+</p>
                <p className="text-sm text-muted mt-1">Years with AI</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-foreground">DC</p>
                <p className="text-sm text-muted mt-1">Washington</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/tj-studio.jpg"
              alt="TJ Cichecki at the Workhorse Collective studio in Washington, DC"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
          Engagement Options
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 max-w-2xl">
          Two ways to work together.
        </h2>
        <p className="text-muted leading-relaxed mb-16 max-w-2xl">
          Every engagement starts with figuring out where the real gaps are.
          From there, we decide together what the right depth looks like for
          your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface rounded-lg p-8 flex flex-col">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
              Paid Discovery
            </p>
            <p className="font-mono text-3xl text-foreground mb-6">
              $2,500
            </p>
            <p className="text-base text-muted leading-relaxed mb-8 flex-1">
              A structured diagnostic session to figure out where your team
              actually stands with AI, where the gaps are between what
              you&apos;ve bought and what you&apos;re using, and whether a
              longer engagement makes sense. You walk away with a clear picture
              of the work, not a sales pitch.
            </p>
            <a
              href="mailto:tj@wrkhrs.co?subject=AgenticEverything%20Paid%20Discovery"
              className="inline-flex items-center justify-center text-sm font-medium border border-border text-foreground px-6 py-3 rounded hover:border-muted transition-colors"
            >
              Schedule Discovery Call
            </a>
          </div>
          <div className="bg-surface-raised rounded-lg p-8 flex flex-col">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
              Monthly Engagement
            </p>
            <p className="font-mono text-3xl text-foreground mb-1">
              $10,000
            </p>
            <p className="font-mono text-xs text-muted mb-6">per month</p>
            <p className="text-base text-muted leading-relaxed mb-4 flex-1">
              The full practice: executive alignment, team enablement, and
              operational redesign working in parallel. I&apos;m embedded
              enough to understand the real dynamics and build capability that
              compounds over time.
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              Month-to-month. No contracts, no minimums. Cancel anytime.
            </p>
            <a
              href="mailto:tj@wrkhrs.co?subject=Agentic_Everything%20Monthly%20Engagement"
              className="inline-flex items-center justify-center text-sm font-medium bg-accent text-background px-6 py-3 rounded hover:bg-accent-hover transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
        <p className="text-sm text-muted mt-12 text-center">
          Questions? Email directly:{" "}
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
    <footer className="border-t border-border pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="font-mono text-sm tracking-wide text-foreground mb-4">
              Agentic_Everything
            </p>
            <p className="text-muted leading-relaxed max-w-sm mb-6">
              AI readiness consulting for agencies and creative teams.
              Embedded engagements that change how the work actually gets done.
            </p>
            <a
              href="mailto:tj@wrkhrs.co"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              tj@wrkhrs.co
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground mb-4">
              Navigate
            </p>
            <div className="space-y-3">
              <a
                href="#approach"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Approach
              </a>
              <a
                href="#how-it-works"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                How It Works
              </a>
              <a
                href="#thinking"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Thinking
              </a>
              <a
                href="#founder"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Meet the Founder
              </a>
              <a
                href="#pricing"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground mb-4">
              Studio
            </p>
            <div className="space-y-3 text-sm text-muted">
              <p>
                320 3rd St NE, Rear
                <br />
                Washington, DC
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=320+3rd+St+NE+Washington+DC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:text-accent-hover transition-colors mt-1"
              >
                Get directions &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            &copy; 2026 Agentic Everything. Washington, DC.
          </p>
          <p className="text-xs text-muted">
            A practice by{" "}
            <a
              href="https://tjcichecki.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              TJ Cichecki
            </a>
            {" / "}
            <a
              href="https://wrkhrs.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              Workhorse Collective
            </a>
          </p>
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
        <GapSection />
        <PanelPhoto />
        <ProblemSection />
        <ApproachSection />
        <HowItWorks />
        <ThinkingSection />
        <FounderSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
