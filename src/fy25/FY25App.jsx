import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area
} from 'recharts'
import Src, { SourceIndexContext } from '../components/Src'
import { SOURCES } from '../sources'
import d from '../../data/sbp-fy25-edition.json'

const BLUE = '#2E86C1'
const BLUE_LIGHT = '#85C1E9'
const RED = '#C0392B'

// Sources used on this edition, numbered in this order.
const USED = ['R1', 'R2', 'R3', 'R5', 'R7', 'R8', 'R9', 'R10']
const INDEX = Object.fromEntries(USED.map((id, i) => [id, i + 1]))
const LIST = USED.map((id) => SOURCES.find((s) => s.id === id))

const fmt = (v) => (v >= 1e6 ? `${(v / 1e6).toFixed(2)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(1)}K` : `${v}`)

function GrowthBlock() {
  const rows = d.raast_timeseries.map((r) => ({ period: r.period, volume: r.total_volume_millions, value: r.total_value_pkr_trillions }))
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block A: Infrastructure Growth</div>
        <h2>Raast Transactions: The Supply Side Success Story</h2>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECF0F1" />
            <XAxis dataKey="period" tick={{ fontSize: 12, fill: '#7F8C8D' }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#7F8C8D' }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#7F8C8D' }} />
            <Tooltip formatter={(v, n) => (n === 'volume' ? [`${v.toLocaleString()}M`, 'Transaction volume'] : [`PKR ${v}T`, 'Transaction value'])} />
            <Legend formatter={(v) => (v === 'volume' ? 'Volume (millions)' : 'Value (PKR trillion)')} wrapperStyle={{ fontSize: 12 }} />
            <Line yAxisId="left" type="monotone" dataKey="volume" stroke={BLUE} strokeWidth={2.5} dot={{ r: 5, fill: BLUE }} />
            <Line yAxisId="right" type="monotone" dataKey="value" stroke={RED} strokeWidth={2.5} dot={{ r: 5, fill: RED }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px' }}>
        All Raast transactions (bulk, person to person and person to merchant). Source: SBP Table A-15 <Src id="R1" p="31" />
      </div>
      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          Raast volumes grew 8.7x in two years, from 147.2 million in FY23 to 1,276.0 million in FY25, of which
          1,266.0 million were person to person payments. Value grew from PKR 3.1 trillion to 11.6 trillion to 29.6
          trillion <Src id="R1" p="31" />. Total retail transactions reached 9.1 billion worth PKR 612 trillion in FY25,
          up 38% by number <Src id="R1" p="9" /> <Src id="R1" p="12" />. Mobile phone channels carried about 6.2 billion,
          after growing 52% in FY25 (my calculation from the FY26 total of 11.1 billion and its 79% growth) <Src id="R1" p="7" />.
        </p>
      </div>
      <div className="insight-box warning">
        <span className="insight-label warning">Critical distinction</span>
        <p>
          The 88% digital share is <strong>by number of transactions, not value</strong>. By value, the digital share was
          29% in FY25 <Src id="R1" p="7" />. About PKR 432.9 trillion of PKR 611.6 trillion still moved over the counter at
          branches and agents (my calculation) <Src id="R1" p="9" />. Small, frequent payments went digital first.
        </p>
      </div>
    </section>
  )
}

function DensityBlock() {
  const i = d.infrastructure
  const rows = [
    { name: 'ATMs', FY24: i.atm_count.fy24, FY25: i.atm_count.fy25 },
    { name: 'CDMs', FY24: i.cdm_count.fy24, FY25: i.cdm_count.fy25 },
    { name: 'QR Merchants', FY24: i.qr_merchants.fy24, FY25: i.qr_merchants.fy25 },
  ]
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block B: Acceptance Density</div>
        <h2>Infrastructure Deployment: The Terminals Exist</h2>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rows} layout="vertical" margin={{ top: 5, right: 60, left: 100, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECF0F1" />
            <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 11, fill: '#7F8C8D' }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#7F8C8D' }} width={90} />
            <Tooltip formatter={(v) => v.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="FY24" fill={BLUE_LIGHT} barSize={16} />
            <Bar dataKey="FY25" fill={BLUE} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px' }}>
        End of June each year. Source: SBP Table A-1 <Src id="R1" p="24" />
      </div>
      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          QR enabled merchants roughly doubled, from 516,317 to 1,092,044. CDMs nearly doubled from 579 to 1,038. There
          were 227,388 POS devices at 190,823 merchants in FY25; this count includes Soft POS, so it is not comparable
          with the 125,593 devices of FY24. Branchless banking agents reached 731,814 <Src id="R1" p="24" />.
        </p>
      </div>
      <div className="insight-box amber">
        <span className="insight-label comparison">Why deployment alone fails</span>
        <p>
          Terminal deployment measures <strong>supply</strong>. It does not measure whether merchants prefer digital
          acceptance over cash. A QR sticker on the wall does not mean a QR payment at the counter. Only 4.9 million of
          Raast's 1,276 million FY25 transactions were person to merchant payments <Src id="R1" p="31" />.
        </p>
      </div>
    </section>
  )
}

function CashBlock() {
  const a = d.atm_usage
  const spark = ['fy22', 'fy23', 'fy24', 'fy25'].map((y) => ({ y: y.toUpperCase(), pct: a.cash_withdrawal_share_pct[y] }))
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block C: Counter Narrative</div>
        <h2>The Cash Persistence: Revealed Preference</h2>
      </div>
      <div className="metric-card">
        <div className="metric-label">ATM Cash Withdrawal Rate, FY25</div>
        <div className="big-number" style={{ color: RED }}>{a.cash_withdrawal_share_pct.fy25}<span className="big-number-unit">%</span></div>
        <div style={{ width: '200px', height: '40px', margin: '16px auto 0' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spark}><Area type="monotone" dataKey="pct" stroke={RED} fill="#FADBD8" strokeWidth={2} /></AreaChart>
          </ResponsiveContainer>
        </div>
        <p style={{ fontSize: '13px', color: '#7F8C8D', marginTop: '12px' }}>
          FY22 to FY25: 96.9%, 97.2%, 97.5%, 97.6% (my calculation, cash withdrawals divided by all ATM transactions) <Src id="R1" p="26" />.
          {' '}{a.total_atms_fy25.toLocaleString()} ATMs, about {a.daily_avg_per_atm_fy25} transactions per ATM per day (my calculation) <Src id="R1" p="24" /> <Src id="R1" p="26" />.
        </p>
      </div>
      <div className="insight-box warning">
        <span className="insight-label warning">What this reveals</span>
        <p>
          People who <em>already have</em> bank accounts and debit cards still convert digital money to physical cash
          before spending it. This is a <strong>revealed preference</strong> among the banked.
        </p>
      </div>
      <div className="insight-box">
        <span className="insight-label analysis">Trust data</span>
        <p>
          In the Karandaaz survey for 2024, 63% of financially excluded adults trust state owned banks and 52% trust
          mobile money services, against 93% and 92% of the financially included <Src id="R3" p="27" />.
        </p>
      </div>
    </section>
  )
}

function IndexBlock() {
  const g = d.adoption_gap_index
  const u = d.user_adoption
  const growth = (o) => `+${((o.fy25 / o.fy24 - 1) * 100).toFixed(0)}%`
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block D: Adoption Gap Index (my calculation)</div>
        <h2>Measuring the Distance Between Infrastructure and Behavior</h2>
      </div>
      <div className="metric-card">
        <div className="metric-label">Raast P2P payments per mobile banking user, FY25</div>
        <div className="big-number" style={{ color: BLUE }}>{g.computed_value}</div>
        <p style={{ fontSize: '13px', color: '#7F8C8D', marginTop: '12px' }}>
          {g.numerator_millions.toLocaleString()} million P2P payments <Src id="R1" p="31" /> divided by {g.denominator_millions} million
          mobile banking users <Src id="R1" p="24" />, about one a week. Mobile banking users are taken as the main Raast enabled
          base; categories overlap, and SBP does not report active users.
        </p>
      </div>
      <table className="data-table">
        <thead><tr><th>User category (millions)</th><th>FY24</th><th>FY25</th><th>Growth</th></tr></thead>
        <tbody>
          <tr><td>Mobile banking users</td><td>{u.mobile_banking_users_m.fy24}</td><td>{u.mobile_banking_users_m.fy25}</td><td>{growth(u.mobile_banking_users_m)}</td></tr>
          <tr><td>Branchless banking app users</td><td>{u.bb_mobile_app_users_m.fy24}</td><td>{u.bb_mobile_app_users_m.fy25}</td><td>{growth(u.bb_mobile_app_users_m)}</td></tr>
          <tr><td>EMI e-wallet users</td><td>{u.ewallet_users_m.fy24}</td><td>{u.ewallet_users_m.fy25}</td><td>{growth(u.ewallet_users_m)}</td></tr>
        </tbody>
      </table>
      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px' }}>Source: SBP Table A-1 <Src id="R1" p="24" />. Growth is my calculation.</div>
    </section>
  )
}

function InsightBlock() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Three Layer Framework</div>
        <h2>The Behavioral Last Mile: Three Compounding Barriers</h2>
      </div>
      <p style={{ fontSize: '14px', color: '#566573', marginBottom: '24px', lineHeight: '1.7' }}>
        The gap between an 88% digital share by number and a cash heavy economy is not only an infrastructure problem.
        This edition reads it as a demand side problem with three layers that reinforce each other.
      </p>
      <div className="framework-layer">
        <div className="layer-header"><div className="layer-number">1</div><div className="layer-title">Trust Deficit</div></div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> Trust in financial institutions is much lower among people outside the system: 63% of
          excluded adults trust state owned banks, 54% private banks and 52% mobile money services, against 93%, 90% and
          92% of the included. Among adults who borrowed, 85% borrowed from family and friends <Src id="R3" p="25" /> <Src id="R3" p="27" />.
        </div>
        <div className="layer-comparison">
          <strong>Comparative (hypothesis):</strong> Kenya's M-Pesa is often described as growing through agents users
          already knew. Raast is reached through apps, not through a person.
        </div>
      </div>
      <div className="framework-layer">
        <div className="layer-header"><div className="layer-number red">2</div><div className="layer-title">Incentive Misalignment</div></div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> The <strong>97.6% ATM cash withdrawal share</strong> in FY25 is revealed preference among
          people who already have accounts <Src id="R1" p="26" />. Card acceptance carries a merchant fee; cash does not.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India made UPI and RuPay payments free of merchant discount rate from 1 January 2020 <Src id="R7" />.
          UPI volume rose from about 46.0 billion transactions in FY 2021-22 to 185.9 billion in FY 2024-25 <Src id="R5" />, though
          many policies changed together.
        </div>
      </div>
      <div className="framework-layer">
        <div className="layer-header"><div className="layer-number amber">3</div><div className="layer-title">Literacy Friction</div></div>
        <div className="layer-evidence">
          <strong>Evidence:</strong> Mobile phone ownership is 82% for men and 46% for women in the Karandaaz survey <Src id="R3" p="28" />; the report prints the same figures for smartphone ownership <Src id="R3" p="29" />.
          Financially included adults are 56% of men and 14% of women <Src id="R3" p="7" />. The survey's Digital Literacy Index
          scores men 65 and women 48 <Src id="R3" p="30" />.
        </div>
        <div className="layer-comparison">
          <strong>Comparative:</strong> India's central bank launched UPI123Pay in 2022 so that feature phone users can pay
          without a smartphone <Src id="R8" />.
        </div>
      </div>
    </section>
  )
}

function ComparativeBlock() {
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Comparative Evidence</div>
        <h2>Pakistan vs India vs Kenya: What the Data Shows</h2>
      </div>
      <table className="data-table">
        <thead><tr><th>Indicator</th><th>Pakistan</th><th>India</th><th>Kenya</th></tr></thead>
        <tbody>
          <tr><td>Primary system</td><td>Raast (first phase January 2021) <Src id="R10" /></td><td>UPI</td><td>M-Pesa</td></tr>
          <tr><td>Annual transactions</td><td><strong>1.28B</strong> (FY25) <Src id="R1" p="31" /></td><td><strong>185.9B</strong> (FY 2024-25) <Src id="R5" /></td><td><strong>about 37B</strong> (year to March 2025; my calculation from 46.4B in FY26 and 25.1% growth) <Src id="R9" /></td></tr>
          <tr><td>Adults with an account (Findex 2025, survey year 2024)</td><td>27%</td><td>89%</td><td>90%</td></tr>
        </tbody>
      </table>
      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px', textAlign: 'right' }}>
        Account row: World Bank Findex 2025, Table B.1 <Src id="R2" p="297" /> <Src id="R2" p="298" />. Pakistan's own survey puts inclusion at 35% in 2024 on its own definition <Src id="R3" p="7" />.
      </div>
      <div className="insight-box success" style={{ marginTop: '16px' }}>
        <span className="insight-label action">Key takeaway</span>
        <p>
          Neither India nor Kenya reached mass adoption through infrastructure alone. India removed merchant fees on UPI <Src id="R7" />
          and built a feature phone channel <Src id="R8" />. Pakistan had not yet found its equivalent by FY25.
        </p>
      </div>
    </section>
  )
}

function RecsBlock() {
  const recs = [
    ['Eliminate merchant fees on small digital payments', 'SBP', "India's zero MDR on UPI and RuPay from January 2020", 'R7'],
    ['Build feature phone Raast access via USSD and IVR', 'SBP and banks', "India's UPI123Pay (2022)", 'R8'],
    ['Pay agents for helping customers pay digitally', 'SBP and branchless banking providers', 'No verified precedent cited', null],
    ['Set Urdu first design standards for payment apps', 'SBP', 'No verified precedent cited', null],
  ]
  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Proposals</div>
        <h2>Four Actions That Close the Behavioral Gap</h2>
      </div>
      {recs.map(([t, who, prec, src], i) => (
        <div className="rec-card" key={i}>
          <div className="rec-number">{i + 1}</div>
          <div className="rec-title">{t}</div>
          <div className="rec-meta"><span className="rec-tag implementer">{who}</span></div>
          <div className="rec-description"><p><strong>Precedent:</strong> {prec} {src ? <Src id={src} /> : null}</p></div>
        </div>
      ))}
    </section>
  )
}

function SourcesBlock() {
  return (
    <section className="block">
      <div className="block-header"><div className="block-label">Sources</div><h2>Where Every Number Comes From</h2></div>
      <p style={{ fontSize: '13px' }}>
        Markers such as [1, p. 31] point to this list; pages are printed pages. FY25 figures are the revised FY25 columns of
        the SBP's FY26 review. Figures marked "my calculation" show their inputs.
      </p>
      <ol style={{ paddingLeft: '20px' }}>
        {LIST.map((s) => (
          <li key={s.id} id={`source-${s.id}`} style={{ padding: '8px 0', fontSize: '12px', borderBottom: '1px solid #ECF0F1' }}>
            {s.publisher}. <em>{s.title}</em>. <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2E86C1' }}>{s.url}</a>. <strong>{s.label}</strong>.
          </li>
        ))}
      </ol>
    </section>
  )
}

function FY25App() {
  return (
    <SourceIndexContext.Provider value={INDEX}>
      <div className="dashboard">
        <div style={{ background: '#EBF5FB', border: '1px solid #2E86C1', borderRadius: '6px', padding: '10px 14px', fontSize: '13px', marginBottom: '16px' }}>
          FY25 edition, first published March 2026. <a href="./">See the current edition with FY26 data and the progress from FY25 to FY26.</a>
        </div>
        <header className="dashboard-header">
          <h1>Raast Adoption Gap Tracker: FY25 Edition</h1>
          <p className="subtitle">
            Pakistan's digital payment infrastructure is scaling. Behavioral adoption is not. This edition maps the gap
            with FY25 data, explains why it exists, and identifies what works elsewhere.
          </p>
          <div className="header-stats">
            <div className="header-stat"><div className="header-stat-number" style={{ color: BLUE }}>88%</div><div className="header-stat-label">Digital by number <Src id="R1" p="7" /></div></div>
            <div className="header-stat"><div className="header-stat-number" style={{ color: RED }}>97.6%</div><div className="header-stat-label">ATM cash withdrawal <Src id="R1" p="26" /></div></div>
            <div className="header-stat"><div className="header-stat-number" style={{ color: '#D4A017' }}>35%</div><div className="header-stat-label">Financial inclusion (K-FIS 2024) <Src id="R3" p="7" /></div></div>
          </div>
        </header>
        <div className="section-divider"><span>Part 1: The Data</span></div>
        <GrowthBlock />
        <DensityBlock />
        <CashBlock />
        <IndexBlock />
        <div className="section-divider"><span>Part 2: Why the Gap Exists</span></div>
        <InsightBlock />
        <div className="section-divider"><span>Part 3: What Works Elsewhere</span></div>
        <ComparativeBlock />
        <RecsBlock />
        <div className="section-divider"><span>Sources</span></div>
        <SourcesBlock />
        <div className="footer-credit">Fawad Liaqat | FY25 edition, March 2026 | <a href="./">Current edition</a></div>
      </div>
    </SourceIndexContext.Provider>
  )
}

export default FY25App
