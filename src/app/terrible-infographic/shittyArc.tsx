import { circle } from "./config";

export const ShittyArc = (props: {
  percentage: number;
  radius: number;
  color: string;
}) => {
  const cx = circle.cx;
  const cy = circle.cy;

  const startX = cx;
  const startY = cy - props.radius;

  const endX = cx + Math.sin((props.percentage / 50) * Math.PI) * props.radius;
  const endY = cy - Math.cos((props.percentage / 50) * Math.PI) * props.radius;

  return (
    <path
      stroke={props.color}
      strokeWidth={circle.lineWidth}
      fill="none"
      d={`M${cx},${cy - props.radius} A ${props.radius} ${props.radius} 0 ${
        props.percentage >= 50 ? 1 : 0
      } 1 ${endX} ${endY}`}
    />
  );
};
