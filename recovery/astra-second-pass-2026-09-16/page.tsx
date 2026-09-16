import Image from "next/image";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="navigation-dock">
        <a className="brand" href="#main" aria-label="GONZIK home"><span className="brand__image"><Image src="/gonzik.jpg" alt="GONZIK Fotodesign" width={2362} height={2362} priority /></span></a>
        <nav aria-label="Contact"><a href="https://github.com/basova-gonzalez">GitHub ↗</a><a href="https://t.me/basova_gonzalez">Telegram ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="scanlines" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <h1 id="hero-title"><span>Original ninja since 2013,</span>{" "}<span>no Figma required</span></h1>
          <p className="hero__subtitle">hey Misha. product design done directly in React. one practical idea for keeping a site and its LLM context in sync. no Figma was harmed.</p>
        </section>
        <div className="gallery">
          <section className="case" aria-labelledby="case-title">
            <div className="case-art" role="img" aria-label="Visual transition study from the original GONZIK photographer logo to KABAGO: an archival photograph-like print meets a contemporary oversized wordmark.">
              <span className="art-date">2013 — 2026</span>
              <span className="kabago-type" aria-hidden="true">KABA<br />GO.</span>
              <div className="archive-print"><Image src="/gonzik.jpg" alt="" width={2362} height={2362} /><span>GONZIK / FOTODESIGN / 2013</span></div>
              <span className="art-cross" aria-hidden="true">+</span>
              <span className="art-note">DESIGN HAS<br />MANY FORMS.</span>
            </div>
            <h2 className="gallery-caption" id="case-title">GONZIK → KABAGO <span>transition study</span></h2>
          </section>
          <section className="context" aria-labelledby="context-title">
            <div className="context-art">
              <div className="context-art__labels"><span>website</span><span>agent context</span></div>
              <h2 id="context-title">Same source.<br />Same story.</h2>
              <div className="source-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="context-art__flow"><span>one content source</span><span className="flow-arrow" aria-hidden="true">↓</span><div><span>site</span><span>+</span><span>agent context</span></div><span className="flow-arrow" aria-hidden="true">↓</span><span>date & link checks</span></div>
            </div>
            <p className="gallery-caption">Site ↔ LLM context <span>one practical idea</span></p>
          </section>
        </div>
        <section className="observation" aria-label="Observation behind the LLM context idea">
          <p className="observation__label">Observed on 16 September 2026</p>
          <div className="observation__body"><p>The homepage featured an update from 3 September. <code>llms.txt</code> was marked “Last updated: 11 August.” Different dates don’t prove stale content — they show where two publishing paths could drift.</p><p>Publish the site and agent context from one content source, then check dates and links before release.</p></div>
        </section>
      </main>
      <footer>Independent concept inspired by UNKNW. Not affiliated with or endorsed by UNKNW.</footer>
    </>
  );
}
