export interface HistoryEvent {
  year: string;
  title: string;
  location: string;
  body: string;
  era: 'early' | 'industrial' | 'revolutionary' | 'modern';
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
  },
  {
    year: '1793',
    title: 'The French Revolution & the First Republic',
    location: 'France',
    era: 'early',
    body:
      'The sans-culottes and the Jacobins push the revolution leftward. Babeuf’s Conspiracy of Equals (1796) demands communal property — an early communist programme.',
  },
  {
    year: '1820s–40s',
    title: 'Utopian Socialism',
    location: 'Europe',
    era: 'industrial',
    body:
      'Saint-Simon, Fourier and Owen propose cooperative, planned societies and workers’ communities as a moral alternative to industrial capitalism.',
  },
  {
    year: '1848',
    title: 'The Communist Manifesto',
    location: 'Europe',
    era: 'industrial',
    body:
      'Marx and Engels publish the Manifesto amid a wave of revolutions — the class struggle is declared openly, and the spectre of communism haunts Europe.',
  },
  {
    year: '1864',
    title: 'The First International',
    location: 'London',
    era: 'industrial',
    body:
      'The International Workingmen’s Association unites European workers. Marx drafts its inaugural address; the struggle between Marxists and anarchists defines it.',
  },
  {
    year: '1871',
    title: 'The Paris Commune',
    location: 'Paris',
    era: 'revolutionary',
    body:
      'For 72 days workers rule Paris: the first worker’s government in history, with elected councils, before being bloodily crushed. Marx hails it as a new form of state.',
  },
  {
    year: '1889',
    title: 'The Second International',
    location: 'Paris',
    era: 'revolutionary',
    body:
      'The socialist parties of Europe found the Second International. May Day is proclaimed. The split between reform and revolution — Bernstein vs. Luxemburg — erupts.',
  },
  {
    year: '1902',
    title: 'What Is to Be Done?',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'Lenin publishes his theory of the vanguard party, arguing that a disciplined, professional revolutionary organization is necessary to lead the working class.',
  },
  {
    year: '1905',
    title: 'The 1905 Revolution',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'A general strike and the first soviets (workers’ councils) shake the Tsar. Bloody Sunday ignites it. A dress rehearsal, Lenin called it, for 1917.',
  },
  {
    year: '1917',
    title: 'The October Revolution',
    location: 'Russia',
    era: 'revolutionary',
    body:
      'Bolsheviks under Lenin and Trotsky seize power in the name of the soviets — the first successful proletarian revolution, founding the USSR and the Third International.',
  },
  {
    year: '1918–23',
    title: 'Revolutions in Germany & Hungary',
    location: 'Germany, Hungary',
    era: 'revolutionary',
    body:
      'Spartacist uprising in Berlin (1919) and the short-lived Bavarian and Hungarian Soviet Republics. Luxemburg and Liebknecht are murdered by right-wing militias.',
  },
  {
    year: '1929',
    title: 'The Great Depression',
    location: 'Global',
    era: 'revolutionary',
    body:
      'Capitalist crisis collapses output and employment worldwide. Left parties and unions surge; the crisis discredits liberal capitalism and fuels both communism and fascism.',
  },
  {
    year: '1936–39',
    title: 'The Spanish Civil War',
    location: 'Spain',
    era: 'revolutionary',
    body:
      'Republican workers, anarchists and communists fight Franco’s fascist coup. The POUM and CNT experiment with collectivization — a world-historic anti-fascist struggle.',
  },
  {
    year: '1945',
    title: 'Welfare State & the Postwar Settlement',
    location: 'Britain, Europe',
    era: 'modern',
    body:
      'The defeat of fascism and the strength of labor movements force concessions: the NHS, social security, and strong unions reshape capitalist democracies.',
  },
  {
    year: '1955',
    title: 'The Bandung Conference',
    location: 'Indonesia',
    era: 'modern',
    body:
      'Post-colonial leaders of Asia and Africa meet — a milestone of Third World solidarity and anti-imperialism that reshapes the global left beyond Europe.',
  },
  {
    year: '1968',
    title: 'May ’68 & the Global New Left',
    location: 'France & worldwide',
    era: 'modern',
    body:
      'Students and workers nearly topple the French state. Around the world — Prague Spring, Mexico, the US — a new left contests authority, culture and imperialism.',
  },
  {
    year: '1991',
    title: 'The End of the USSR',
    location: 'Global',
    era: 'modern',
    body:
      'The Soviet Union dissolves. The "end of history" is declared, but the contradictions of capitalism and the questions Marx raised do not disappear.',
  },
  {
    year: '2008–today',
    title: 'Crisis, Austerity & Resurgence',
    location: 'Global',
    era: 'modern',
    body:
      'The 2008 crash, the Occupy wave, Bernie Sanders and Corbyn surges, climate justice and new anti-austerity movements revive mass interest in the left.',
  },
];
