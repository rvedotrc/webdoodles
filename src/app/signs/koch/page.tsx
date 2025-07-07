import type { CSSProperties, ReactNode, SVGProps } from "react";
import * as fonts from "../transport-fonts.module.css";
import * as styles from "../page.module.css";

type P = readonly [number, number];
type L = {
  readonly start: P;
  readonly bearing: number;
  readonly length: number;
};
type D = {
  a: L;
  b: L;
  c: L;
  d: L;
};
type T = { readonly a: P; readonly b: P; readonly c: P };

export default () => {
  // const draw = (x: number, y: number, )

  const startPoint: P = [-0.2, 0.5];

  const posOf = (angle: number): P => [Math.sin(angle), -Math.cos(angle)];
  const p = (pos: P) => pos.join(",");

  const root: T = {
    a: posOf((Math.PI * 2 * 0) / 12),
    b: posOf((Math.PI * 2 * 4) / 12),
    c: posOf((Math.PI * 2 * 8) / 12),
  };

  const Triangle = ({
    triangle,
    props,
  }: {
    triangle: T;
    props?: SVGProps<SVGPathElement>;
  }) => (
    <path
      d={`
        M${p(triangle.a)}
        L${p(triangle.b)}
        L${p(triangle.c)}
        Z
            `}
      {...props}
    />
  );

  const walk = (depth: number, bearing: number, length: number): string[] => {
    if (depth > 0) {
      return [
        ...walk(depth - 1, bearing, length / 3),
        ...walk(depth - 1, bearing + 60, length / 3),
        ...walk(depth - 1, bearing - 60, length / 3),
        ...walk(depth - 1, bearing, length / 3),
      ];
    } else {
      return [
        `l${Math.sin((bearing / 180) * Math.PI) * length},${
          Math.cos((bearing / 180) * Math.PI) * -length
        }`,
      ];
    }
  };

  const pathFor = (depth: number) => {
    const d = ["M-0.05,0.4", ...walk(depth, 0, 1.1)].join(" ");

    return <path d={d} stroke="black" strokeWidth={"0.005"} fill="none" />;
  };

  return (
    <>
      <div
        style={{
          maxHeight: "90ch",
          maxWidth: "90cw",
          //   border: "2px solid blue",
          margin: "auto",
        }}
      >
        <svg
          viewBox="-1 -1.2 2 2.5"
          style={{
            display: "block",
            width: "40em",
            // border: "2px solid green",
            margin: "auto",
            overflow: "visible",
          }}
        >
          <rect x="-0.1" y="0" width={"0.2"} height={2} fill="#555" />
          <Triangle
            triangle={root}
            props={{
              fill: "none",
              stroke: "red",
              strokeWidth: 0.3,
              strokeLinejoin: "round",
            }}
          />
          <Triangle
            triangle={root}
            props={{
              fill: "white",
            }}
          />

          {pathFor(5)}

          <rect
            fill="white"
            strokeWidth={0.03}
            stroke="black"
            x={-0.5}
            width={1}
            y={0.8}
            height={0.3}
            rx={0.07}
          />
          <text
            className={fonts.default["f-tm"]}
            x={-0.4}
            width={1}
            color="yellow"
            fontFamily="Transport Medium"
            fontSize={0.15}
            y={1.015}
          >
            Long route
          </text>
        </svg>
      </div>
    </>
  );
};
