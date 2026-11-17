# Raast Adoption Gap Tracker

A single page dashboard on the distance between Pakistan's digital payment
rail and the people who actually use it.

**Live demo**: [raast-tracker](https://fawad-liaqat.github.io/raast-tracker/)

Last updated: November 2026 (data version 2.0, SBP FY26 provisional figures).

## The core question

Raast moved 2,755.2 million transactions in FY26 (July 2025 to June 2026),
up from 1,276.0 million in FY25 [1, p. 31]. Digital channels carried 92% of
retail payments by count but 38% by value [1, p. 7]. Yet only 27% of
Pakistani adults had an account in the latest Findex survey [2, p. 298].
The tracker argues access comes first: most adults are not on the rail, and
most of those who are already pay digitally [2, p. 167].

## What it shows

| Block                 | Content                                         | Metric                  |
| --------------------- | ----------------------------------------------- | ----------------------- |
| Infrastructure growth | Raast volume and value, FY23 to FY26            | Dual axis line          |
| Acceptance density    | ATMs, CDMs, POS devices, QR merchants, FY25, FY26 | Bar chart               |
| Counter narrative     | Share of ATM transactions that are withdrawals  | Calculated share        |
| Adoption gap index    | Raast P2P payments per registered Raast ID      | Calculated (author)     |

## Data

- `data/sbp-fy26.json`: current dataset (version 2.0). Every value has a page reference.
- `data/sbp-fy25.json`: the March 2026 dataset (version 1.0), kept unchanged for the record.

See [METHODOLOGY.md](./METHODOLOGY.md) for formulas, corrections and limitations.

## Sources

1. State Bank of Pakistan. *Annual Payment Systems Review FY 2025-26* (provisional). October 2026. https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY26.pdf. Accessed 17 November 2026. Primary.
2. World Bank. *The Global Findex Database 2025* (survey year 2024). 2025. https://www.worldbank.org/en/publication/globalfindex. Accessed 17 November 2026. Primary.

The dashboard's Sources section lists all twelve sources used on the page, including the Karandaaz Financial Inclusion Survey 2024 narrative report.

## Run locally

From the repository folder, in a normal (non administrator) terminal:

```bash
npm ci
npm run dev
```

## Tech stack

React (Vite) and Recharts. Deployed on GitHub Pages.

## Author

Fawad Liaqat. Feedback and other readings of the data are welcome.

## License

MIT
