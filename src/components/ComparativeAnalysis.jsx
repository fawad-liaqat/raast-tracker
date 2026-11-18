import React from 'react'
import Src from './Src'

function ComparativeAnalysis() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Comparative Evidence</div>
        <h2>Pakistan, India and Kenya: What the Data Shows</h2>
      </div>

      <p style={{ fontSize: '13px', color: '#566573', marginBottom: '20px', lineHeight: '1.6' }}>
        The three systems are at different ages and the years do not match exactly, so this is a rough
        comparison of scale and reach, not a controlled one.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Pakistan</th>
            <th>India</th>
            <th>Kenya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary system</td>
            <td>Raast (first phase January 2021) <Src id="R10" /></td>
            <td>UPI</td>
            <td>M-Pesa</td>
          </tr>
          <tr>
            <td>Annual transactions</td>
            <td><strong>2.76B</strong> (FY26, July to June) <Src id="R1" p="31" /></td>
            <td><strong>241.6B</strong> (FY 2025-26, April to March) <Src id="R5" /></td>
            <td><strong>46.4B</strong> (year to March 2026, press report) <Src id="R9" /></td>
          </tr>
          <tr>
            <td>Adults with an account (Findex 2025, survey year 2024)</td>
            <td>27%</td>
            <td>89%</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>Adults who made or received a digital payment (same survey)</td>
            <td>25%</td>
            <td>48%</td>
            <td>89%</td>
          </tr>
        </tbody>
      </table>

      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px', textAlign: 'right' }}>
        Account and payment rows: World Bank Findex 2025, Table B.1 <Src id="R2" p="297" /> <Src id="R2" p="298" />.
      </div>

      <div className="comparison-grid" style={{ marginTop: '24px' }}>
        <div className="comparison-card" style={{ borderTop: '3px solid #2E86C1' }}>
          <div className="country">India: UPI</div>
          <div className="value" style={{ color: '#2E86C1' }}>241.6B</div>
          <div className="label">transactions, FY 2025-26 <Src id="R5" /></div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>Policy moves:</strong> no merchant discount rate on UPI and RuPay from January 2020 <Src id="R7" />.
            UPI123Pay for feature phones from 2022 <Src id="R8" />. Merchant payments now 63% of UPI volume <Src id="R6" />.
            Note the access gap: 89% have an account but only 48% pay digitally <Src id="R2" p="297" />.
          </div>
        </div>

        <div className="comparison-card" style={{ borderTop: '3px solid #27AE60' }}>
          <div className="country">Kenya: M-Pesa</div>
          <div className="value" style={{ color: '#27AE60' }}>90%</div>
          <div className="label">adults with an account, 2024 <Src id="R2" p="297" /></div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>Model:</strong> mobile money run by a telecom company and reached through agents and basic
            phones. 89% of adults made or received a digital payment <Src id="R2" p="297" />. The agent story is
            context from the wider literature, not re-checked against a primary source this round <Src id="R11" />.
          </div>
        </div>

        <div className="comparison-card" style={{ borderTop: '3px solid #D4A017' }}>
          <div className="country">Pakistan: Raast</div>
          <div className="value" style={{ color: '#D4A017' }}>27%</div>
          <div className="label">adults with an account, 2024 <Src id="R2" p="298" /></div>
          <div style={{ fontSize: '11px', color: '#566573', marginTop: '8px', textAlign: 'left', lineHeight: '1.5' }}>
            <strong>Where it stands:</strong> a fast growing rail (2.76 billion transactions in FY26) <Src id="R1" p="31" />,
            a merchant subsidy that ran from 1 September 2025 to 30 June 2026 <Src id="R4" p="58" /> and coincided with QR merchants tripling <Src id="R1" p="7" />, and a small account base.
            Pakistan's own survey puts inclusion at 35% <Src id="R3" p="7" />.
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: '600', marginTop: '28px', marginBottom: '12px' }}>
        Barrier comparison (my reading of the sources above)
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
            <td>Access</td>
            <td style={{ color: '#C0392B' }}>27% have an account</td>
            <td style={{ color: '#27AE60' }}>89% have an account</td>
            <td style={{ color: '#27AE60' }}>90% have an account</td>
          </tr>
          <tr>
            <td>Use among the banked</td>
            <td style={{ color: '#27AE60' }}>About 90% of account owners pay digitally <Src id="R2" p="167" /></td>
            <td style={{ color: '#C0392B' }}>Many accounts unused (48% pay digitally)</td>
            <td style={{ color: '#27AE60' }}>89% pay digitally</td>
          </tr>
          <tr>
            <td>Merchant incentive</td>
            <td>Raast QR fee subsidy, Sep 2025 to Jun 2026; continuation announced Nov 2026 <Src id="R4" p="58" /> <Src id="R12" /></td>
            <td style={{ color: '#27AE60' }}>Zero MDR since 2020</td>
            <td>Not assessed</td>
          </tr>
          <tr>
            <td>Basic phone channel</td>
            <td>IVR banking exists (46.1M users) <Src id="R1" p="9" />; no Raast basic phone channel found</td>
            <td style={{ color: '#27AE60' }}>UPI123Pay</td>
            <td style={{ color: '#27AE60' }}>Basic phone mobile money</td>
          </tr>
        </tbody>
      </table>

      <div className="insight-box success" style={{ marginTop: '16px' }}>
        <span className="insight-label action">Key takeaway</span>
        <p>
          India shows that accounts alone do not create use. Pakistan shows the opposite problem: those who are
          in already use digital payments, but most adults are not in. The lessons that travel to Pakistan are the
          ones about reaching people without an account or a smartphone. I would welcome other readings of this
          data.
        </p>
      </div>
    </section>
  )
}

export default ComparativeAnalysis
