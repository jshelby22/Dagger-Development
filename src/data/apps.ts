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
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
