import { colours } from "./config";
import { SpeechBubble } from "./speechBubble";

const malePath = `
   a 3 3 0 0 1 3 3 v110
   a 15 15 0 1 0 30 0 v-210
   a 2 2 0 1 1 4 0 v85
   a 12 12 0 1 0 24 0 v-85
   a 40 40 0 0 0 -${30 * Math.sqrt(2)} -${30 * Math.sqrt(2)}
   h-28 z
   m-1,-145 h 1 a 28 28 0 1 0 0 -56 z`;

const femalePath = `h-1 v20 h1
   h3 v3 v96
   a 12 12 0 1 0 24 0 v-98 h30 l-30,-120
   a 2 2 0 1 1 4 0 l20,75
   a 4 4 0 1 0 22 -10 l-25,-85
   a 23 23 0 0 0 -20 -18
   h-35 z
   m-1,-142 h 1 a 28 28 0 1 0 0 -56 z`;

export const Person = (props: {
  gender: "male" | "female";
  percentage: number;
  cx: number;
  cy: number;
  pos: 1 | -1;
  defs: boolean;
}) => {
  const path = `M${props.cx},${props.cy + 20} ${
    props.gender === "male" ? malePath : femalePath
  }`;

  const fillId = `person-${props.cx}-${props.cy}`;
  const pct = props.percentage;

  if (props.defs) {
    return (
      <linearGradient id={fillId} x1={0} x2={0} y1={1} y2={0}>
        <stop offset={"0%"} stopColor={colours.male} />
        <stop offset={`${pct}%`} stopColor={colours.male} />
        <stop offset={`${pct}%`} stopColor={colours.female} />
        <stop offset={"100%"} stopColor={colours.female} />
      </linearGradient>
    );
  }

  return (
    <>
      <path fill={`url(#${fillId})`} d={path} />

      <path
        fill={`url(#${fillId})`}
        d={path}
        transform={`translate(+${props.cx} 0) matrix(-1 0 0 1 0 0) translate(-${props.cx} 0)`}
      />

      <SpeechBubble
        cx={props.cx}
        cy={props.cy}
        fillColour={colours.female}
        fontColour="white"
        text={`${props.percentage}%`}
      />
    </>
  );
};
