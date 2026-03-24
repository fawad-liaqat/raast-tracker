# Methodology: Raast Adoption Gap Tracker

## Data Sources

### Primary Source
**SBP Annual Payment Systems Review FY25**
- Published: 3 November 2025
- URL: https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY25.pdf
- Coverage: July 2024 to June 2025 (FY25)

### Supplementary Sources
- SBP Quarterly Payment Systems Reviews Q2 and Q3 FY25
- SBP Governor's Annual Report FY25
- SBP Press Release PR-03-Nov-2025 (cross-verification)

## Extraction Process

- Tables extracted using Camelot 0.11.0 (lattice mode for bordered tables, stream mode for borderless)
- Chart-embedded data read manually from chart axes
- Every value cross-verified against at least two SBP documents
- Full verification log: `extraction/verification/verification-checklist.csv`
- Extraction date: March 2026

## Adoption Gap Index

### Formula
(Total Raast P2P Transactions FY25 / Total Registered Digital Accounts) x 100

### Numerator
1,276.0 million Raast P2P transactions (FY25)

### Denominator
Mobile banking app users: 24.1 million (Option B)

**Why Option B**: Mobile banking app users are the primary Raast-enabled account base. This is the most defensible denominator because:
1. These accounts are directly connected to Raast infrastructure
2. Option A (109.1M combining mobile banking + BB + e-wallet users) has significant overlap between categories
3. Option C (total Raast registered IDs) is ideal but not separately reported in the SBP FY25 Review

### Result
52.9 transactions per account per year (approximately 4.4 per month)

### Interpretation
This means the average mobile banking user executes roughly one Raast P2P transaction per week. However, this is an average across all registered users, including dormant accounts. Active user transaction frequency is likely much higher, while a large proportion of registered users may never transact via Raast.

## Known Limitations

1. **No geographic granularity**: SBP does not publish district-level Raast usage data. Urban vs rural POS terminal distribution is used as a proxy for acceptance density.

2. **No unique transacting account data**: The SBP does not report how many unique accounts initiated Raast transactions. The Adoption Gap Index uses total registered accounts, which overstates the active user base.

3. **Volume vs value distinction**: Digital channels carry 88% of retail transactions by volume but only 29% by value (Q2 FY25). The dashboard primarily presents volume metrics. This distinction is noted in chart annotations.

4. **Category overlap in user counts**: Mobile banking users, BB mobile app users, and e-wallet users are not mutually exclusive categories. A single person may hold accounts across multiple categories.

5. **ATM cash withdrawal percentage**: The 98% figure represents the proportion of ATM transactions that are cash withdrawals. It does not mean 98% of all transactions are cash-based.

## Assumptions

- FY25 figures are full-year annual totals (July 2024 to June 2025)
- All monetary values are in Pakistani Rupees (PKR)
- User counts represent registered accounts, not unique individuals
- Growth rates are year-over-year unless otherwise stated

## Version Log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-21 | Initial data extraction from SBP FY25 Annual Review |
