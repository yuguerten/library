export interface HistoryEvent {
  year: string;
  title: string;
  location: string;
  body: string;
  era: 'early' | 'industrial' | 'revolutionary' | 'modern';
  /** Optional representative image (Wikimedia Commons URL). */
  image?: string;
  /** Optional "learn more" link to an authoritative source. */
  learnMore?: { label: string; url: string };
}

export const eras = [
  { key: 'early', label: 'Early Radicalism', from: '1516', to: '1789' },
  { key: 'industrial', label: 'The Industrial Age', from: '1790', to: '1870' },
  { key: 'revolutionary', label: 'Revolution & Counter-revolution', from: '1871', to: '1945' },
  { key: 'modern', label: 'The Modern Left', from: '1945', to: 'today' },
] as const;

export const history: HistoryEvent[] = [
  {
    year: '1516',
    title: 'Utopia',
    location: 'England',
    era: 'early',
    body:
      'Thomas More coins the term "utopia" and imagines a society without private property — a foundational literary vision of a classless commonwealth.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/1518_Thomas_More_Utopia_%28Alphabet_November_edition%29_%28Biblioteca_nacional_de_Portugal%29.jpg',
    learnMore: { label: 'Utopia (book)', url: 'https://en.wikipedia.org/wiki/Utopia_(book)' },
  },
  {
    year: '1793',
    title: 'The French Revolution & the First Republic',
    location: 'France',
    era: 'early',
    body:
      'The sans-culottes and the Jacobins push the revolution leftward. Babeuf’s Conspiracy of Equals (1796) demands communal property — an early communist programme.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sans-culotte.jpg/960px-Sans-culotte.jpg',
    learnMore: { label: 'Sans-culottes', url: 'https://en.wikipedia.org/wiki/Sans-culottes' },
  },
  {
    year: '1820s–40s',
    title: 'Utopian Socialism',
    location: 'Europe',
    era: 'industrial',
    body:
      'Saint-Simon, Fourier and Owen propose cooperative, planned societies and workers’ communities as a moral alternative to industrial capitalism.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Portrait_de_Charles_Fourier_%281772%E2%80%931837%29%2C_par_Jean_Gigoux.jpg',
    learnMore: { label: 'Utopian socialism', url: 'https://en.wikipedia.org/wiki/Utopian_socialism' },
  },
  {
    year: '1848',
    title: 'The Communist Manifesto',
    location: 'Europe',
    era: 'industrial',
    body:
      'Marx and Engels publish the Manifesto amid a wave of revolutions — the class struggle is declared openly, and the spectre of communism haunts Europe.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/The_Soviet_Union_1964_CPA_3092_stamp_%28Centenary_of_First_International_%281864%E2%80%931876%29._Title_pages_of_%27The_Communist_Manifesto%27_in_German_and_Russian%29.jpg',
    learnMore: { label: 'The Communist Manifesto', url: 'https://en.wikipedia.org/wiki/The_Communist_Manifesto' },
  },
  {
    year: '1864',
    title: 'The First International',
    location: 'London',
    era: 'industrial',
    body:
      'The International Workingmen’s Association unites European workers. Marx drafts its inaugural address; the struggle between Marxists and anarchists defines it.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/International-founding-1864.jpg',
    learnMore: { label: 'International Workingmen’s Association', url: 'https://en.wikipedia.org/wiki/International_Workingmen%27s_Association' },
  },
  {
    year: '1871',
    title: 'The Paris Commune',
    location: 'Paris',
    era: 'revolutionary',
    body:
      'For 72 days workers rule Paris: the first worker’s government in history, with elected councils, before being bloodily crushed. Marx hails it as a new form of state.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Commune_de_Paris%2C_Comit%C3%A9_Central%2C_%C3%89lections_%C3%A0_la_Commune%2C_25_mars_1871.jpg',
    learnMore: { label: 'Paris Commune', url: 'https://en.wikipedia.org/wiki/Paris_Commune' },
  },
  {
    year: '1889',
    title: 'The Second International',
    location: 'Paris',
    era: 'revolutionary',
    body:
      'The socialist parties of Europe found the Second International. May Day is proclaimed. The split between reform and revolution — Bernstein vs. Luxemburg — erupts.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Stuttgart-congress-of-second-international-1907-iisg-big-1.jpg/960px-Stuttgart-congress-of-second-international-1907-iisg-big-1.jpg',
    learnMore: { label: 'Second International', url: 'https://en.wikipedia.org/wiki/Second_International' },
  },
  {
    year: '1902',
    title: 'What Is to Be Done?',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'Lenin publishes his theory of the vanguard party, arguing that a disciplined, professional revolutionary organization is necessary to lead the working class.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lenin_book_1902.jpg/960px-Lenin_book_1902.jpg',
    learnMore: { label: 'What Is to Be Done?', url: 'https://en.wikipedia.org/wiki/What_Is_to_Be_Done%3F' },
  },
  {
    year: '1905',
    title: 'The 1905 Revolution',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'A general strike and the first soviets (workers’ councils) shake the Tsar. Bloody Sunday ignites it. A dress rehearsal, Lenin called it, for 1917.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bloody_Sunday_Russia_1905.png/960px-Bloody_Sunday_Russia_1905.png',
    learnMore: { label: '1905 Russian Revolution', url: 'https://en.wikipedia.org/wiki/1905_Russian_Revolution' },
  },
  {
    year: '1917',
    title: 'The October Revolution',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'Bolsheviks under Lenin and Trotsky seize power in the name of the soviets — the first successful proletarian revolution, founding the USSR and the Third International.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/After_the_capture_of_the_Winter_Palace._Petrograd._Morning_on_26_October_1917.jpg',
    learnMore: { label: 'October Revolution', url: 'https://en.wikipedia.org/wiki/October_Revolution' },
  },
  {
    year: '1918–23',
    title: 'Revolutions in Germany & Hungary',
    location: 'Germany, Hungary',
    era: 'revolutionary',
    body:
      'Spartacist uprising in Berlin (1919) and the short-lived Bavarian and Hungarian Soviet Republics. Luxemburg and Liebknecht are murdered by right-wing militias.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Soldiers_the_Brandenburger_Tor_during_the_Spartacist_uprising_Jan_7_1919.jpg',
    learnMore: { label: 'German Revolution (1918–1919)', url: 'https://en.wikipedia.org/wiki/German_Revolution_of_1918%E2%80%931919' },
  },
  {
    year: '1929',
    title: 'The Great Depression',
    location: 'Global',
    era: 'revolutionary',
    body:
      'Capitalist crisis collapses output and employment worldwide. Left parties and unions surge; the crisis discredits liberal capitalism and fuels both communism and fascism.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Photograph_of_a_Soup_Kitchen_during_the_Depression_-_NARA_-_196174.tif/lossy-page1-960px-Photograph_of_a_Soup_Kitchen_during_the_Depression_-_NARA_-_196174.tif.jpg',
    learnMore: { label: 'Great Depression', url: 'https://en.wikipedia.org/wiki/Great_Depression' },
  },
  {
    year: '1936–39',
    title: 'The Spanish Civil War',
    location: 'Spain',
    era: 'revolutionary',
    body:
      'Republican workers, anarchists and communists fight Franco’s fascist coup. The POUM and CNT experiment with collectivization — a world-historic anti-fascist struggle.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Republican_soldiers%2C_Extremadura_1936.jpg',
    learnMore: { label: 'Spanish Civil War', url: 'https://en.wikipedia.org/wiki/Spanish_Civil_War' },
  },
  {
    year: '1945',
    title: 'Welfare State & the Postwar Settlement',
    location: 'Britain, Europe',
    era: 'modern',
    body:
      'The defeat of fascism and the strength of labor movements force concessions: the NHS, social security, and strong unions reshape capitalist democracies.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Memorial_to_Aneurin_Bevan_-_geograph.org.uk_-_490054.jpg',
    learnMore: { label: 'Welfare state', url: 'https://en.wikipedia.org/wiki/Welfare_state' },
  },
  {
    year: '1955',
    title: 'The Bandung Conference',
    location: 'Indonesia',
    era: 'modern',
    body:
      'Post-colonial leaders of Asia and Africa meet — a milestone of Third World solidarity and anti-imperialism that reshapes the global left beyond Europe.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Asian%E2%80%93African_Conference_at_Bandung_April_1955.jpg',
    learnMore: { label: 'Bandung Conference', url: 'https://en.wikipedia.org/wiki/Bandung_Conference' },
  },
  {
    year: '1968',
    title: 'May ’68 & the Global New Left',
    location: 'France & worldwide',
    era: 'modern',
    body:
      'Students and workers nearly topple the French state. Around the world — Prague Spring, Mexico, the US — a new left contests authority, culture and imperialism.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Prenez_vos_d%C3%A9sirs_pour_des_r%C3%A9alit%C3%A9s_-_1968.jpg',
    learnMore: { label: 'May 68', url: 'https://en.wikipedia.org/wiki/May_68' },
  },
  {
    year: '1991',
    title: 'The End of the USSR',
    location: 'Global',
    era: 'modern',
    body:
      'The Soviet Union dissolves. The "end of history" is declared, but the contradictions of capitalism and the questions Marx raised do not disappear.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/RIAN_archive_140800_Signing_of_Protocol_on_Establishing_Commonwealth_of_Independent_States.jpg/960px-RIAN_archive_140800_Signing_of_Protocol_on_Establishing_Commonwealth_of_Independent_States.jpg',
    learnMore: { label: 'Dissolution of the USSR', url: 'https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union' },
  },
  {
    year: '2008–today',
    title: 'Crisis, Austerity & Resurgence',
    location: 'Global',
    era: 'modern',
    body:
      'The 2008 crash, the Occupy wave, Bernie Sanders and Corbyn surges, climate justice and new anti-austerity movements revive mass interest in the left.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Occupy_Wall_Street_Crowd_Size_2011_Shankbone.JPG/960px-Occupy_Wall_Street_Crowd_Size_2011_Shankbone.JPG',
    learnMore: { label: 'Occupy movement', url: 'https://en.wikipedia.org/wiki/Occupy_movement' },
  },
];
