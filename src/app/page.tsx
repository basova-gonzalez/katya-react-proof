import Image from "next/image";
import { NinjaCover } from "@/components/NinjaCover";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a href="#main" className="project-name project-name--gonzik" aria-label="GONZIK home">
          <Image src="/gonzik.jpg" alt="GONZIK" width={2362} height={2362} priority />
        </a>
        <nav className="dock-links" aria-label="Contact links">
          <a href="https://github.com/basova-gonzalez" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://t.me/basova_gonzalez" target="_blank" rel="noreferrer">Telegram <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__composition">
            <h1 id="hero-title"><span className="hero__line">Original ninja since 2013,</span>{" "}<span className="hero__line">no Figma required</span></h1>
          </div>
          <div className="hero__intro">
            <p>hey Misha. product design done directly in React. one practical idea for keeping a site and its LLM context in sync. no Figma was harmed.</p>
          </div>
        </section>
        <section className="content-section work-section" id="work" aria-labelledby="work-title">
          <div className="catalog">
            <h2 className="catalog__eyebrow" id="work-title">visual proof</h2>
            <div className="catalog__grid catalog__grid--proof">
              <NinjaCover compact />
              <figure className="catalog__card catalog__card--sync">
                <div className="catalog__art catalog__art--sync" role="img" aria-label="Research sequence from noticing possible drift to mapping the publishing flow and proposing a suitable check">
                  <div className="sync-cover__head"><span>site</span><span>agent context</span></div>
                  <div className="sync-cover__dates"><span>03 Sep<small>homepage event</small></span><span>11 Aug<small>llms.txt update</small></span></div>
                  <div className="sync-cover__flow"><span>possible<br />drift</span><i aria-hidden="true">↘</i><strong>map publishing flow<br />&amp; shared facts</strong><i aria-hidden="true">↗</i><span>suggest<br />a check</span><small>conditional — depends on the setup</small></div>
                </div>
                <figcaption className="catalog__card-body"><h3 className="catalog__card-title">site ↔ LLM</h3><span className="catalog__category">observation / research</span></figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="content-section brief-section" id="brief" aria-labelledby="brief-title">
          <div className="section-heading">
            <span className="mono-label">observation / proposal</span>
            <h2 id="brief-title">a pinch of<br />product design</h2>
            <div className="section-copy"><p>While reviewing the site, I noticed a 3 September event on the homepage and an 11 August “last updated” date in llms.txt. That may be intentional. It raises a useful question: when the site changes, how do you decide what should also change in the context provided to LLMs?</p><p>I’d start by mapping how content is published and which facts belong in both places. Then I’d add a small check before release. If the setup allows it, shared structured content could keep those facts in sync.</p></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>Katya / independent React UX proof</span>
        <a href="https://github.com/basova-gonzalez" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://t.me/basova_gonzalez" target="_blank" rel="noreferrer">Telegram ↗</a>
      </footer>
    </>
  );
}
