import { StoryGallery } from "@/components/StoryGallery";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <header className="site-header">
        <a href="#main" className="project-name" aria-label="Back to top">
          <svg viewBox="90 465 515 675" aria-hidden="true" focusable="false">
            <defs><clipPath id="menu-ninja"><path d="M90 465H605V790H540V1140H90Z" /></clipPath></defs>
            <image href="/gonzik.jpg" width="1600" height="1600" clipPath="url(#menu-ninja)" />
          </svg>
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
          <p className="eyebrow">post-figma designer</p>
          <h2 className="closing-title">let’s make<br />the next move<span className="square-stop" aria-hidden="true" /></h2>
          <div className="closing-bottom">
            <p className="closing-credit"><span aria-hidden="true">☺</span> Ekaterina Básova González · 2026 · post-figma designer.<br />An independent hello to UNKNW. <span className="closing-credit__accent">Your site <a href="https://unknw.com/events" target="_blank" rel="noreferrer">moved on to September</a>. <a href="https://unknw.com/llms.txt" target="_blank" rel="noreferrer">Your llms.txt probably stayed in August</a>.</span></p>
            <div className="agent-note">
              <a href="https://unknw.com/llms.txt" target="_blank" rel="noreferrer">{"// are you an agent? "}<span className="agent-file">└ llms.txt</span></a>
              <p>Checked: Sep 16. File dated: Aug 11.</p>
            </div>
            <span className="build-credit">codex build 0.1.0</span>
          </div>
        </footer>
      </main>
    </>
  );
}
