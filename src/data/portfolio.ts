export type PortfolioApp = {
  id: number;
  name: string;
  subtitle: string;
  category: string;
  url: string;
  icon: string;
  hasPublicIap: boolean;
  guideSlug?: string;
};

// Point-in-time US App Store portfolio for Apple artist ID 1848027565.
// Last verified: 2026-08-12. Update from Apple before changing public availability or IAP status.
export const portfolioApps: PortfolioApp[] = [
  { id: 6754355803, name: 'GlassLedger: Bill Organizer', subtitle: 'Paycheck Planner & Money Left', category: 'Finance', url: 'https://apps.apple.com/us/app/glassledger-bill-organizer/id6754355803', icon: '/assets/apps/glassledger.jpg', hasPublicIap: true, guideSlug: 'glassledger' },
  { id: 6794703569, name: 'Alchemy PocketLab', subtitle: 'Cozy Element Discovery', category: 'Games', url: 'https://apps.apple.com/us/app/alchemy-pocketlab/id6794703569', icon: '/assets/apps/alchemy-pocketlab.jpg', hasPublicIap: true, guideSlug: 'alchemy-pocketlab' },
  { id: 6794868778, name: 'HookLedger: Fishing Journal', subtitle: 'Private Catch Log & Map', category: 'Sports', url: 'https://apps.apple.com/us/app/hookledger-fishing-journal/id6794868778', icon: '/assets/apps/hookledger-fishing-journal.jpg', hasPublicIap: false },
  { id: 6792288966, name: 'MenuMiles: Restaurant Journal', subtitle: 'Dining Log & Food Passport', category: 'Food & Drink', url: 'https://apps.apple.com/us/app/menumiles-restaurant-journal/id6792288966', icon: '/assets/apps/menumiles-restaurant-journal.jpg', hasPublicIap: false },
  { id: 6793898230, name: 'Reelfern: Fishing Game', subtitle: 'Catch Fish. Explore the Lake.', category: 'Games', url: 'https://apps.apple.com/us/app/reelfern-fishing-game/id6793898230', icon: '/assets/apps/reelfern-fishing-game.jpg', hasPublicIap: false },
  { id: 6792172620, name: 'Helix Dominion - RTS', subtitle: 'Offline sci-fi RTS skirmishes', category: 'Games', url: 'https://apps.apple.com/us/app/helix-dominion-rts/id6792172620', icon: '/assets/apps/helix-dominion-rts.jpg', hasPublicIap: false },
  { id: 6792224208, name: 'GrubRadar: Food Truck Finder', subtitle: 'Nearby Street Food Map', category: 'Food & Drink', url: 'https://apps.apple.com/us/app/grubradar-food-truck-finder/id6792224208', icon: '/assets/apps/grubradar-food-truck-finder.jpg', hasPublicIap: false },
  { id: 6791290900, name: 'ScaleTrend: Weight Tracker', subtitle: 'Trends, wins & gentle progress', category: 'Health & Fitness', url: 'https://apps.apple.com/us/app/scaletrend-weight-tracker/id6791290900', icon: '/assets/apps/scaletrend-weight-tracker.jpg', hasPublicIap: false },
  { id: 6791579373, name: 'Bubble pop AR', subtitle: 'Room-Scale Arcade Adventure', category: 'Games', url: 'https://apps.apple.com/us/app/bubble-pop-ar/id6791579373', icon: '/assets/apps/bubble-pop-ar.jpg', hasPublicIap: false },
  { id: 6791092538, name: 'ParentCompass - Assessment', subtitle: 'Parenting Insights & Growth', category: 'Lifestyle', url: 'https://apps.apple.com/us/app/parentcompass-assessment/id6791092538', icon: '/assets/apps/parentcompass-assessment.jpg', hasPublicIap: false },
  { id: 6787174596, name: 'RedVision', subtitle: 'Relationship Assessment', category: 'Health & Fitness', url: 'https://apps.apple.com/us/app/redvision/id6787174596', icon: '/assets/apps/redvision.jpg', hasPublicIap: false },
  { id: 6755321111, name: 'Text Assist AI – Reply Helper', subtitle: 'Paste message, Get reply', category: 'Utilities', url: 'https://apps.apple.com/us/app/text-assist-ai-reply-helper/id6755321111', icon: '/assets/apps/text-assist-ai-reply-helper.jpg', hasPublicIap: false },
  { id: 6755058444, name: 'New You New Year Goal Tracker', subtitle: 'Personal goals, powered by AI', category: 'Health & Fitness', url: 'https://apps.apple.com/us/app/new-you-new-year-goal-tracker/id6755058444', icon: '/assets/apps/new-you-new-year-goal-tracker.jpg', hasPublicIap: false },
  { id: 6754824538, name: 'LittleWins chore Tracker', subtitle: 'Chores Made Simple & Fun', category: 'Lifestyle', url: 'https://apps.apple.com/us/app/littlewins-chore-tracker/id6754824538', icon: '/assets/apps/littlewins-chore-tracker.jpg', hasPublicIap: false },
  { id: 6754534551, name: 'Only The Tip - Tip Calculator', subtitle: 'Effortless Tipping Made Simple', category: 'Food & Drink', url: 'https://apps.apple.com/us/app/only-the-tip-tip-calculator/id6754534551', icon: '/assets/apps/only-the-tip-tip-calculator.jpg', hasPublicIap: false },
];
