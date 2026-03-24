import React from 'react'

const NPCI_URL = 'https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics'
const FINDEX_URL = 'https://www.worldbank.org/en/publication/globalfindex'

function ComparativeAnalysis() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Comparative Evidence</div>
        <h2>Pakistan vs India vs Kenya: What the Data Shows</h2>
      </div>

      <p style={{ fontSize: '13px', color: '#566573', marginBottom: '20px', lineHeight: '1.6' }}>
        Comparing Pakistan at year 5 of Raast with India at year 5 of UPI (2021) and Kenya at year 5
        of M-Pesa (2012) isolates the behavioral variables that explain divergent outcomes at equivalent
        infrastructure maturity.
      </p>

      {/* Infrastructure comparison */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Pakistan (FY25)</th>
            <th>India (2025)</th>
            <th>Kenya (2024 est.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary system</td>
            <td>Raast (Jan 2021)</td>
            <td>UPI (Apr 2016)</td>
            <td>M-Pesa (Mar 2007)</td>
          </tr>
          <tr>
            <td>Annual transaction volume</td>
            <td><strong>1.28B</strong></td>
            <td><strong>228.3B</strong></td>
            <td><strong>~18B</strong></td>
          </tr>
          <tr>
            <td>Financial inclusion</td>
            <td>35%</td>
            <td>77.5%</td>
            <td>82%</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>~240M</td>
            <td>~1.44B</td>
            <td>~56M</td>
          </tr>
          <tr>
            <td>Years since launch</td>
            <td>5</td>
            <td>10</td>
            <td>19</td>
          </tr>
        </tbody>
      </table>

      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px', textAlign: 'right' }}>
        Sources:{' '}
        <a href="https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf" target="_blank" rel="noopener noreferrer" className="source-link">SBP FY25</a>,{' '}
        <a href={NPCI_URL} target="_blank" rel="noopener noreferrer" className="source-link">NPCI</a>,{' '}
        <a href={FINDEX_URL} target="_blank" rel="noopener noreferrer" className="source-link">World Bank Findex</a>
      </div>

      {/* Country insight cards */}
      <div className="comparison-grid" style={{ marginTop: '24px' }}>
        <div className="comparison-card" style={{ borderTop: '3px solid #2E86C1' }}>
          <div className="country">India — UPI</div>
          <div className="value" style={{ color: '#2E86C1' }}>228.3B</div>
          <div className="label">transactions (2025)</div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>What they did differently:</strong> Zero MDR on transactions below Rs 2,000 (2019).
            Jan Dhan created 500M+ bank accounts. BHIM in 13 languages. UPI 123PAY for feature phones.
            Demonetization (2016) as a one-time behavioral shock.
          </div>
          <a href={NPCI_URL} target="_blank" rel="noopener noreferrer" className="source-tag" style={{ marginTop: '8px' }}>NPCI Data</a>
        </div>

        <div className="comparison-card" style={{ borderTop: '3px solid #27AE60' }}>
          <div className="country">Kenya — M-Pesa</div>
          <div className="value" style={{ color: '#27AE60' }}>82%</div>
          <div className="label">financial inclusion (2021)</div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>What they did differently:</strong> Solved a specific pain point (domestic remittances).
            Agent network as trust intermediary (40K+ agents by 2012). USSD-based, no smartphone needed.
            Permissive regulation allowed telco-led model.
          </div>
          <a href={FINDEX_URL} target="_blank" rel="noopener noreferrer" className="source-tag" style={{ marginTop: '8px' }}>Findex Data</a>
        </div>

        <div className="comparison-card" style={{ borderTop: '3px solid #D4A017' }}>
          <div className="country">Pakistan — Raast</div>
          <div className="value" style={{ color: '#D4A017' }}>35%</div>
          <div className="label">financial inclusion (K-FIS 2024)</div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>What's missing:</strong> No zero MDR policy. No mass account creation campaign at Jan Dhan scale.
            No catalytic use case identified. App-based, smartphone-dependent. Agent network serves cash, not digital.
          </div>
          <a href="https://portal.karandaaz.com.pk" target="_blank" rel="noopener noreferrer" className="source-tag" style={{ marginTop: '8px' }}>K-FIS 2024</a>
        </div>
      </div>

      {/* Behavioral barrier comparison */}
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginTop: '28px', marginBottom: '12px' }}>
        Behavioral Barrier Comparison
      </h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Barrier</th>
            <th>Pakistan</th>
            <th>India</th>
            <th>Kenya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trust in digital</td>
            <td style={{ color: '#C0392B' }}>9% banks, 8% mobile money</td>
            <td>Higher (bank interop trust)</td>
            <td>Agent = human intermediary</td>
          </tr>
          <tr>
            <td>Merchant incentive</td>
            <td style={{ color: '#C0392B' }}>MDR creates cash preference</td>
            <td style={{ color: '#27AE60' }}>Zero MDR removed barrier</td>
            <td style={{ color: '#27AE60' }}>Agent commission = positive incentive</td>
          </tr>
          <tr>
            <td>Digital literacy</td>
            <td style={{ color: '#C0392B' }}>Urban/rural gap; poor Urdu UI</td>
            <td style={{ color: '#27AE60' }}>BHIM 13 languages; 123PAY</td>
            <td style={{ color: '#27AE60' }}>USSD; no smartphone needed</td>
          </tr>
          <tr>
            <td>Catalytic use case</td>
            <td style={{ color: '#C0392B' }}>Not yet identified</td>
            <td>Merchant QR payments</td>
            <td>Domestic remittances</td>
          </tr>
          <tr>
            <td>Government lever</td>
            <td>BISP/Ehsaas (forced adoption)</td>
            <td>Demonetization + zero MDR + Jan Dhan</td>
            <td>Permissive regulation + agent licensing</td>
          </tr>
        </tbody>
      </table>

      <div className="insight-box success" style={{ marginTop: '16px' }}>
        <span className="insight-label action">Key takeaway</span>
        <p>
          Neither India nor Kenya achieved mass adoption through infrastructure alone. India's UPI succeeded because
          <strong> policy design deliberately addressed each barrier</strong>: zero MDR (incentive), Jan Dhan (access),
          BHIM (literacy), demonetization (behavioral shock). Kenya's M-Pesa succeeded because it
          <strong> solved a specific acute pain point</strong> (remittances) through a
          <strong> trust mechanism</strong> (agents) that did not require institutional credibility.
          Pakistan has not yet found its equivalent.
        </p>
      </div>
    </section>
  )
}

export default ComparativeAnalysis
