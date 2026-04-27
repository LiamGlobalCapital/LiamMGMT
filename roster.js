// ============================================================
// LIAM MGMT — TALENT ROSTER
// ============================================================
// Single source of truth for the talent on liammgmt.com.
// Both index.html and profile.html load this file.
//
// To add a new talent:
//   1. Add an entry to the roster array below
//   2. Drop their photos in photos/<slug>/  (card.jpg + 01.jpg, 02.jpg, ...)
//
// To remove a talent: delete their entry below.
// To edit a talent: change their entry below.
// ============================================================

const roster = [
  {
    slug: 'jeffrey-zhang',
    first: 'Jeffrey', last: 'Zhang',
    division: 'men',
    tags: ['Editorial', 'Runway'],
    palette: ['#d8c0a8', '#1a1410'],   // fallback colors if photos are missing
    stats: {
      height: `6'3" / 191 CM`,
      hair: 'Black',
      eyes: 'Brown',
      waist: '28"',
      suit: '44',
      shoes: '11'
    },
    instagram: { handle: '@jeffreyzhang', url: 'https://instagram.com/jeffreyzhang' },
    territory: 'New York',
    photoCount: 0    // set this to the number of files in photos/jeffrey-zhang/ (excluding card.jpg)
  },
  {
    slug: 'darcy-davis',
    first: 'Darcy', last: 'Davis',
    division: 'men',
    tags: ['Editorial', 'Print'],
    palette: ['#c89878', '#2a1810'],
    stats: {
      height: `6'3" / 191 CM`,
      hair: 'Brown',
      eyes: 'Brown',
      waist: '31"',
      suit: '40L',
      shoes: '11'
    },
    instagram: { handle: '@darcymckee', url: 'https://instagram.com/darcymckee' },
    territory: 'New York',
    photoCount: 0
  },
  {
    slug: 'dalton-ferguson',
    first: 'Dalton', last: 'Ferguson',
    division: 'creators',
    tags: ['Model', 'Influencer'],
    palette: ['#d4b894', '#241712'],
    stats: { height: '--', hair: '--', eyes: '--', waist: '--', suit: '--', shoes: '--' },
    instagram: { handle: '@daltonferguson', url: 'https://instagram.com/daltonferguson' },
    territory: 'New York',
    photoCount: 0
  },
  {
    slug: 'louie-doherty',
    first: 'Louie', last: 'Doherty',
    division: 'creators',
    tags: ['Muay Thai', 'Influencer'],
    palette: ['#c2a080', '#1f1208'],
    stats: { height: '--', weight: '--', reach: '--', stance: '--', record: '--' },
    instagram: { handle: '@louiedoherty', url: 'https://instagram.com/louiedoherty' },
    territory: 'New York',
    sport: true,
    photoCount: 0
  },
  {
    slug: 'alex-mrabet',
    first: 'Alex', last: 'Mrabet',
    division: 'creators',
    tags: ['Muay Thai', 'Influencer'],
    palette: ['#b89472', '#1c100a'],
    stats: { height: '--', weight: '--', reach: '--', stance: '--', record: '--' },
    instagram: { handle: '@alexmrabet', url: 'https://instagram.com/alexmrabet' },
    territory: 'New York',
    sport: true,
    photoCount: 0
  },
  {
    slug: 'kane-laperriere',
    first: 'Kane', last: 'Laperriere',
    division: 'creators',
    tags: ['Muay Thai', 'Influencer'],
    palette: ['#cca888', '#221610'],
    stats: { height: '--', weight: '--', reach: '--', stance: '--', record: '--' },
    instagram: { handle: '@kanelaperriere', url: 'https://instagram.com/kanelaperriere' },
    territory: 'New York',
    sport: true,
    photoCount: 0
  },

  // ===== Coming Soon slots (will appear under Development division) =====
  { slug: 'tba-1', first: 'Coming', last: 'Soon', division: 'development', tags: ['New Face'], palette: ['#e8e0d4', '#9a9080'], comingSoon: true },
  { slug: 'tba-2', first: 'Coming', last: 'Soon', division: 'development', tags: ['New Face'], palette: ['#e2dccc', '#928878'], comingSoon: true },
  { slug: 'tba-3', first: 'Coming', last: 'Soon', division: 'development', tags: ['New Face'], palette: ['#dcd4c4', '#8a8074'], comingSoon: true },
  { slug: 'tba-4', first: 'Coming', last: 'Soon', division: 'development', tags: ['New Face'], palette: ['#e6dccd', '#968c7c'], comingSoon: true }
];
