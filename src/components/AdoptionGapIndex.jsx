import React from "react";

const BLUE = "#2E86C1";
const SBP_URL =
  "https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf";

function AdoptionGapIndex({ data, userAdoption }) {
  const computedValue = data.computed_value;

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block D — Adoption Gap Index</div>
        <h2>Measuring the Distance Between Infrastructure and Behavior</h2>
      </div>

      <div className="metric-card">
        <div className="metric-label">
          Raast Transactions per Registered Account (Annual)
        </div>
        <div className="big-number" style={{ color: BLUE }}>
          {computedValue}
        </div>
        <p style={{ fontSize: "13px", color: "#7F8C8D", marginTop: "12px" }}>
          transactions per mobile banking account per year (~
          {(computedValue / 12).toFixed(1)}/month)
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
        <div
          style={{
            background: "#D4E6F1",
            borderRadius: "6px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Numerator
          </div>
          <div style={{ fontSize: "26px", fontWeight: "700", color: BLUE }}>
            1,276M
          </div>
          <div style={{ fontSize: "11px", color: "#7F8C8D" }}>
            Raast P2P Transactions (FY25)
          </div>
        </div>
        <div
          style={{
            background: "#D4E6F1",
            borderRadius: "6px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Denominator (Option B)
          </div>
          <div style={{ fontSize: "26px", fontWeight: "700", color: BLUE }}>
            24.1M
          </div>
          <div style={{ fontSize: "11px", color: "#7F8C8D" }}>
            Mobile Banking App Users (FY25)
          </div>
        </div>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Why Option B</span>
        <p>
          Mobile banking app users (24.1M) are the primary Raast-enabled account
          base. Combining mobile banking 24.1M + BB apps 79.2M + e-wallets 5.8M
          = 109.1M contains significant overlap between categories and would
          yield a misleadingly low 11.7 transactions per account. Unique
          transacting account data is not publicly available from SBP.
          <a
            href={SBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="source-tag"
          >
            SBP FY25
          </a>
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">What the average hides</span>
        <p>
          52.9 annual transactions per account (~1 per week) sounds reasonable.
          But this is an average across{" "}
          <strong>all registered users, including dormant accounts</strong>. An
          estimated 54 million bank deposit accounts hold balances below PKR
          5,000. A small fraction of active accounts likely drives the majority
          of Raast volume, while millions of registered accounts never transact
          digitally.
        </p>
        <p>
          The gap is not between infrastructure and the average user. It is
          between infrastructure and the{" "}
          <strong>majority of registered accounts that remain inactive</strong>.
        </p>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>User Category</th>
            <th>FY24</th>
            <th>FY25</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mobile Banking App Users</td>
            <td>{userAdoption.mobile_banking_users_m.fy24}M</td>
            <td>{userAdoption.mobile_banking_users_m.fy25}M</td>
            <td>
              +
              {(
                (userAdoption.mobile_banking_users_m.fy25 /
                  userAdoption.mobile_banking_users_m.fy24 -
                  1) *
                100
              ).toFixed(0)}
              %
            </td>
          </tr>
          <tr>
            <td>BB Mobile App Users</td>
            <td>{userAdoption.bb_mobile_app_users_m.fy24}M</td>
            <td>{userAdoption.bb_mobile_app_users_m.fy25}M</td>
            <td>
              +
              {(
                (userAdoption.bb_mobile_app_users_m.fy25 /
                  userAdoption.bb_mobile_app_users_m.fy24 -
                  1) *
                100
              ).toFixed(0)}
              %
            </td>
          </tr>
          <tr>
            <td>E-Wallet Users</td>
            <td>{userAdoption.ewallet_users_m.fy24}M</td>
            <td>{userAdoption.ewallet_users_m.fy25}M</td>
            <td>
              +
              {(
                (userAdoption.ewallet_users_m.fy25 /
                  userAdoption.ewallet_users_m.fy24 -
                  1) *
                100
              ).toFixed(0)}
              %
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AdoptionGapIndex;
