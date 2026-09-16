"use client";

import { useRef } from "react";
import { motion, MotionConfig, useInView, useReducedMotion } from "motion/react";
import { NinjaCover } from "./NinjaCover";

export function StoryGallery() {
  const scope = useRef<HTMLDivElement>(null);
  const visible = useInView(scope, { margin: "120px" });
  const reduced = useReducedMotion();
  const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.65 } };

  return <MotionConfig reducedMotion="user">
    <div className="story-grid" ref={scope} data-playing={visible}>
      <div className="story-feature">
        <div className="story-section-label"><span>the next chapter</span><span>2026</span></div>
        <motion.div {...reveal} className="story-feature__frame"><NinjaCover compact /></motion.div>
      </div>
      <div className="story-aside">
        <div className="story-section-label"><span>the backstory</span><span>01 — 02</span></div>
        <motion.figure {...reveal} className="story-card story-archive">
          <div className="story-art archive-art" role="img" aria-label="Original GONZIK photographer ninja, since 2013">
            <span className="archive-year">2013<span className="archive-square" /></span>
            <svg className="archive-ninja" viewBox="90 465 515 675" aria-hidden="true">
              <defs><clipPath id="archive-silhouette"><path d="M90 465H605V790H540V1140H90Z" /></clipPath></defs>
              <image href="/gonzik.jpg" width="1600" height="1600" clipPath="url(#archive-silhouette)" />
            </svg>
            <span className="archive-stamp">GONZIK<br /><small>FOTODESIGN</small></span>
            <span className="archive-note">original equipment.</span>
          </div>
          <figcaption><span>Once a ninja.</span><span>01 / origin</span></figcaption>
        </motion.figure>
        <motion.figure {...reveal} className="story-card story-weapon">
          <div className="story-art weapon-art" role="img" aria-label="Different weapon: a camera becomes a red code terminal">
            <span className="weapon-title">different<br /><em>weapon.</em></span>
            <svg className="weapon-camera" viewBox="0 0 200 140" aria-hidden="true"><path d="M20 35h39l12-19h57l13 19h39v92H20Z" /><circle cx="104" cy="80" r="32"/><circle cx="104" cy="80" r="22"/><path d="M32 48h27"/></svg>
            <motion.div className="weapon-terminal" aria-hidden="true"
              animate={visible && !reduced ? { x: [36, 36, 0, 0, 36], y: [25, 25, 0, 0, 25], rotate: [8, 8, -5, -5, 8], opacity: [0, 0, 1, 1, 0] } : { x: 0, y: 0, rotate: -5, opacity: 1 }}
              transition={visible && !reduced ? { duration: 8, times: [0, .15, .29, .86, 1], repeat: Infinity, ease: [.22, 1, .36, 1] } : { duration: 0 }}>
              <div className="terminal-chrome"><span>● ● ●</span><span>kabago / build</span></div>
              <div className="terminal-command"><span>›</span> make it move<span className="terminal-cursor">▌</span></div>
              <div className="terminal-output">React + a little instinct.<br /><span>✓ ready for the next chapter</span></div>
            </motion.div>
            <div className="weapon-tools" aria-hidden="true">{["react", "claude", "github"].map(tool => <span key={tool} style={{ maskImage: `url('/brand/${tool}.svg')` }} />)}</div>
          </div>
          <figcaption><span>New tools. Same instinct.</span><span>02 / switch</span></figcaption>
        </motion.figure>
      </div>
    </div>
  </MotionConfig>;
}
