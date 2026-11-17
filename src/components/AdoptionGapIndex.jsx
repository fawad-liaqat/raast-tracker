import React from "react";
import Src from "./Src";

const BLUE = "#2E86C1";

const tile = {
  background: "#D4E6F1",
  borderRadius: "6px",
  padding: "16px",
  textAlign: "center",
};
const tileLabel = {
  fontSize: "11px",
  color: "#7F8C8D",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

function growth(a, b) {
  return `+${((b / a - 1) * 100).toFixed(0)}%`;
}

function AdoptionGapIndex({ data, userAdoption }) {
  const primary = data.primary;
  const cmp = data.comparison_mobile_banking_users;
  const rows = [
    ["Mobile banking users", userAdoption.mobile_banking_users_m],
    ["Branchless banking app users", userAdoption.bb_mobile_app_users_m],
    ["EMI e-wallet users", userAdoption.ewallet_users_m],
    ["Internet banking users", userAdoption.internet_banking_users_m],
    ["Call centre / IVR banking users", userAdoption.ivr_banking_users_m],
  ];

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block D: Adoption Gap Index (my calculation)</div>
        <h2>How Often a Registered Raast User Pays</h2>
      </div>

      <div className="metric-card">
        <div className="metric-label">
          Raast person to person payments per registered Raast ID, FY26
        </div>
        <div className="big-number" style={{ color: BLUE }}>
          {primary.computed_value}
        </div>
        <p style={{ fontSize: "13px", color: "#7F8C8D", marginTop: "12px" }}>
          payments per ID per year (about {(primary.computed_value / 12).toFixed(1)} a month).
          This is my calculation, not an SBP figure.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <div style={tile}>
          <div style={tileLabel}>Numerator</div>
          <div style={{ fontSize: "26px", fontWeight: "700", color: BLUE }}>
            {primary.numerator_millions.toLocaleString()}M
          </div>
          <div style={{ fontSize: "11px", color: "#7F8C8D" }}>
            Raast P2P payments, FY26 <Src id="R1" p="31" />
          </div>
        </div>
        <div style={tile}>
          <div style={tileLabel}>Denominator</div>
          <div style={{ fontSize: "26px", fontWeight: "700", color: BLUE }}>
            {primary.denominator_millions}M
          </div>
          <div style={{ fontSize: "11px", color: "#7F8C8D" }}>
            Raast P2P IDs, end June 2026 <Src id="R1" p="11" />
          </div>
        </div>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Why this denominator</span>
        <p>
          The FY26 review is the first one I have used that prints the number of registered Raast P2P IDs
          (49.2 million) <Src id="R1" p="11" />. That is a closer match to the people who can use Raast than
          mobile banking users, which version 1.0 of this tracker used. For comparison on the old basis:
          P2P payments per mobile banking user were {cmp.fy25.computed_value} in FY25 and {cmp.fy26.computed_value} in
          FY26 ({cmp.fy25.numerator_millions.toLocaleString()}M / {cmp.fy25.denominator_millions}M and
          {" "}{cmp.fy26.numerator_millions.toLocaleString()}M / {cmp.fy26.denominator_millions}M) <Src id="R1" p="9" /> <Src id="R1" p="31" />.
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">Correction to version 1.0</span>
        <p>
          Version 1.0 (March 2026) used 1,276 million as Raast P2P transactions for FY25. That is the total of all
          Raast transactions. P2P alone was 1,266 million <Src id="R1" p="31" />, so the FY25 index on the old
          basis is 52.5, not 52.9.
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">What the average hides</span>
        <p>
          About 52 payments a year sounds like one a week. But it is an average across every registered ID,
          including people who registered once and never used it. SBP does not publish the number of active
          Raast users, so the spread behind the average is unknown. A small active group could be driving
          most of the volume.
        </p>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Digital channel users (millions)</th>
            <th>FY25</th>
            <th>FY26</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, v]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{v.fy25}</td>
              <td>{v.fy26}</td>
              <td>{growth(v.fy25, v.fy26)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: "11px", color: "#7F8C8D", marginTop: "6px" }}>
        Registered users at end June; categories overlap, since one person can hold several. Growth is my
        calculation. Source: SBP Payment Systems Snapshot <Src id="R1" p="9" />
      </div>
    </section>
  );
}

export default AdoptionGapIndex;
