import React from "react";
import { SOURCES } from "../sources";
import Src from "./Src";

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
          the page is the printed page of that document. Primary means the issuing body's own document or data;
          Secondary means reporting or analysis about it. Figures I worked out myself are labelled "my calculation" next to their inputs.
        </p>

        <h3 id="sources">Sources</h3>
        <ol className="source-registry" style={{ paddingLeft: "20px" }}>
          {SOURCES.map((s) => (
            <li
              key={s.id}
              id={`source-${s.id}`}
              style={{ padding: "10px 0", borderBottom: "1px solid var(--gray-light)", fontSize: "12px", color: "var(--black)" }}
            >
              {s.publisher}. <em>{s.title}</em>.{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue-primary)" }}>
                {s.url}
              </a>
              . <strong>{s.label}</strong>.
            </li>
          ))}
        </ol>

        <h3 style={{ marginTop: "24px" }}>Adoption Gap Index</h3>
        <p>
          <strong>Formula:</strong> Raast P2P payments in FY26 divided by Raast P2P IDs registered at end
          June 2026. 2,537.2 million / 49.2 million = 51.6 payments per ID per year. Inputs: source 1, p. 31 and p. 11.
        </p>
        <p>
          <strong>FY25 edition basis, for comparison:</strong> Raast P2P payments divided by mobile banking users. FY25: 1,266.0 / 24.1 = 52.5.
          FY26: 2,537.2 / 30.4 = 83.5. Full notes in{" "}
          <a
            href="https://github.com/fawad-liaqat/raast-tracker/blob/main/METHODOLOGY.md"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--blue-primary)" }}
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

        <h3 style={{ marginTop: "24px" }}>Theoretical framework (ideas, not data)</h3>
        <ul>
          <li><strong>Technology Acceptance Model:</strong> Davis (1989). Perceived usefulness and ease of use <Src id="R13" />.</li>
          <li><strong>Diffusion of Innovations:</strong> Rogers (2003). How adoption spreads from early adopters to the majority <Src id="R14" />.</li>
          <li><strong>Prospect Theory:</strong> Kahneman and Tversky (1979). Loss aversion and perceived risk <Src id="R15" />.</li>
          <li><strong>Institutional Trust:</strong> Zucker (1986). Why trust in people can substitute for trust in institutions <Src id="R16" />.</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "11px", color: "var(--gray-annotation)" }}>
          Data version: {metadata.version} | Extracted: {metadata.extraction_date} | Author: {metadata.author} | Last updated: November 2026
        </p>
      </div>
    </section>
  );
}

export default MethodologyNote;
