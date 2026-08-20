MDLF Nursery Web Code — v15

Mobile refinements added from the latest screenshots:
- Hero title is forced into exactly two lines on mobile: "One Sweet" / "First Year".
- Hero small text is reduced for better proportion.
- Hero cake groups are significantly larger on mobile.
- Collection main artwork is enlarged to bleed past both viewport edges.
- Collection title/body/highlight typography is reduced and re-spaced.
- Desktop rules from v14 remain unchanged.

Required merged backgrounds:
- Desktop: assets/hero-collection-bg.avif
- Mobile: assets/hero-collection-bg-mobile.avif

Main mobile tuning block is at the end of styles.css under:
"MOBILE HERO + COLLECTION REFINEMENT — v15"


V16 mobile tuning:
- .hero-copy top: 27.2%
- .hero-description width: min(320px, 77vw)
- .hero-cakes width: 58%; bottom: 2.8%
- .collection-main-card top: 16.5%; width: 150%; centered with left:50% + translateX(-50%)
- .collection-main-copy padding-top: 19.5%
- collection art fills the 150% centered card at width:100%


v17 mobile changes
- Hero cakes: width 48%, bottom 2.8%.
- Collection main card: width 140%, centered with left:50% + translateX(-50%).
- Collection copy padding-top: 16.5%.
- Sweet Deal mobile price area redesigned as a centered celebratory composition.
- Mobile deal content gutters increased.


v18 header update
- Replaced the "Maison de la Fork" text with assets/01-header/logo.svg.
- Desktop logo height matches the former 19px text size.
- Mobile logo height matches the former 16px text size.
- NURSERY remains live HTML text beside the logo.
