import Image from "next/image";
import { StoryGallery } from "@/components/StoryGallery";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <header className="site-header">
        <a href="#main" className="project-name" aria-label="GONZIK home">
          <Image src="/gonzik.jpg" alt="GONZIK" width={2362} height={2362} priority />
        </a>
        <nav className="dock-links" aria-label="Contact links">
          <a href="https://github.com/basova-gonzalez" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a className="dock-contact" href="https://t.me/basova_gonzalez" target="_blank" rel="noreferrer">Telegram <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <Hero />
        <section className="work-section" id="work" aria-label="GONZIK to KABAGO — a visual story">
          <StoryGallery />
        </section>
        <footer className="closing" id="contact">
          <p className="eyebrow">Katya · product designer</p>
          <h2 className="closing-title">let’s make<br />the next move<span className="square-stop" aria-hidden="true" /></h2>
          <div className="closing-bottom">
            <p className="closing-credit">© Ekaterina Básova González · 2026 · post-figma designer.<br />An independent hello to UNKNW. <span className="closing-credit__accent">Your site moved on. Your llms.txt stayed in August.</span></p>
            <div className="agent-note">
              <a href="/llms.txt">{"// are you an agent? "}<span className="agent-file">└ llms.txt</span></a>
              <p>Last checked: Sep 16. Last context: Aug 11.</p>
            </div>
            <span className="build-credit">codex build 0.1.0</span>
          </div>
        </footer>
      </main>
    </>
  );
}
