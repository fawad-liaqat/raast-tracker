import React from 'react'
import Src from './Src'

// Recommendations are the author's proposals. Precedents carry a source marker
// where one was read; where none was, the card says so.
function ActionableRecommendations() {
  const recommendations = [
    {
      title: 'Bring people without an account onto Raast first',
      implementer: 'SBP, banks, branchless banking providers',
      mechanism: 'Measure and target account opening among women and rural adults, using the agent network and biometric account opening that already exist.',
      effect: 'Raises the share of adults who can use the rail at all. Only 27% of adults had an account in 2024.',
      precedent: (<>The Eid cattle market drive in 2026 opened about 12,500 new accounts alongside QR acceptance <Src id="R1" p="21" />. Findex: <Src id="R2" p="298" />.</>),
    },
    {
      title: 'Review merchant fees on small digital payments',
      implementer: 'SBP',
      mechanism: 'Publish what merchants pay to accept Raast QR and card payments, and test removing fees on small payments.',
      effect: 'Lowers the cost of accepting digital payments for small shops, where use per QR merchant is still low.',
      precedent: (<>India removed MDR on UPI and RuPay payments from January 2020 <Src id="R7" />. UPI volume rose from about 45.96 billion in FY 2021-22 to 241.62 billion in FY 2025-26 <Src id="R5" />, though many policies changed together.</>),
    },
    {
      title: 'Build a basic phone route into Raast',
      implementer: 'SBP and banks',
      mechanism: 'USSD and IVR access to Raast payments that does not need a smartphone or internet.',
      effect: 'Reaches people with basic phones or no phone. In the Karandaaz survey 46% of women owned a mobile phone, against 82% of men (the report prints identical figures for smartphone ownership on the next page, so which measure they describe is unclear).',
      precedent: (<>India's UPI123Pay for feature phones (2022) <Src id="R8" />. Karandaaz figures: <Src id="R3" p="28" /> <Src id="R3" p="29" />.</>),
    },
    {
      title: 'Pay agents for helping people make digital payments',
      implementer: 'SBP and branchless banking providers',
      mechanism: 'Reward agents for helping customers make Raast and merchant payments, not only for cash in and cash out.',
      effect: 'Uses 837,244 agents, many already known in their communities, as guides to digital use.',
      precedent: (<>Kenya's M-Pesa grew alongside a fourfold expansion of its agent network <Src id="R11" />. Agent count: <Src id="R1" p="24" />.</>),
    },
    {
      title: 'Set Urdu first and voice first design standards',
      implementer: 'SBP',
      mechanism: 'Require native Urdu flows, fewer steps, and voice guidance in Raast enabled apps.',
      effect: 'Reduces friction for people with low literacy or limited English.',
      precedent: (<>No verified precedent cited. Karandaaz Digital Literacy Index: 65 for men, 48 for women; 51 rural against 70 urban <Src id="R3" p="30" />.</>),
    },
  ]

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Proposals</div>
        <h2>Five Actions Worth Testing</h2>
      </div>

      <p style={{ fontSize: '13px', color: '#566573', marginBottom: '24px', lineHeight: '1.6' }}>
        These are my proposals, ordered access first, then use. Each names who would act, how it would work,
        and the evidence behind it. None has been tested in Pakistan by me.
      </p>

      {recommendations.map((rec, i) => (
        <div className="rec-card" key={i}>
          <div className="rec-number">{i + 1}</div>
          <div className="rec-title">{rec.title}</div>
          <div className="rec-meta">
            <span className="rec-tag implementer">{rec.implementer}</span>
          </div>
          <div className="rec-description">
            <p style={{ marginBottom: '6px' }}><strong>Mechanism:</strong> {rec.mechanism}</p>
            <p style={{ marginBottom: '6px' }}><strong>Expected effect:</strong> {rec.effect}</p>
            <p><strong>Evidence:</strong> {rec.precedent}</p>
          </div>
        </div>
      ))}

      <div className="insight-box success" style={{ marginTop: '20px' }}>
        <span className="insight-label action">The core lesson</span>
        <p>
          Infrastructure is necessary but not sufficient. Pakistan's rail is growing fast. The next gains depend on
          getting more people an account and a way to pay that fits the phone they own.
        </p>
      </div>
    </section>
  )
}

export default ActionableRecommendations
