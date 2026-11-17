# Methodology: Raast Adoption Gap Tracker

Last updated: November 2026 (data version 2.0).

## Data sources

### Primary source
**State Bank of Pakistan, Annual Payment Systems Review FY 2025-26 (provisional figures)** [1]
- Listed on the SBP website as "Annual Payment Systems Review of FY26", 6 October 2026
- URL: https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY26.pdf
- Coverage: July 2025 to June 2026 (FY26), with revised FY25 columns and earlier years in Annexure A
- Pages used: 7, 8, 9, 10, 11, 15, 21, 24, 26, 31 (printed page numbers)

FY25 comparisons are taken from the revised FY25 columns of the FY26 review, so both years
use the same series. Some FY25 values changed on revision: ATMs 20,341 became 20,250; POS
devices 195,849 became 227,388 (Soft POS now included); QR merchants are 1,092,044 (version 1.0
had a typo, 1,092,004).

### Other sources
The dashboard's Sources section lists all sources with dates, links and access dates:
World Bank Global Findex 2025 [2]; the Karandaaz Financial Inclusion Survey 2024 narrative
report [3]; the SBP Governor's Annual Report 2025-26 on the Raast QR subsidy [4]; Government of India releases on UPI [5, 6]; a press report on India's zero MDR
decision [7]; the Reserve Bank of India release on UPI123Pay [8]; a press report on Safaricom's
FY26 M-Pesa results [9]; the SBP release on Raast's launch [10]; Central Bank of Kenya reports
index [11]; a Business Recorder report on continuing the Raast QR subsidy [12].

## Extraction process

- Text extracted with `pdftotext -layout` from the SBP PDF.
- Every value checked by hand against the printed page recorded in `data/sbp-fy26.json`.
- Extraction date: 17 November 2026.

## Adoption Gap Index (author's calculation)

### Formula, version 2.0
Raast P2P payments in FY26 / Raast P2P IDs registered at end June 2026

- Numerator: 2,537.2 million P2P payments (Table A-15, p. 31)
- Denominator: 49.2 million Raast P2P IDs (p. 11)
- Result: 51.6 payments per ID per year, about 4.3 a month

### Why this denominator
The FY26 review prints the number of registered Raast P2P IDs. Version 1.0 named this
"Option C" and could not use it because the figure was not available. It is a closer match
to the people who can use Raast than mobile banking users (Option B, used in version 1.0).

### Old basis, for comparison
Raast P2P payments / mobile banking users:
- FY25: 1,266.0 / 24.1 = 52.5
- FY26: 2,537.2 / 30.4 = 83.5

### Corrections to version 1.0
1. Version 1.0 used 1,276.0 million as "Raast P2P transactions". That is total Raast
   transactions (bulk, P2P and P2M). P2P alone was 1,266.0 million. The FY25 index on the
   old basis is therefore 52.5, not 52.9.
2. The formula was written with "x 100", which was never applied. It is removed.
3. The ATM cash withdrawal share was shown as a flat 98% for FY22 to FY25. Calculated from
   Table A-5 (p. 26) it is 96.9%, 97.2%, 97.5%, 97.6% and 97.6% for FY22 to FY26.
4. The "54 million deposit accounts below PKR 5,000" statement and the "40% of GDP informal"
   statement had no source and were removed.
5. India's zero MDR was described as "below Rs 2,000 in 2019". The announcement made UPI and
   RuPay payments free of MDR from 1 January 2020, with no size threshold mentioned [7].

## Known limitations

1. FY26 figures are provisional.
2. SBP does not publish active Raast users. The index averages across all registered IDs.
3. No district level Raast data.
4. User categories overlap.
5. POS devices now include Soft POS, so FY25 and FY26 are not comparable with FY24.
6. Years differ across countries.
7. Karandaaz survey figures come from the K-FIS 2024 narrative report. The first November update used press reports; their trust figures (9%, 8%, 36%) are not in the report and were withdrawn, and the 46% (women) and 82% (men) figures are cited as mobile phone ownership (p. 28); the report prints identical figures for smartphone ownership (p. 29), so the smartphone version is probably a repeat.

## Assumptions

- All monetary values in Pakistani rupees.
- User counts are registered accounts or IDs, not unique people.
- Growth rates are year on year unless stated.

## Version log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-21 | Initial extraction from SBP FY25 Annual Review |
| 2.2 | 2026-11-18 | FY25 edition restored at ?edition=fy25 with revised FY25 values; Progress from FY25 to FY26 view added |
| 2.1 | 2026-11-17 | K-FIS narrative report replaces press reports; trust figures corrected; Raast QR subsidy dates and continuation added |
| 2.0 | 2026-11-17 | Moved to SBP FY26 review; Findex 2025; new index denominator (Raast IDs); corrections listed above; numbered sources on every figure |

## Sources

1. State Bank of Pakistan. *Annual Payment Systems Review FY 2025-26* (provisional). October 2026. https://www.sbp.org.pk/PS/PDF/Annual-Payment-Systems-Review-FY26.pdf. Accessed 17 November 2026.
2. World Bank. *The Global Findex Database 2025*. 2025. https://www.worldbank.org/en/publication/globalfindex. Accessed 17 November 2026.
3. Karandaaz Pakistan (Semiotics Consultants). *Karandaaz Financial Inclusion Survey (K-FIS), Narrative Report*, survey year 2024. April 2025. pp. 7, 11, 25, 27, 29, 30. Local PDF supplied by the owner; https://www.karandaaz.com.pk/research/publications/karandaaz-financial-inclusion-survey-k-fis-narrative-report (link not opened). Accessed 17 November 2026. Primary.
4. State Bank of Pakistan. *Governor's Annual Report 2025-26*, pp. 21 and 58. Local copy supplied by the owner; no public link confirmed. Accessed 17 November 2026. Primary.
5. Government of India, Ministry of Finance, via PIB. *Nearly 55.49 crore users onboarded on UPI as in June 2026*. 20 July 2026. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286608&reg=48&lang=2. Accessed 17 November 2026.
6. Government of India, Ministry of Finance, via PIB. *UPI completes 10 years of digital payments revolution*. 24 August 2026. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2302657&reg=48&lang=2. Accessed 17 November 2026.
7. Outlook Business. *No MDR charges from Jan 1 on UPI, RuPay transactions*. 28 December 2019. https://www.outlookbusiness.com/talking-money/no-mdr-charges-from-jan-1-on-upi-rupay-transactions-4103. Accessed 17 November 2026. Secondary.
8. Reserve Bank of India. *UPI for feature phones (UPI123Pay) and DigiSaathi helpline*. 8 March 2022. https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=53385. Accessed 16 November 2026.
9. Tech-ish. *Safaricom FY26 M-PESA results explained*. 7 May 2026. https://tech-ish.com/2026/05/07/safaricom-fy26-mpesa-results-explained/. Accessed 17 November 2026. Secondary.
10. State Bank of Pakistan. *Press release on the launch of Raast's first phase*. 11 January 2021. https://www.sbp.org.pk/press/2021/Pr-11-Jan-21.pdf. Accessed 17 November 2026.
11. Central Bank of Kenya. *Annual reports index*. https://www.centralbank.go.ke/reports/cbk-annual-reports/. Not re-read in November 2026.
12. Business Recorder. *Govt moves to continue subsidy for Raast QR payments*. 13 November 2026. https://www.brecorder.com/news/40448745/govt-moves-to-continue-subsidy-for-raast-qr-payments. Accessed 17 November 2026. Secondary.
