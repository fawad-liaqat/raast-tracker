import React from 'react'
import GrowthChart from './components/GrowthChart'
import DensityComparison from './components/DensityComparison'
import CashCounter from './components/CashCounter'
import AdoptionGapIndex from './components/AdoptionGapIndex'
import InsightPanel from './components/InsightPanel'
import ComparativeAnalysis from './components/ComparativeAnalysis'
import ActionableRecommendations from './components/ActionableRecommendations'
import MethodologyNote from './components/MethodologyNote'
import data from '../data/sbp-fy25.json'

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Raast Adoption Gap Tracker</h1>
        <p className="subtitle">
          Pakistan's digital payment infrastructure is scaling. Behavioral adoption is not.
          This tracker maps the gap, explains why it exists, and identifies what works elsewhere.
        </p>
        <div className="header-stats">
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#2E86C1' }}>88%</div>
            <div className="header-stat-label">Digital by volume</div>
          </div>
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#C0392B' }}>98%</div>
            <div className="header-stat-label">ATM cash withdrawal</div>
          </div>
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#D4A017' }}>35%</div>
            <div className="header-stat-label">Financial inclusion</div>
          </div>
        </div>
      </header>

      {/* PART 1: THE DATA — What the numbers show */}
      <div className="section-divider">
        <span>Part 1: The Data</span>
      </div>

      <GrowthChart data={data.raast_timeseries} retail={data.retail_payments} />
      <DensityComparison data={data.infrastructure} />
      <CashCounter data={data.atm_usage} />
      <AdoptionGapIndex data={data.adoption_gap_index} userAdoption={data.user_adoption} />

      {/* PART 2: THE ANALYSIS — Why the gap exists */}
      <div className="section-divider">
        <span>Part 2: Why the Gap Exists</span>
      </div>

      <InsightPanel />

      {/* PART 3: WHAT WORKS — Comparative evidence */}
      <div className="section-divider">
        <span>Part 3: What Works Elsewhere</span>
      </div>

      <ComparativeAnalysis />
      <ActionableRecommendations />

      {/* SOURCES */}
      <div className="section-divider">
        <span>Sources and Methodology</span>
      </div>

      <MethodologyNote metadata={data.metadata} />

      <div className="footer-credit">
        Fawad Liaqat | BSFT, NUCES FAST Islamabad | March 2026
      </div>
    </div>
  )
}

export default App
