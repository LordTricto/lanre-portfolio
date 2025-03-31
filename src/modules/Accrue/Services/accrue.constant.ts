export enum AccrueSection {
	THE_GOAL = "the-goal",
	THE_DESIGN = "the-design",
	TAKEOUT = "takeout",
}
export type SectionsType = {
	value: AccrueSection;
	title: string;
	lists: string[] | null;
	paragraph: string[] | null;
	paragraphWithSideIcon?: string[] | null;
};

export const AccrueSections: {
	[type in AccrueSection]: SectionsType;
} = {
	[AccrueSection.THE_GOAL]: {
		value: AccrueSection.THE_GOAL,
		title: "The Goal",
		lists: [
			"Design a flow for users to passively save money by rounding up on purchases.",
			"Create a product that is functional, desired, and accessible.",
			"Clear visual designs that fit well into Accrue's current brand.",
		],
		paragraph: null,
	},
	[AccrueSection.THE_DESIGN]: {
		value: AccrueSection.THE_DESIGN,
		title: "The Design",
		lists: null,
		paragraph: [
			"Research was done on a few of the direct and indirect competitors on their products, sales, and marketing strategies. By doing this, I created solid business strategies that improve upon other competitor's. ",
		],
	},
	[AccrueSection.TAKEOUT]: {
		value: AccrueSection.TAKEOUT,
		title: "Takeout",
		lists: null,
		paragraph: [
			"In the course of this project, I learnt to clearly prepare documentation with specific callouts to features on the app. making it easy to grasp features and product decisions. Further re-evaluate and reiteration on the rounding up feature was carried out to enable users understand how features works, and why it is beneficial to them.",
		],
	},
};
