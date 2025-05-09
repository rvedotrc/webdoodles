import { Person } from "./person";

export const ManWoman = (props: {
  percentMale: number;
  label: string;
  pos: 1 | -1;
}) => {
  return (
    <>
      <Person
        gender="male"
        percentage={props.percentMale}
        pos={-1}
        cx={1050 + 700 * props.pos - 100}
        cy={2200}
      />
      <Person
        gender="female"
        percentage={100 - props.percentMale}
        pos={1}
        cx={1050 + 700 * props.pos + 100}
        cy={2200}
      />

      <text
        x={1050 + 700 * props.pos}
        y={2390}
        textAnchor="middle"
        fill="white"
        fontSize={28}
        fontWeight={"bold"}
        style={{ whiteSpace: "pre-line", textTransform: "uppercase" }}
      >
        {props.label}
      </text>
    </>
  );
};
