import { BBCBlocks } from "./bbcBlocks";
import { CircleSymbol } from "./circleSymbol";
import { circle, colours } from "./config";
import { divisions, gradeGroups } from "./data";
import { Doughnut } from "./doughnut";
import { ManWoman } from "./manWoman";
import { ShittyArc } from "./shittyArc";

export default function TerribleInfographic() {
  return (
    <div>
      <div style={{ background: "#000" }}>
        <svg
          style={{
            width: "210mm",
            height: "297mm",
            margin: "5vw",
            background: "rgb(90, 0, 90)",
          }}
          viewBox="0 0 2100 2970"
        >
          <defs>
            <ManWoman
              percentMale={52}
              label="All staff gender distribution"
              pos={-1}
              defs={true}
            />
            <ManWoman
              percentMale={63}
              label={`BBC wide senior manager\ngender distribution`}
              pos={+1}
              defs={true}
            />
          </defs>

          {/* BBC originally in blocks form */}
          <BBCBlocks
            color={"white"}
            x="740"
            y="10"
            height="200pt"
            width="200pt"
          />
          <text
            textAnchor="left"
            x="1030"
            y="170"
            fill="white"
            fontSize={80}
            letterSpacing={"-1"}
            fontWeight={"bold"}
            fontFamily="Gill Sans, sans-serif"
          >
            Diversity
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
          <CircleSymbol x={170} y={195} width={250} height={250} />
          <text
            textAnchor="middle"
            x="1050"
            y="350"
            fill="white"
            fontSize={100}
            fontFamily="Futura"
            fontVariant={"small"}
            fontWeight={"medium"}
            letterSpacing={"-3"}
          >
            International Women's Day
          </text>

          <circle cx="1616" cy="500" r="20" fill={colours.female} />
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

          <circle cx="1616" cy="570" r="20" fill={colours.male} />
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
              color={colours.male}
              percentage={pctMale}
            />,
            <ShittyArc
              key={`F${index}`}
              radius={circle.outerRadius - circle.radiusStep * index}
              color={colours.female}
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
            defs={false}
          />
          <ManWoman
            percentMale={63}
            label={`BBC wide senior manager\ngender distribution`}
            pos={+1}
            defs={false}
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
