import React from 'react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import Src from './Src'

const RED = '#C0392B'

function CashCounter({ data }) {
  const years = ['fy22', 'fy23', 'fy24', 'fy25', 'fy26']
  const sparklineData = years.map(y => ({
    year: y.toUpperCase(),
    pct: data.cash_withdrawal_share_pct[y]
  }))
  const latest = data.cash_withdrawal_share_pct.fy26

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block C: Counter Narrative</div>
        <h2>Cash Persists Among People Who Already Bank</h2>
      </div>

      <div className="metric-card">
        <div className="metric-label">Share of ATM transactions that are cash withdrawals, FY26</div>
        <div className="big-number" style={{ color: RED }}>
          {latest}<span className="big-number-unit">%</span>
        </div>
        <div style={{ width: '200px', height: '40px', margin: '16px auto 0' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <Tooltip formatter={(v) => `${v}%`} labelFormatter={(i) => sparklineData[i] ? sparklineData[i].year : ''} />
              <Area type="monotone" dataKey="pct" stroke={RED} fill="#FADBD8" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p style={{ fontSize: '13px', color: '#7F8C8D', marginTop: '12px' }}>
          FY22 to FY26: {years.map(y => data.cash_withdrawal_share_pct[y]).join('%, ')}%.
          My calculation: cash withdrawals divided by all ATM transactions, Table A-5 <Src id="R1" p="26" />.
          {' '}{data.total_atms_fy26.toLocaleString()} ATMs, about {data.daily_avg_per_atm_fy26} transactions per ATM per day <Src id="R1" p="8" />.
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">What this shows</span>
        <p>
          In FY26 there were 1,064 million cash withdrawals at ATMs out of 1,091 million ATM transactions <Src id="R1" p="26" />.
          The people making them already hold an account and a card. Some of this is people turning
          digital money back into cash before they spend it. It says nothing about the
          roughly three in four adults who have no account at all <Src id="R2" p="298" />.
          The ATM figure is a usage problem among the banked. Access is a separate and larger problem.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Possible reasons (to be tested)</span>
        <p>
          <strong>For merchants:</strong> card acceptance carries a merchant discount rate, and digital receipts leave a
          record. Cash has neither. I have not found a current published MDR range for Pakistan, so I do not quote one here.
        </p>
        <p>
          <strong>For consumers:</strong> if a shop does not take a QR or card payment, the customer needs cash.
          Low use per QR merchant (Block B) is consistent with that.
        </p>
        <p>
          <strong>Trust:</strong> in the Karandaaz survey for 2024, 63% of financially excluded adults trust state owned
          banks and 52% trust mobile money services, against 93% and 92% of the included <Src id="R3" p="27" />.
        </p>
      </div>
    </section>
  )
}

export default CashCounter
