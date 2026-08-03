export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  datePublished: string; // ISO date
  metaDescription: string;
  body: { heading?: string; paragraphs: string[] }[]; // ordered content blocks; heading optional for intro blocks
  internalLinks: { label: string; href: string }[]; // for a "Related" links block at post end
}

export const blogPosts: BlogPost[] = [
  {
    slug: "herringbone-floor-guide",
    title: "The Complete Guide to Herringbone Flooring in Northern Ireland",
    category: "Flooring Guides",
    excerpt:
      "Herringbone is back in a big way. Here's everything you need to know before you commit to the pattern — engineered vs solid, real cost, and how to style around it.",
    image: "/images/herringbone-close-up.jpg",
    datePublished: "2026-05-12",
    metaDescription:
      "A complete, honest guide to herringbone flooring for Northern Ireland homes — engineered vs solid wood, real installation costs, room suitability, care and styling advice from Feeney Flooring.",
    body: [
      {
        paragraphs: [
          "Herringbone flooring has been quietly making a comeback in homes across Antrim, Belfast and Lisburn for the last few years, and in 2026 it's become one of the most requested patterns we fit. Walk into any newly renovated period home or a smart new-build show house and there's a decent chance the hallway or living room floor is laid in that unmistakable zig-zag pattern, planks set at right angles to one another to form a continuous chevron-style weave.",
          "The pattern itself is centuries old. It takes its name from the skeleton of a herring fish, whose bones fan out in the same diagonal V-shapes. It was originally used in Roman roads because the interlocking brick pattern spread weight and resisted movement better than bricks laid in straight rows — the same structural logic that makes it such a stable, good-looking floor today. It found its way into French chateaux flooring in the 16th and 17th centuries, which is why it still carries an air of old-world elegance, and it never really went away in high-end interiors. What's changed is that it's now achievable and durable for an ordinary family home, not just a stately one.",
        ],
      },
      {
        heading: "Why herringbone is resurging right now",
        paragraphs: [
          "Part of the current wave is simply taste cycling back around — after a decade of wide-plank, uniform-look wood floors, homeowners are looking for something with more visual interest and craftsmanship on show. But the bigger driver is practical: engineered wood technology has matured to the point where herringbone can be manufactured as a stable, click-fit or glue-down engineered product rather than something that has to be hand-laid strip by strip in solid timber. That's made the pattern accessible at a price point that wasn't realistic ten years ago, and it's why we're fitting so much more of it in Crumlin, Antrim and the surrounding areas.",
          "Social media and interior design accounts have also played a role — herringbone photographs beautifully, and it's become something of a signal that a renovation has been done properly, with attention paid to detail rather than the cheapest available option.",
        ],
      },
      {
        heading: "Engineered vs solid wood for herringbone",
        paragraphs: [
          "This is the single most important decision you'll make, and we'll be straightforward about it: for the vast majority of Northern Ireland homes, engineered wood is the better choice for a herringbone floor, and it isn't close.",
          "Solid wood herringbone looks stunning, but solid timber expands and contracts with humidity and temperature far more than engineered board. In a herringbone lay, every plank is doing double duty — bearing its own movement plus the stress transferred from the planks locked against it at 90 degrees. In a straight-plank floor, that movement is fairly uniform and forgiving. In herringbone, differential movement between planks can show up as gapping, lifting at the points, or cupping, particularly in Northern Ireland's damp, changeable climate where indoor humidity swings between a dry winter with the heating on and a much damper summer.",
          "Engineered wood solves this because it's constructed as a real oak wear layer bonded to a cross-layered plywood or HDF base. That cross-layering is what gives it dimensional stability — the base resists movement in a way solid timber physically cannot. You still get a genuine solid wood wear surface that can be sanded and refinished, but the plank itself stays flat and tight over decades, over underfloor heating, and through the seasonal humidity swings that would eventually cause problems with solid herringbone. For a pattern this intricate, that stability isn't a nice-to-have, it's the difference between a floor that still looks perfect in ten years and one that needs remedial work in three.",
        ],
      },
      {
        heading: "The real cost of a herringbone floor",
        paragraphs: [
          "We'll be upfront about pricing because a lot of suppliers aren't. Engineered herringbone product itself starts from around £45 per square metre for a good quality oak, similar to what you'd pay for a nice straight-plank engineered floor. Where herringbone genuinely costs more is labour, and it's worth understanding why rather than being surprised by a quote.",
          "Laying herringbone requires every single plank to be cut at a precise angle and positioned against its neighbours to keep the pattern true across the whole room. There's no shortcut — a fitter has to work out from a centre line, dry-lay sections to check the pattern is running square to the walls, and cut in the border pieces around the room's edges individually, since a herringbone pattern almost never finishes flush at a wall. That takes considerably longer than clicking together straight planks in rows, and it takes a fitter who has actually done it before — it is not a floor to learn on. Depending on room size and how many doorways, alcoves and awkward corners are involved, labour for herringbone can run anywhere from 50% to close on double what a straight lay of the same product would cost. For an average living room, that difference is usually a few hundred pounds, not a few thousand — but it's a real cost and we'll always quote it honestly rather than let you find out on the day.",
        ],
      },
      {
        heading: "Which rooms suit herringbone",
        paragraphs: [
          "Herringbone earns its keep in rooms where you actually see the whole floor and want it to feel considered: hallways are the classic setting, since the pattern draws the eye down a corridor and makes even a narrow hall feel more generous. Living rooms and dining rooms are the other obvious fit — open spaces where the pattern has room to breathe and where furniture doesn't chop the visual effect up too much.",
          "Kitchens work well too, particularly open-plan kitchen-diners, provided you go engineered rather than solid and use a good quality lacquer or oiled finish that resists everyday spills. Where we'd steer you away from herringbone is a small, heavily used bathroom or a utility room with a shower drain nearby — not because engineered wood can't cope with occasional moisture, but because no wood floor, however well finished, is a genuine match for a wet room's constant splash exposure. For those spaces we'd point you toward a wood-look LVT instead, which can even be laid in a herringbone pattern itself and is fully waterproof.",
        ],
      },
      {
        heading: "Caring for a herringbone floor",
        paragraphs: [
          "Day to day, a herringbone floor is cared for exactly like any other engineered wood floor — regular sweeping or vacuuming with a hard-floor setting to keep grit from scratching the surface, a well-wrung microfibre mop with a proper wood floor cleaner rather than anything left wet or with a heavy detergent base, and felt pads under furniture legs. The one habit worth building specifically for herringbone is checking the room's humidity if you notice any movement at the joints — because so many short plank ends meet in this pattern, it can occasionally show minor seasonal gaps at those points before a straight-lay floor would. This settles down as the seasons turn and is normal in engineered wood; it's not something to be alarmed about.",
        ],
      },
      {
        heading: "Why Ville Burriana Oak is our most popular herringbone choice",
        paragraphs: [
          "Of all the herringbone ranges we fit, Ville Burriana Oak is consistently the one homeowners come back to after seeing samples. It strikes a balance a lot of herringbone products miss — a warm, mid-tone oak with visible grain character, so it reads as a genuine wood floor rather than a uniform, slightly artificial pattern, while still being light enough to work in the smaller hallways and rooms typical of Northern Ireland housing stock. It's a Lacquered finish, which handles day-to-day family life well without needing the maintenance regime an oiled floor demands, and the plank thickness and cross-layer construction give it excellent stability underfoot. It's the range we point most customers toward when they've seen herringbone online and want to know what it actually looks like fitted in a real home rather than a showroom.",
        ],
      },
      {
        heading: "Styling a room around a herringbone floor",
        paragraphs: [
          "Because the floor itself is doing a lot of visual work, the rest of the room benefits from a slightly calmer hand. A large plain or subtly textured rug — jute, wool, or a low-pile plain weave — laid so a good margin of the herringbone pattern is visible around the edges lets the floor read as a feature rather than being hidden. Avoid heavily patterned rugs directly on herringbone; two strong patterns fighting each other rarely works.",
          "Furniture with simple, straight lines and natural materials — oak, black metal, boucle or linen upholstery — tends to sit best, since it doesn't compete with the diagonal energy of the floor. On colour palette, herringbone oak pairs naturally with warm neutrals, soft greens, and charcoal or black accents; these let the wood tone stay the visual anchor of the room. We'd generally avoid very cool grey-toned decor schemes against a warm oak herringbone floor, as the two undertones can clash — if you're set on a cooler palette, ask us about the greyer herringbone options in the range instead of forcing a warm floor into a cold scheme.",
        ],
      },
      {
        heading: "Herringbone flooring: common questions",
        paragraphs: [
          "Is herringbone flooring hard to walk on or uneven? No — once fitted, a herringbone floor is completely flat and feels identical underfoot to any other engineered wood floor. The pattern is purely visual; it doesn't affect the floor's surface.",
          "Can herringbone be laid over underfloor heating? Yes, provided you choose an engineered product specified for underfloor heating (check the TOG rating and manufacturer approval) and the installation follows the correct commissioning process, bringing the heating up gradually before and after fitting.",
          "Will herringbone flooring date? Given its multi-century history and current resurgence, herringbone has proven itself as a genuinely classic rather than trend-led pattern. It has fallen in and out of fashion before, but it has never looked dated in the way some 2000s-era flooring trends have.",
          "How much extra should I budget over a straight lay? As a rule of thumb, budget for labour to run 50-100% higher than a straight-plank installation of the same floor, with material costs staying broadly similar. We'll always give you an exact, itemised quote so there are no surprises.",
        ],
      },
    ],
    internalLinks: [
      { label: "Explore our Engineered Wood range", href: "/services/engineered-wood" },
      { label: "See all flooring options", href: "/services/flooring" },
      { label: "Book a free measure and quote", href: "/contact" },
    ],
  },
  {
    slug: "lvt-vs-laminate",
    title: "LVT vs Laminate Flooring: Which is Right for Your Home?",
    category: "Buying Guides",
    excerpt:
      "Two of the most popular flooring choices in Northern Ireland, head to head — waterproofing, durability, underfloor heating, cost, and which rooms suit each.",
    image: "/images/lvt-bathroom.jpg",
    datePublished: "2026-06-03",
    metaDescription:
      "LVT vs laminate flooring compared for Northern Ireland homes — waterproofing, durability, cost, underfloor heating compatibility and room-by-room recommendations from Feeney Flooring.",
    body: [
      {
        paragraphs: [
          "Of all the questions we get asked in the showroom, this is the one that comes up almost every single day: should I go for LVT or laminate? Both are excellent, sensible flooring choices and both have come a long way in the last decade, but they solve slightly different problems, and the right answer genuinely depends on the room, the household and the budget. Here's the honest, practical comparison we'd give you standing in front of the samples.",
        ],
      },
      {
        heading: "Waterproofing",
        paragraphs: [
          "This is the biggest practical difference between the two. LVT — luxury vinyl tile — is fully waterproof, both the surface and the core. Spills, splashes, even standing water from a leak, can sit on an LVT floor without any risk of swelling, warping or damage, provided it's wiped up in reasonable time. That's what makes it the standard recommendation for bathrooms, kitchens, utility rooms and porches.",
          "Laminate has genuinely improved on this front, and most of the ranges we stock now are described as 'water resistant', meaning the surface and locking joints can handle everyday splashes and quick spills without a problem. But laminate's core is still a high-density fibreboard (HDF), and standing water left for hours, or a slow undetected leak, can cause the board to swell and the joints to fail. Laminate is not, and shouldn't be marketed as, a true waterproof floor. If a room has any regular exposure to water, LVT is the safer long-term choice.",
        ],
      },
      {
        heading: "Durability and wear layer",
        paragraphs: [
          "Both floors are rated by a wear layer thickness (for LVT, measured in mm on top of the printed design layer) and both are genuinely hard-wearing options for family homes. LVT's wear layer sits directly over a flexible, impact-absorbing vinyl core, which makes it very resistant to dropped items, and scuffs tend to buff out rather than chip. Good quality LVT, properly fitted, regularly lasts 15-20 years in a busy household.",
          "Laminate's wear layer is a hard, scratch-resistant coating over the printed decor paper and rigid HDF core. It resists scratches and scuffs extremely well — often better than LVT against dragged furniture or grit — but because the core is rigid rather than flexible, a heavy dropped object is more likely to chip or dent the surface than it would be on LVT. Laminate typically has a slightly shorter realistic lifespan than premium LVT, more commonly 10-15 years, though this varies hugely by quality tier.",
        ],
      },
      {
        heading: "Cost",
        paragraphs: [
          "Laminate is generally the more budget-friendly of the two, with decent quality ranges starting from around £22 per square metre. LVT starts a little higher, from around £28 per square metre, reflecting its waterproof core and typically more premium look and feel. Both ranges go up considerably from those entry points depending on plank size, wear layer thickness, and realism of the wood or stone visual — at the upper end, premium LVT and premium laminate can end up similarly priced, so it's worth looking at actual samples in your budget bracket rather than assuming one category is always cheaper.",
        ],
      },
      {
        heading: "Installation method",
        paragraphs: [
          "Laminate is almost always a floating floor, click-locked together and laid over an underlay, sitting on top of the subfloor without being fixed down. This makes it a relatively quick, clean installation and one of the more straightforward floors to fit.",
          "LVT comes in a few different formats. Click LVT installs similarly to laminate, as a floating floor over underlay. Glue-down LVT is bonded directly to the subfloor, which gives a slightly more solid underfoot feel and is often preferred in kitchens and high-traffic commercial-style spaces, but it does require a very flat, well-prepared subfloor and takes longer to fit. We'll advise on the right format for your specific room and subfloor during your free measure.",
        ],
      },
      {
        heading: "Underfloor heating compatibility",
        paragraphs: [
          "Both LVT and laminate can work over underfloor heating, but LVT generally has the edge here. Its thinner profile and typically lower TOG rating mean heat transfers through it more efficiently, and vinyl has no risk of the moisture-related expansion issues that some laminate cores can experience with sustained warmth. If underfloor heating is a firm requirement, we'd lean toward recommending LVT, though there are laminate ranges specified and approved for UFH use too — always check the manufacturer's TOG rating and UFH approval before choosing.",
        ],
      },
      {
        heading: "Look and feel underfoot",
        paragraphs: [
          "This is genuinely a matter of taste and both have improved enormously in realism. Modern LVT uses embossed-in-register texturing, meaning the surface texture lines up with the printed wood grain or stone pattern, so it looks and feels remarkably like the real material — and it has a slightly softer, warmer, more forgiving feel underfoot thanks to its flexible core, which some households prefer for comfort and noise reduction. Laminate has a harder, more solid feel underfoot, closer to walking on real timber or stone, which some people specifically prefer, and its printed surface detail is equally sharp and convincing in the better ranges.",
        ],
      },
      {
        heading: "Impact on property value",
        paragraphs: [
          "Neither floor is likely to be a dealbreaker for buyers, but well-fitted, good quality flooring of either type reads as a well-maintained home and supports value. Where LVT has an edge is in wet-prone rooms — a waterproof kitchen or bathroom floor is a genuine reassurance to a buyer that there's no hidden water damage risk, whereas ageing laminate in a kitchen can sometimes raise a question mark during a survey or viewing if any board edges have swollen.",
        ],
      },
      {
        heading: "Room by room recommendations",
        paragraphs: [
          "Kitchen: LVT is the clear recommendation, for waterproofing against spills, dishwasher and washing machine leaks, and general kitchen wear and tear. Bathroom: LVT again, without much debate — this is the room where a genuinely waterproof floor matters most. Living room: both work beautifully here since water exposure is minimal; this often comes down to underfoot feel and budget, with laminate's harder, warmer wood-like feel appealing to some and LVT's softer, quieter feel appealing to others. Bedroom: similarly, either is fine, though carpet remains the more popular choice for bedrooms if warmth and softness underfoot is the priority. Hallway: LVT tends to be favoured here for durability against muddy shoes, wet umbrellas and general high traffic, though a quality laminate will also hold up well in a domestic hallway.",
        ],
      },
      {
        heading: "The verdict",
        paragraphs: [
          "If your priority is a genuinely waterproof floor for a kitchen, bathroom or utility room, or you want underfloor heating running as efficiently as possible, choose LVT. If your priority is the warmest budget-friendly option with excellent scratch resistance for a living room, bedroom or dining room where water exposure is minimal, laminate is an excellent, cost-effective choice. Many of our customers actually use both in the same house — LVT through the kitchen and bathroom, laminate through living areas and bedrooms — and that combination genuinely makes sense rather than being a compromise.",
        ],
      },
    ],
    internalLinks: [
      { label: "Browse our LVT range", href: "/services/lvt" },
      { label: "Browse our Laminate range", href: "/services/laminate" },
      { label: "Book a free measure and quote", href: "/contact" },
    ],
  },
  {
    slug: "best-flooring-for-pets",
    title: "Best Flooring for Pets in Northern Ireland: A Complete Guide",
    category: "Lifestyle",
    excerpt:
      "Muddy paws, claws and the odd accident — here's how to choose flooring that actually stands up to life with dogs and cats, without compromising on how your home looks.",
    image: "/images/engineered-wood-kitchen.jpg",
    datePublished: "2026-06-24",
    metaDescription:
      "The best flooring options for homes with pets in Northern Ireland — scratch resistance, waterproofing and cleaning ease compared across LVT, laminate, wood and carpet.",
    body: [
      {
        paragraphs: [
          "Choosing flooring for a home with pets means thinking about the floor differently than you might for a show home — it needs to survive claws, muddy walks, the odd puddle, and daily wear that a pet-free household simply doesn't put a floor through. The good news is that flooring technology has moved on hugely, and you no longer have to choose between a floor that looks good and one that copes with a boisterous Labrador or a house full of cats. Here's how the main flooring types actually stack up.",
        ],
      },
      {
        heading: "Scratch resistance by floor type",
        paragraphs: [
          "LVT and laminate both score well here, and for slightly different reasons. LVT's flexible surface tends to resist scratches from claws reasonably well, and light surface marks often buff out with normal foot traffic and cleaning. Laminate has a hard aluminium-oxide style wear layer specifically designed to resist scratching, and in our experience it's one of the most scratch-resistant options available for a home with an energetic dog.",
          "Solid and engineered wood need more care. A lacquered engineered oak floor will show claw marks over time, particularly from larger dogs or a cat that likes to sprint across the room, and while an oiled finish can be spot-repaired more easily than a lacquered one, wood floors generally require more mindful pet management — keeping nails trimmed, using rugs in high-traffic zip-around zones — than a resilient floor like LVT or laminate.",
          "Carpet shows wear differently: it doesn't scratch, but claws can snag and pull loop-pile carpets over time, and cut-pile carpets flatten and show wear patterns in well-used paths much faster in a busy pet household than in a pet-free one.",
        ],
      },
      {
        heading: "Why waterproofing matters so much with pets",
        paragraphs: [
          "Even the best-trained pet has accidents, and puppies, kittens and elderly animals especially so. This is where LVT has a real practical advantage — spills, accidents and muddy paw prints sit on the surface and can be wiped away completely without any risk of staining or damage soaking into the floor itself. Laminate's water-resistant surface handles a quickly-cleaned accident reasonably well, but repeated or undiscovered accidents risk swelling at the joints over time. Carpet is the most vulnerable flooring type here — liquid soaks into the pile and underlay, and without immediate, thorough cleaning, odour and staining can become a long-term problem that's very difficult to fully resolve, sometimes requiring underlay replacement.",
        ],
      },
      {
        heading: "Cleaning ease",
        paragraphs: [
          "For day-to-day pet hair, mud and general mess, hard flooring is simply easier to keep on top of. LVT and laminate can be swept, vacuumed and mop-cleaned in minutes, and neither traps hair or odour the way carpet fibres do. Carpet requires more frequent, more thorough vacuuming to manage shedding, and pet dander and odour can build up in the pile and underlay over months even with regular cleaning — this is one of the most common regrets we hear from customers who chose deep-pile carpet without fully weighing up life with a shedding dog.",
        ],
      },
      {
        heading: "Comfort and grip underfoot for pets",
        paragraphs: [
          "It's not just about durability — the floor needs to work for the pet too. Very smooth, glossy tile-look or highly polished floors can be genuinely difficult for dogs to get traction on, particularly older dogs, large breeds, or dogs recovering from joint issues, and repeated slipping can cause real anxiety and even injury over time. We'd steer pet owners toward flooring with a matt or lightly textured finish rather than a high-gloss one — most textured LVT and laminate ranges give dogs far better grip than a polished tile or glossy laminate. Carpet naturally offers the best grip and the most comfortable surface for pets to lie on, which is why many owners keep at least one carpeted room as a comfortable retreat even if hard flooring covers the busier parts of the house.",
        ],
      },
      {
        heading: "Recommendations by pet type",
        paragraphs: [
          "Dogs: prioritise a textured (not glossy) LVT or laminate through main living areas and hallways for traction, waterproofing and scratch resistance, especially for larger or older dogs. If you have a dog-friendly household with multiple pets or a particularly energetic breed, LVT's waterproofing usually tips the balance in its favour over laminate.",
          "Cats: scratching tends to be more localised (furniture, scratching posts) than the whole-floor wear a dog creates, so wood and laminate both perform well, though claws sprinting across a lacquered wood floor will show wear over years. LVT remains the lowest-maintenance option if you want to future-proof against any surprises.",
          "Small pets (rabbits, guinea pigs kept loose, etc.): waterproofing and easy cleaning matter most given how localised their mess tends to be — LVT is the practical choice in any room they have regular access to.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Deep-pile or shag-style carpets are the biggest mismatch for a pet household — they trap hair, dander and odour far more than a low-pile or loop-pile carpet, and are genuinely difficult to keep smelling fresh long-term. Delicate solid hardwood, particularly softer wood species, is also worth avoiding or at least going in with realistic expectations, since claw marks on solid timber are harder and more expensive to remedy than on engineered wood, LVT or laminate.",
        ],
      },
      {
        heading: "Cost considerations",
        paragraphs: [
          "The practical upshot is that LVT (from £28 per square metre) and laminate (from £22 per square metre) tend to be the best value, lowest-maintenance choices for a busy pet household, while carpet, though often cheaper per square metre for a basic loop-pile, tends to cost more over the medium term once you factor in more frequent professional cleaning and a shorter realistic lifespan under heavy pet use. If budget is tight and you love the idea of carpet in a bedroom or living room, choosing a durable, tightly-woven loop-pile range and having a hard, waterproof floor like LVT in the kitchen, hallway and utility room gives you the best of both without overspending.",
        ],
      },
      {
        heading: "Skirting boards and transitions matter too",
        paragraphs: [
          "It's easy to focus entirely on the floor itself and overlook the details around it, but skirting boards, door thresholds and transition strips take a surprising amount of punishment in a pet household — a dog braking hard around a corner or a cat using the skirting as a scratching post on the way past will find the weak points quickly. Choosing a slightly more robust, paintable MDF or hardwood skirting rather than the thinnest budget option, and fitting solid metal or uPVC transition strips at doorways rather than adhesive plastic ones, both pay off over time and are worth raising with your fitter when you're specifying a pet-friendly room.",
        ],
      },
      {
        heading: "Rugs, mats and multi-surface strategies",
        paragraphs: [
          "A common and very sensible approach is to mix flooring strategically rather than trying to find one perfect surface for the whole house. A durable, low-pile washable mat immediately inside external doors catches the worst of the mud and moisture from paws before it reaches the main flooring, and a machine-washable mat under food and water bowls saves a huge amount of daily wiping. In rooms where pets spend most of their time — a family room or kitchen-diner — a hard, waterproof floor like LVT gives you full confidence against accidents and mess, while a comfortable rug in a quieter corner gives an older dog or a cat somewhere soft and warm to settle that isn't the sofa. This kind of practical zoning tends to work better in real family life than trying to force one flooring type to do every job perfectly.",
        ],
      },
      {
        heading: "A final word on getting the right fit",
        paragraphs: [
          "Every pet household is a little different — a single elderly cat puts very different demands on a floor than two young Labradors and a toddler, and being upfront with us about your pets, their age, breed and habits during your free measuring visit genuinely helps us steer you toward the right range and finish rather than just the most popular one. We've fitted flooring in enough pet-owning homes across Antrim, Crumlin and the wider area to have a good practical sense of what actually holds up versus what looks good in a showroom but disappoints within a year, and we're always happy to talk through the honest trade-offs for your specific situation.",
        ],
      },
    ],
    internalLinks: [
      { label: "Explore our LVT range", href: "/services/lvt" },
      { label: "Browse Carpet & Stairs options", href: "/services/carpet" },
      { label: "Book a free measure and quote", href: "/contact" },
    ],
  },
  {
    slug: "made-to-measure-blinds-guide",
    title: "Why Made to Measure Blinds Are Worth It: The Complete Guide",
    category: "Blinds Guides",
    excerpt:
      "From measuring to fitting, safety regulations to cost — everything you need to know before choosing blinds for your home.",
    image: "/images/blinds-window.jpg",
    datePublished: "2026-07-08",
    metaDescription:
      "A complete guide to made to measure blinds for Northern Ireland homes — how measuring and fitting works, blind types explained, child safety rules, and a room-by-room cost guide.",
    body: [
      {
        paragraphs: [
          "Blinds are one of those purchases where the difference between an off-the-shelf option and a properly made-to-measure one is far bigger than people expect until they've lived with both. Here's a straightforward, practical guide to help you decide what's right for your windows.",
        ],
      },
      {
        heading: "Made to measure vs off the shelf",
        paragraphs: [
          "Off-the-shelf blinds come in a limited set of standard widths and drops, meaning almost no window gets an exact fit. That leaves gaps at the sides where light floods in and privacy is compromised, a tricky trim-down process that can void warranties or damage the mechanism, and a genuinely limited choice of fabric, colour and control options.",
          "Made to measure blinds are manufactured to your window's precise dimensions, down to the millimetre, which means a clean, flush fit with no light gaps, the full range of fabrics, colours, and control mechanisms available to choose from, and — because they're built for your specific window rather than trimmed to fit — a considerably longer working lifespan. The mechanism isn't compromised by cutting, so it operates smoothly for years rather than months. For anything beyond a very standard, small window where you're not concerned about a perfect fit, made to measure is worth the difference in cost.",
        ],
      },
      {
        heading: "How the measuring process actually works",
        paragraphs: [
          "When we measure your windows, we take exact recess or exact reveal measurements depending on how the blind will be fitted — inside the window recess for a neat, flush look, or as a full outside-mount for maximum light block and privacy where a recess is too shallow or doesn't exist. We measure width at three points (top, middle, bottom) and take the smallest, since window recesses are rarely perfectly square, along with drop measurements to ensure the blind hangs correctly and any obstacles — handles, hinges, sills — are accounted for before the order goes to manufacture. This is why we offer a free in-home measuring visit rather than asking customers to measure themselves; a couple of millimetres out at this stage is the single biggest cause of a poor-fitting blind.",
        ],
      },
      {
        heading: "The fitting process",
        paragraphs: [
          "Once your blinds are manufactured to the measurements taken, fitting is usually a quick, clean job — most rooms take well under an hour per window. Brackets are fitted to the recess or wall/architrave depending on the mount type, the headrail is secured, and the blind is tested through its full range of motion before we finish. For homes ordering blinds across multiple rooms, we typically complete a full house in a single visit.",
        ],
      },
      {
        heading: "Blind types explained",
        paragraphs: [
          "Roller blinds: a single fabric panel that rolls neatly around a headrail tube — simple, versatile, and available in blackout, light-filtering or sheer fabrics for almost any room. Venetian blinds: horizontal slats (wood, faux wood or aluminium) that tilt to control light direction precisely while still allowing airflow. Vertical blinds: wide fabric or PVC vanes that stack to one or both sides, ideal for large windows and patio doors where full clear access is needed. Roman blinds: soft fabric that folds into neat horizontal pleats when raised, giving a more tailored, textile-led look than roller blinds. Blackout blinds: any of the above styles made with a dedicated blackout lining or fabric, purpose-built for bedrooms, nurseries and media rooms where full light exclusion matters.",
        ],
      },
      {
        heading: "UK child safety regulations for blinds",
        paragraphs: [
          "Blind cord safety is a genuine, well-established regulatory area in the UK, and it's worth understanding rather than treating as small print. Corded blinds with looped chains or cords present a strangulation risk to young children if the cord isn't properly secured, and current UK regulations require that all new corded blinds are supplied with a safety device — such as a cleat to wind the cord onto, a breakaway connector that separates under pressure, or a tensioner that keeps the cord permanently taut against the window frame — fitted as standard.",
          "For homes with young children, cordless options are generally the safer and increasingly the preferred choice: this includes wand-operated venetian and vertical blinds, spring-assisted or motorised roller blinds, and blinds with a fully enclosed chain mechanism. We always fit any required safety device as standard on corded blinds and can advise on the safest option for nurseries and children's bedrooms specifically — this isn't an upsell, it's a straightforward safety recommendation.",
        ],
      },
      {
        heading: "Room by room guide",
        paragraphs: [
          "Kitchen: roller blinds in a wipeable, moisture-resistant fabric are the practical standard, easy to keep clean near cooking and sink areas. Bathroom: choose a moisture-resistant or PVC-backed fabric roller blind, or aluminium venetian blinds, both of which resist the humidity a bathroom generates without warping or staining. Bedroom and nursery: blackout roller or blackout roman blinds are the most requested combination, and for a nursery specifically we'd always recommend a cordless or fully safety-device-fitted option as standard. Living room: this is where roman blinds or vertical/venetian blinds for larger windows and patio doors tend to shine, since the room is often the main showcase space and the softer, more tailored look suits it.",
        ],
      },
      {
        heading: "Cost guide",
        paragraphs: [
          "Made to measure blinds start from around £75 per window for a standard roller blind in a straightforward fabric, with cost increasing based on window size, fabric grade, blackout lining, and mechanism type (motorised options sit considerably higher than manual). Venetian and vertical blinds are generally priced similarly to roller blinds at the entry level, with roman blinds typically the most expensive category given the additional fabric and construction involved. We'll always give you an exact, itemised quote per window during your free measuring visit.",
        ],
      },
      {
        heading: "Fabric choice and light control",
        paragraphs: [
          "Beyond the mechanism itself, the fabric you choose has a big impact on how a room feels day to day. Sheer and light-filtering fabrics let daylight diffuse softly into a room while still providing a good level of privacy, and suit living rooms and kitchens where you want the room to stay bright. Dim-out fabrics reduce light considerably more than a sheer without fully blocking it, a good middle-ground choice for a home office or a living room used for evening television. True blackout fabric or lining blocks light almost entirely and is the right call for bedrooms, nurseries and any room used for shift-work sleeping patterns. It's worth bringing real fabric samples into the room they'll be used in and viewing them at the time of day the blind matters most, since fabric colour and opacity can look noticeably different under daylight versus artificial light in the showroom.",
        ],
      },
      {
        heading: "Motorised and smart blind options",
        paragraphs: [
          "Motorised blinds have become considerably more affordable and reliable in recent years, and we're fitting more of them each year, particularly on hard-to-reach windows — stairwells, large picture windows, and conservatory roof lights — where a manual chain or wand is awkward or impossible to use safely. Beyond convenience, motorised blinds are also inherently cordless, which makes them a straightforward safety choice for a nursery or children's bedroom without any compromise on the blind style you actually want. Many systems now integrate with smart home hubs, allowing blinds to be scheduled to open and close automatically or controlled via a phone app, which is useful for security when you're away from home as well as for comfort.",
        ],
      },
      {
        heading: "Getting the most from your free measuring visit",
        paragraphs: [
          "Because blinds are made to order and can't be returned once manufactured to your exact measurements, getting the visit right matters more than with most other home purchases. Bring any inspiration photos or fabric preferences you already have, think about which rooms need blackout versus light-filtering, and flag any young children in the household so we can prioritise safe, cordless options where it matters most. We'll talk through recess versus outside-mount fitting for each window, confirm mechanism and fabric choices on the spot, and leave you with a clear, itemised quote — no pressure, no obligation, and no guesswork about what you're paying for.",
        ],
      },
    ],
    internalLinks: [
      { label: "Explore our Made to Measure Blinds", href: "/services/blinds" },
      { label: "See our Roller Blinds range", href: "/services/roller-blinds" },
      { label: "Book a free measure and quote", href: "/contact" },
    ],
  },
  {
    slug: "flooring-underfloor-heating",
    title: "The Best Flooring for Underfloor Heating in Northern Ireland",
    category: "Technical Guides",
    excerpt:
      "TOG ratings, moisture, compatible floor types and installation pitfalls — a technical, honest guide to choosing flooring for underfloor heating.",
    image: "/images/flooring-samples.jpg",
    datePublished: "2026-07-27",
    metaDescription:
      "Which flooring works best over underfloor heating in Northern Ireland homes — TOG ratings explained, compatible floor types, installation considerations and product recommendations.",
    body: [
      {
        paragraphs: [
          "Underfloor heating has become a standard feature in new builds and a popular renovation upgrade across Northern Ireland, but it changes the flooring conversation considerably. Not every floor is suited to sitting over a heat source, and getting the specification wrong can mean anything from an inefficient, sluggish-heating room to genuine damage to the floor itself. Here's a clear, technical but practical guide to getting it right.",
        ],
      },
      {
        heading: "How underfloor heating actually works",
        paragraphs: [
          "There are two main systems. Wet (water-based) underfloor heating circulates warm water through pipework embedded in the floor screed or fixed to the subfloor beneath it, connected to your boiler or heat pump — this is the more common choice in new builds and larger renovation projects because it's cheaper to run, though it requires more disruptive installation. Electric underfloor heating uses a mat or cable system that heats directly via electricity, sits in a thinner layer closer to the floor surface, and is quicker and less disruptive to install, making it popular for single-room upgrades like a bathroom or kitchen retrofit, though it costs more to run day to day.",
          "Both systems heat the room from the floor upward rather than via radiators pushing warm air, which is more energy-efficient and gives a more even room temperature — but both rely on heat being able to pass through the flooring material efficiently, which is where floor choice becomes a technical, not just aesthetic, decision.",
        ],
      },
      {
        heading: "Which floor types are compatible",
        paragraphs: [
          "LVT is one of the best-performing options over underfloor heating. Its thin profile and typically low thermal resistance let heat pass through efficiently, and vinyl has no moisture-related expansion risk from the gentle, sustained warmth of underfloor heating. Engineered wood also works well over underfloor heating, but only when the specific range is manufactured and rated for it — the cross-layered construction that gives engineered wood its dimensional stability is what allows it to tolerate the heat cycling without the expansion issues solid wood would suffer, but this must be confirmed with the manufacturer's specification rather than assumed. Tile is naturally excellent over underfloor heating, being highly thermally conductive and completely stable under heat.",
          "Laminate and solid hardwood are considerably more limited and, in the case of solid wood, generally risky. Some laminate ranges are specifically manufactured and TOG-rated for underfloor heating use, and these can work reasonably well, but many standard laminate ranges are not approved and using them over UFH risks core swelling and joint failure over time as the floor is repeatedly warmed and cooled. Solid hardwood is the highest-risk option of all — its natural tendency to expand and contract with temperature makes it fundamentally poorly suited to sitting directly over a consistent heat source, and most solid wood manufacturers either don't approve it for UFH use at all or attach significant caveats and reduced warranty cover if it's used this way.",
        ],
      },
      {
        heading: "TOG ratings explained simply",
        paragraphs: [
          "TOG is the unit used to measure a material's resistance to heat flow — the same unit used for duvets, and the concept translates directly: the lower the TOG rating, the more easily heat passes through the material, and the more efficiently your underfloor heating can warm the room. A high-TOG floor (or a high-TOG underlay beneath it) acts as an insulating barrier, meaning the heating system has to work harder and longer to achieve the same room temperature, which costs more to run and can mean the floor never quite reaches a comfortable warmth.",
          "As a practical guide, for underfloor heating to work efficiently, aim for a combined TOG rating of the flooring plus any underlay of under 1.5 tog. Most underfloor heating manufacturers publish this exact figure as their recommended maximum, and it's worth checking both the flooring and the underlay TOG rating separately, since both contribute to the combined total — a good LVT and thin underlay together will usually sit comfortably under this threshold, whereas a thick, plush underlay on its own can push you over it even with a compatible floor on top.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Thick, cushioned underlay is one of the most common and avoidable mistakes — it feels nice underfoot but its insulating effect can significantly undermine an otherwise well-specified UFH-compatible floor, so always use the thin, UFH-specific underlay recommended for the flooring range rather than a generic thick underlay bought separately. Solid hardwood without explicit manufacturer approval for underfloor heating is the other major one to avoid; if a solid wood supplier can't confirm UFH approval in writing, treat that as a decline, not an assumption of yes.",
        ],
      },
      {
        heading: "Installation considerations",
        paragraphs: [
          "If you're fitting flooring over a wet underfloor heating system installed in a fresh screed, the screed needs adequate time to dry fully before flooring goes down — this can take several weeks depending on screed depth and site conditions, and fitting too early risks trapping residual moisture beneath the floor. Once the floor is fitted, the heating system should be commissioned gradually: brought up slowly in small temperature increments over several days rather than switched straight to full temperature, allowing the floor and screed to adjust evenly. This commissioning process should also be followed in reverse at the end of a heating season, cooling the system down gradually rather than switching it off abruptly. We'll talk you through the correct sequence for your specific system and flooring choice as part of the installation.",
        ],
      },
      {
        heading: "Cost impact",
        paragraphs: [
          "Choosing UFH-compatible flooring doesn't generally carry much of a price premium in itself — a good LVT range suited to underfloor heating starts from the same £28 per square metre as standard LVT, and UFH-approved engineered wood ranges are typically priced in line with comparable non-approved ranges. Where cost does come in is on the underlay side, where a proper thin, UFH-rated underlay is a small additional cost worth paying rather than cutting corners with a cheaper, thicker generic underlay that could compromise the whole system's efficiency.",
        ],
      },
      {
        heading: "Product recommendations",
        paragraphs: [
          "For engineered wood over underfloor heating, we recommend ranges from the Ville engineered wood collection that are specifically rated and approved for UFH use — ask us to confirm the exact range and TOG specification for your project, as approval varies across the wider collection. For LVT, most of our core LVT ranges are well suited to underfloor heating given the material's naturally low thermal resistance, and we'll confirm the specific TOG figures for the range you're considering during your free measuring visit so you can be confident the whole system, floor and underlay included, sits comfortably within your heating manufacturer's recommendations.",
        ],
      },
    ],
    internalLinks: [
      { label: "Explore our LVT range", href: "/services/lvt" },
      { label: "Explore our Engineered Wood range", href: "/services/engineered-wood" },
      { label: "Book a free measure and quote", href: "/contact" },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
