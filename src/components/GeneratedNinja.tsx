/** Three complete generated poses share one canvas; limbs are never detached. */
export function GeneratedNinja() {
  return <svg className="generated-ninja" viewBox="0 0 1000 1150" aria-hidden="true">
    <defs>
      <clipPath id="pose-idle-crop"><rect x="75" y="50" width="585" height="680" /></clipPath>
      <clipPath id="pose-windup-crop"><rect x="775" y="90" width="520" height="620" /></clipPath>
      <clipPath id="pose-kick-crop"><rect x="1350" y="145" width="700" height="570" /></clipPath>
    </defs>
    <g className="generated-ninja__idle">
      <g transform="translate(-85 -25) scale(1.1)">
        <image href="/concepts/ninja-poses.png" width="2061" height="763" clipPath="url(#pose-idle-crop)" />
        <g className="generated-ninja__terminal">
          <rect x="285" y="311" width="162" height="118" rx="7" fill="#ff3b22" />
          <path d="M298 337h136" stroke="#151515" strokeOpacity=".3" strokeWidth="2" />
          <circle cx="299" cy="324" r="3" fill="#151515"/><circle cx="310" cy="324" r="3" fill="#151515"/>
          <path d="m308 358 18 15-18 15m32 0h24" stroke="#151515" strokeWidth="6" fill="none" />
        </g>
      </g>
    </g>
    <g className="generated-ninja__windup"><g transform="translate(-740 60)"><image href="/concepts/ninja-poses.png" width="2061" height="763" clipPath="url(#pose-windup-crop)" /></g></g>
    <g className="generated-ninja__kick"><g transform="translate(-1270 20) scale(1.05)"><image href="/concepts/ninja-poses.png" width="2061" height="763" clipPath="url(#pose-kick-crop)" /></g></g>
  </svg>;
}
