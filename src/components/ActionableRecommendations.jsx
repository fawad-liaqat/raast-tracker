import React from 'react'

function ActionableRecommendations() {
  const recommendations = [
    {
      title: 'Eliminate MDR on transactions below PKR 5,000',
      implementer: 'SBP',
      mechanism: 'Regulatory mandate removing merchant discount rate on small digital transactions, covering most retail purchases.',
      effect: 'Removes the direct cost penalty that makes cash preferable. Accelerates merchant acceptance of Raast and QR payments for everyday transactions.',
      precedent: "India's RBI mandated zero MDR on UPI below Rs 2,000 (2019). UPI transactions grew 26x from 8.7B to 228.3B between 2019 and 2025.",
      precedentUrl: 'https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics',
      precedentLabel: 'NPCI UPI Statistics'
    },
    {
      title: 'Build feature phone Raast access via USSD/IVR',
      implementer: 'SBP + Banks',
      mechanism: 'Develop USSD and IVR-based Raast transaction channels that do not require smartphones or internet connections.',
      effect: 'Extends Raast access to the 54% of women without phones (via shared feature phones) and rural populations with limited smartphone penetration.',
      precedent: "India's UPI 123PAY (2022) enables feature phone UPI transactions via missed call, IVR, and proximity NFC, reaching users beyond the smartphone boundary.",
      precedentUrl: 'https://www.npci.org.in/what-we-do/upi/upi-123pay',
      precedentLabel: 'UPI 123PAY'
    },
    {
      title: 'Restructure agent commissions to incentivize digital facilitation',
      implementer: 'SBP + BB Providers',
      mechanism: 'Redesign branchless banking agent commission structure to reward facilitating digital transactions (Raast P2P, merchant payments) over cash-in/cash-out cycling.',
      effect: 'Converts 731,814 agents from cash economy access points into digital payment facilitators embedded in community trust networks.',
      precedent: "Kenya's M-Pesa agent commission model aligned agent economic interests with adoption growth. Agents earned revenue by promoting mobile money, not by cycling cash.",
      precedentUrl: 'https://www.centralbank.go.ke/reports/cbk-annual-reports/',
      precedentLabel: 'CBK Annual Reports'
    },
    {
      title: 'Create tax incentive for documented digital spending',
      implementer: 'FBR',
      mechanism: 'Offer 0.5-1% tax rebate on documented digital retail transactions, converting perceived cost of formalization (tax exposure) into a benefit (tax reduction).',
      effect: 'Shifts consumer incentive calculus from "digital = tax visibility risk" to "digital = tax saving." Particularly effective for salaried taxpayers.',
      precedent: "South Korea's tax deduction for card payments accelerated the cash-to-card transition in the early 2000s, dramatically increasing formal transaction volume.",
      precedentUrl: null,
      precedentLabel: 'South Korea Card Tax Deduction Program'
    },
    {
      title: 'Mandate Urdu-first financial app design standards',
      implementer: 'SBP',
      mechanism: 'Issue binding design guidelines requiring all Raast-enabled apps to provide native Urdu interfaces (not translations), simplified flows requiring fewer than four steps, and voice-guided options.',
      effect: 'Reduces literacy friction for the estimated 70% of Pakistan population whose primary language is not English. Addresses the urban-rural DFS usage gap that persists at equal access levels.',
      precedent: "India's BHIM app design standards for regional languages demonstrated that deliberate interface design can materially reduce literacy barriers to digital payment adoption.",
      precedentUrl: 'https://www.bhimupi.org.in/',
      precedentLabel: 'BHIM UPI'
    }
  ]

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Evidence-Based Interventions</div>
        <h2>Five Actions That Close the Behavioral Gap</h2>
      </div>

      <p style={{ fontSize: '13px', color: '#566573', marginBottom: '24px', lineHeight: '1.6' }}>
        Each recommendation targets a specific layer of the behavioral last mile, specifies who
        implements it, describes the mechanism, projects the expected effect, and cites the international
        precedent that demonstrates it works.
      </p>

      {recommendations.map((rec, i) => (
        <div className="rec-card" key={i}>
          <div className="rec-number">{i + 1}</div>
          <div className="rec-title">{rec.title}</div>
          <div className="rec-meta">
            <span className="rec-tag implementer">{rec.implementer}</span>
            {rec.precedentUrl ? (
              <a href={rec.precedentUrl} target="_blank" rel="noopener noreferrer" className="rec-tag precedent" style={{ textDecoration: 'none' }}>
                {rec.precedentLabel}
              </a>
            ) : (
              <span className="rec-tag precedent">{rec.precedentLabel}</span>
            )}
          </div>
          <div className="rec-description">
            <p style={{ marginBottom: '6px' }}><strong>Mechanism:</strong> {rec.mechanism}</p>
            <p style={{ marginBottom: '6px' }}><strong>Expected effect:</strong> {rec.effect}</p>
            <p><strong>Precedent:</strong> {rec.precedent}</p>
          </div>
        </div>
      ))}

      <div className="insight-box success" style={{ marginTop: '20px' }}>
        <span className="insight-label action">The core lesson</span>
        <p>
          Infrastructure is necessary. It is not sufficient. India and Kenya did not achieve mass digital
          payment adoption because they built better technology. They achieved it because they
          <strong> deliberately designed incentive structures, trust mechanisms, and accessible interfaces</strong> that
          converted infrastructure into behavior. Pakistan's Raast is architecturally sound but behaviorally
          incomplete. These five interventions target the specific demand-side barriers that deployment alone
          cannot resolve.
        </p>
      </div>
    </section>
  )
}

export default ActionableRecommendations
