# Methodology: Raast Adoption Gap Tracker

Updated November 2026 with SBP FY26 data and new sources.

## Data sources

### Primary source
**State Bank of Pakistan, Annual Payment Systems Review FY 2025-26 (provisional figures)** [1]
- Listed on the SBP website as "Annual Payment Systems Review of FY26", 6 October 2026
- URL: https://www.sbp.org.pk/assets/document/publications/Annual-Payment-Systems-Review-FY26.pdf
- Coverage: July 2025 to June 2026 (FY26), with revised FY25 columns and earlier years in Annexure A
- Pages used: 7, 8, 9, 10, 11, 15, 21, 24, 26, 31 (printed page numbers)

FY25 comparisons are taken from the revised FY25 columns of the FY26 review, so both years
use the same series.
The FY26 review's POS device series includes Soft POS.

### Other sources
The dashboard's Sources section lists every source with its publisher, link and label:
World Bank Global Findex 2025 [2]; the Karandaaz Financial Inclusion Survey 2024 narrative
report [3]; the SBP circular that allocated the Raast QR subsidy [4]; Government of India releases on UPI [5, 6]; a press report on India's zero MDR
decision [7]; the Reserve Bank of India release on UPI123Pay [8]; a press report on Safaricom's
FY26 M-Pesa results [9]; the SBP release on Raast's launch [10]; a study of M-Pesa and its agent network in Kenya [11]; a Business Recorder report on continuing the Raast QR subsidy [12]; and four works of theory [13 to 16].

## Extraction process

- Text extracted with `pdftotext -layout` from the SBP PDF.
- Every value checked by hand against the printed page recorded in `data/sbp-fy26.json`.
- Extraction date: 17 November 2026.

## Adoption Gap Index (author's calculation)

### Formula
Raast P2P payments in FY26 / Raast P2P IDs registered at end June 2026

- Numerator: 2,537.2 million P2P payments (Table A-15, p. 31)
- Denominator: 49.2 million Raast P2P IDs (p. 11)
- Result: 51.6 payments per ID per year, about 4.3 a month

### Why this denominator
The FY26 review prints the number of registered Raast P2P IDs. It is a closer match to the
people who can use Raast than mobile banking users, the denominator used in the FY25 edition.

### FY25 edition basis, for comparison
Raast P2P payments / mobile banking users:
- FY25: 1,266.0 / 24.1 = 52.5
- FY26: 2,537.2 / 30.4 = 83.5

## Known limitations

1. FY26 figures are provisional.
2. SBP does not publish active Raast users. The index averages across all registered IDs.
3. No district level Raast data.
4. User categories overlap.
5. POS devices now include Soft POS, so FY25 and FY26 are not comparable with FY24.
6. Years differ across countries.
7. Karandaaz survey figures come from the K-FIS 2024 narrative report. The 46% (women) and 82% (men) figures are cited as mobile phone ownership (p. 28); the report prints identical figures for smartphone ownership (p. 29).

## Assumptions

- All monetary values in Pakistani rupees.
- User counts are registered accounts or IDs, not unique people.
- Growth rates are year on year unless stated.

## Version log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-21 | Initial extraction from SBP FY25 Annual Review |
| 2.2 | 2026-11-18 | FY25 edition restored at ?edition=fy25 with revised FY25 values; Progress from FY25 to FY26 view added |
| 2.1 | 2026-11-17 | K-FIS 2024 narrative report cited directly; Raast QR subsidy dates and continuation added |
| 2.0 | 2026-11-17 | Moved to SBP FY26 review; Findex 2025; new index denominator (Raast IDs); numbered sources on every figure |

## Sources

1. State Bank of Pakistan. *Annual Payment Systems Review FY 2025-26*. https://www.sbp.org.pk/assets/document/publications/Annual-Payment-Systems-Review-FY26.pdf. Primary.
2. World Bank. *The Global Findex Database 2025: Connectivity and Financial Inclusion in the Digital Economy*. https://www.worldbank.org/en/publication/globalfindex. Primary.
3. Karandaaz Pakistan. *Karandaaz Financial Inclusion Survey (K-FIS): Narrative Report*. https://www.karandaaz.com.pk/research/publications/karandaaz-financial-inclusion-survey-k-fis-narrative-report. Primary.
4. State Bank of Pakistan. *PSP&OD Circular No. 03 of 2025: Allocation of Subsidy for Raast Person to Merchant (P2M) QR Payments*. https://www.sbp.org.pk/circulars/pspod-circular-no-03-of-2025. Primary.
5. Government of India, Ministry of Finance (Press Information Bureau). *Nearly 55.49 Crore Users Onboarded on UPI as in June 2026*. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286608&reg=48&lang=2. Primary.
6. Government of India, Ministry of Finance (Press Information Bureau). *UPI Completes 10 Years of Digital Payments Revolution*. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2302657&reg=48&lang=2. Primary.
7. Outlook Business. *No MDR charges from Jan 1 on UPI, RuPay transactions*. https://www.outlookbusiness.com/talking-money/no-mdr-charges-from-jan-1-on-upi-rupay-transactions-4103. Secondary.
8. Reserve Bank of India. *Reserve Bank of India launches UPI for feature phones (UPI123Pay) and a 24x7 helpline for digital payments (DigiSaathi)*. https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=53385. Primary.
9. Tech-ish. *Safaricom FY26: M-PESA Hits KES 183 Billion, Now 45.6% of Revenue*. https://tech-ish.com/2026/05/07/safaricom-fy26-mpesa-results-explained/. Secondary.
10. State Bank of Pakistan. *PM launches Raast, Pakistan's instant payment system (press release on the first phase, bulk payments)*. https://archive.sbp.org.pk/press/2021/Pr-11-Jan-21.pdf. Primary.
11. Jack, W. and Suri, T., American Economic Review 104(1). *Risk Sharing and Transactions Costs: Evidence from Kenya's Mobile Money Revolution*. https://www.aeaweb.org/articles?id=10.1257/aer.104.1.183. Secondary.
12. Business Recorder. *Govt moves to continue subsidy for Raast QR payments*. https://www.brecorder.com/news/40448745/govt-moves-to-continue-subsidy-for-raast-qr-payments. Secondary.
13. Davis, F. D., MIS Quarterly 13(3). *Perceived usefulness, perceived ease of use, and user acceptance of information technology*. https://doi.org/10.2307/249008. Secondary.
14. Rogers, E. M., Free Press. *Diffusion of Innovations, 5th edition*. https://openlibrary.org/books/OL15577453M/Diffusion_of_innovations. Secondary.
15. Kahneman, D. and Tversky, A., Econometrica 47(2). *Prospect theory: an analysis of decision under risk*. https://doi.org/10.2307/1914185. Secondary.
16. Zucker, L. G., Institute of Industrial Relations, University of California, Berkeley. *Production of trust: institutional sources of economic structure, 1840 to 1920 (working paper version of the chapter in Research in Organizational Behavior 8)*. https://digitalassets.lib.berkeley.edu/irle/ucb/text/irla0277.pdf. Secondary.
