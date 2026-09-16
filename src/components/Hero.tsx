"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import "./Hero.css";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const inView = useInView(scope);
  const reduced = useReducedMotion();
  const [frame, setFrame] = useState({ text: "ninja", scrambling: false });

  useEffect(() => {
    if (!inView || reduced) return;
    const words = ["ninja", "maker", "coder"];
    const symbols = "{}[]<>/\\_$#*+=:;!?01|~";
    const lockOrder = [2, 0, 4, 1, 3];
    let timer: ReturnType<typeof setTimeout>;
    let wordIndex = 0;

    function hold() {
      setFrame({ text: words[wordIndex], scrambling: false });
      timer = setTimeout(scramble, wordIndex === 0 ? 3400 : 1600);
    }

    function scramble() {
      const target = words[(wordIndex + 1) % words.length];
      let step = 0;
      function tick() {
        if (step === 16) {
          wordIndex = (wordIndex + 1) % words.length;
          hold();
          return;
        }
        // The noisy prefix deliberately spills over the following word.
        // Letters lock out of order, and the extra symbols collapse at the end.
        const locked = Math.max(0, Math.floor((step - 5) / 2));
        const length = step < 9 ? target.length + 2 + step % 3 : target.length + Math.max(0, 12 - step);
        const text = Array.from({ length }, (_, i) =>
          i < target.length && lockOrder.indexOf(i) < locked
            ? target[i]
            : symbols[Math.floor(Math.random() * symbols.length)]
        ).join("");
        setFrame({ text, scrambling: true });
        step++;
        timer = setTimeout(tick, step % 4 === 0 ? 70 : 42);
      }
      tick();
    }

    function resume() {
      clearTimeout(timer);
      if (!document.hidden) timer = setTimeout(hold, 0);
    }
    resume();
    document.addEventListener("visibilitychange", resume);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [inView, reduced]);

  return <section ref={scope} className="hero" data-running={inView} aria-labelledby="hero-title">
    <span className="hero-scan" aria-hidden="true" />
    <h1 id="hero-title" aria-label="Original ninja since 2013, no Figma required">
      Original <span className="hero-word" aria-hidden="true" data-scrambling={!reduced && frame.scrambling}>
        <span className="hero-word__text" data-echo={reduced ? "ninja" : frame.text}>{reduced ? "ninja" : frame.text}</span>
      </span>{" "}<span className="keep-together">since 2013,</span><br className="hero-break" /> no Figma required<span className="square-stop" aria-hidden="true" />
    </h1>
    <p className="hero-intro">hey Misha. a little visual proof,<br />design straight in React, no layers in between.</p>
    <a className="hero-anchor" href="#work">same ninja. different tools.</a>
  </section>;
}
