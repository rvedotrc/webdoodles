import styles from "./page.module.css";

const circle = {
  cx: 950,
  cy: 1333,
  outerRadius: 870,
  radiusStep: (900 - 237) / 17,
  lineWidth: 10,
  textOffset: 15,
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
          {/* BBC Diversity */}
          {/* celebrates */}
          {/* [graphic] International Women's Day */}

          {/* Legend: female */}
          {/* Legend: male */}
          {/* Year 30 Sept 2012 */}

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
          {/* all staff gender by grade group */}

          {/* doughnut graphic: 41m 59f "Worldwide non-sm equiv" */}
          {/* doughnut graphic: 41m 59f "Grades 2-4" */}
          {/* doughnut graphic: 51m 49f "Grades 5-7" */}
          {/* doughnut graphic: 58m 42f "Grades 8-9" */}
          {/* doughnut graphic: 60m 40f "Grades 10-11" */}
          {/* doughnut graphic: 63m 37f "Grades SM2/1" */}

          {/* to find out more visit bbc.co.uk/diversity */}
        </svg>
      </div>
    </div>
  );
}
