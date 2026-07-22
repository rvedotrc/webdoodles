import { console } from "inspector";
import styles from "./page.module.css";
import fonts from "./transport-fonts.module.css";

const ascii = [
  " !\"#$%&'()*+,-./£^",
  "0123456789:;<=>?",
  "@ABCDEFGHIJKLMNO",
  "PQRSTUVWXYZ[\\]^_",
  "`abcdefghijklmno",
  "pqrstuvwxyz{|}~ ",
];

const Sample = () => (
  <span style={{ whiteSpace: "pre" }}>{ascii.join("\n")}</span>
);

const motorwayMapping = {
  A: "A",
  B: "B",
  M: "M",
  E: "(SE)",
  N: "(NE)",
  S: "(SW)",
  W: "(NW)",
  e: "(E)",
  n: "(N)",
  s: "(S)",
  w: "(W)",
  // also: 0-9 & ( ) , /
};

// transportMapping:
//  ^   wide down-arrow
//  <   left-arrow
//  >   right-arrow

export default () => (
  <div id={styles.transport}>
    <h1>Silly Signs</h1>
    <h2>Motorway</h2>
    <h3>Permanent</h3>
    <div
      className={`${fonts["f-mp"]} ${styles.motorwayPermanent} ${styles.infoBorder}`}
    >
      <Sample />
    </div>
    e.g.
    <div
      style={{ textAlign: "center", fontSize: "500%" }}
      className={`${fonts["f-mp"]} ${styles.motorwayPermanent} ${styles.infoBorder}`}
    >
      M1s
      <br />&<br />
      M25e/w
    </div>
    <h3>Temporary</h3>
    <div
      className={`${fonts["f-mt"]} ${styles.motorwayTemporary} ${styles.infoBorder}`}
    >
      <Sample />
    </div>
    e.g.
    <div
      style={{ textAlign: "center", fontSize: "350%" }}
      className={`${fonts["f-mt"]} ${styles.motorwayTemporary} ${styles.infoBorder}`}
    >
      A421S
    </div>
    <h2>Pavement</h2>
    <div className={fonts["f-p"]} style={{ fontSize: "200%" }}>
      <div className={styles.pavementLarge}>
        {[')!"£$%^&*( : @', "ABCDEFGHIJKLM", "NOPQRSTUVWXYZ"].join("\n")}
      </div>
      <div className={styles.pavementSmall}>
        {["0123456789 ; '", "abcdefghijklm", "nopqrstuvwxyz"].join("\n")}
      </div>
    </div>
    <h2>Transport Medium</h2>
    <div className={`${fonts["f-tm"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </div>
    <h2>Transport Medium (Greek)</h2>
    <div className={`${fonts["f-tmg"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </div>
    <h2>Transport Heavy</h2>
    <div className={`${fonts["f-th"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </div>
    <h2>Matrix</h2>
    <div className={`${fonts["f-vms"]} ${styles.matrix} ${styles.infoBorder}`}>
      {/* {"testing the vms font\n"}
      {"   expect oddness   \n"} */}
      {" impostor at keyboard \n"}
      {"  expect long delays   "}
    </div>
    <h2>Other pages</h2>
    <ol>
      <li>
        <a href="./signs/recursion">Recursion</a>
      </li>
      <li>
        <a href="./signs/koch">Koch</a>
      </li>
    </ol>
  </div>
);
