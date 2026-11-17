import React from "react";
import { SOURCES } from "../sources";

function MethodologyNote({ metadata }) {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Sources and Methodology</div>
        <h2>Where Every Number Comes From</h2>
      </div>

      <div
        className="methodology-section"
        style={{ borderTop: "none", paddingTop: 0, marginTop: 0 }}
      >
        <p style={{ marginBottom: "16px" }}>
          Each figure on this page carries a marker such as [1, p. 31]. The number points to the list below and
          the page is the printed page of that document. Sources marked SECONDARY are press reports of someone
          else's data. Figures I worked out myself are labelled "my calculation" next to their inputs.
        </p>

        <h3 id="sources">Sources</h3>
        <ol className="source-registry" style={{ paddingLeft: "20px" }}>
          {SOURCES.map((s) => (
            <li
              key={s.id}
              id={`source-${s.id}`}
              style={{ padding: "10px 0", borderBottom: "1px solid #ECF0F1", fontSize: "12px", color: "#2C3E50" }}
            >
              {s.publisher}. <em>{s.title}</em>. {s.date}.{" "}
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "#2E86C1" }}>
                  {s.url}
                </a>
              ) : (
                "No public link confirmed"
              )}
              . Accessed {s.accessed}. <strong>{s.label}</strong>.
              {s.note ? <span style={{ color: "#7F8C8D" }}> {s.note}</span> : null}
            </li>
          ))}
        </ol>

        <h3 style={{ marginTop: "24px" }}>Adoption Gap Index</h3>
        <p>
          <strong>Formula (version 2.0):</strong> Raast P2P payments in FY26 divided by Raast P2P IDs registered at end
          June 2026. 2,537.2 million / 49.2 million = 51.6 payments per ID per year. Inputs: source 1, p. 31 and p. 11.
        </p>
        <p>
          <strong>Old basis, kept for comparison:</strong> Raast P2P payments divided by mobile banking users. FY25: 1,266.0 / 24.1 = 52.5.
          FY26: 2,537.2 / 30.4 = 83.5. Version 1.0 printed 52.9 because it used total Raast transactions (1,276.0 million)
          as if they were P2P. Full notes in{" "}
          <a
            href="https://github.com/fawad-liaqat/raast-tracker/blob/main/METHODOLOGY.md"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2E86C1" }}
          >
            METHODOLOGY.md
          </a>
          .
        </p>

        <h3 style={{ marginTop: "24px" }}>Known Limitations</h3>
        <ul>
          <li>FY26 figures are provisional and may be revised in the FY27 review.</li>
          <li>SBP does not publish active Raast users, so the index averages over all registered IDs.</li>
          <li>No district level Raast data is published.</li>
          <li>User categories (mobile banking, branchless banking apps, e-wallets) overlap.</li>
          <li>POS device counts now include Soft POS, which breaks comparison with FY24 and earlier.</li>
          <li>Years differ across countries: FY26 for Pakistan, April to March for India and Kenya, a 2024 survey for Findex.</li>
          <li>Karandaaz survey figures come from the K-FIS 2024 narrative report. Its inclusion definition (registered users) differs from Findex, so the two are not directly comparable.</li>
        </ul>

        <h3 style={{ marginTop: "24px" }}>Theoretical framework (background reading, not used as data)</h3>
        <ul>
          <li><strong>Technology Acceptance Model:</strong> Davis (1989). Perceived usefulness and ease of use.</li>
          <li><strong>Diffusion of Innovations:</strong> Rogers (2003). How adoption spreads from early adopters to the majority.</li>
          <li><strong>Prospect Theory:</strong> Kahneman and Tversky (1979). Loss aversion and perceived risk.</li>
          <li><strong>Institutional Trust:</strong> Zucker (1986). Why trust in people can substitute for trust in institutions.</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "11px", color: "#7F8C8D" }}>
          Data version: {metadata.version} | Extracted: {metadata.extraction_date} | Author: {metadata.author} | Last updated: November 2026
        </p>
      </div>
    </section>
  );
}

export default MethodologyNote;
