import type { CSSProperties, ReactNode, SVGProps } from "react";

type P = readonly [number, number];
type T = { readonly a: P; readonly b: P; readonly c: P };
type D = {
  readonly a: T;
  readonly b: T;
  readonly c: T;
  readonly o: T;
};

export default () => {
  // const draw = (x: number, y: number, )

  const posOf = (angle: number): P => [Math.sin(angle), -Math.cos(angle)];
  const p = (pos: P) => pos.join(",");
  const midpoint = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

  const root: T = {
    a: posOf((Math.PI * 2 * 0) / 12),
    b: posOf((Math.PI * 2 * 4) / 12),
    c: posOf((Math.PI * 2 * 8) / 12),
  };

  const divide = (from: T): D => {
    const midAB = midpoint(from.a, from.b);
    const midBC = midpoint(from.b, from.c);
    const midCA = midpoint(from.c, from.a);

    return {
      a: {
        a: from.a,
        b: midAB,
        c: midCA,
      },
      b: {
        a: midAB,
        b: from.b,
        c: midBC,
      },
      c: {
        a: midCA,
        b: midBC,
        c: from.c,
      },
      o: {
        a: midBC,
        b: midCA,
        c: midAB,
      },
    };
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

  const iterate = (depth: number, triangle: T): ReactNode => {
    if (depth > 0) {
      const d = divide(triangle);

      return (
        <>
          {iterate(depth - 1, d.a)}
          {iterate(depth - 1, d.b)}
          {iterate(depth - 1, d.c)}
          {/* <Triangle triangle={d.o} color="white" /> */}
        </>
      );
    } else {
      return <Triangle triangle={triangle} props={{ fill: "black" }} />;
    }
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
              fill: "green",
              stroke: "red",
              strokeWidth: 0.2,
              strokeLinejoin: "round",
            }}
          />

          <Triangle
            triangle={root}
            props={{
              fill: "white",
            }}
          />

          {iterate(4, root)}

          <rect
            fill="white"
            strokeWidth={0.03}
            stroke="black"
            x={-0.5}
            width={1}
            y={0.7}
            height={0.3}
            rx={0.07}
          />

          <text
            x={-0.37}
            width={0.4}
            color="yellow"
            fontFamily="Transport medium"
            fontSize={0.15}
            y={0.915}
          >
            Recursion
          </text>
        </svg>
      </div>
    </>
  );
};
