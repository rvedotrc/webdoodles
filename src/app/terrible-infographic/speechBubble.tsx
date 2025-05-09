export const SpeechBubble = (props: {
  cx: number;
  cy: number;
  fillColour: string;
  fontColour: string;
  text: string;
}) => (
  <>
    <ellipse
      cx={props.cx + 70}
      cy={props.cy - 220}
      rx={45}
      ry={30}
      fill={props.fillColour}
    />
    <path
      fill={props.fillColour}
      d={`M${props.cx + 50},${props.cy - 220} l-20,40 l40,-30 z`}
    />

    <text
      x={props.cx + 70}
      y={props.cy - 220 + 10}
      textAnchor="middle"
      fill={props.fontColour}
      fontSize={28}
      fontWeight={"bold"}
    >
      {props.text}
    </text>
  </>
);
