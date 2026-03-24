import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const RED = '#C0392B'
const SBP_URL = 'https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf'
const KFIS_URL = 'https://portal.karandaaz.com.pk'

function CashCounter({ data }) {
  const sparklineData = [
    { month: 'FY22', pct: 98 },
    { month: 'FY23', pct: 98 },
    { month: 'FY24', pct: 98 },
    { month: 'FY25', pct: 98 }
  ]

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block C — Counter Narrative</div>
        <h2>The Cash Persistence: Revealed Preference</h2>
      </div>

      <div className="metric-card">
        <div className="metric-label">ATM Cash Withdrawal Rate</div>
        <div className="big-number" style={{ color: RED }}>
          {data.cash_withdrawal_pct}<span className="big-number-unit">%</span>
        </div>
        <div style={{ width: '200px', height: '40px', margin: '16px auto 0' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <Area type="monotone" dataKey="pct" stroke={RED} fill="#FADBD8" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p style={{ fontSize: '13px', color: '#7F8C8D', marginTop: '12px' }}>
          {data.total_atms.toLocaleString()} ATMs | {data.daily_avg_per_atm} transactions per ATM per day
          <a href={SBP_URL} target="_blank" rel="noopener noreferrer" className="source-tag">SBP FY25</a>
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">What this reveals</span>
        <p>
          This is the single most telling statistic in Pakistan's payment data.
          People who <em>already have</em> bank accounts and debit cards, who have already overcome the trust
          barrier enough to open an account, still convert digital money to physical cash before spending it.
          This is a <strong>revealed preference</strong>, not an access problem.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Behavioral diagnosis</span>
        <p>
          <strong>For merchants:</strong> Accepting digital payments means MDR fees (1.5-2.5%) plus a tax documentation trail.
          Cash carries zero fee and zero trail. For businesses in the informal economy (estimated 40% of GDP), this is rational avoidance.
        </p>
        <p>
          <strong>For consumers:</strong> Digital payment acceptance remains inconsistent at point of sale.
          Attempting digital payment and encountering a cash-preferring merchant creates social friction.
          The path of least resistance is cash.
        </p>
        <p>
          <strong>Trust data:</strong> Only 9% of excluded adults trust banks. Only 8% trust mobile money
          providers. Just 36% of all adults are comfortable using any financial service.
          <a href={KFIS_URL} target="_blank" rel="noopener noreferrer" className="source-tag">K-FIS 2024</a>
        </p>
      </div>
    </section>
  )
}

export default CashCounter
