// Single source registry. Every figure on the page points to one of these ids
// through the <Src> marker. The Sources section renders this list in order.
// Each entry shows only its name, publisher, link and label.
// label: Primary = the issuing body's own document or data;
// Secondary = reporting or analysis about it.
export const SOURCES = [
  {
    id: 'R1',
    publisher: 'State Bank of Pakistan',
    title: 'Annual Payment Systems Review FY 2025-26',
    url: 'https://www.sbp.org.pk/assets/document/publications/Annual-Payment-Systems-Review-FY26.pdf',
    label: 'Primary',
  },
  {
    id: 'R2',
    publisher: 'World Bank',
    title: 'The Global Findex Database 2025: Connectivity and Financial Inclusion in the Digital Economy',
    url: 'https://www.worldbank.org/en/publication/globalfindex',
    label: 'Primary',
  },
  {
    id: 'R3',
    publisher: 'Karandaaz Pakistan',
    title: 'Karandaaz Financial Inclusion Survey (K-FIS): Narrative Report',
    url: 'https://www.karandaaz.com.pk/research/publications/karandaaz-financial-inclusion-survey-k-fis-narrative-report',
    label: 'Primary',
  },
  {
    id: 'R4',
    publisher: 'State Bank of Pakistan',
    title: 'PSP&OD Circular No. 03 of 2025: Allocation of Subsidy for Raast Person to Merchant (P2M) QR Payments',
    url: 'https://www.sbp.org.pk/circulars/pspod-circular-no-03-of-2025',
    label: 'Primary',
  },
  {
    id: 'R5',
    publisher: 'Government of India, Ministry of Finance (Press Information Bureau)',
    title: 'Nearly 55.49 Crore Users Onboarded on UPI as in June 2026',
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286608&reg=48&lang=2',
    label: 'Primary',
  },
  {
    id: 'R6',
    publisher: 'Government of India, Ministry of Finance (Press Information Bureau)',
    title: 'UPI Completes 10 Years of Digital Payments Revolution',
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2302657&reg=48&lang=2',
    label: 'Primary',
  },
  {
    id: 'R7',
    publisher: 'Outlook Business',
    title: 'No MDR charges from Jan 1 on UPI, RuPay transactions',
    url: 'https://www.outlookbusiness.com/talking-money/no-mdr-charges-from-jan-1-on-upi-rupay-transactions-4103',
    label: 'Secondary',
  },
  {
    id: 'R8',
    publisher: 'Reserve Bank of India',
    title: 'Reserve Bank of India launches UPI for feature phones (UPI123Pay) and a 24x7 helpline for digital payments (DigiSaathi)',
    url: 'https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=53385',
    label: 'Primary',
  },
  {
    id: 'R9',
    publisher: 'Tech-ish',
    title: 'Safaricom FY26: M-PESA Hits KES 183 Billion, Now 45.6% of Revenue',
    url: 'https://tech-ish.com/2026/05/07/safaricom-fy26-mpesa-results-explained/',
    label: 'Secondary',
  },
  {
    id: 'R10',
    publisher: 'State Bank of Pakistan',
    title: "PM launches Raast, Pakistan's instant payment system (press release on the first phase, bulk payments)",
    url: 'https://archive.sbp.org.pk/press/2021/Pr-11-Jan-21.pdf',
    label: 'Primary',
  },
  {
    id: 'R11',
    publisher: 'Jack, W. and Suri, T., American Economic Review 104(1)',
    title: "Risk Sharing and Transactions Costs: Evidence from Kenya's Mobile Money Revolution",
    url: 'https://www.aeaweb.org/articles?id=10.1257/aer.104.1.183',
    label: 'Secondary',
  },
  {
    id: 'R12',
    publisher: 'Business Recorder',
    title: 'Govt moves to continue subsidy for Raast QR payments',
    url: 'https://www.brecorder.com/news/40448745/govt-moves-to-continue-subsidy-for-raast-qr-payments',
    label: 'Secondary',
  },
  {
    id: 'R13',
    publisher: 'Davis, F. D., MIS Quarterly 13(3)',
    title: 'Perceived usefulness, perceived ease of use, and user acceptance of information technology',
    url: 'https://doi.org/10.2307/249008',
    label: 'Secondary',
  },
  {
    id: 'R14',
    publisher: 'Rogers, E. M., Free Press',
    title: 'Diffusion of Innovations, 5th edition',
    url: 'https://openlibrary.org/books/OL15577453M/Diffusion_of_innovations',
    label: 'Secondary',
  },
  {
    id: 'R15',
    publisher: 'Kahneman, D. and Tversky, A., Econometrica 47(2)',
    title: 'Prospect theory: an analysis of decision under risk',
    url: 'https://doi.org/10.2307/1914185',
    label: 'Secondary',
  },
  {
    id: 'R16',
    publisher: 'Zucker, L. G., Institute of Industrial Relations, University of California, Berkeley',
    title: 'Production of trust: institutional sources of economic structure, 1840 to 1920 (working paper version of the chapter in Research in Organizational Behavior 8)',
    url: 'https://digitalassets.lib.berkeley.edu/irle/ucb/text/irla0277.pdf',
    label: 'Secondary',
  },
]

export const SOURCE_INDEX = Object.fromEntries(SOURCES.map((s, i) => [s.id, i + 1]))
