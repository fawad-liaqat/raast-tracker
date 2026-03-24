import React from "react";

const sources = [
  {
    name: "SBP Annual Payment Systems Review FY25",
    description:
      "Primary source for all Pakistan payment transaction, infrastructure, and user adoption data.",
    url: "https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf",
    date: "Published November 2025",
  },
  {
    name: "SBP Quarterly Payment Systems Review Q2 FY25",
    description:
      "Supplementary quarterly data. Source for digital value share (29%) distinction.",
    url: "https://www.sbp.org.pk/psd/pdf/PS-Review-Q2FY25.pdf",
    date: "Published 2025",
  },
  {
    name: "SBP Quarterly Reviews Index",
    description:
      "Portal for all SBP quarterly payment systems reports including Q3 FY25.",
    url: "https://www.sbp.org.pk/psd/reports/index.htm",
    date: "Updated quarterly",
  },
  {
    name: "SBP Governor's Annual Report FY25",
    description:
      "Macro context: GDP growth, inflation impact on cash holding, regulatory developments.",
    url: "https://www.sbp.org.pk/reports/annual/Gov-AR/pdf/2025/Gov-AR.pdf",
    date: "Published 2025",
  },
  {
    name: "Karandaaz K-FIS 2024 (Financial Inclusion Survey)",
    description:
      "Source for trust metrics (9%/8%), financial inclusion (35%), gender gap, regional variation, informal credit data.",
    url: "https://portal.karandaaz.com.pk",
    date: "2024 survey wave, published June 2025",
  },
  {
    name: "NPCI UPI Ecosystem Statistics",
    description:
      "Source for all India UPI data: 228.3B transactions, 698M daily average, growth trajectory.",
    url: "https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics",
    date: "Updated monthly",
  },
  {
    name: "World Bank Global Findex Database",
    description:
      "Cross-country financial inclusion comparison: Pakistan 35%, India 77.5%, Kenya 82%. Global benchmark 79%.",
    url: "https://www.worldbank.org/en/publication/globalfindex",
    date: "2025 edition (2024 survey wave)",
  },
  {
    name: "Central Bank of Kenya Annual Reports",
    description:
      "Source for M-Pesa agent network scale, mobile money regulatory framework, financial inclusion trajectory.",
    url: "https://www.centralbank.go.ke/reports/cbk-annual-reports/",
    date: "2007-2024",
  },
  {
    name: "Jack & Suri (2014), American Economic Review",
    description:
      "Canonical M-Pesa study. Documented 96% remittance cost reduction. Foundational comparative reference for Kenya.",
    url: "https://www.aeaweb.org/articles?id=10.1257/aer.104.1.183",
    date: "Published January 2014",
  },
  {
    name: "BHIM UPI",
    description:
      "India's simplified UPI interface. Available in 13 regional languages. Precedent for Urdu-first design standards.",
    url: "https://www.bhimupi.org.in/",
    date: "Launched January 2017",
  },
];

function MethodologyNote({ metadata }) {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Sources and Methodology</div>
        <h2>Every Number Traces to a Primary Source</h2>
      </div>

      <div
        className="methodology-section"
        style={{ borderTop: "none", paddingTop: 0, marginTop: 0 }}
      >
        <p style={{ marginBottom: "16px" }}>
          All data in this tracker is extracted from publicly available primary
          sources. No secondary reporting (news articles, blog posts) is used as
          a data source. Every figure in the charts and every statistic in the
          analysis traces to a specific document. The verification checklist
          with 36 confirmed data points is available in the project repository.
        </p>

        <h3>Clickable Source Registry</h3>
        <div className="source-registry">
          {sources.map((source, i) => (
            <div
              key={i}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #ECF0F1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "4px",
                }}
              >
                <strong style={{ fontSize: "13px", color: "#2C3E50" }}>
                  {source.name}
                </strong>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "11px",
                    color: "#2E86C1",
                    textDecoration: "none",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  Open source &#x2197;
                </a>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#7F8C8D",
                  lineHeight: "1.5",
                }}
              >
                {source.description}
              </div>
              <div
                style={{ fontSize: "10px", color: "#BDC3C7", marginTop: "2px" }}
              >
                {source.date}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "24px" }}>Adoption Gap Index Methodology</h3>
        <p>
          <strong>Formula:</strong> (Total Raast P2P Transactions FY25 / Mobile
          Banking App Users FY25)
        </p>
        <p>
          <strong>Numerator:</strong> 1,276.0 million Raast P2P transactions.{" "}
          <strong>Denominator (Option B):</strong> 24.1 million mobile banking
          app users. <strong>Result:</strong> 52.9 transactions per account per
          year.
        </p>
        <p>
          Mobile banking app users are considered the primary Raast-enabled
          account base.Combining all digital user categories making the total
          around 109.1M contains significant category overlap. As total Raast
          registered IDs are not separately reported in SBP data. Full
          justification in{" "}
          <a
            href="https://github.com/fawad-liaqat/raast-tracker/blob/main/METHODOLOGY.md"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#2E86C1",
              textDecoration: "none",
              borderBottom: "1px dotted #2E86C1",
            }}
          >
            METHODOLOGY.md
          </a>
        </p>

        <h3 style={{ marginTop: "24px" }}>Known Limitations</h3>
        <ul>
          <li>
            No district-level Raast usage data. Urban vs rural POS density used
            as proxy.
          </li>
          <li>
            Unique transacting accounts not reported by SBP. Total registered
            accounts used as denominator.
          </li>
          <li>
            88% digital share is by volume, not value. Value share is ~29% (Q2
            FY25).
          </li>
          <li>
            User categories (mobile banking, BB app, e-wallet) contain overlap.
          </li>
          <li>
            Kenya early-stage data is narrative, not structured. Direct volume
            comparison not possible.
          </li>
          <li>
            Adoption Gap Index is a computed metric, not an SBP-reported figure.
          </li>
        </ul>

        <h3 style={{ marginTop: "24px" }}>Credibility Standards</h3>
        <ul>
          <li>
            Volume and value are never conflated. Charts specify which is shown.
          </li>
          <li>
            All cross-country comparisons use contemporaneous data (not
            mismatched periods).
          </li>
          <li>
            Computed metrics are labeled as such, distinct from reported
            figures.
          </li>
          <li>
            Primary sources used exclusively. No Wikipedia, no news aggregators
            for data.
          </li>
        </ul>

        <h3 style={{ marginTop: "24px" }}>Theoretical Framework</h3>
        <ul>
          <li>
            <strong>Technology Acceptance Model (TAM):</strong> Davis (1989).
            Trust deficit maps to perceived usefulness and ease of use.
          </li>
          <li>
            <strong>Diffusion of Innovations:</strong> Rogers (2003). Pakistan
            is at the chasm between early adopters and early majority.
          </li>
          <li>
            <strong>Prospect Theory:</strong> Kahneman & Tversky (1979). Loss
            aversion explains why perceived risk of digital outweighs perceived
            benefit.
          </li>
          <li>
            <strong>Institutional Trust:</strong> Zucker (1986). Low
            institutional trust explains why agent-based models work where bank
            models fail.
          </li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "11px", color: "#BDC3C7" }}>
          Data version: {metadata.version} | Extraction:{" "}
          {metadata.extraction_date} | Author: {metadata.author}
        </p>
      </div>
    </section>
  );
}

export default MethodologyNote;
