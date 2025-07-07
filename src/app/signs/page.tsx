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

export default () => (
  <div id={styles.transport}>
    <h1>Silly Signs</h1>

    <h2
      className={`${fonts["f-mp"]} ${styles.motorwayPermanent} ${styles.infoBorder}`}
    >
      <Sample />
    </h2>

    <h2
      className={`${fonts["f-mt"]} ${styles.motorwayTemporary} ${styles.infoBorder}`}
    >
      <Sample />
    </h2>

    <h2>Pavement</h2>
    <div className={fonts["f-p"]} style={{ fontSize: "200%" }}>
      <div className={styles.pavementLarge}>
        {[')!"£$%^&*( : @', "ABCDEFGHIJKLM", "NOPQRSTUVWXYZ"].join("\n")}
      </div>
      <div className={styles.pavementSmall}>
        {["0123456789 ; '", "abcdefghijklm", "nopqrstuvwxyz"].join("\n")}
      </div>
    </div>

    <h2 className={`${fonts["f-tm"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </h2>

    <h2 className={`${fonts["f-tmg"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </h2>

    <h2 className={`${fonts["f-th"]} ${styles.primary} ${styles.infoBorder}`}>
      <Sample />
    </h2>

    <h2 className={`${fonts["f-vms"]} ${styles.matrix} ${styles.infoBorder}`}>
      {/* {"testing the vms font\n"}
      {"   expect oddness   \n"} */}
      {" impostor at keyboard \n"}
      {"  expect long delays   "}
    </h2>

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
