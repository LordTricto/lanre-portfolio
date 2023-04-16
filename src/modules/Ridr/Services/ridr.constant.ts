export enum RidrSection {
	THE_GOAL = "the-goal",
	THE_DESIGN = "the-design",
	TAKEOUT = "takeout",
}
export type SectionsType = {
	value: RidrSection;
	title: string;
	lists: string[] | null;
	paragraph: string[] | null;
	paragraphWithSideIcon?: string[] | null;
};

export const RidrSections: {
	[type in RidrSection]: SectionsType;
} = {
	[RidrSection.THE_GOAL]: {
		value: RidrSection.THE_GOAL,
		title: "The Goal",
		lists: [
			"Create a mobile product is appealing, simple and easy to use.",
			"Design a gamified platform where its users can interact with elements.",
			"Build a web3 product that tracks users activities and fitness level.",
		],
		paragraph: null,
	},
	[RidrSection.THE_DESIGN]: {
		value: RidrSection.THE_DESIGN,
		title: "The Design",
		lists: null,
		paragraph: [
			"Research was done on a few of the direct and indirect competitors on their products, sales, and marketing strategies. By doing this, I created solid business strategies that improve upon other competitor's.",
		],
	},
	[RidrSection.TAKEOUT]: {
		value: RidrSection.TAKEOUT,
		title: "Takeout",
		lists: null,
		paragraph: [
			"This was an exciting Web3 experience as it gave me the opportunity to contribute by humanizing modern technology. There were several iterations and reiterations during this project. ",
		],
	},
};
