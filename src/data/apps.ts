export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type AppPage = {
  slug: string;
  id: number;
  name: string;
  shortName: string;
  subtitle: string;
  category: string;
  appStoreUrl: string;
  icon: string;
  accent: string;
  accentSoft: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: string;
  eyebrow: string;
  headline: string;
  lede: string;
  problemTitle: string;
  problem: string[];
  solutionTitle: string;
  solution: string[];
  features: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  audiences: string[];
  screenshots: Screenshot[];
  faqs: FAQ[];
  pricingSummary: string;
  offerPrice: number;
  offerCurrency: string;
  operatingSystem: string;
  version: string;
  updated: string;
  supportUrl: string;
  privacyUrl: string;
  relatedSlug: string;
  relatedName: string;
  relatedSummary: string;
  futureTopics: { slug: string; title: string; intent: string }[];
};

export const apps: AppPage[] = [
  {
    slug: 'glassledger',
    id: 6754355803,
    name: 'GlassLedger: Bill Organizer',
    shortName: 'GlassLedger',
    subtitle: 'Paycheck Planner & Money Left',
    category: 'Finance',
    appStoreUrl: 'https://apps.apple.com/us/app/glassledger-bill-organizer/id6754355803',
    icon: '/assets/apps/glassledger.jpg',
    accent: '#70b8ff',
    accentSoft: 'rgba(68, 149, 231, .16)',
    seoTitle: 'GlassLedger: Budget by Paycheck App for iPhone',
    metaDescription: 'Plan bills around each paycheck, compare planned and actual payments, and see what is left without linking a bank. Try GlassLedger free on iPhone.',
    primaryKeyword: 'budget by paycheck app',
    secondaryKeywords: [
      'paycheck budget app',
      'paycheck budget planner',
      'biweekly budget app',
      'bill organizer app for iPhone',
      'budget app without bank linking',
      'manual budget app',
      'budget app no subscription',
      'budget app one-time purchase',
      'money left after bills',
    ],
    intent: 'Find an iPhone app for planning bills around individual paychecks, especially biweekly pay, and seeing what remains without connecting a financial account.',
    eyebrow: 'Budget by paycheck on iPhone',
    headline: 'Plan every paycheck, bill, and what’s left.',
    lede: 'GlassLedger is a private, manual bill organizer and paycheck planner for iPhone. Add income and monthly bills, decide which paycheck covers each one, and see the amount left before payday—without connecting a bank.',
    problemTitle: 'Bills rarely arrive on the same schedule as paychecks.',
    problem: [
      'A monthly total can look manageable while the timing still feels unclear. Bills land on different due dates, paychecks arrive on their own cadence, and one missing payment can make the whole month harder to read.',
      'Many budgeting tools begin with a bank connection or a full transaction system. If you only need a clear manual plan, that can be more setup—and more access—than the job requires.',
    ],
    solutionTitle: 'A monthly ledger built around the way money arrives.',
    solution: [
      'GlassLedger keeps the plan focused: enter your paychecks, enter your bills, and assign each bill to the deposit that should cover it. The monthly view shows planned income, planned bill totals, and planned money left.',
      'As the month moves forward, mark bills paid or unpaid and record partial payments. Switch from Planned to Actual to compare the plan with what you have recorded so far.',
    ],
    features: [
      { title: 'Plan bills by paycheck', description: 'Add paycheck dates and bill due days, then assign each bill to the paycheck intended to cover it.' },
      { title: 'See planned and actual money left', description: 'Compare planned bill totals with recorded payments and view the remaining amount at a glance.' },
      { title: 'Track paid, unpaid, and partial bills', description: 'Keep each month current without importing bank transactions.' },
      { title: 'Carry recurring bills forward', description: 'Bring planned recurring details into the next monthly ledger while paid amounts reset.' },
      { title: 'Keep monthly history', description: 'Move between monthly ledgers instead of losing the context behind earlier plans.' },
      { title: 'Export and restore a backup', description: 'Create or restore a JSON backup when you choose.' },
    ],
    steps: [
      { title: 'Enter income', description: 'Add your paycheck amounts and dates for the month.' },
      { title: 'Add monthly bills', description: 'Record each bill, its planned amount, due day, and whether it repeats.' },
      { title: 'Assign coverage', description: 'Choose which paycheck should cover each bill and review what remains after the assignment.' },
      { title: 'Update the month', description: 'Mark payments, record partial amounts, and compare Planned with Actual.' },
    ],
    audiences: [
      'People paid weekly, biweekly, semimonthly, or on another predictable schedule',
      'Anyone who wants a manual bill planner without a bank connection',
      'Households that want to decide which paycheck covers each monthly bill',
      'People who want a focused bill ledger rather than a full accounting system',
    ],
    screenshots: [
      { src: '/assets/screenshots/glassledger/03-paycheck-coverage.webp', alt: 'GlassLedger monthly ledger assigning bills to two paychecks and showing planned money left', width: 600, height: 1298 },
      { src: '/assets/screenshots/glassledger/06-money-left.webp', alt: 'GlassLedger showing planned income, planned bills, and money left before payday', width: 600, height: 1298 },
      { src: '/assets/screenshots/glassledger/01-bill-tracker.webp', alt: 'GlassLedger bill list with paid, partial, and upcoming payment statuses', width: 600, height: 1298 },
      { src: '/assets/screenshots/glassledger/02-planned-vs-actual.webp', alt: 'GlassLedger Planned and Actual controls comparing the plan with recorded payments', width: 600, height: 1298 },
      { src: '/assets/screenshots/glassledger/05-private-by-design.webp', alt: 'GlassLedger privacy screen explaining no bank connection, local storage, and optional backups', width: 600, height: 1298 },
    ],
    faqs: [
      { question: 'Does GlassLedger connect to my bank?', answer: 'No. GlassLedger is designed for manually entered paycheck and bill information. It does not connect to financial institutions, import bank transactions, or move money.' },
      { question: 'Can I organize bills by paycheck?', answer: 'Yes. Add paycheck dates and bills, assign each bill to a paycheck, and view the amount remaining after that paycheck’s assigned bills.' },
      { question: 'Can I track partial bill payments?', answer: 'Yes. GlassLedger lets you mark bills paid or unpaid and record partial payments, then compare planned totals with recorded payments.' },
      { question: 'How much of GlassLedger is free?', answer: 'You can add up to five bills to each month for free. A one-time GlassLedger Lifetime Access purchase removes the bill limit. There is no subscription.' },
      { question: 'Where is my ledger stored?', answer: 'Bill names, amounts, paycheck details, and month history are stored in the app’s local storage. You can export or restore a JSON backup when you choose.' },
      { question: 'Is GlassLedger a bank or payment app?', answer: 'No. It is a planning tool for information you enter manually. It does not pay bills or transfer money.' },
    ],
    pricingSummary: 'Free for up to five bills per month; $7.99 one-time lifetime unlock for bill six and beyond. No subscription.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS 17.0 or later',
    version: '2.0',
    updated: '2026-08-08',
    supportUrl: '/privacy-policy#support',
    privacyUrl: '/privacy-policy',
    relatedSlug: 'alchemy-pocketlab',
    relatedName: 'Alchemy PocketLab',
    relatedSummary: 'Prefer a playful break? Mix ingredients and fill a magical grimoire in a cozy alchemy puzzle game.',
    futureTopics: [
      { slug: 'how-to-budget-by-paycheck', title: 'How to Budget by Paycheck: A Simple Bill-Planning Method', intent: 'Educational / workflow' },
      { slug: 'biweekly-paycheck-budget', title: 'How to Budget Monthly Bills With Biweekly Paychecks', intent: 'Long-tail problem solving' },
      { slug: 'budget-app-without-bank-linking', title: 'How to Choose a Budget App Without Linking Your Bank Account', intent: 'Discovery / privacy' },
      { slug: 'money-left-after-bills-calculator', title: 'Money Left After Bills: What Is Available Until Payday?', intent: 'Utility / informational' },
    ],
  },
  {
    slug: 'alchemy-pocketlab',
    id: 6794703569,
    name: 'Alchemy PocketLab',
    shortName: 'Alchemy PocketLab',
    subtitle: 'Cozy Element Discovery',
    category: 'Games',
    appStoreUrl: 'https://apps.apple.com/us/app/alchemy-pocketlab/id6794703569',
    icon: '/assets/apps/alchemy-pocketlab.jpg',
    accent: '#d7ad62',
    accentSoft: 'rgba(186, 104, 232, .15)',
    seoTitle: 'Alchemy PocketLab: Cozy Alchemy Game for iPhone',
    metaDescription: 'Combine elements, discover 50 handcrafted recipes, help a ghost apprentice, and fill your grimoire in a cozy iPhone puzzle game with no timers or lives.',
    primaryKeyword: 'alchemy game for iPhone',
    secondaryKeywords: [
      'alchemy puzzle game',
      'element combining game',
      'element mixing game',
      'cozy puzzle games iPhone',
      'relaxing puzzle games iPhone',
      'alchemy game no ads',
      'puzzle games no ads iPhone',
      'no-timer puzzle game iPhone',
      'one-handed iPhone games',
    ],
    intent: 'Discover a relaxing iPhone puzzle game centered on combining elements, finding recipes, and completing a finite illustrated collection.',
    eyebrow: 'Cozy alchemy game for iPhone',
    headline: 'A cozy element-combining puzzle for iPhone.',
    lede: 'Alchemy PocketLab is a cozy alchemy puzzle game for iPhone. Combine Fire, Water, Earth, and Air into 50 handcrafted discoveries, help a ghost apprentice named Wisp, and fill an illustrated magical grimoire at your own pace.',
    problemTitle: 'Sometimes a puzzle game should invite curiosity—not urgency.',
    problem: [
      'Timers, lives, streaks, and constant pressure can turn a quick game into another obligation. Element-combining puzzles work best when the reward is the discovery itself: trying an idea, seeing the reaction, and adding something unexpected to a growing collection.',
      'Alchemy PocketLab keeps that loop compact and approachable, with handcrafted recipes and a clear end to the collection rather than an endless stream of generated combinations.',
    ],
    solutionTitle: 'A tiny magical laboratory built for playful experiments.',
    solution: [
      'Begin with four familiar ingredients. Drag or tap any two into the cauldron, watch the reaction, and learn whether your experiment created something new—from Steam and Witch Glass to stranger results.',
      'Each discovery enters the grimoire. Wisp’s requests give the collection a light story, while hints help when you want a nudge. There are no timers, streaks, or lives to manage.',
    ],
    features: [
      { title: '50 handcrafted elements', description: 'Discover a finite collection of logical, funny recipes rather than an endless generated list.' },
      { title: 'Simple element combining', description: 'Drag or tap two ingredients into the cauldron and watch the result.' },
      { title: 'Ten Wisp requests', description: 'Help a mischievous ghost apprentice with short story-driven requests as your collection grows.' },
      { title: 'Illustrated grimoire', description: 'Every discovery adds a named, illustrated entry with its own description.' },
      { title: 'Helpful hints', description: 'Follow a clue when you want direction without giving up the discovery loop.' },
      { title: 'No timers or lives', description: 'Play at your own pace in short, one-handed sessions.' },
    ],
    steps: [
      { title: 'Choose two ingredients', description: 'Start with Fire, Water, Earth, and Air, then use every new discovery in later experiments.' },
      { title: 'Mix them in the cauldron', description: 'Drag or tap the pair and watch the laboratory react.' },
      { title: 'Record the discovery', description: 'Open the illustrated grimoire to revisit every ingredient you have made.' },
      { title: 'Help Wisp', description: 'Complete requests, follow hints, and work toward all 50 discoveries.' },
    ],
    audiences: [
      'Players who enjoy alchemy and element-combining puzzle games',
      'People looking for a cozy iPhone game without timers, streaks, or lives',
      'Completionists who enjoy filling a finite illustrated collection',
      'Players who want short, one-handed sessions with a light story',
    ],
    screenshots: [
      { src: '/assets/screenshots/alchemy-pocketlab/03-mix-magic.webp', alt: 'Alchemy PocketLab cauldron screen for combining Fire, Water, Earth, Air, and other ingredients', width: 600, height: 1298 },
      { src: '/assets/screenshots/alchemy-pocketlab/01-meet-wisp.webp', alt: 'Wisp the ghost apprentice welcoming the player to Alchemy PocketLab', width: 600, height: 1298 },
      { src: '/assets/screenshots/alchemy-pocketlab/02-fill-your-grimoire.webp', alt: 'Alchemy PocketLab illustrated grimoire filled with discovered magical elements', width: 600, height: 1298 },
      { src: '/assets/screenshots/alchemy-pocketlab/04-explore-gloomwood.webp', alt: 'Alchemy PocketLab Gloomwood Garden chapter with a cauldron and ingredient tray', width: 600, height: 1298 },
      { src: '/assets/screenshots/alchemy-pocketlab/05-unlock-forever.webp', alt: 'Alchemy PocketLab one-time Gloomwood Garden unlock showing 25 more discoveries and five Wisp requests', width: 600, height: 1298 },
    ],
    faqs: [
      { question: 'What kind of game is Alchemy PocketLab?', answer: 'It is a casual alchemy puzzle game for iPhone. You combine two ingredients to discover new handcrafted elements, complete Wisp’s requests, and fill an illustrated grimoire.' },
      { question: 'How many elements can I discover?', answer: 'The complete game contains 50 handcrafted discoveries. The free first chapter includes 25 discoveries.' },
      { question: 'Does the game have timers, lives, or streaks?', answer: 'No. Alchemy PocketLab is designed for relaxed play with no timers, streaks, or lives.' },
      { question: 'Is Alchemy PocketLab free?', answer: 'The Dusty Beginning is free and includes 25 discoveries and five Wisp requests. A $4.99 one-time purchase unlocks Gloomwood Garden, 25 more discoveries, five more requests, and the complete grimoire.' },
      { question: 'Is there a subscription?', answer: 'No. The optional Gloomwood Garden unlock is a one-time purchase. The App Store listing states there is no recurring subscription.' },
      { question: 'Does Alchemy PocketLab require an account?', answer: 'No account system is described on the App Store listing. Discovery and request progress is stored locally on your device.' },
    ],
    pricingSummary: 'The first chapter is free; $4.99 one-time purchase unlocks Gloomwood Garden and the complete 50-item grimoire. No subscription.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS 17.0 or later',
    version: '1.0',
    updated: '2026-08-05',
    supportUrl: '/pocket-lab-support.html',
    privacyUrl: '/pocket-lab-privacy.html',
    relatedSlug: 'glassledger',
    relatedName: 'GlassLedger',
    relatedSummary: 'Looking for a practical tool instead? Organize monthly bills around the paychecks that cover them.',
    futureTopics: [
      { slug: 'games-like-little-alchemy-iphone', title: 'Games Like Little Alchemy for iPhone: Cozy Element-Combining Alternatives', intent: 'Fair comparison / discovery' },
      { slug: 'puzzle-games-without-ads-or-timers', title: 'Relaxing iPhone Puzzle Games Without Ads, Lives, or Timers', intent: 'Long-tail discovery' },
      { slug: 'one-handed-puzzle-games-iphone', title: 'One-Handed Puzzle Games for Short iPhone Sessions', intent: 'Use-case discovery' },
      { slug: 'hints-element-combinations', title: 'Alchemy PocketLab Hints and Element Combinations', intent: 'Branded informational' },
    ],
  },
  {
    slug: 'perkpocket',
    id: 6799532612,
    name: 'PerkPocket - employee benefits',
    shortName: 'PerkPocket',
    subtitle: 'Employee Benefits Tracker',
    category: 'Finance',
    appStoreUrl: 'https://apps.apple.com/us/app/perkpocket-employee-benefits/id6799532612',
    icon: '/assets/apps/perkpocket-employee-benefits.jpg',
    accent: '#59d3b1',
    accentSoft: 'rgba(89, 211, 177, .16)',
    seoTitle: 'PerkPocket: Employee Benefits Tracker for iPhone',
    metaDescription: 'Track employee benefit balances, expenses, receipts, reimbursements, and expiration dates in one private personal wallet for iPhone.',
    primaryKeyword: 'employee benefits tracker app',
    secondaryKeywords: [
      'employee perks tracker',
      'work allowance tracker',
      'reimbursement tracker app',
      'benefit expiration reminder',
      'wellness benefit tracker',
      'employer reimbursement app',
      'receipt tracker for work benefits',
      'benefits wallet iPhone',
    ],
    intent: 'Find a personal iPhone app for tracking employer allowances, benefit balances, receipts, reimbursement status, and upcoming expiration dates.',
    eyebrow: 'Employee benefits tracker for iPhone',
    headline: 'Don’t leave money at work.',
    lede: 'PerkPocket turns employee benefits into a simple personal wallet. Track allowances, perks, reimbursements, receipts, and benefit balances so you can use what your job already provides before it resets or expires.',
    problemTitle: 'Work benefits are valuable—but easy to lose track of.',
    problem: [
      'Wellness funds, commuter allowances, education budgets, phone reimbursements, and other employer benefits often live in different portals, emails, and policy documents. It can be hard to remember what remains or when it expires.',
      'A receipt can sit unsubmitted while the deadline gets closer. Even after a claim is filed, the difference between submitted, approved, reimbursed, and denied can disappear into a long email thread.',
    ],
    solutionTitle: 'One private wallet for the benefits you already earned.',
    solution: [
      'PerkPocket keeps each benefit, available balance, reset date, expense, receipt, and reimbursement status together. It is a personal tracker—not an employer portal—and does not require a work-account or banking connection.',
      'Optional reminders surface approaching benefit expiration dates. Receipt text recognition can identify basic merchant, amount, and purchase-date details on your device, while the original image stays attached to the expense.',
    ],
    features: [
      { title: 'Track benefit balances', description: 'See what is available, what has been used, and what remains across employer-provided benefits.' },
      { title: 'Organize expenses and receipts', description: 'Add expenses, notes, and receipt images to the benefit they belong to.' },
      { title: 'Follow reimbursement status', description: 'Mark claims not submitted, submitted, approved, reimbursed, or denied.' },
      { title: 'Watch expiration dates', description: 'Enable reminders 60, 30, 14, and 7 days before an active benefit ends.' },
      { title: 'Read receipt basics on-device', description: 'Extract basic merchant, amount, and purchase-date details without sending the receipt to a remote recognition service.' },
      { title: 'See recovered value', description: 'Review how much employer-provided money you have put to work during the year.' },
    ],
    steps: [
      { title: 'Add a benefit', description: 'Choose a common benefit type or create a custom one, then enter its value and reset or expiration date.' },
      { title: 'Record an expense', description: 'Enter the purchase, attach a receipt, and keep any useful notes with it.' },
      { title: 'Update the claim', description: 'Move the expense through submitted, approved, reimbursed, or denied as the employer processes it.' },
      { title: 'Use the balance', description: 'Check what remains and act before an allowance resets or expires.' },
    ],
    audiences: [
      'Employees with wellness, education, commuter, phone, equipment, childcare, healthcare, meal, or custom allowances',
      'People who submit receipts for employer reimbursement',
      'Anyone managing benefits with different reset and expiration dates',
      'People who want a private personal tracker without a work-account or bank connection',
    ],
    screenshots: [
      { src: '/assets/screenshots/perkpocket/01.jpg', alt: 'PerkPocket activity view showing pending reimbursement claims and their current status', width: 600, height: 1298 },
      { src: '/assets/screenshots/perkpocket/02.jpg', alt: 'PerkPocket benefit wallet showing employer benefit balances and expenses', width: 600, height: 1298 },
      { src: '/assets/screenshots/perkpocket/03.jpg', alt: 'PerkPocket overview showing available employee benefit money', width: 600, height: 1298 },
    ],
    faqs: [
      { question: 'What kinds of employee benefits can PerkPocket track?', answer: 'PerkPocket includes wellness, education, phone and internet, commuter, work equipment, childcare, healthcare, meals, and custom benefit types.' },
      { question: 'Does PerkPocket connect to my employer or bank?', answer: 'No. PerkPocket is a personal tracker. It does not require an employer portal, work account, banking login, or employer integration.' },
      { question: 'Can I track reimbursement status?', answer: 'Yes. Expenses can be marked not submitted, submitted, approved, reimbursed, or denied, and pending claims appear in the activity feed.' },
      { question: 'Can PerkPocket remind me before a benefit expires?', answer: 'Yes. When notifications are enabled, PerkPocket can remind you 60, 30, 14, and 7 days before an active benefit ends.' },
      { question: 'How much of PerkPocket is free?', answer: 'You can keep up to five active benefits for free. A $3.99 one-time PerkPocket Lifetime purchase unlocks unlimited active benefits. There is no subscription.' },
      { question: 'Where are my benefits and receipts stored?', answer: 'Benefit data, activity, and receipt images stay on your device. Basic receipt text recognition also happens on-device.' },
    ],
    pricingSummary: 'Free for up to five active benefits; $3.99 one-time lifetime unlock for unlimited active benefits. No subscription.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS 26.5 or later',
    version: '1.0',
    updated: '2026-08-26',
    supportUrl: '/privacy-policy#support',
    privacyUrl: '/privacy-policy',
    relatedSlug: 'glassledger',
    relatedName: 'GlassLedger',
    relatedSummary: 'Want the same kind of clarity for monthly bills? Plan each bill around the paycheck intended to cover it.',
    futureTopics: [
      { slug: 'track-employee-benefits', title: 'How to Track Employee Benefits Before They Expire', intent: 'Educational / problem solving' },
      { slug: 'employee-reimbursement-tracker', title: 'How to Organize Work Reimbursements and Receipts', intent: 'Workflow / discovery' },
      { slug: 'wellness-stipend-tracker', title: 'How to Keep Track of a Workplace Wellness Stipend', intent: 'Long-tail discovery' },
    ],
  },
  {
    slug: 'campkeep',
    id: 6796974964,
    name: 'CampKeep: Camping Journal',
    shortName: 'CampKeep',
    subtitle: 'Campsite Map, Photos & Notes',
    category: 'Travel',
    appStoreUrl: 'https://apps.apple.com/us/app/campkeep-camping-journal/id6796974964',
    icon: '/assets/apps/campkeep-camping-journal.jpg',
    accent: '#dca45f',
    accentSoft: 'rgba(220, 164, 95, .16)',
    seoTitle: 'CampKeep: Private Camping Journal and Campsite Map',
    metaDescription: 'Save exact campsites, trip photos, notes, ratings, favorites, and return-worthy camping memories in a private iPhone camping journal.',
    primaryKeyword: 'camping journal app',
    secondaryKeywords: [
      'campsite journal iPhone',
      'camping trip tracker',
      'private camping log',
      'campsite map app',
      'campground review journal',
      'camping photo journal',
      'remember campsite numbers',
      'camping trip notes app',
    ],
    intent: 'Find a private iPhone camping journal for saving exact campsite details, photos, notes, ratings, favorites, and places worth returning to.',
    eyebrow: 'Private camping journal for iPhone',
    headline: 'Remember the campsite—not just the campground.',
    lede: 'CampKeep is a private camping journal for the details reservation pages forget. Save the exact campsite, add photos, record what mattered, and remember whether you would return.',
    problemTitle: 'The best campsite details disappear after checkout.',
    problem: [
      'A campground name is not enough when one loop is quiet, another site has better shade, and only a few spaces feel private. Months later, the exact campsite number and the reasons it worked can be difficult to reconstruct.',
      'Photos live in the camera roll, reservation details stay in old emails, and personal notes end up somewhere else. Public reviews also are not the right place for every private memory or exact location detail.',
    ],
    solutionTitle: 'A personal map and journal for every stay.',
    solution: [
      'CampKeep brings the campground, campsite number, trip date, photos, notes, ratings, and return decision into one photo-forward record. Search and filters make past trips easy to revisit.',
      'Sharing starts with privacy in mind: exact location and campsite number begin hidden, and GPS coordinates are never included in generated trip images.',
    ],
    features: [
      { title: 'Pin exact campsites', description: 'Build a personal map of the campsite—not only the campground name.' },
      { title: 'Keep a photo journal', description: 'Add a cover photo and supporting trip photos to each stay.' },
      { title: 'Rate what mattered', description: 'Record privacy, shade, noise, cleanliness, scenery, cell service, and kid or pet friendliness.' },
      { title: 'Search camping memories', description: 'Find trips by campground, campsite number, state, year, trip type, notes, or favorites.' },
      { title: 'Share with control', description: 'Create polished trip images while keeping exact location details hidden by default.' },
      { title: 'Export a readable backup', description: 'Create a PDF backup and restore compatible CampKeep backup files.' },
    ],
    steps: [
      { title: 'Save the site', description: 'Record the campground, exact campsite number, date, trip type, and optional map location.' },
      { title: 'Capture the stay', description: 'Add photos, journal notes, weather, wildlife, fishing, and campfire details.' },
      { title: 'Rate the experience', description: 'Score the practical details and mark whether you would stay again.' },
      { title: 'Find it next season', description: 'Search, filter, or browse your map when planning the next trip.' },
    ],
    audiences: [
      'Campers who want to remember the exact campsite number and loop',
      'RV, tent, cabin, and other travelers building a personal camping history',
      'People who want private notes instead of a public campground review feed',
      'Campers who care about shade, noise, privacy, scenery, cell service, or family fit',
    ],
    screenshots: [
      { src: '/assets/screenshots/campkeep/01.jpg', alt: 'CampKeep campsite map showing saved camping trips and exact-site memories', width: 600, height: 1298 },
      { src: '/assets/screenshots/campkeep/02.jpg', alt: 'CampKeep organized camping journal with trip photos and campsite details', width: 600, height: 1298 },
      { src: '/assets/screenshots/campkeep/03.jpg', alt: 'CampKeep privacy-conscious trip sharing controls that hide exact location details', width: 600, height: 1298 },
      { src: '/assets/screenshots/campkeep/04.jpg', alt: 'CampKeep private-by-design explanation for local camping memories', width: 600, height: 1298 },
      { src: '/assets/screenshots/campkeep/05.jpg', alt: 'CampKeep trip history for revisiting past camping memories', width: 600, height: 1298 },
      { src: '/assets/screenshots/campkeep/06.jpg', alt: 'CampKeep campsite record with details reservation pages often forget', width: 600, height: 1298 },
    ],
    faqs: [
      { question: 'Can CampKeep save an exact campsite?', answer: 'Yes. Each trip can include the campground, campsite number, state, arrival date, trip type, and an optional map location.' },
      { question: 'What can I record about a camping trip?', answer: 'You can add photos, journal notes, ratings, campfire, fishing, wildlife, and weather notes, favorites, and whether you would return.' },
      { question: 'Does CampKeep have public profiles or reviews?', answer: 'No. CampKeep has no journal account, advertising, public profile, public review system, or social feed.' },
      { question: 'Does sharing expose my campsite location?', answer: 'Generated trip images begin with exact location and campsite number hidden, and GPS coordinates are never included in those shared images.' },
      { question: 'How much of CampKeep is free?', answer: 'The first three trips include the complete CampKeep experience. A $9.99 one-time CampKeep Lifetime purchase unlocks unlimited new trips. There is no subscription.' },
      { question: 'Can I back up my camping journal?', answer: 'Yes. CampKeep can export a readable PDF backup and restore compatible CampKeep backups.' },
    ],
    pricingSummary: 'The first three trips are free; $9.99 one-time CampKeep Lifetime purchase unlocks unlimited new trips. No subscription or ads.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS 17.0 or later',
    version: '1.0',
    updated: '2026-08-24',
    supportUrl: '/campkeep-support.html',
    privacyUrl: '/campkeep-privacy.html',
    relatedSlug: 'campconomy',
    relatedName: 'CampConomy',
    relatedSummary: 'Prefer to build the campground yourself? Manage Pine Valley, balance camper needs, and keep bears under control.',
    futureTopics: [
      { slug: 'how-to-keep-a-camping-journal', title: 'How to Keep a Camping Journal You Will Actually Revisit', intent: 'Educational / workflow' },
      { slug: 'remember-exact-campsites', title: 'How to Remember the Best Campsites at Every Campground', intent: 'Long-tail problem solving' },
      { slug: 'private-camping-journal', title: 'Private Camping Journal Apps Without a Social Feed', intent: 'Privacy / discovery' },
    ],
  },
  {
    slug: 'scratch-trap',
    id: 6797985857,
    name: 'Scratch Trap',
    shortName: 'Scratch Trap',
    subtitle: 'Fast Cat Reflex Game',
    category: 'Games',
    appStoreUrl: 'https://apps.apple.com/us/app/scratch-trap/id6797985857',
    icon: '/assets/apps/scratch-trap.jpg',
    accent: '#f3a7bf',
    accentSoft: 'rgba(243, 167, 191, .16)',
    seoTitle: 'Scratch Trap: Fast Cat Reflex Game for iPhone',
    metaDescription: 'Tap soft toe beans, avoid sneaky claws, build combos, and master 24 colorful levels in a quick one-touch cat reflex game for iPhone.',
    primaryKeyword: 'cat reflex game for iPhone',
    secondaryKeywords: [
      'cat paw tapping game',
      'quick reflex game iPhone',
      'one touch cat game',
      'fast casual iPhone game',
      'offline cat game',
      'toe beans game',
      'no ads cat game',
    ],
    intent: 'Discover a fast, friendly one-touch cat reflex game with short levels, clear hazards, local progress, and no ads or account.',
    eyebrow: 'Fast cat reflex game for iPhone',
    headline: 'Quick paws. Sneaky claws.',
    lede: 'Scratch Trap is a fast, friendly cat reflex game built for quick bursts of one-touch play. Tap the soft paws, grow your combo, and keep your fingers off the claws.',
    problemTitle: 'A quick reflex game should feel fair—even when it gets fast.',
    problem: [
      'Short arcade games can become frustrating when every missed target causes damage or when hazards are difficult to distinguish. The challenge should come from reacting well, not from unclear rules.',
      'Scratch Trap keeps the goal visible: soft paws are safe, claws are not, and missed paws never cost a heart. The speed rises, but the rule never changes.',
    ],
    solutionTitle: 'Thirty-second rounds built around one clear choice.',
    solution: [
      'Soft paws pop out across colorful cat rooms. Tap them to score, build a combo, and fill the paw meter before the clock runs out. Leave every claw alone—three scratches end the round.',
      'Four six-level chapters increase movement speed, active targets, and sneaky-claw pressure. Replay levels to improve the best score and earn up to three stars on each one.',
    ],
    features: [
      { title: '24 handcrafted levels', description: 'Progress through Cozy Couch, Yarn Room, Moonlight, and Clawmaster.' },
      { title: 'One-touch play', description: 'Tap the soft paws and avoid the claws with a rule that is easy to understand.' },
      { title: 'Combos and score bonuses', description: 'Keep accurate taps going to grow the combo and chase a stronger score.' },
      { title: 'Three-star mastery', description: 'Finish without scratches for three stars and collect all 72 across the game.' },
      { title: 'Quick 30-second rounds', description: 'Play a complete level in a short burst without a long setup.' },
      { title: 'Private offline progress', description: 'No account, chat, ads, analytics, or tracking; progress stays on your device.' },
    ],
    steps: [
      { title: 'Watch the room', description: 'Soft paws and claws appear from furniture and hiding places.' },
      { title: 'Tap the toe beans', description: 'Hit safe paws quickly to score and fill the paw meter.' },
      { title: 'Avoid the claws', description: 'Leave hazards untouched; three scratches end the round.' },
      { title: 'Chase three stars', description: 'Replay levels to improve your score and complete every chapter perfectly.' },
    ],
    audiences: [
      'Cat fans looking for a playful one-touch iPhone game',
      'Players who enjoy short reflex and reaction-time challenges',
      'People who want an offline game without ads or an account',
      'Completionists who want to collect all 72 stars across 24 levels',
    ],
    screenshots: [
      { src: '/assets/screenshots/scratch-trap/01.jpg', alt: 'Scratch Trap Yarn Room gameplay introducing a new cat room after six levels', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/02.jpg', alt: 'Scratch Trap level result showing the three-star score challenge', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/03.jpg', alt: 'Scratch Trap Cozy Couch gameplay with quick paws and sneaky claws', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/04.jpg', alt: 'Scratch Trap Clawmaster room with the fastest claw challenge', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/05.jpg', alt: 'Scratch Trap level map showing 24 levels across four cat rooms', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/06.jpg', alt: 'Scratch Trap gameplay showing safe soft paws to tap', width: 600, height: 1298 },
      { src: '/assets/screenshots/scratch-trap/07.jpg', alt: 'Scratch Trap Moonlight room with increasingly sneaky claws', width: 600, height: 1298 },
    ],
    faqs: [
      { question: 'How do you play Scratch Trap?', answer: 'Tap soft paws to score and fill the paw meter before the 30-second clock ends. Avoid claws; three scratches end the round.' },
      { question: 'How many levels are in Scratch Trap?', answer: 'Scratch Trap has 24 levels across four six-level chapters: Cozy Couch, Yarn Room, Moonlight, and Clawmaster.' },
      { question: 'How do stars work?', answer: 'A round with no scratches earns three stars, one scratch earns two stars, and two scratches earn one star. You can replay any level to improve.' },
      { question: 'Do missed paws cost a heart?', answer: 'No. Missed paws do not cause a scratch. Hearts are lost only when you tap a claw.' },
      { question: 'Is Scratch Trap free?', answer: 'You can download and start Scratch Trap for free. A $3.99 one-time Unlock Full Game purchase opens the complete game. There is no subscription.' },
      { question: 'Does Scratch Trap need an account or internet connection?', answer: 'No account is required. Gameplay works offline, and the app includes no ads, analytics, tracking, or chat.' },
    ],
    pricingSummary: 'Free download with a $3.99 one-time Unlock Full Game purchase. No subscription.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS 17.0 or later',
    version: '1.0',
    updated: '2026-08-18',
    supportUrl: '/privacy-policy#support',
    privacyUrl: '/privacy-policy',
    relatedSlug: 'alchemy-pocketlab',
    relatedName: 'Alchemy PocketLab',
    relatedSummary: 'Want a slower kind of puzzle? Mix magical ingredients, help Wisp, and fill an illustrated grimoire.',
    futureTopics: [
      { slug: 'quick-reflex-games-iphone', title: 'Quick Reflex Games for Short iPhone Sessions', intent: 'Discovery / comparison' },
      { slug: 'offline-cat-games-iphone', title: 'Offline Cat Games for iPhone Without Ads', intent: 'Long-tail discovery' },
      { slug: 'scratch-trap-three-star-guide', title: 'Scratch Trap: How to Earn Three Stars on Every Level', intent: 'Branded informational' },
    ],
  },
  {
    slug: 'campconomy',
    id: 6795309043,
    name: 'CampConomy',
    shortName: 'CampConomy',
    subtitle: 'Campground Management',
    category: 'Games',
    appStoreUrl: 'https://apps.apple.com/us/app/campconomy/id6795309043',
    icon: '/assets/apps/campconomy.jpg',
    accent: '#e6a75d',
    accentSoft: 'rgba(230, 167, 93, .16)',
    seoTitle: 'CampConomy: Campground Management Game for iPhone and iPad',
    metaDescription: 'Build a fixed-isometric campground, set prices, balance camper needs, clean the park, and outsmart bears in an offline management game.',
    primaryKeyword: 'campground management game',
    secondaryKeywords: [
      'campground tycoon game',
      'camping management game iPhone',
      'campground builder iPad',
      'offline management game iOS',
      'isometric campground game',
      'campground simulation game',
      'bear management game',
    ],
    intent: 'Find a fixed-isometric campground management game with construction, pricing, camper needs, systemic bear risk, and an endless offline campaign.',
    eyebrow: 'Campground management game for iOS',
    headline: 'Build camps. Balance books. Outsmart bears.',
    lede: 'CampConomy is a fixed-isometric campground management game where every tent, path, price, and support building matters. Turn Pine Valley into a profitable park while keeping campers comfortable, fed, safe, and clean.',
    problemTitle: 'A campground grows only when the whole park works together.',
    problem: [
      'More tent sites can bring in more revenue, but they also create new support demands. Guests need clean facilities, food, safety, and connected paths—not just a place to sleep.',
      'Food scent attracts bears, dirt lowers the experience, and aggressive pricing can undermine satisfaction. Expansion without planning creates a park that is bigger but not better.',
    ],
    solutionTitle: 'A compact management game where layout and operations both matter.',
    solution: [
      'Build tent sites, paths, ranger stations, privies, trash bins, snack shacks, food lockers, trees, and bushes across a 20×16 fixed-isometric map. Set the camper price and reinvest revenue into the next stage of Pine Valley.',
      'Balance comfort, cleanliness, food, and safety while responding to dirt and bear pressure. Hold a 95% rating for three completed nights to master the park, then keep refining the endless campaign.',
    ],
    features: [
      { title: 'Fixed-isometric construction', description: 'Plan a 20×16 campground with tents, paths, support buildings, and landscaping.' },
      { title: 'Pricing and revenue', description: 'Set the camper price, welcome guests, collect revenue, and fund expansion.' },
      { title: 'Four-part campground rating', description: 'Balance comfort, cleanliness, food, and safety as the park grows.' },
      { title: 'Systemic bear pressure', description: 'Reduce food scent with lockers and dispatch Ranger Jim when a bear threatens the camp.' },
      { title: 'Safe Move Mode', description: 'Rotate the layout or reclaim the full construction cost of eligible projects.' },
      { title: 'Endless offline campaign', description: 'Master Pine Valley, then keep building with persistent local autosave.' },
    ],
    steps: [
      { title: 'Build the first sites', description: 'Place tents and connect them with gravel paths.' },
      { title: 'Support each expansion', description: 'Add privies, trash bins, snack shacks, and food lockers for every started group of five tents.' },
      { title: 'Run the campground', description: 'Set a price, check in campers, clean dirt, and respond to bear threats.' },
      { title: 'Reach mastery', description: 'Hold a 95% or better rating for three completed nights, then continue the campaign.' },
    ],
    audiences: [
      'Players who enjoy classic tycoon and management games',
      'Campers who want a campground-building theme with playful bear pressure',
      'iPhone and iPad players looking for an offline strategy game',
      'Players who prefer a finite mastery goal with endless play afterward',
    ],
    screenshots: [
      { src: '/assets/screenshots/campconomy/01.jpg', alt: 'CampConomy fixed-isometric Pine Valley campground with tent sites and support buildings', width: 1200, height: 554 },
      { src: '/assets/screenshots/campconomy/02.jpg', alt: 'CampConomy campground cleanup system with dirt and groundskeeping needs', width: 1200, height: 554 },
      { src: '/assets/screenshots/campconomy/03.jpg', alt: 'CampConomy rating panel balancing comfort, cleanliness, food, and safety', width: 1200, height: 554 },
      { src: '/assets/screenshots/campconomy/04.jpg', alt: 'CampConomy bear threat with Ranger Jim responding along campground paths', width: 1200, height: 554 },
      { src: '/assets/screenshots/campconomy/05.jpg', alt: 'CampConomy construction and pricing interface for planning campground expansion', width: 1200, height: 554 },
    ],
    faqs: [
      { question: 'What kind of game is CampConomy?', answer: 'CampConomy is a fixed-isometric campground management game with building placement, pricing, guest needs, ratings, cleanup, bear pressure, and ranger response.' },
      { question: 'What can I build?', answer: 'You can place tent sites, gravel paths, ranger stations, wooden privies, trash bins, snack shacks, food lockers, trees, and bushes.' },
      { question: 'How do bears work?', answer: 'Food scent raises bear pressure. Food lockers help reduce it, and tapping a threatening bear dispatches Ranger Jim along the connected path network.' },
      { question: 'How do I master Pine Valley?', answer: 'Hold a 95% or better campground rating for three completed nights. The campaign remains open after mastery.' },
      { question: 'How much of CampConomy is free?', answer: 'The first five tent sites are free. A $3.99 one-time Full Camp Lifetime Unlock allows tent six and beyond. There is no subscription.' },
      { question: 'Can I play CampConomy offline?', answer: 'Yes. CampConomy has an endless offline campaign with local autosave and does not require an account.' },
    ],
    pricingSummary: 'Build the first five tent sites free; $3.99 one-time Full Camp Lifetime Unlock allows tent six and beyond. No subscription.',
    offerPrice: 0,
    offerCurrency: 'USD',
    operatingSystem: 'iOS and iPadOS 18.0 or later',
    version: '1.0',
    updated: '2026-08-13',
    supportUrl: '/privacy-policy#support',
    privacyUrl: '/privacy-policy',
    relatedSlug: 'campkeep',
    relatedName: 'CampKeep',
    relatedSummary: 'Prefer real camping memories? Save exact campsites, photos, notes, ratings, and the places worth returning to.',
    futureTopics: [
      { slug: 'campground-management-games-ios', title: 'Campground Management Games for iPhone and iPad', intent: 'Discovery / comparison' },
      { slug: 'campconomy-bear-guide', title: 'CampConomy Bear Guide: Food Lockers and Ranger Response', intent: 'Branded informational' },
      { slug: 'campconomy-support-buildings', title: 'CampConomy Support Buildings: What Every Five Tents Need', intent: 'Branded problem solving' },
    ],
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
