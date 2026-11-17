import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import Src from './Src'

const BLUE = '#2E86C1'
const RED = '#C0392B'

function GrowthChart({ data, retail }) {
  // FY22 is left out of the chart because Raast person to person payments only
  // started during that year; it stays in the data file.
  const series = data.filter(d => d.period !== 'FY22')
  const chartData = series.map(d => ({
    period: d.period,
    volume: d.total_volume_millions,
    value: +(d.total_value_pkr_billions / 1000).toFixed(1)
  }))

  const first = series[0]
  const last = series[series.length - 1]
  const prev = series[series.length - 2]
  const volMultiple = (last.total_volume_millions / first.total_volume_millions).toFixed(1)
  const yoy = (last.total_volume_millions / prev.total_volume_millions).toFixed(1)
  const p2mShare = (last.p2m_volume_millions / last.total_volume_millions * 100).toFixed(1)

  return (
    <section className="block">
      <div className="block-header">
        <div className="block-label">Block A: Infrastructure Growth</div>
        <h2>Raast Transactions: The Rail Works</h2>
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
                if (name === 'volume') return [`${value.toLocaleString()}M`, 'Transaction volume']
                return [`PKR ${value}T`, 'Transaction value']
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
      <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '6px' }}>
        Chart: all Raast transactions (bulk, person to person and person to merchant), FY23 to FY26.
        FY26 is provisional. Source: SBP Table A-15 <Src id="R1" p="31" />
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          Raast moved {last.total_volume_millions.toLocaleString()} million transactions worth
          PKR {(last.total_value_pkr_billions / 1000).toFixed(1)} trillion in FY26, against
          {' '}{prev.total_volume_millions.toLocaleString()} million in FY25 <Src id="R1" p="31" />.
          That is {yoy}x in one year and {volMultiple}x since FY23 (my calculation from the same table).
          Across all channels, retail payments reached 14.3 billion transactions worth PKR 673 trillion,
          and mobile phone channels carried 11.1 billion of them, up 79% <Src id="R1" p="7" />.
        </p>
        <p>
          Merchants are the thin part. Person to merchant payments on Raast rose from 4.9 million to
          182.5 million, but that is still {p2mShare}% of Raast volume (my calculation) <Src id="R1" p="31" />.
        </p>
      </div>

      <div className="insight-box warning">
        <span className="insight-label warning">Count is not value</span>
        <p>
          Digital channels carried {retail.digital_share_by_volume_pct.fy26}% of retail payments by count in FY26,
          up from {retail.digital_share_by_volume_pct.fy25}% in FY25. By value the digital share was
          {' '}{retail.digital_share_by_value_pct.fy26}%, up from {retail.digital_share_by_value_pct.fy25}% <Src id="R1" p="7" />.
          About PKR 415.7 trillion of PKR 672.7 trillion, roughly 62%, still moved over the counter at
          bank branches and agents (my calculation) <Src id="R1" p="9" />. Small, frequent payments
          went digital first. Large payments mostly have not.
        </p>
      </div>
    </section>
  )
}

export default GrowthChart
