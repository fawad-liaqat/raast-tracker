import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import Src from './Src'

const BLUE = '#2E86C1'
const BLUE_LIGHT = '#85C1E9'

function DensityComparison({ data }) {
  const chartData = [
    { name: 'ATMs', FY25: data.atm_count.fy25, FY26: data.atm_count.fy26 },
    { name: 'CDMs', FY25: data.cdm_count.fy25, FY26: data.cdm_count.fy26 },
    { name: 'POS Devices', FY25: data.pos_devices.fy25, FY26: data.pos_devices.fy26 },
    { name: 'QR Merchants', FY25: data.qr_merchants.fy25, FY26: data.qr_merchants.fy26 }
  ]

  const formatTick = (value) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
    return value
  }

  const formatLabel = (value) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
    return value.toLocaleString()
  }

  const renderBarLabel = (props) => {
    const { x, y, width, height, value } = props
    return (
      <text x={x + width + 5} y={y + height / 2} dy={4} fontSize={11} fontWeight="bold" fill="#2C3E50">
        {formatLabel(value)}
      </text>
    )
  }

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block B: Acceptance Density</div>
        <h2>Infrastructure Deployment: The Terminals Exist</h2>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 60, left: 100, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECF0F1" />
            <XAxis type="number" tickFormatter={formatTick} tick={{ fontSize: 11, fill: '#7F8C8D' }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#7F8C8D' }} width={90} />
            <Tooltip formatter={(value) => value.toLocaleString()} contentStyle={{ fontSize: 12, borderRadius: 6 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="FY25" fill={BLUE_LIGHT} barSize={16} label={renderBarLabel} />
            <Bar dataKey="FY26" fill={BLUE} barSize={16} label={renderBarLabel} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px' }}>
        End of June each year. FY25 values are the revised figures printed in the FY26 review; POS devices now
        include Soft POS, so they are not comparable with earlier years. Source: SBP Table A-1 <Src id="R1" p="24" />
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          QR enabled merchants rose from 1.09 million to 3.84 million in a year, which the State Bank links to a
          subsidy under the Prime Minister's Cashless Pakistan Initiative <Src id="R1" p="7" />. POS devices grew 49%
          to 337,791, mostly because of Soft POS. CDMs nearly doubled to 1,896. Branchless banking agents
          reached 837,244 <Src id="R1" p="15" />. Raast had 3.6 million merchants registered on its merchant alias by June 2026 <Src id="R1" p="11" />.
        </p>
      </div>

      <div className="insight-box amber">
        <span className="insight-label comparison">Why deployment alone is not enough</span>
        <p>
          Terminal counts measure <strong>supply</strong>. The State Bank reports 297 million QR and till payments
          in FY26 against 3.8 million QR merchants <Src id="R1" p="10" />. That is about 77 payments per merchant
          per year, or one and a half a week (my calculation). Many merchants joined partway through the year,
          so active merchants will have a higher rate. Still, a QR sticker on the wall does not mean a QR
          payment at the counter.
        </p>
        <p>
          Agents still do a lot of cash work. Of the PKR 3.7 trillion that passed through branchless banking
          agents in FY26 <Src id="R1" p="26" />, about PKR 1.0 trillion was cash deposits and withdrawals
          (PKR 584 billion and PKR 413 billion) <Src id="R1" p="11" />. That is roughly a quarter (my calculation).
          The rest was bill payments, transfers and cash collection. Agents are a bridge between cash and accounts.
        </p>
      </div>
    </section>
  )
}

export default DensityComparison
