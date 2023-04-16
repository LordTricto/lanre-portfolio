export enum LencoSection {
	THE_GOAL = "the-goal",
	ASSESSING_THE_PREVIOUS_APP = "assessing-the-previous-app",
	COMPETITIVE_ANALYSIS = "assessing-the-previous-app-competitive-analysis",
	REVISED_ARCHITECTURE = "the-revised-architecture",
	THE_REDESIGN = "the-redesign",
	TAKEOUT = "takeout",
}
export type SectionsType = {
	value: LencoSection;
	title: string;
	lists: string[] | null;
	paragraph: string[] | null;
};

export const LencoSections: {
	[type in LencoSection]: SectionsType;
} = {
	[LencoSection.THE_GOAL]: {
		value: LencoSection.THE_GOAL,
		title: "The Goal",
		lists: [
			"Clearly define the apps goals, capabilities, and audience",
			"Define where the current app falls shorts or hits pain points",
			"Research and explore competitors, ideation, and user engagement",
			"Synthesize research with new design direction and objectives",
			"Build high-fidelity prototypes and align with stakeholders",
			"Work closely with engineering to implement and deploy",
		],
		paragraph: null,
	},
	[LencoSection.ASSESSING_THE_PREVIOUS_APP]: {
		value: LencoSection.ASSESSING_THE_PREVIOUS_APP,
		title: "Assessing the Previous App",
		lists: [
			"The design was antiquated and didn't reflect the cutting-edge technology driving it",
			"It was hard to understand what the app did or how to access much of its power",
			"There was little or no interaction that would engage the user",
			"Data and analytics were too technical and didn't make sense to most users",
		],
		paragraph: [
			"A thoughtful review of the previous app highlighted many issues and pain points that indicated poor user-experience which led to user abandonment and the overall degrade in the experience interacting with the app.",
		],
	},
	[LencoSection.COMPETITIVE_ANALYSIS]: {
		value: LencoSection.COMPETITIVE_ANALYSIS,
		title: "Competitive Analysis",
		lists: null,
		paragraph: [
			"To understand where our product stood in the market, determine whether there were any gaps in the industry, and identify attributes that these competitors' products lacked, research was conducted on a few direct and indirect competitors' products. Focused and thoughtful UX competitor analysis provided insightful information that allowed us to change important product design features",
		],
	},
	[LencoSection.REVISED_ARCHITECTURE]: {
		value: LencoSection.REVISED_ARCHITECTURE,
		title: "The Revised Architecture",
		lists: null,
		paragraph: [
			"After conducting extensive competitors' analysis, establishing the business goals by working closely with all key stakeholders, and determining how prospective users categorize information through card sorting session, I went on to revise and redesign the product's information architecture (IA).",
		],
	},
	[LencoSection.THE_REDESIGN]: {
		value: LencoSection.THE_REDESIGN,
		title: "The Redesign",
		lists: null,
		paragraph: [
			"After all the flows and content struct have been established, I went on create visual interfaces users will find easy to navigate, simple to use, and enjoyable.",
		],
	},
	[LencoSection.THE_REDESIGN]: {
		value: LencoSection.THE_REDESIGN,
		title: "The Redesign",
		lists: null,
		paragraph: [
			"After all the flows and content struct have been established, I went on create visual interfaces users will find easy to navigate, simple to use, and enjoyable.",
		],
	},
	[LencoSection.TAKEOUT]: {
		value: LencoSection.TAKEOUT,
		title: "Takeout",
		lists: null,
		paragraph: [
			"A great experience from start to finish with valuable insights from designing a product with improved UX, UI and navigation. Following multiple Guerilla Usability Testing sessions with potential consumers and important stakeholders, necessary iterations were made.",
		],
	},
};
