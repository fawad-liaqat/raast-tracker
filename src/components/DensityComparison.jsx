import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const BLUE = '#2E86C1'
const BLUE_LIGHT = '#85C1E9'
const SBP_URL = 'https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf'

function DensityComparison({ data }) {
  const chartData = [
    { name: 'ATMs', FY24: data.atm_count.fy24, FY25: data.atm_count.fy25 },
    { name: 'CDMs', FY24: data.cdm_count.fy24, FY25: data.cdm_count.fy25 },
    { name: 'POS Terminals', FY24: data.pos_terminals.fy24 || 125545, FY25: data.pos_terminals.fy25 },
    { name: 'QR Merchants', FY24: data.qr_merchants.fy24, FY25: data.qr_merchants.fy25 }
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
        <div className="block-label">Block B — Acceptance Density</div>
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
            <Bar dataKey="FY24" fill={BLUE_LIGHT} barSize={16} label={renderBarLabel} />
            <Bar dataKey="FY25" fill={BLUE} barSize={16} label={renderBarLabel} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="insight-box">
        <span className="insight-label analysis">Analysis</span>
        <p>
          QR merchant count doubled from 516K to 1.09M. POS terminals grew 56% to 196K at 159K merchants.
          CDMs nearly doubled from 579 to 1,038. The branchless banking agent network reached 731,814.
          <a href={SBP_URL} target="_blank" rel="noopener noreferrer" className="source-tag">SBP FY25</a>
        </p>
      </div>

      <div className="insight-box amber">
        <span className="insight-label comparison">Why deployment alone fails</span>
        <p>
          Terminal deployment measures <strong>supply</strong>. It does not measure whether merchants
          prefer digital acceptance over cash. With MDR fees of 1.5-2.5% per transaction and tax
          documentation requirements, many merchants with QR codes still prefer cash. A QR sticker
          on the wall does not mean a QR payment at the counter.
        </p>
        <p>
          Pakistan's 731,814 branchless banking agents primarily facilitate cash-in/cash-out, not digital
          payments. They serve the cash economy, not the digital one.
        </p>
      </div>
    </section>
  )
}

export default DensityComparison
