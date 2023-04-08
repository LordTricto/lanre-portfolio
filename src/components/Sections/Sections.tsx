import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

// import useDimension from "../../hooks/useDimension";
import {LencoSection} from "../../modules/Lenco/Services/lenco.constant";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	title: string;
	type: LencoSection;
	lists: string[] | null;
	paragraph: string | null;

	listsStyle?: string | undefined;
	titleStyle?: string | undefined;
	paragraphStyle?: string | undefined;
}

function Sections(props: Props): JSX.Element {
	const divRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();
	// const {width} = useDimension();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				setTimeout(() => {
					console.log("first");
					tl.current?.scrollTrigger?.refresh();
				}, 7000);
				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: `.gsap-${props.type}-title`,
						start: "top center",
						// toggleActions: "restart none none reverse",
					},
				});

				tl.current.from(
					`.gsap-${props.type}-title`,
					{
						opacity: "0",
						translateY: "30%",
						duration: 0.5,
						ease: Circ.easeOut,
						clearProps: "opacity,translateY",
					},
					"<+=0.5"
				);
				tl.current.from(
					[`.gsap-${props.type}-lists li`, `.gsap-${props.type}-paragraph`],
					{
						opacity: "0",
						duration: 0.5,
						stagger: 0.25,
						ease: Circ.easeOut,
						clearProps: "opacity",
					},
					">"
				);
			}, divRef);

			return () => {
				ctx.revert(); // cleanup!!
			};
		};

		// Check if the page has already loaded
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			// Remove the event listener when component unmounts
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	return (
		<>
			<div className="flex flex-col justify-start items-start w-full gap-8" ref={divRef}>
				<h2 className={`gsap-${props.type}-title ${props.titleStyle || ""} ` + "text-4xl 2xs:text-5xl lg:!text-6xl font-medium"}>
					{props.title}
				</h2>
				{props.lists && (
					<ul className={`gsap-${props.type}-lists ${props.listsStyle || ""} ` + "list-disc text-xl ml-5"}>
						{props.lists.map((_list, index) => (
							<li key={index}>{_list}</li>
						))}
					</ul>
				)}
				{props.paragraph && <p className={`gsap-${props.type}-paragraph ${props.paragraphStyle || ""} ` + "text-xl"}>{props.paragraph}</p>}
			</div>
		</>
	);
}

export default Sections;
