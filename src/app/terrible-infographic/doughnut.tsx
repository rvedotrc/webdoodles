import { doughnuts } from "./config";

export const Doughnut = (props: {
  percentMale: number;
  label: string;
  index: number;
}) => {
  const cx = 1050 - 2.5 * doughnuts.spacing + props.index * doughnuts.spacing;
  const cy = doughnuts.cy - doughnuts.radius - doughnuts.gap;
  const textY = doughnuts.cy;

  const xOf = (percent: number) =>
    cx - Math.sin((percent / 50) * Math.PI) * doughnuts.radius;
  const yOf = (percent: number) =>
    cy - Math.cos((percent / 50) * Math.PI) * doughnuts.radius;

  return [
    <text
      key="label"
      fill="white"
      fontSize={"24"}
      x={cx}
      y={doughnuts.cy}
      textAnchor="middle"
      style={{ textTransform: "uppercase", whiteSpace: "pre-line" }}
    >
      {props.label}
    </text>,
    <path
      key="m"
      stroke="magenta"
      strokeWidth={doughnuts.strokeWith}
      fill="none"
      d={`M${cx},${cy - doughnuts.radius} A ${doughnuts.radius} ${
        doughnuts.radius
      } 0 ${props.percentMale > 50 ? 1 : 0} 0 ${
        cx - Math.sin((props.percentMale / 50) * Math.PI) * doughnuts.radius
      },${
        cy - Math.cos((props.percentMale / 50) * Math.PI) * doughnuts.radius
      }`}
    />,
    <text
      key="mt"
      x={xOf(25)}
      y={yOf(25) + 15}
      textAnchor="middle"
      fill="white"
      fontSize={doughnuts.strokeWith / 2.1}
      fontWeight={"bold"}
    >
      {props.percentMale}%
    </text>,

    <path
      key="f"
      stroke="cyan"
      strokeWidth={doughnuts.strokeWith}
      fill="none"
      d={`M${cx},${cy - doughnuts.radius} A ${doughnuts.radius} ${
        doughnuts.radius
      } 0 ${props.percentMale > 50 ? 0 : 1} 1 ${
        cx - Math.sin((props.percentMale / 50) * Math.PI) * doughnuts.radius
      },${
        cy - Math.cos((props.percentMale / 50) * Math.PI) * doughnuts.radius
      }`}
    />,
    <text
      key="ft"
      x={xOf(-15)}
      y={yOf(-15)}
      textAnchor="middle"
      fill="white"
      fontSize={doughnuts.strokeWith / 2.1}
      fontWeight={"bold"}
    >
      {100 - props.percentMale}%
    </text>,
  ];
};
