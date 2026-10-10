export interface Book {
  title: string;
  author: string;
  year: string;
  /** Optional real cover image URL. If empty, a styled CSS cover is generated. */
  image?: string;
  /** Cover accent hue for generated covers (0-360). */
  hue: number;
  summary: string;
  category: string;
  /** free | reading | finished */
  status: 'free' | 'reading' | 'finished';
  /** Tags used for filtering. */
  tags: string[];
}

export function bookSlug(book: Book): string {
  return book.title.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const categories = [
  'Foundations',
  'Classics',
  'History',
  'Critique',
  'Modern Left',
] as const;

export const books: Book[] = [
  {
    title: 'The Communist Manifesto',
    author: 'Karl Marx & Friedrich Engels',
    year: '1848',
    hue: 0,
    image: 'https://covers.openlibrary.org/b/id/11048623-L.jpg',
    summary:
      'The founding call of the communist movement. Marx and Engels lay out the class struggle, the march of capital, and the call for the workers of the world to unite.',
    category: 'Foundations',
    status: 'finished',
    tags: ['manifesto', 'marx', 'foundations'],
  },
  {
    title: 'Das Kapital, Vol. I',
    author: 'Karl Marx',
    year: '1867',
    hue: 200,
    image: 'https://covers.openlibrary.org/b/id/10995820-L.jpg',
    summary:
      'The critical anatomy of capital: commodity, value, surplus value and exploitation. The foundational text of political economy from a revolutionary standpoint.',
    category: 'Classics',
    status: 'reading',
    tags: ['marx', 'political economy', 'capital'],
  },
  {
    title: 'The State and Revolution',
    author: 'V. I. Lenin',
    year: '1917',
    hue: 30,
    image: 'https://covers.openlibrary.org/b/id/12727116-L.jpg',
    summary:
      'Lenin restores the Marxist theory of the state — its class character, its withering away, and the necessity of the dictatorship of the proletariat.',
    category: 'Foundations',
    status: 'free',
    tags: ['lenin', 'state', 'revolution'],
  },
  {
    title: 'Socialism: Utopian and Scientific',
    author: 'Friedrich Engels',
    year: '1880',
    hue: 120,
    image: 'https://covers.openlibrary.org/b/id/5943878-L.jpg',
    summary:
      'The most widely-read exposition of Marxism. Engels charts the rise of scientific socialism from utopian roots, and explains historical materialism.',
    category: 'Foundations',
    status: 'finished',
    tags: ['engels', 'scientific socialism', 'materialism'],
  },
  {
    title: 'Imperialism, the Highest Stage of Capitalism',
    author: 'V. I. Lenin',
    year: '1917',
    hue: 260,
    image: 'https://covers.openlibrary.org/b/id/8746493-L.jpg',
    summary:
      'Lenin analyses how monopoly capital, banks and finance capital export capital abroad — driving war and the division of the world among the great powers.',
    category: 'Critique',
    status: 'reading',
    tags: ['imperialism', 'lenin', 'capitalism'],
  },
  {
    title: 'The Origins of the Family, Private Property and the State',
    author: 'Friedrich Engels',
    year: '1884',
    hue: 320,
    image: 'https://covers.openlibrary.org/b/id/6139839-L.jpg',
    summary:
      'Using Morgan’s anthropology, Engels traces the historical rise of the family, private property and the state — and their class-bound, non-eternal character.',
    category: 'History',
    status: 'free',
    tags: ['engels', 'anthropology', 'state', 'family'],
  },
  {
    title: 'The Poverty of Philosophy',
    author: 'Karl Marx',
    year: '1847',
    hue: 160,
    image: 'https://covers.openlibrary.org/b/id/5959825-L.jpg',
    summary:
      'Marx’s polemic against Proudhon — a devastating critique of petty-bourgeois socialism and a defense of the dialectical method and the proletariat’s historical mission.',
    category: 'Critique',
    status: 'free',
    tags: ['marx', 'polemic', 'proudhon'],
  },
  {
    title: 'Wage-Labour and Capital',
    author: 'Karl Marx',
    year: '1849',
    hue: 40,
    image: 'https://covers.openlibrary.org/b/id/10873744-L.jpg',
    summary:
      'A clear, popular exposition of the wage relation: how labour-power is bought, how capital grows, and why the interests of capital and labour are opposed.',
    category: 'Foundations',
    status: 'finished',
    tags: ['marx', 'wages', 'capital'],
  },
  {
    title: 'Reform or Revolution?',
    author: 'Rosa Luxemburg',
    year: '1899',
    hue: 350,
    image: 'https://covers.openlibrary.org/b/id/8266418-L.jpg',
    summary:
      'Luxemburg’s classic defense of revolutionary socialism against reformist revisionism within the SPD — trade union action alone cannot overturn capitalism.',
    category: 'Critique',
    status: 'reading',
    tags: ['luxemburg', 'reformism', 'revolution'],
  },
  {
    title: 'The Accumulation of Capital',
    author: 'Rosa Luxemburg',
    year: '1913',
    hue: 90,
    image: 'https://covers.openlibrary.org/b/id/267277-L.jpg',
    summary:
      'Luxemburg argues capitalism cannot expand on its own and depends on non-capitalist surroundings — a pioneering theory of imperialism and crisis.',
    category: 'Critique',
    status: 'free',
    tags: ['luxemburg', 'imperialism', 'crisis'],
  },
  {
    title: 'The German Ideology',
    author: 'Karl Marx & Friedrich Engels',
    year: '1846',
    hue: 220,
    image: 'https://covers.openlibrary.org/b/id/14918283-L.jpg',
    summary:
      'The founding statement of historical materialism. Consciousness is not the source of life; life determines consciousness — ideas arise from material conditions.',
    category: 'Foundations',
    status: 'free',
    tags: ['marx', 'engels', 'materialism', 'ideology'],
  },
  {
    title: 'Capital: A Critique of Political Economy, Vol. III',
    author: 'Karl Marx',
    year: '1894',
    hue: 210,
    image: 'https://covers.openlibrary.org/b/id/12711638-L.jpg',
    summary:
      'Edited by Engels after Marx’s death: the law of the tendency of the rate of profit to fall, the transformation problem, and the inner contradictions of capital.',
    category: 'Classics',
    status: 'free',
    tags: ['marx', 'political economy', 'profit'],
  },
  {
    title: 'Value, Price and Profit',
    author: 'Karl Marx',
    year: '1865',
    hue: 60,
    image: 'https://covers.openlibrary.org/b/id/8242213-L.jpg',
    summary:
      'A lecture series addressed to workers: the labour theory of value, how profit arises, and why trade-union struggle is necessary yet not sufficient.',
    category: 'Foundations',
    status: 'reading',
    tags: ['marx', 'value', 'wages'],
  },
  {
    title: 'What Is to Be Done?',
    author: 'V. I. Lenin',
    year: '1902',
    hue: 25,
    image: 'https://covers.openlibrary.org/b/id/6646106-L.jpg',
    summary:
      'Lenin’s argument for a vanguard party of professional revolutionaries — spontaneity breeds trade-union consciousness; theory must be brought to the workers.',
    category: 'Foundations',
    status: 'reading',
    tags: ['lenin', 'party', 'vanguard'],
  },
  {
    title: 'The Wretched of the Earth',
    author: 'Frantz Fanon',
    year: '1961',
    hue: 15,
    image: 'https://covers.openlibrary.org/b/id/14325884-L.jpg',
    summary:
      'A landmark of decolonial thought: the psychological and political violence of colonialism, the role of violence in liberation, and the creation of a new humanity.',
    category: 'Modern Left',
    status: 'reading',
    tags: ['fanon', 'decolonization', 'violence', 'anti-colonial'],
  },
  {
    title: 'Black Skin, White Masks',
    author: 'Frantz Fanon',
    year: '1952',
    hue: 300,
    image: 'https://covers.openlibrary.org/b/id/482467-L.jpg',
    summary:
      'Fanon dissects the psychology of colonial alienation — how racialized subjects internalize white norms, and the struggle to build a liberatory selfhood.',
    category: 'Modern Left',
    status: 'free',
    tags: ['fanon', 'race', 'psychology'],
  },
  {
    title: 'Prison Notebooks',
    author: 'Antonio Gramsci',
    year: '1929–35',
    hue: 200,
    image: 'https://covers.openlibrary.org/b/id/6290217-L.jpg',
    summary:
      'Gramsci’s notebooks introduce hegemony, civil society and the war of position — how ruling ideas and consent sustain power, and how to contest them.',
    category: 'Critique',
    status: 'reading',
    tags: ['gramsci', 'hegemony', 'culture'],
  },
  {
    title: 'The Society of the Spectacle',
    author: 'Guy Debord',
    year: '1967',
    hue: 110,
    image: 'https://covers.openlibrary.org/b/id/1052263-L.jpg',
    summary:
      'A Situationist classic: in late capitalism, lived experience is replaced by its representation — the spectacle — and all that was directly lived is mediated.',
    category: 'Modern Left',
    status: 'free',
    tags: ['debord', 'situationist', 'spectacle', 'media'],
  },
  {
    title: 'A People’s History of the United States',
    author: 'Howard Zinn',
    year: '1980',
    hue: 40,
    image: 'https://covers.openlibrary.org/b/id/10592817-L.jpg',
    summary:
      'American history told from below — the voices of Indigenous peoples, enslaved workers, strikers and the poor, against the official narrative of the powerful.',
    category: 'History',
    status: 'finished',
    tags: ['zinn', 'united states', 'history from below'],
  },
  {
    title: 'Late Victorian Holocausts',
    author: 'Mike Davis',
    year: '2001',
    hue: 180,
    image: 'https://covers.openlibrary.org/b/id/914002-L.jpg',
    summary:
      'How colonial capitalism and global markets turned natural droughts into mass famines across India, Brazil and China in the late nineteenth century.',
    category: 'History',
    status: 'free',
    tags: ['davis', 'famine', 'colonialism', 'imperialism'],
  },
];
