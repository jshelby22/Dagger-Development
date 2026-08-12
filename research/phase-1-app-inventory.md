# DaggerDev SEO Inventory — Phase 1

**Storefront:** United States
**Observed:** 2026-08-12
**Developer:** James Shelby (Apple artist ID `1848027565`)

## Method

1. Enumerated the public portfolio with Apple’s artist lookup endpoint.
2. Required `wrapperType = software`, `artistId = 1848027565`, and `sellerName = James Shelby`.
3. Opened every canonical Apple product page and inspected its public `In-App Purchases` annotation.
4. Did not infer IAP availability from a free download price or from DaggerDev content.

Apple portfolio source: <https://itunes.apple.com/lookup?id=1848027565&entity=software&country=us&limit=200>

## Current public apps

| App | App Store category | Download price | Public IAP menu found | Qualifies for phase 1 |
|---|---|---:|---:|---:|
| Text Assist AI – Reply Helper | Utilities | Free | No | No |
| GlassLedger: Bill Organizer | Finance | Free | Yes — GlassLedger Lifetime Access, $7.99 | **Yes** |
| GrubRadar: Food Truck Finder | Food & Drink | Free | No | No |
| LittleWins chore Tracker | Lifestyle | Free | No | No |
| New You New Year Goal Tracker | Health & Fitness | Free | No | No |
| Only The Tip - Tip Calculator | Food & Drink | Free | No | No |
| Bubble pop AR | Games | Free | No | No |
| Reelfern: Fishing Game | Games | Free | No | No |
| HookLedger: Fishing Journal | Sports | Free | No | No |
| ParentCompass - Assessment | Lifestyle | Free | No | No |
| MenuMiles: Restaurant Journal | Food & Drink | Free | No | No |
| RedVision | Health & Fitness | Free | No | No |
| Helix Dominion - RTS | Games | Free | No | No |
| ScaleTrend: Weight Tracker | Health & Fitness | Free | No | No |
| Alchemy PocketLab | Games | Free | Yes — Unlock Gloomwood Garden, $4.99 | **Yes** |

“No” means no public IAP menu was found on the current US product page at the observation time. It does not claim that no historical, hidden, pending, or storefront-specific product exists.

## Qualifying app summaries

### GlassLedger: Bill Organizer

- **App Store:** <https://apps.apple.com/us/app/glassledger-bill-organizer/id6754355803>
- **Subtitle:** Paycheck Planner & Money Left
- **Version:** 2.0 (updated 2026-08-08)
- **Core job:** Manually plan monthly bills around paycheck dates and see what remains without connecting a bank.
- **Free boundary:** Up to five bills per month.
- **Purchase:** $7.99 one-time lifetime access for bill six and beyond; no subscription.
- **Verified features:** Paychecks and dates, bills and due days, per-paycheck assignments, planned/actual views, paid/unpaid/partial payments, recurring bills, month history, local ledger storage, JSON backup/restore.

### Alchemy PocketLab

- **App Store:** <https://apps.apple.com/us/app/alchemy-pocketlab/id6794703569>
- **Subtitle:** Cozy Element Discovery
- **Version:** 1.0 (updated 2026-08-05)
- **Core job:** A cozy element-combining puzzle game with a finite handcrafted collection.
- **Free boundary:** 25 discoveries and five Wisp requests.
- **Purchase:** $4.99 one-time Gloomwood Garden unlock for 25 more discoveries, five more requests, and the complete grimoire; no subscription.
- **Verified features:** Combine two ingredients, 50 handcrafted discoveries, ten Wisp requests, illustrated grimoire, hints, reactions/particles, no timers/streaks/lives, short one-handed sessions.

## Search-intent targets used for the first landing pages

### GlassLedger

- **Primary:** budget by paycheck app
- **Secondary:** paycheck budget app; paycheck budget planner; biweekly budget app; bill organizer app for iPhone; budget app without bank linking; manual budget app; budget app no subscription; budget app one-time purchase; money left after bills
- **Intent:** Find an iPhone app for planning bills around individual paychecks, especially biweekly pay, and seeing what remains without connecting a financial account.

Google Autocomplete returned exact and close variants including “budget by paycheck app,” “best budget by paycheck app,” “budget per paycheck app,” “budget app for biweekly pay,” “paycheck budget app,” “budget app without bank linking,” “budget app no subscription,” and “budget app one time purchase.” Live search results were product-oriented and repeatedly described assigning bills to individual paychecks and seeing what remains until the next check. These are qualitative intent signals, not measured volume or difficulty scores.

### Alchemy PocketLab

- **Primary:** alchemy game for iPhone
- **Secondary:** alchemy puzzle game; element combining game; element mixing game; cozy puzzle games iPhone; relaxing puzzle games iPhone; alchemy game no ads; puzzle games no ads iPhone; no-timer puzzle game iPhone; one-handed iPhone games
- **Intent:** Discover a relaxing iPhone puzzle game based on combining elements, finding recipes, and completing a finite illustrated collection.

Google Autocomplete returned variants including “alchemy game iphone,” “alchemy game ios,” “best alchemy game ios,” “alchemy puzzle game,” “element combining game,” “puzzle game no ads iphone,” and “one handed iphone games.” Live results and Apple search showed an established alchemy-game category, so the page differentiates around a cozy, handcrafted, finite, interruption-free experience rather than recipe-count claims. These are qualitative intent signals, not measured volume or difficulty scores.

## Future content candidates

### GlassLedger

1. `/guides/how-to-budget-by-paycheck/`
2. `/guides/biweekly-paycheck-budget/`
3. `/guides/budget-app-without-bank-linking/`
4. `/tools/money-left-after-bills-calculator/`

### Alchemy PocketLab

1. `/guides/games-like-little-alchemy-iphone/`
2. `/guides/iphone-puzzle-games-without-ads-or-timers/`
3. `/guides/one-handed-puzzle-games-iphone/`
4. `/alchemy-pocketlab/hints-element-combinations/`

These are recommendations only; no thin topic pages were generated in this phase.
