export enum ForaSection {
	THE_GOAL = "the-goal",
	CONTEXT = "context",
	COMPETITIVE_ANALYSIS = "competitive-analysis",
	LOW_FIDELITY_DESIGN = "low-fidelity-design",
	HIGH_FIDELITY_DESIGN = "high-fidelity-design",
	TAKEOUT = "takeout",
}
export type SectionsType = {
	value: ForaSection;
	title: string;
	lists: string[] | null;
	paragraph: string[] | null;
	paragraphWithSideIcon?: string[] | null;
};

export const ForaSections: {
	[type in ForaSection]: SectionsType;
} = {
	[ForaSection.THE_GOAL]: {
		value: ForaSection.THE_GOAL,
		title: "The Goal",
		lists: [
			"Create a mobile community where Nigerian creatives and designers can showcase and discover creative work.",
			"Design an accessible, desirable and usable product.",
			"Create a smooth user experience for users to easily build a portfolio, connect and get noticed.",
		],
		paragraph: null,
	},
	[ForaSection.CONTEXT]: {
		value: ForaSection.CONTEXT,
		title: "Context",
		lists: null,
		paragraph: [
			"According to a forecast by CNBC, 72.6% of internet users will access the web solely via their smartphones by 2025, which makes up an equivalent of nearly 3.7 billion users. Therefore, the need to build more mobile applications is indeed crucial. Also, 91% of social media users access their favourite channel via mobile devices. What this means is, for creatives to smoothly connect and share projects/portfolios using a platform, the platform has to be a mobile application.",
			"In order to gain a better understanding of its purpose and goals, I adopted a Design Thinking process to work with. Using this gave me a clearer understanding and discernment of problems and how to implement solutions to resolve them.",
			"This project is aimed at providing users a mobile online community and facilitating good user experience.",
		],
	},
	[ForaSection.COMPETITIVE_ANALYSIS]: {
		value: ForaSection.COMPETITIVE_ANALYSIS,
		title: "Competitive Analysis",
		lists: null,
		paragraph: null,
		paragraphWithSideIcon: [
			"Mainstream design communities lack Direct Messaging features and this takes away the ability for users to communicate in private mode. Some of the most meaningful connections and opportunities started with a direct message. It is important to note that Dialogue leads to Trust.",
			"Humans have been evolutionarily hardwired to crave social acceptance. The 'Like' button provides social validation, and positive feedback and the feeling of approval keeps us coming back. But social acceptance has an evil twin, and the lack of high numbers of 'Likes' feels like rejection. Social rejection over the years has been associated with anxiety, depression, and even suicide.",
		],
	},
	[ForaSection.LOW_FIDELITY_DESIGN]: {
		value: ForaSection.LOW_FIDELITY_DESIGN,
		title: "Low Fidelity Design & Flow",
		lists: null,
		paragraph: ["I went on to create Low Fidelity designs and an ideal flow to enable users easy navigation through the mobile application."],
	},
	[ForaSection.HIGH_FIDELITY_DESIGN]: {
		value: ForaSection.HIGH_FIDELITY_DESIGN,
		title: "The High Fidelity Design",
		lists: null,
		paragraph: null,
	},
	[ForaSection.TAKEOUT]: {
		value: ForaSection.TAKEOUT,
		title: "Takeout",
		lists: null,
		paragraph: [
			"While it has not yet been released, Usability Testing was conducted and iterations were made. As a result of this experience, I learned the purpose of User Research as this allowed me understand their pain points. Furthermore, I learned more about the processes required in building a feasible and usable product, and this improved my problem-solving skill.",
		],
	},
};
