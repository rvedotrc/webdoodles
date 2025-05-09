export const Person = (props: {
  gender: "male" | "female";
  percentage: number;
  cx: number;
  cy: number;
  pos: 1 | -1;
}) => {
  return (
    <>
      {/* figure. Can we use a gradient fill to achieve the percent-full effect? */}
      {/* head */}

      <circle cx={props.cx} cy={props.cy} r={10} />
      <ellipse
        cx={props.cx + 50}
        cy={props.cy - 220}
        rx={60}
        ry={40}
        fill="cyan"
      />
      <text
        x={props.cx + 50}
        y={props.cy - 220 + 13}
        textAnchor="middle"
        fill="white"
        fontSize={40}
        fontWeight={"bold"}
      >
        {props.percentage}%
      </text>

      {/* triangle */}
    </>
  );
};
