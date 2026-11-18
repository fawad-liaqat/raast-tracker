import React from 'react'
import GrowthChart from './components/GrowthChart'
import DensityComparison from './components/DensityComparison'
import CashCounter from './components/CashCounter'
import AdoptionGapIndex from './components/AdoptionGapIndex'
import InsightPanel from './components/InsightPanel'
import ComparativeAnalysis from './components/ComparativeAnalysis'
import ActionableRecommendations from './components/ActionableRecommendations'
import MethodologyNote from './components/MethodologyNote'
import ProgressView from './components/ProgressView'
import Src from './components/Src'
import data from '../data/sbp-fy26.json'

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Raast Adoption Gap Tracker</h1>
        <p className="subtitle">
          Pakistan built the payment rails. Adoption is the hard part. Most adults still have no
          account, and the people who do are already paying digitally. This tracker follows that
          gap with the State Bank's FY26 data.
        </p>
        <div className="header-stats">
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#D4A017' }}>27%</div>
            <div className="header-stat-label">Adults with an account <Src id="R2" p="298" /></div>
          </div>
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#2E86C1' }}>92%</div>
            <div className="header-stat-label">Retail payments digital by count <Src id="R1" p="7" /></div>
          </div>
          <div className="header-stat">
            <div className="header-stat-number" style={{ color: '#C0392B' }}>38%</div>
            <div className="header-stat-label">Digital by value <Src id="R1" p="7" /></div>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: '#7F8C8D', marginTop: '12px' }}>
          Updated November 2026 with SBP FY26 data and new sources. Pakistan payment data: FY26 (July 2025 to June 2026),
          provisional. Account ownership: Findex 2025, survey year 2024.{' '}
          <a href="#progress">Progress from FY25 to FY26</a> | <a href="?edition=fy25">FY25 edition (March 2026)</a>
        </p>
      </header>

      {/* PART 1: THE DATA */}
      <div className="section-divider">
        <span>Part 1: The Data</span>
      </div>

      <GrowthChart data={data.raast_timeseries} retail={data.retail_payments} />
      <DensityComparison data={data.infrastructure} />
      <CashCounter data={data.atm_usage} />
      <AdoptionGapIndex data={data.adoption_gap_index} userAdoption={data.user_adoption} />
      <ProgressView />

      {/* PART 2: THE ANALYSIS */}
      <div className="section-divider">
        <span>Part 2: Why the Gap Exists</span>
      </div>

      <InsightPanel />

      {/* PART 3: WHAT WORKS */}
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
        Fawad Liaqat | BS Financial Technology, FAST NUCES Islamabad | Last updated: November 2026
      </div>
    </div>
  )
}

export default App
