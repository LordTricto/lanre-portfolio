import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	role: string;
	title: string;
	delay?: number | undefined;
	author: string;
	subTitle: string;
	timeline: string;
	textColorStyle: string;
	customTitleStyle: string;
	customBorderStyle: string;
	customSubTitleStyle: string;

	quote: React.ReactNode;
	isHeaderBlack?: boolean;
}

function ProjectDescription(props: Props): JSX.Element {
	const divRef = useRef<HTMLDivElement | null>(null);

	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				setTimeout(() => {
					console.log("first");
					tl.current?.scrollTrigger?.refresh();
				}, 6500);
				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-project-title",
						// start: "top center+=300px",
						start: "top center",
						// markers: true,
						// toggleActions: "restart none none reverse",
					},
				});
				// =======
				tl.current.from(".gsap-project-border", {
					width: "0",
					duration: 2.75,
					ease: Circ.easeOut,
					clearProps: "width",
				});
				// =======
				tl.current.from(
					".gsap-project-title",
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
					".gsap-project-subTitle",
					{
						opacity: "0",
						duration: 0.5,
						ease: Circ.easeOut,
						clearProps: "opacity",
					},
					">"
				);

				tl.current.from(
					[".gsap-project-timeline", ".gsap-project-role"],
					{
						stagger: 0.5,
						opacity: "0",
						duration: 0.5,
						translateY: "20%",
						ease: Circ.easeOut,
						clearProps: "opacity,translateY",
					},
					">"
				);
				// tl.current.from(
				// [".gsap-project-timeline span:first-child", ".gsap-project-role span:first-child"],
				// {
				// stagger: 0.5,
				// opacity: "0",
				// duration: 0.5,
				// translateY: "20%",
				// ease: Circ.easeOut,
				// clearProps: "opacity,translateY",
				// },

				// "<-=1"
				// );
				// tl.current.from(
				// [".gsap-project-timeline span:last-child", ".gsap-project-role span:last-child"],
				// {
				// stagger: 0.5,
				// opacity: "0",
				// duration: 0.5,
				// ease: Circ.easeOut,
				// clearProps: "opacity",
				// },
				// ">"
				// );
				tl2.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-project-quote",
						// start: "top center+=150px",
						start: "top center",
						// markers: true,
						// toggleActions: "restart none none reverse",
					},
				});
				tl2.current.from(".gsap-project-quote p", {
					translateX: "20%",
					opacity: 0,
					duration: 1,
					clearProps: "opacity,translateX",
				});
				tl2.current.from(".gsap-project-quote span", {
					opacity: 0,
					duration: 1,
					clearProps: "opacity,translateX",
				});
				if (width > 1023) {
					// tl.current.from(".gsap-project-title", {
					// width: "100%",
					// borderRadius: 0,
					// padding: width > 1023 ? 0 : undefined,
					// duration: 1.5,
					// ease: Circ.easeOut,
					// clearProps: "width,padding,borderRadius",
					// });
				}
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
	}, [props.delay]);

	return (
		<>
			<div
				className={
					`${props.customBorderStyle} ` + "flex flex-col justify-start items-start w-full gap-12 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto"
				}
				ref={divRef}
			>
				<div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 md:gap-2">
					<span className={`${props.customTitleStyle} gsap-project-title ` + "text-7xl text-white md:max-w-sm leading-[75px]"}>
						{props.title}
					</span>
					<p className={`${props.customSubTitleStyle} gsap-project-subTitle ` + "text-3xl text-blue-quat md:max-w-sm"}>{props.subTitle}</p>
				</div>
				<div className="gsap-project-border w-full h-0.5 bg-white"></div>
				<div className="flex flex-col justify-between items-start w-full gap-24">
					<div className="flex flex-row justify-start items-start gap-16 w-full">
						<div className="gsap-project-timeline flex flex-col justify-start items-start">
							<span className={`${props.isHeaderBlack ? "text-black" : "text-white"} ` + "text-2xl "}>Timeline</span>
							<span className={`${props.textColorStyle} ` + "text-xl"}>{props.timeline} Month</span>
						</div>
						<div className="gsap-project-role flex flex-col justify-start items-start">
							<span className={`${props.isHeaderBlack ? "text-black" : "text-white"} ` + "text-2xl "}>Role</span>
							<span className={`${props.textColorStyle} ` + "text-xl"}>{props.role}</span>
						</div>
					</div>
					<div className="flex flex-col justify-end items-end w-full">
						<div className="gsap-project-quote flex flex-col justify-end items-end gap-8 w-full max-w-2xl">
							<p className={`${props.textColorStyle} ` + "text-3xl text-right"}>{props.quote}</p>
							<span className={`${props.textColorStyle} ` + "text-2xl"}>— {props.author}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectDescription;
