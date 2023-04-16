export enum BergerSection {
	THE_OVERVIEW = "the-overview",
	THE_RESEARCH = "the-research",
	USER_INTERVIEW = "user-interview",
	COMPETITIVE_ANALYSIS = "competitive-analysis",
	USER_PERSONAS_AND_STORIES = "user-personas-and-stories",
	PROJECT_GOALS = "project-goals",
	BUSINESS_GOALS = "business-goals",
	USER_GOALS = "user-goals",
	PROBLEM_STATEMENT = "problem-statement",
	USER_FLOW_AND_INFORMATION_ARCHITECTURE = "user-flow-and-information-architecture",
	THE_DESIGN = "the-design",
	EXPLORE_COLORS = "explore-colors",
	THE_SOLUTION = "the-solution",
	ITERATIONS = "iterations",
}
export type SectionsType = {
	value: BergerSection;
	title: string;
	lists: string[] | null;
	paragraph: string[] | null;
	paragraphWithSideIcon?: string[] | null;
};

export const BergerSections: {
	[type in BergerSection]: SectionsType;
} = {
	[BergerSection.THE_OVERVIEW]: {
		value: BergerSection.THE_OVERVIEW,
		title: "The Overview",
		lists: null,
		paragraph: [
			"With the outbreak of COVID-19 that forced everyone to stay inside, many turned to online shopping. The digital economy boomed during the pandemic. As people embraced social distancing, they turned to online shopping more than ever before. [67% of consumers](https://nielseniq.com/global/en/insights/commentary/2021/consumer-behavior-in-the-covid-recovery/) report they shop differently now due to COVID-19.",
			"Online shopping makes it possible to purchase products with just a click of a button. It has become important that users can make purchases online more efficiently and have an error-free experience.",
		],
	},
	[BergerSection.THE_RESEARCH]: {
		value: BergerSection.THE_RESEARCH,
		title: "The Research",
		lists: null,
		paragraph: null,
	},
	[BergerSection.USER_INTERVIEW]: {
		value: BergerSection.USER_INTERVIEW,
		title: "User Interview",
		lists: null,
		paragraph: [
			"Reviews were pulled from a conducted Customer Survey, and also identifying some of the problems faced by the majority of e-commerce customers, some keynotes taken were;",
		],
	},
	[BergerSection.COMPETITIVE_ANALYSIS]: {
		value: BergerSection.COMPETITIVE_ANALYSIS,
		title: "Competitive Analysis",
		lists: null,
		paragraph: null,
		paragraphWithSideIcon: [
			"Research on some of the direct and indirect competitors were carried out. During this research, insights on some of their weaknesses were gathered. Some of these competitors are Dulux (CAP Plc), Portland Paint Nigeria, Meyer Paint, PPG, Eagles Paint. Below are key insights from the competitive analysis.",
		],
	},
	[BergerSection.USER_PERSONAS_AND_STORIES]: {
		value: BergerSection.USER_PERSONAS_AND_STORIES,
		title: "User Personas & User Stories",
		lists: null,
		paragraph: null,
	},
	[BergerSection.PROJECT_GOALS]: {
		value: BergerSection.PROJECT_GOALS,
		title: "Project Goals",
		lists: null,
		paragraph: [
			"After conducting competitive analysis and establishing what the user stories and pain points are, we took a step back to define the business and user goals. This provided a clear problem statement that led the design decisions.",
		],
	},
	[BergerSection.BUSINESS_GOALS]: {
		value: BergerSection.BUSINESS_GOALS,
		title: "Business Goals",
		lists: [
			"Increase revenue and sales",
			"Keep current customers and attract new ones",
			"Make website responsive (can be used on different devices)",
			"Offer wide range of products for users",
			"Make website easy to use and navigate",
		],
		paragraph: null,
	},
	[BergerSection.USER_GOALS]: {
		value: BergerSection.USER_GOALS,
		title: "Project Goals",
		lists: [
			"Simple and safe checkout",
			"Wide range of product selection",
			"Seamless user experience",
			"Explore ideas and colors",
			"Access to customer support",
			"Access to sales outlets",
		],
		paragraph: null,
	},
	[BergerSection.PROBLEM_STATEMENT]: {
		value: BergerSection.PROBLEM_STATEMENT,
		title: "Problem Statement",
		lists: null,
		paragraph: null,
		paragraphWithSideIcon: ["How can we design a more efficient and error-free e-commerce experience for our customers?"],
	},
	[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE]: {
		value: BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE,
		title: "User Flow & Information Architecture",
		lists: null,
		paragraph: [
			"With the problem statement in mind, a user flow was developed to show the ideal flow that the user would take to complete a tasks on Berger Paints’ website. This essentially illustrates the various paths that the user can take to complete a task. Creating this flow allowed the understanding of the user’s perspective and helped consider the different options that the user has while using the website. This also helped in identifying key screens for the design.",
		],
	},
	[BergerSection.THE_DESIGN]: {
		value: BergerSection.THE_DESIGN,
		title: "The Design",
		lists: null,
		paragraph: null,
	},
	[BergerSection.EXPLORE_COLORS]: {
		value: BergerSection.EXPLORE_COLORS,
		title: "Explore Colors",
		lists: null,
		paragraph: ["A simple design of the Profile page for the user and the interface for another account."],
	},
	[BergerSection.THE_SOLUTION]: {
		value: BergerSection.THE_SOLUTION,
		title: "The Solution",
		paragraph: ["Designing key pages based on insights drawn from user research and established pain points."],
		lists: [
			"Offering a wider range of payment options (Bank Transfer with Flutterwave).",
			"Offering a guest checkout option as a way to streamline the payment process.",
			"Implementing categories and filters that enable the user to refine searches easily.",
			"Incorporating the use of Google Maps to easily help customers locate outlets.",
		],
	},
	[BergerSection.ITERATIONS]: {
		value: BergerSection.ITERATIONS,
		title: "Iterations",
		lists: null,
		paragraph: ["After conducting Usability Testing with some of the stakeholders and customers, furthers iterations were made."],
	},
};
