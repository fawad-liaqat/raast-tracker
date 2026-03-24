import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const BLUE = '#2E86C1'
const RED = '#C0392B'

const SBP_URL = 'https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf'

function GrowthChart({ data, retail }) {
  const chartData = data.map(d => ({
    period: d.period,
    volume: d.volume_millions,
    value: d.value_pkr_trillions
  }))

  const growthMultiple = (data[2].volume_millions / data[0].volume_millions).toFixed(1)

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block A — Infrastructure Growth</div>
        <h2>Raast P2P Transactions: The Supply Side Success Story</h2>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECF0F1" />
            <XAxis dataKey="period" tick={{ fontSize: 12, fill: '#7F8C8D' }} />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12, fill: '#7F8C8D' }}
              label={{ value: 'Volume (millions)', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#7F8C8D' } }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12, fill: '#7F8C8D' }}
              label={{ value: 'Value (PKR trillion)', angle: 90, position: 'insideRight', style: { fontSize: 11, fill: '#7F8C8D' } }}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'volume') return [`${value.toLocaleString()}M`, 'Transaction Volume']
                return [`PKR ${value}T`, 'Transaction Value']
              }}
              contentStyle={{ fontSize: 12, borderRadius: 6 }}
            />
            <Legend
              formatter={(value) => value === 'volume' ? 'Volume (millions)' : 'Value (PKR trillion)'}
              wrapperStyle={{ fontSize: 12 }}
            />
            <Line yAxisId="left" type="monotone" dataKey="volume" stroke={BLUE} strokeWidth={2.5}
              dot={{ r: 5, fill: BLUE }} activeDot={{ r: 7 }} />
            <Line yAxisId="right" type="monotone" dataKey="value" stroke={RED} strokeWidth={2.5}
              dot={{ r: 5, fill: RED }} activeDot={{ r: 7 }} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          Raast P2P volumes grew <strong>{growthMultiple}x</strong> in three years (147M to 1.28B).
          Transaction value grew from PKR 3.1T (FY23) to 11.5T (FY24) to 29.6T (FY25) — a 9.5x value increase.
          Total retail digital transactions reached 9.1 billion, with mobile banking apps alone processing 6.2 billion (52% YoY growth).
          <a href={SBP_URL} target="_blank" rel="noopener noreferrer" className="source-tag">SBP FY25</a>
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">Critical distinction</span>
        <p>
          The 88% digital share is <strong>by transaction volume, not value</strong>. By value, the digital share is
          approximately 29% (Q2 FY25). High-frequency, low-value transactions (P2P transfers, airtime top-ups, utility bills)
          inflate the volume share. Cash dominates high-value activity: retail commerce, wholesale trade, real estate, informal markets.
          <a href="https://www.sbp.org.pk/psd/pdf/PS-Review-Q2FY25.pdf" target="_blank" rel="noopener noreferrer" className="source-tag">SBP Q2 FY25</a>
        </p>
      </div>
    </section>
  )
}

export default GrowthChart
