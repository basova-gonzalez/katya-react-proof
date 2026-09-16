"use client";

import { useState, type CSSProperties } from "react";
import "./NinjaCover.css";
import { GeneratedNinja } from "./GeneratedNinja";

const flyingTools = [
  { id: "claude", name: "Claude", route: "slash", duration: 7.4, phase: -1.2, size: 21, color: "#ff3b22" },
  { id: "kimi", name: "Kimi", route: "arc", duration: 9.2, phase: -4.8, size: 23, color: "#151515" },
  { id: "glm", name: "GLM", route: "reverse", duration: 8.4, phase: -2.3, size: 22, color: "#ff3b22" },
  { id: "github", name: "GitHub", route: "arc", duration: 10.3, phase: -8.1, size: 20, color: "#151515" },
  { id: "react", name: "React", route: "slash", duration: 6.8, phase: -4.6, size: 25, color: "#ff3b22" },
  { id: "n8n", name: "n8n", route: "reverse", duration: 11.1, phase: -8.7, size: 26, color: "#151515" },
  { id: "openai", name: "OpenAI", route: "orbit", duration: 8.8, phase: -5.7, size: 20, color: "#151515" },
  { id: "gemini", name: "Gemini", route: "orbit", duration: 6.2, phase: -1.9, size: 22, color: "#ff3b22" },
] as const;

function letters(word: string) {
  return [...word].map((letter, index) => <b key={index} style={{ "--letter": index, "--kick": index % 2 ? "-1" : "1" } as CSSProperties}>{letter}</b>);
}

export function NinjaCover({ compact = false }: { compact?: boolean }) {
  const [take, setTake] = useState(0);
  return (
    <figure className={`ninja-project${compact ? " ninja-project--compact" : ""}`}>
      <div className="ninja-cover" key={take}>
        <div className="ninja-cover__top"><span>GONZIK → KABAGO</span><span>INDEPENDENT BY DESIGN</span></div>
        <div className="ninja-cover__stage" aria-hidden="true">
          <span className="ninja-cover__year">2013<span>→ NOW</span></span>
          <div className="ninja-cover__orbit" />
          {compact && <svg className="ninja-cover__impact-rays" viewBox="0 0 160 160"><path d="m80 6 0 38m52-27-23 31m43 27-38 4m24 48-29-25m-29 49 0-38m-54 15 28-27M8 70l37 6m-27-51 29 25" fill="none" stroke="currentColor" strokeWidth="5" /></svg>}
          {compact && <span className="ninja-cover__counter"><span>20</span><span className="ninja-cover__digit-window ninja-cover__digit-window--years"><span className="ninja-cover__reel ninja-cover__reel--years">{Array.from({ length: 14 }, (_, i) => <i key={i}>{13 + i}</i>)}</span></span><span className="ninja-cover__date-impact"><i/><i/><i/><i/></span></span>}
          {compact && <><span className="ninja-cover__old-name"><span>{letters("GON")}</span><span>{letters("ZIK")}</span></span></>}
          {compact ? <GeneratedNinja /> : <svg className="ninja-cover__hero" viewBox="90 465 515 675">
            <defs><clipPath id="ninja-silhouette"><path d="M90 465H605V790H540V1140H90Z" /></clipPath></defs>
            <image href="/gonzik.jpg" width="1600" height="1600" clipPath="url(#ninja-silhouette)" />
            <g className="ninja-cover__terminal">
              <rect x="294" y="725" width="158" height="112" rx="6" fill="#ff3b22" />
              <path d="M307 745h132" stroke="#151515" strokeOpacity=".3" />
              <circle cx="310" cy="736" r="2" fill="#151515" />
              <circle cx="318" cy="736" r="2" fill="#151515" />
              <path d="m314 765 15 12-15 12" fill="none" stroke="#151515" strokeWidth="5" />
              <path className="ninja-cover__cursor" d="M339 790h20" stroke="#151515" strokeWidth="5" />
              {!compact && <text x="311" y="820" fontSize="10" fontFamily="monospace" fill="#151515">BUILD SOMETHING.</text>}
            </g>
          </svg>}
          <div className="ninja-cover__wordmark">{compact ? <span className="ninja-cover__kaba">{letters("KABA")}</span> : "KABA"}{compact ? <span className="ninja-cover__go-line"><svg className="ninja-cover__code-go" viewBox="0 0 210 105">
            <defs><clipPath id="code-go"><text x="0" y="91" fontSize="122" fontWeight="900" letterSpacing="-10"><tspan className="ninja-cover__g">G</tspan><tspan className="ninja-cover__o">O</tspan></text></clipPath><pattern id="code-lines" width="210" height="30" patternUnits="userSpaceOnUse"><text x="0" y="10">React / TypeScript / Claude</text><text x="-12" y="24">Python / GPT / Gemini / CSS</text></pattern></defs>
            <g clipPath="url(#code-go)"><path d="M0 0h210v105H0z" fill="#ff3b22"/><path d="M0 0h210v105H0z" fill="url(#code-lines)"/></g>
          </svg><span className="ninja-cover__dots"><i/><i/><i/></span></span> : <span>GO<span className="ninja-cover__square" /></span>}</div>
          <span className="ninja-cover__annotation">TOOLS CHANGE.<br />INSTINCT DOESN’T.</span>
        </div>
        {compact && <div className="ninja-cover__slogan" aria-hidden="true"><span className="slogan-reveal">same</span><span className="slogan-turn">ninja,</span><em className="slogan-scatter">{letters("different")}</em><em className="slogan-rise">{letters("weapon.")}</em></div>}
        {compact && <div className="ninja-cover__tool-storm" aria-hidden="true">{flyingTools.map((tool) => <span key={tool.id} className={`tool-flight tool-flight--${tool.route}`} style={{ "--flight-duration": `${tool.duration}s`, "--flight-phase": `${tool.phase}s`, "--tool-size": `${tool.size}cqw`, "--tool-color": tool.color, "--tool-mark": `url('/brand/${tool.id}.svg')` } as CSSProperties}><span className="tool-flight__spin" title={tool.name} /></span>)}</div>}
        {!compact && <div className="ninja-cover__bottom"><p>same ninja,<br /><em>different weapon.</em></p><button type="button" onClick={() => setTake(take + 1)} aria-label="Replay the GONZIK to KABAGO animation">replay <span aria-hidden="true">↗</span></button></div>}
      </div>
      <figcaption><span>Gonzik → Kabago</span>{!compact && <span>Identity in motion / 2013—now</span>}</figcaption>
    </figure>
  );
}
