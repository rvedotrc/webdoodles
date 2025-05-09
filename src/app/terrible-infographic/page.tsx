import { circle } from "./config";
import { divisions, gradeGroups } from "./data";
import { Doughnut } from "./doughnut";
import { ManWoman } from "./manWoman";
import { ShittyArc } from "./shittyArc";

export default function TerribleInfographic() {
  return (
    <div>
      <h1>Terrible infographic!</h1>
      <div>
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
          {/* BBC originally in blocks form */}
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

          {/* [graphic] */}
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

          <text
            x={circle.cx - 200}
            y={1065}
            textAnchor="end"
            fill="white"
            fontSize={32}
            fontWeight={"bold"}
            style={{ whiteSpace: "pre-line", textTransform: "uppercase" }}
          >
            {`All staff gender\ndistribution by division %`}
          </text>

          <ManWoman
            percentMale={52}
            label="All staff gender distribution"
            pos={-1}
          />
          <ManWoman
            percentMale={63}
            label={`BBC wide senior manager\ngender distribution`}
            pos={+1}
          />

          <path
            stroke="white"
            strokeWidth={5}
            strokeDasharray={10}
            d="M80,2450 h1940"
          />

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
