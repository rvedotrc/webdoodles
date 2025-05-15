import type { SVGProps } from "react";

const bg = "rgb(90, 0, 90)";
const fg = "white";

export const CircleSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="-100 -100 200 200" {...props}>
    <circle cx={0} cy={0} r={95} fill={fg} />
    <circle cx={0} cy={0} r={61} fill={bg} />
    <path d="M0,0 L-100,100" strokeWidth={6} stroke={bg} />
    <path
      d="M0,0 V-86 V-74 H14 H-14"
      strokeWidth={6}
      stroke={bg}
      fill={"none"}
      transform="rotate(135)"
    />
    <g transform="translate(6 10) rotate(45) translate(0 -78) scale(3.5)">
      <path d="M0,10 L-10,0 L0,-10 L-3,0 Z" fill={bg} transform="scale(1.2)" />
      <path d="M0,10 L-10,0 L0,-10  Z" fill={fg} />
    </g>
  </svg>
);
