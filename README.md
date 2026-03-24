# Raast Adoption Gap Tracker

An interactive, single page dashboard mapping the distance between
Pakistan's digital payment infrastructure growth and actual behavioral
adoption of cashless transactions.

**Live Demo**: [raast-tracker.vercel.app](https://fawad-liaqat.github.io/raast-tracker/)

## The Core Question

Raast transaction volumes grew 8.7x in three years (147M to 1.28B).
Digital channels now carry 88% of all retail payments by volume.
Yet 98% of ATM usage remains cash withdrawal, and over 60% of
economic activity is still cash based.

This dashboard visualizes that gap.

## What It Shows

| Block                 | Content                                    | Metric         |
| --------------------- | ------------------------------------------ | -------------- |
| Infrastructure Growth | Raast volume/value FY23-FY25               | Dual axis line |
| Acceptance Density    | POS/QR terminal density                    | Bar chart      |
| Counter Narrative     | ATM cash withdrawal rate                   | Big number     |
| Adoption Gap Index    | Digital transactions / registered accounts | Computed       |

## Data Sources

All data extracted from publicly available State Bank of Pakistan
reports. See [METHODOLOGY.md](./METHODOLOGY.md) for full details.

- SBP Annual Payment Systems Review FY25 (November 2025)
- SBP Quarterly Payment Systems Reviews Q1-Q3 FY25
- SBP Governor's Annual Report FY25

Raw data: [`/data/sbp-fy25.json`](./data/sbp-fy25.json)

## Run Locally

```bash
git clone https://github.com/[your-username]/raast-tracker.git
cd raast-tracker
npm install
npm run dev
```

## Tech Stack

React (Vite) + Recharts + Tailwind CSS. Deployed on Github Pages.

## Methodology

The Adoption Gap Index is computed as:

(Total Raast P2P Transactions / Total Registered Digital Accounts) x 100

Full methodology, assumptions, and known limitations are documented
in [METHODOLOGY.md](./METHODOLOGY.md).

## Author

Fawad Liaqat | BSFT, NUCES FAST Islamabad

## License

MIT
