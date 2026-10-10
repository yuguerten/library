export interface BookNotes { mainPoints: string[]; criticisms: string[] }

// Editorial reading notes: criticisms are discussion points, not quotations.
export const bookNotes: Record<string, BookNotes> = {
  'The Communist Manifesto': {
    mainPoints: ['Class conflict shapes historical change.', 'Capitalism expands productive capacity while concentrating power and creating a wage-dependent working class.', 'Workers should organize politically across national borders.'],
    criticisms: ['Its account compresses diverse histories into a largely European framework.', 'The anticipated polarization into two classes underplays persistent middle classes and other forms of domination.'],
  },
  'Das Kapital, Vol. I': {
    mainPoints: ['Commodities conceal the social relationships that produce them: commodity fetishism.', 'Surplus value arises from the difference between the value of labour-power and the value workers produce.', 'Accumulation, technological change and dispossession reproduce capitalist class relations.'],
    criticisms: ['The labour theory of value is disputed by economists who explain prices through marginal utility and other mechanisms.', 'The abstraction from unpaid domestic labour and ecological limits leaves important dimensions of reproduction underdeveloped.'],
  },
  'The State and Revolution': {
    mainPoints: ['The state is an institution of class rule rather than a neutral arbiter.', 'Workers must replace the existing state machinery with radically democratic institutions.', 'A transitional workers’ state is supposed to eventually wither away.'],
    criticisms: ['The promised withering of the state sits uneasily with the centralized institutions established after the revolution.', 'Safeguards for political pluralism and dissent remain insufficiently specified.'],
  },
  'Socialism: Utopian and Scientific': {
    mainPoints: ['Early socialist experiments are contrasted with a materialist account of historical change.', 'Capitalist production is socialized, but its products are privately appropriated.', 'Socialism is presented as emerging from capitalism’s internal contradictions.'],
    criticisms: ['The label “scientific” can make historically contingent predictions appear inevitable.', 'The contrast with utopian socialism can undervalue ethical arguments and experimental communities.'],
  },
  'Imperialism, the Highest Stage of Capitalism': {
    mainPoints: ['Monopolies and finance capital increasingly shape economic power.', 'Capital exports and competition over territories connect accumulation to imperial rivalry.', 'Imperialism is treated as a structural development of capitalism.'],
    criticisms: ['Colonial expansion predates the monopoly stage described in the book.', 'The relationship between investment, territorial conquest and war varies more than a single stage model suggests.'],
  },
  'The Origins of the Family, Private Property and the State': {
    mainPoints: ['Family arrangements and gender hierarchy are historical rather than eternal.', 'Inheritance and private property help explain women’s subordination.', 'The state emerges alongside social divisions and class conflict.'],
    criticisms: ['Much of the nineteenth-century anthropology on which the argument relies is now outdated.', 'A universal sequence of social stages flattens the diversity of kinship and gender relations.'],
  },
  'The Poverty of Philosophy': {
    mainPoints: ['Economic categories express historically specific social relations.', 'Marx challenges Proudhon’s proposed reconciliation of economic contradictions.', 'Workers’ collective struggles can develop into political organization.'],
    criticisms: ['Its polemical presentation can obscure the strongest version of Proudhon’s argument.', 'The dense philosophical dispute offers less systematic economic analysis than Marx’s later work.'],
  },
  'Wage-Labour and Capital': {
    mainPoints: ['Capital is a social relationship, not simply a stock of things.', 'Wages are shaped by competition and the conditions of workers’ subsistence.', 'Growing capital can increase workers’ dependence even when material living standards improve.'],
    criticisms: ['The original text predates Marx’s mature distinction between labour and labour-power; later editions revise its terminology.', 'Its introductory treatment simplifies the effects of institutions, bargaining and differences between labour markets.'],
  },
  'Reform or Revolution?': {
    mainPoints: ['Reforms and trade-union struggles matter, but cannot by themselves abolish capitalist property relations.', 'Luxemburg rejects the idea that capitalism’s contradictions have been permanently overcome.', 'Immediate struggles should remain connected to a socialist transformation.'],
    criticisms: ['The argument may understate the lasting achievements possible through democratic reforms.', 'The institutional route from revolutionary struggle to a durable democratic socialism remains open.'],
  },
  'The Accumulation of Capital': {
    mainPoints: ['Luxemburg argues that accumulation requires markets outside a purely capitalist economy.', 'Imperial expansion draws non-capitalist societies into capitalist production.', 'Militarism and dispossession support the expansion of accumulation.'],
    criticisms: ['Her claim that accumulation requires external buyers is contested by interpretations of Marx’s reproduction schemes.', 'The model does not fully explain sustained expansion within highly capitalist economies.'],
  },
  'The German Ideology': {
    mainPoints: ['Material production and social activity form the starting point for understanding history.', 'Dominant ideas are connected to the power of dominant social groups.', 'The division of labour shapes institutions, consciousness and alienation.'],
    criticisms: ['A reductive reading can treat culture and ideas as mere reflections of economic life.', 'The unfinished manuscripts and their editorial history complicate treating the work as a single settled doctrine.'],
  },
  'Capital: A Critique of Political Economy, Vol. III': {
    mainPoints: ['Competition redistributes surplus value through prices of production and average profit.', 'Capitalist development creates tendencies toward a falling profit rate, alongside counteracting forces.', 'Interest, rent and finance divide and obscure the sources of surplus value.'],
    criticisms: ['The transformation of values into prices has generated enduring mathematical and conceptual disputes.', 'The falling-profit-rate thesis is contested, and Engels’s assembly of unfinished manuscripts complicates interpretation.'],
  },
  'Value, Price and Profit': {
    mainPoints: ['Wage increases need not simply produce equivalent price increases.', 'Profit depends on surplus labour, not merely on selling above value.', 'Trade unions defend workers while broader political change addresses the wage system itself.'],
    criticisms: ['The labour-value framework is disputed by alternative theories of prices and distribution.', 'The lecture’s simplified model leaves many monetary and institutional effects outside its scope.'],
  },
  'What Is to Be Done?': {
    mainPoints: ['Political organization should connect separate economic struggles into a wider movement.', 'Lenin advocates a disciplined organization of professional revolutionaries under repression.', 'A shared newspaper can function as an organizing infrastructure.'],
    criticisms: ['Centralization can give leaders excessive authority over the people they claim to represent.', 'The relationship between workers’ self-activity and leadership risks becoming paternalistic; its Russian context matters.'],
  },
  'The Wretched of the Earth': {
    mainPoints: ['Colonial rule structures both material life and psychological experience through violence.', 'National liberation must confront inequality and the interests of the postcolonial elite.', 'Fanon examines the trauma of colonial conflict and the possibilities of a new humanism.'],
    criticisms: ['The account of liberating violence raises ethical questions and can be read as underestimating its destructive aftereffects.', 'The emphasis on national liberation leaves difficult questions about pluralism and post-independence institutions.'],
  },
  'Black Skin, White Masks': {
    mainPoints: ['Racial hierarchy shapes language, desire and the experience of being seen by others.', 'Colonial subjects may internalize standards that deny their humanity.', 'Liberation requires transforming social relations rather than accepting fixed racial identities.'],
    criticisms: ['Its treatment of gender and sexuality has been challenged by feminist readings.', 'Psychoanalytic and autobiographical examples do not necessarily generalize across all colonial settings.'],
  },
  'Prison Notebooks': {
    mainPoints: ['Hegemony combines coercion with consent built through civil society.', 'Intellectuals help organize social groups and their worldviews.', 'A war of position contests entrenched institutions and cultural authority over time.'],
    criticisms: ['The fragmented, prison-constrained writing leaves key concepts open to conflicting interpretations.', 'Hegemony can become so broad that its explanatory limits and practical implications are unclear.'],
  },
  'The Society of the Spectacle': {
    mainPoints: ['The spectacle is a social relationship mediated by images, not simply a collection of media.', 'Commodity society separates people from direct participation in their own lives.', 'Emancipation requires challenging passive spectatorship and reclaiming collective activity.'],
    criticisms: ['Its sweeping diagnosis can understate audience agency and differences between media institutions.', 'The aphoristic style provides limited empirical support and few detailed institutional alternatives.'],
  },
  'A People’s History of the United States': {
    mainPoints: ['US history can be retold through the experiences of people excluded from official accounts.', 'Conflict over land, labour, race and empire challenges narratives of uninterrupted national progress.', 'Grassroots resistance is central to social change.'],
    criticisms: ['The explicit counter-narrative can simplify historical actors into oppressors and oppressed.', 'Selective emphasis sometimes gives less attention to contradictory evidence, institutional change and differences within movements.'],
  },
  'Late Victorian Holocausts': {
    mainPoints: ['Droughts became catastrophic famines through colonial policy and unequal access to food.', 'Global commodity markets and extraction increased vulnerability in India, China and Brazil.', 'Environmental history and political economy must be examined together.'],
    criticisms: ['Comparisons across several regions can obscure important local political and ecological differences.', 'The relative weight of climate, markets and specific policy decisions requires careful case-by-case assessment.'],
  },
};
