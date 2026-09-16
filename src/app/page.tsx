import { BriefComposer } from "@/components/BriefComposer";
import { WorkCatalogue } from "@/components/WorkCatalogue";

const pathways = [
  { id: "01", title: "visual system", detail: "layout and motion, built in React.", href: "#work" },
  { id: "02", title: "better flow", detail: "from problem to a useful brief.", href: "#brief" },
  { id: "03", title: "LLM context", detail: "structured, copyable handoff.", href: "#agent-context" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a href="#main" className="project-name" aria-label="Katya proof home">
          katya<span className="project-name__dot">.</span>
          <small>independent React proof / 001</small>
        </a>
        <nav className="dock-links" aria-label="Main navigation">
          <a href="#work">visual <span aria-hidden="true">↗</span></a>
          <a href="#brief">flow <span aria-hidden="true">↗</span></a>
          <a href="#agent-context">LLM context <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__composition">
            <h1 id="hero-title">
              <span className="hero__line">Hey Misha.</span>
              <span className="hero__line">I know a <span className="glitch-word" data-word="designer">designer</span>.</span>
            </h1>
          </div>
          <div className="hero__intro">
            <p>Plot twist: it’s me.<br className="desktop-break" /> Visuals, a better flow, and LLM context — built in React.</p>
          </div>
          <nav className="intent-list" aria-label="Choose a starting point">
            {pathways.map((item) => (
              <a className="intent" href={item.href} key={item.id}>
                <span className="intent__number">{item.id}</span>
                <span className="intent__title">{item.title}</span>
                <span className="intent__detail">{item.detail}</span>
                <span className="intent__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <p className="independent-note">An independent prototype inspired by UNKNW’s public site. Not affiliated with or endorsed by UNKNW.</p>
        </section>
        <section className="content-section work-section" id="work" aria-labelledby="work-title">
          <WorkCatalogue />
        </section>
        <section className="content-section brief-section" id="brief" aria-labelledby="brief-title">
          <div className="section-heading">
            <span className="mono-label">02 / flow + LLM handoff</span>
            <h2 id="brief-title">from request<br />to useful context<span className="accent">.</span></h2>
            <p>Four choices replace an open contact form. The result is a readable brief and structured context an LLM can route to a designer.</p>
          </div>
          <BriefComposer />
        </section>
      </main>
      <footer className="site-footer">
        <span>Katya / independent React UX proof</span>
        <a href="#main">back to top ↑</a>
        <span>Visual · flow · LLM context</span>
        <label className="motion-toggle"><input type="checkbox" /><span>pause background motion</span></label>
      </footer>
    </>
  );
}
