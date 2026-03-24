import React from 'react'

const KFIS_URL = 'https://portal.karandaaz.com.pk'
const SBP_URL = 'https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf'

function InsightPanel() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Three-Layer Framework</div>
        <h2>The Behavioral Last Mile: Three Compounding Barriers</h2>
      </div>

      <p style={{ fontSize: '14px', color: '#566573', marginBottom: '24px', lineHeight: '1.7' }}>
        The gap between 88% digital volume share and a cash-dominant economy is not an infrastructure
        problem. It is a demand-side behavioral problem with three compounding layers. Each barrier
        reinforces the others: a person who distrusts banks, has no incentive to switch from cash,
        and cannot navigate a digital interface faces all three simultaneously.
      </p>

      {/* Layer 1: Trust Deficit */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number">1</div>
          <div className="layer-title">Trust Deficit</div>
        </div>
        <div className="layer-evidence">
          <strong>Core finding:</strong> People reject digital payments because they distrust the institutions,
          regardless of whether the infrastructure exists.
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> Only <strong>9%</strong> of excluded adults trust banks.
          Only <strong>8%</strong> trust mobile money providers. Just <strong>36%</strong> of all adults
          report comfort using any financial service. <strong>85%</strong> of excluded adults rely on
          family and friends for credit, not because formal options are unavailable, but because the
          informal system operates on trust relationships that institutions cannot replicate.
          <a href={KFIS_URL} target="_blank" rel="noopener noreferrer" className="source-tag">K-FIS 2024</a>
        </div>
        <div className="layer-evidence">
          <strong>Mechanism:</strong> Cash transactions offer anonymity and immediacy. For the estimated 40% of
          GDP operating informally, digital transactions create a record trail perceived as tax exposure.
          This is not irrational. It is a rational response to an incentive structure where formalization
          carries costs without proportionate benefits for small operators.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> Kenya's M-Pesa overcame distrust through agent networks—local shopkeepers
          embedded in community trust relationships. Users trusted the person, not the institution.
          Pakistan's Raast is app-based and institution-facing, bypassing this intermediary trust layer entirely.
        </div>
      </div>

      {/* Layer 2: Incentive Misalignment */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number red">2</div>
          <div className="layer-title">Incentive Misalignment</div>
        </div>
        <div className="layer-evidence">
          <strong>Core finding:</strong> The incentive structure actively favors cash even when digital alternatives exist.
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> The <strong>98% ATM cash withdrawal rate</strong> is revealed preference:
          people who already have accounts choose to convert digital money to physical cash before spending it.
          Merchants face MDR fees of 1.5-2.5% per digital transaction. Cash carries zero fee. BISP/Ehsaas
          G2P payments have high adoption rates precisely because the incentive structure is forced, not voluntary.
          <a href={SBP_URL} target="_blank" rel="noopener noreferrer" className="source-tag">SBP FY25</a>
        </div>
        <div className="layer-evidence">
          <strong>Mechanism:</strong> For merchants, digital payment acceptance creates two costs: the MDR fee
          and the tax documentation trail. For consumers, inconsistent merchant acceptance of digital payments
          creates social friction at the point of sale. The path of least resistance remains cash for both parties.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India mandated zero MDR on UPI transactions below Rs 2,000 in 2019.
          This single policy removed the merchant penalty entirely. UPI grew from 8.7B to 228.3B transactions
          in six years. Pakistan has not implemented equivalent MDR relief.
        </div>
      </div>

      {/* Layer 3: Literacy Friction */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number amber">3</div>
          <div className="layer-title">Literacy Friction</div>
        </div>
        <div className="layer-evidence">
          <strong>Core finding:</strong> Even willing adopters face friction from interfaces designed for digitally literate users.
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> K-FIS 2024 shows a significant urban-rural gap in digital financial services
          usage <em>even at equal access levels</em>. Phone ownership: <strong>82%</strong> men vs <strong>46%</strong> women.
          Account ownership: <strong>56%</strong> men vs <strong>14%</strong> women. The gap is not only about infrastructure;
          it is a gender equity problem mediated through technology access and literacy.
          <a href={KFIS_URL} target="_blank" rel="noopener noreferrer" className="source-tag">K-FIS 2024</a>
        </div>
        <div className="layer-evidence">
          <strong>Mechanism:</strong> Banking app Urdu interfaces are poor translations of English originals.
          USSD menus require multi-step memorization. Biometric verification fails for manual laborers with
          worn fingerprints. Raast is smartphone-dependent—feature phone users, Urdu-primary users, and
          low digital literacy populations are structurally excluded by design assumptions, not infrastructure absence.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India's BHIM app launched in 13 regional languages. UPI 123PAY (2022)
          enabled feature phone UPI transactions via IVR, extending access beyond smartphone users entirely.
          Pakistan's Raast ecosystem has not implemented equivalent accessibility measures.
        </div>
      </div>
    </section>
  )
}

export default InsightPanel
