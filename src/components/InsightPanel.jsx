import React from 'react'
import Src from './Src'

function InsightPanel() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Framework: access first, then use</div>
        <h2>Why the Gap Exists: Access Comes Before Behaviour</h2>
      </div>

      <p style={{ fontSize: '14px', color: 'var(--gray-dark)', marginBottom: '24px', lineHeight: '1.7' }}>
        The FY25 edition framed the gap as a behaviour problem among users. The newer evidence points
        somewhere else first. Only 27% of Pakistani adults have an account, and 25% made or received
        a digital payment <Src id="R2" p="298" />. Findex notes that about 90% of Pakistani account owners
        use digital payments, though on a small base <Src id="R2" p="167" />. So the first barrier is getting
        people onto the rail at all. Trust, incentives and design then decide how much they use it.
      </p>

      {/* Layer 1: Access */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number">1</div>
          <div className="layer-title">Access: most adults are not on the rail</div>
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> Account ownership is 27% in Pakistan, against 89% in India and 90% in Kenya <Src id="R2" p="297" /> <Src id="R2" p="298" />.
          Pakistan's gender gap in account ownership is 30 percentage points <Src id="R2" p="98" />, and the gap in
          mobile phone ownership is 65 points <Src id="R2" p="25" />. Pakistan's own survey tells the same story:
          35% of adults financially included in 2024, 56% of men and 14% of women <Src id="R3" p="7" />.
        </div>
        <div className="layer-evidence">
          <strong>Why the two numbers differ:</strong> Findex (27%) and the Karandaaz survey (35%) use different
          samples and definitions. I use Findex for comparisons with other countries and quote the Karandaaz
          figure for Pakistan detail.
        </div>
        <div className="layer-evidence">
          <strong>Phones:</strong> 40% of Pakistani women without a phone name family disapproval as a reason;
          no men do <Src id="R2" p="32" />. Any product that assumes a personal smartphone starts by missing
          many of these women.
        </div>
      </div>

      {/* Layer 2: Trust */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number red">2</div>
          <div className="layer-title">Trust</div>
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> In the Karandaaz survey for 2024, trust is much lower among people outside the system:
          63% of financially excluded adults trust state owned banks, 54% private banks and 52% mobile money services,
          against 93%, 90% and 92% of the financially included <Src id="R3" p="27" />. Among adults who borrowed, 85%
          borrowed from family and friends <Src id="R3" p="25" />.
        </div>
        <div className="layer-comparison">
          <strong>Comparative (hypothesis):</strong> Kenya's M-Pesa grew through local agents whom users already
          knew. Pakistan has 837,244 branchless banking agents <Src id="R1" p="24" />, but Raast itself is reached
          through apps. Whether agents could act as the trusted bridge to Raast is a question, not a finding.
        </div>
      </div>

      {/* Layer 3: Incentives */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number red">3</div>
          <div className="layer-title">Incentives for merchants and users</div>
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> Among people who already bank, 97.6% of ATM transactions are cash withdrawals
          (my calculation) <Src id="R1" p="26" />. Merchant payments are 6.6% of Raast volume (my calculation) <Src id="R1" p="31" />.
          When incentives changed, merchants signed up: QR merchants more than tripled within a year under the
          Cashless Pakistan subsidy <Src id="R1" p="7" />. The subsidy, 0.5% of value or PKR 100 per payment, whichever is lower, ran from 1 September 2025 to 30 June 2026 <Src id="R4" />. On 13 November 2026 the government said it would continue subsidising merchant fees on Raast QR payments; the terms were not published <Src id="R12" />.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India removed the merchant discount rate on UPI and RuPay payments from
          1 January 2020 <Src id="R7" />. Merchant payments are now 63% of UPI volume <Src id="R6" />. Other
          policies changed at the same time, so this does not isolate the effect of zero MDR.
        </div>
      </div>

      {/* Layer 4: Design and literacy */}
      <div className="framework-layer">
        <div className="layer-header">
          <div className="layer-number amber">4</div>
          <div className="layer-title">Design and literacy</div>
        </div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> The Karandaaz Digital Literacy Index scores men 65 and women 48, and urban adults 70
          against rural 51 <Src id="R3" p="30" />. On the survey's financial literacy measure, 32% of men and 12% of women
          pass, and 38% of the financially included against 12% of the excluded <Src id="R3" p="11" />. That is a strong
          association with inclusion, not proof that literacy causes it. Findex reports difficulty reading or typing as a common reason for not owning a
          phone in South Asia <Src id="R2" p="32" />. Pakistan already has 46.1 million registered call centre and
          IVR banking users <Src id="R1" p="9" />, so voice channels are not new to banks here.
        </div>
        <div className="layer-evidence">
          <strong>Mechanism (hypothesis):</strong> Raast is reached through bank and wallet apps. People with a basic
          phone, low literacy or limited English face more steps. I have not measured this directly.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India's central bank launched UPI123Pay in 2022 so that feature phone users
          could make UPI payments without a smartphone <Src id="R8" />.
        </div>
      </div>
    </section>
  )
}

export default InsightPanel
