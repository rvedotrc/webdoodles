import styles from "./page.module.css";

const circle = {
  cx: 950,
  cy: 1333,
  outerRadius: 870,
  radiusStep: (900 - 237) / 17,
  lineWidth: 10,
  textOffset: 15,
};

const doughnuts = {
  spacing: 320,
  cy: 2850,
  radius: 90,
  strokeWith: 70,
  gap: 80,
};

const ShittyArc = (props: {
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

const Doughnut = (props: {
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

export default function TerribleInfographic() {
  const divisions: [number, string][] = [
    [47, "Audio & Music"],
    [57.4, "DG/CD Offices"],
    [54.5, "English Regions"],
    [49, "Finance"],
    [76.8, "Future Media"],
    [57, "Global News"],
    [44, "Journalism HQ"],
    [54, "N Ireland"],
    [55, "News excl ER"],
    [56, "North"],
    [53, "Operations"],
    [74, "S&PP"],
    [48, "Scotland"],
    [35, "Trust"],
    [36, "Vision"],
    [52, "Wales"],
    [44, "Worldwide"],
  ];

  const gradeGroups: [number, string][] = [
    [41, "Worldwide\nnon-sm equiv"],
    [41, "Grades 2–4"],
    [51, "Grades 5–7"],
    [58, "Grades 8–9"],
    [60, "Grades 10–11"],
    [63, "Grades SM2/1"],
  ];

  return (
    <div>
      <h1>Terrible infographic!</h1>
      <div>
        <img
          src="http://localhost:4000/image/rev/94dbc0cc569f4"
          style={{
            width: "210mm",
            height: "297mm",
            border: "5px solid blue",
            position: "absolute",
            marginLeft: "5em",
            zIndex: "10",
            opacity: 0.5,
          }}
        />
        <svg
          style={{
            width: "210mm",
            height: "297mm",
            border: "5px solid blue",
            marginLeft: "5em",
            background: "rgb(90, 0, 90)",
          }}
          viewBox="0 0 2100 2970"
        >
          {/* BBC-logo Diversity */}
          <text
            textAnchor="middle"
            x="1050"
            y="170"
            fill="white"
            fontSize={80}
            fontWeight={"bold"}
          >
            BBC Diversity
          </text>

          {/* celebrates */}
          <text
            textAnchor="middle"
            x="1050"
            y="250"
            fill="white"
            fontSize={45}
            style={{ textTransform: "uppercase" }}
          >
            celebrates
          </text>

          {/* [graphic] International Women's Day */}
          <text
            textAnchor="middle"
            x="1050"
            y="350"
            fill="white"
            fontSize={100}
            fontWeight={"bold"}
          >
            International Women's Day
          </text>

          {/* Legend: female */}
          <circle cx="1616" cy="500" r="20" fill="cyan" />
          <text
            x="1650"
            y="510"
            fill="white"
            fontSize={32}
            fontWeight={"bold"}
            style={{ textTransform: "uppercase" }}
          >
            Female
          </text>

          {/* Legend: male */}
          <circle cx="1616" cy="570" r="20" fill="magenta" />
          <text
            x="1650"
            y="580"
            fill="white"
            fontSize={32}
            fontWeight={"bold"}
            style={{ textTransform: "uppercase" }}
          >
            Male
          </text>

          {/* Year 30 Sept 2012 */}
          <text
            x="1600"
            y="650"
            fill="white"
            fontSize={32}
            fontWeight={"bold"}
            style={{ textTransform: "uppercase" }}
          >
            Year 30 Sept 2012
          </text>

          {divisions.map(([pctMale, named], index) => [
            // TODO: text
            <text
              key={`T${index}`}
              x={circle.cx - circle.textOffset}
              y={
                circle.cy -
                (circle.outerRadius - circle.radiusStep * (index + 0.4))
              }
              fill="white"
              alignmentBaseline="middle"
              textAnchor="end"
              fontSize={circle.radiusStep / 2}
            >
              {named.toUpperCase()}
            </text>,
            <ShittyArc
              key={`M${index}`}
              radius={circle.outerRadius - circle.radiusStep * (index + 0.33)}
              color="magenta"
              percentage={pctMale}
            />,
            <ShittyArc
              key={`F${index}`}
              radius={circle.outerRadius - circle.radiusStep * index}
              color="cyan"
              percentage={100 - pctMale}
            />,
          ])}

          {/* All staff gender */}

          {/* distribution by division % */}

          {/* man-woman graphic, 52m 48f, "All staff gender distribution" */}
          {/* man-woman graphic, 63m 37f, "BBC wide senior manager gender distribution" */}

          {/* dashed line */}
          <path
            stroke="white"
            strokeWidth={5}
            strokeDasharray={10}
            d="M80,2450 h1940"
          />

          {/* all staff gender by grade group */}
          <text
            textAnchor="middle"
            x="1050"
            y="2500"
            fill="white"
            fontSize={32}
            fontWeight={"bold"}
            style={{ textTransform: "uppercase" }}
          >
            all staff gender by grade group
          </text>

          {gradeGroups.map(([percentMale, label], index) => (
            <Doughnut
              key={index}
              percentMale={percentMale}
              label={label}
              index={index}
            />
          ))}

          {/* to find out more visit bbc.co.uk/diversity */}
          <text
            textAnchor="middle"
            x="1050"
            y="2940"
            fill="white"
            fontSize={45}
            fontWeight={"bold"}
          >
            To find out more visit bbc.co.uk/diversity
          </text>
        </svg>
      </div>
    </div>
  );
}
