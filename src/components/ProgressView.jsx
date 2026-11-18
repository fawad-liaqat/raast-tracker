import React, { useEffect } from 'react'
import Src from './Src'

// FY25 and FY26 come from the same report (SBP Payment Systems Review FY26,
// revised FY25 columns), so each row compares like with like.
const ROWS = [
  ['Raast transactions (millions)', '1,276.0', '2,755.2', '+116%', 'Progress', '31'],
  ['Raast value (PKR trillion)', '29.6', '80.1', '+171%', 'Progress', '31'],
  ['Raast P2P payments (millions)', '1,266.0', '2,537.2', '+100%', 'Progress', '31'],
  ['Raast P2M payments (millions)', '4.9', '182.5', '37x', 'Progress', '31'],
  ['P2M share of Raast volume', '0.4%', '6.6%', '+6.2 points', 'Progress, still small', '31'],
  ['QR enabled merchants', '1,092,044', '3,836,522', '+251%', 'Progress', '24'],
  ['Digital share of retail payments, by number', '88%', '92%', '+4 points', 'Progress', '7'],
  ['Digital share of retail payments, by value', '29%', '38%', '+9 points', 'Progress', '7'],
  ['Over the counter value (PKR trillion)', '432.9', '415.7', '-4%', 'Progress, small', '9'],
  ['Over the counter transactions (millions)', '1,101.1', '1,105.1', '+0.4%', 'No change', '9'],
  ['ATM transactions that are cash withdrawals', '97.6%', '97.6%', '0', 'No change', '26'],
  ['Mobile banking users (millions)', '24.1', '30.4', '+26%', 'Progress', '9'],
  ['Mobile app banking transactions, banks (millions)', '1,797.8', '2,573.0', '+43%', 'Progress', '28'],
  ['Internet banking transactions (millions)', '297.2', '341.6', '+15%', 'Progress', '27'],
  ['POS devices (Soft POS included both years)', '227,388', '337,791', '+49%', 'Progress', '24'],
  ['Branchless banking agents', '731,814', '837,244', '+14%', 'Progress', '24'],
]

function ProgressView() {
  // The browser tries the #progress anchor before React has rendered this
  // section, so scroll to it once mounted, and again on later hash changes.
  useEffect(() => {
    const go = () => {
      if (window.location.hash === '#progress') {
        const el = document.getElementById('progress')
        if (el) el.scrollIntoView()
      }
    }
    go()
    window.addEventListener('hashchange', go)
    return () => window.removeEventListener('hashchange', go)
  }, [])

  return (
    <section className="block" id="progress">
      <div className="block-header">
        <div className="block-label">Progress from FY25 to FY26</div>
        <h2>What Moved and What Did Not</h2>
      </div>
      <table className="data-table">
        <thead>
          <tr><th>Indicator</th><th>FY25</th><th>FY26</th><th>Change</th><th>Verdict</th><th>Source (both years)</th></tr>
        </thead>
        <tbody>
          {ROWS.map(([name, a, b, ch, v, p]) => (
            <tr key={name}><td>{name}</td><td>{a}</td><td>{b}</td><td>{ch}</td><td>{v}</td><td><Src id="R1" p={p} /></td></tr>
          ))}
          <tr><td>Adults financially included (Karandaaz definition)</td><td>30% (2022)</td><td>35% (2024)</td><td>+5 points</td><td>Progress</td><td><Src id="R3" p="7" /></td></tr>
          <tr><td>Registered Raast P2P IDs</td><td>Not in the FY26 review</td><td>49.2 million</td><td>n/a</td><td>One year only</td><td><Src id="R1" p="11" /></td></tr>
          <tr><td>Adults with an account (Findex)</td><td colSpan="2">27% in the 2024 survey; no later survey yet</td><td>n/a</td><td>One year only</td><td><Src id="R2" p="298" /></td></tr>
        </tbody>
      </table>
      <div style={{ fontSize: '11px', color: 'var(--gray-annotation)', marginTop: '6px' }}>
        FY26 figures are provisional; FY25 figures are the revised values in the same report. Changes, shares and the cash
        withdrawal rate are my calculations from the cited tables. The Karandaaz row compares two survey rounds, not fiscal years.
      </div>
      <div className="insight-box">
        <span className="insight-label analysis">Plain reading</span>
        <p>
          <strong>The rails moved fast.</strong> Raast more than doubled, merchant payments on it went from almost none to
          182.5 million, and QR merchants more than tripled <Src id="R1" p="7" /> while a merchant fee subsidy was in place <Src id="R4" />.
          The digital share of payment value rose from 29% to 38%.
        </p>
        <p>
          <strong>Behaviour at the edges moved less.</strong> Over the counter transactions did not fall, over the counter value
          fell only 4%, and 97.6% of ATM use is still cash withdrawal in both years. Merchant payments are still only 6.6% of
          Raast volume.
        </p>
        <p>
          <strong>Access is the slowest part.</strong> Inclusion on Karandaaz's definition rose from 30% to 35% between 2022 and
          2024, and the gap between men (56%) and women (14%) remains wide <Src id="R3" p="7" />. For customers, the gains so far are
          mostly convenience for people already in the system; reaching people outside it, and protecting them when they join,
          is the work still ahead.
        </p>
      </div>
      <p style={{ fontSize: '12px', marginTop: '10px' }}>
        <a href="?edition=fy25">Open the FY25 edition (March 2026)</a>.
      </p>
    </section>
  )
}

export default ProgressView
