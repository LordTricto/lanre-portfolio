import React, {useRef} from "react";
import gsap, {Power4} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	role: string;
	title: string;
	delay?: number | undefined;
	author: string;
	isReady?: boolean;
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
	const {width} = useDimension();

	const divRef = useRef<HTMLDivElement | null>(null);

	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();

	useGSAP(
		() => {
			if (props.isReady) {
				gsap.from(".gsap-project-border", {
					scrollTrigger: {
						trigger: ".gsap-project-title",
						start: width > 474 ? "top center" : "top center+=200px",
						// markers: true,
						toggleActions: "restart none none reverse",
					},
					width: 0,
					duration: 2.75,
					ease: Power4.easeOut,
					clearProps: "width",
				});

				tl.current = gsap.timeline();

				tl.current.from([".gsap-project-title", ".gsap-project-subTitle"], {
					opacity: 0,
					ease: Power4.easeOut,
					clearProps: "opacity,translateY",
					delay: 6.2,
				});

				tl2.current = gsap.timeline();

				tl2.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-project-title",
						start: width > 474 ? "top center" : "top center+=200px",
						// markers: true,
						toggleActions: "restart none none reverse",
					},
				});

				// tl2.current.from(".gsap-project-title", {
				// opacity: 0,
				// translateY: "30%",
				// duration: 0.25,
				// ease: Power4.easeOut,
				// clearProps: "opacity,translateY",
				// });
				// tl2.current.from(".gsap-project-subTitle", {
				// opacity: 0,
				// duration: 0.25,
				// ease: Power4.easeOut,
				// clearProps: "opacity",
				// });
				tl2.current.from([".gsap-project-timeline", ".gsap-project-role"], {
					stagger: 0.5,
					opacity: 0,
					duration: 0.5,
					translateY: "20%",
					ease: Power4.easeOut,
					clearProps: "opacity,translateY",
				});
				tl2.current.from([".gsap-project-quote p", ".gsap-project-quote span"], {
					translateX: "2.5%",
					opacity: 0,
					duration: 0.5,
					clearProps: "opacity,translateX",
				});
			}
		},
		{dependencies: [props.isReady], scope: divRef}
	);

	return (
		<>
			<div className="flex flex-col justify-start items-start w-full gap-12 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto" ref={divRef}>
				<div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 md:gap-2">
					<span className={`${props.customTitleStyle} gsap-project-title ` + "text-5xl md:text-7xl md:max-w-md md:leading-[75px]"}>
						{props.title}
					</span>
					<p className={`${props.customSubTitleStyle} gsap-project-subTitle ` + "text-2xl md:text-3xl md:max-w-sm"}>{props.subTitle}</p>
				</div>
				<div className={`${props.customBorderStyle} ` + "gsap-project-border w-full h-0.5"}></div>
				<div className="flex flex-col justify-between items-start w-full gap-24">
					<div className="flex flex-row justify-start items-start gap-16 w-full">
						<div className="gsap-project-timeline flex flex-col justify-start items-start">
							<span className={`${props.isHeaderBlack ? "text-black" : "text-white"} ` + "text-xl md:text-2xl "}>Timeline</span>
							<span className={`${props.textColorStyle} ` + "text-lg md:text-xl"}>{props.timeline} Month</span>
						</div>
						<div className="gsap-project-role flex flex-col justify-start items-start">
							<span className={`${props.isHeaderBlack ? "text-black" : "text-white"} ` + "text-xl md:text-2xl "}>Role</span>
							<span className={`${props.textColorStyle} ` + "text-lg md:text-xl"}>{props.role}</span>
						</div>
					</div>
					<div className="flex flex-col justify-end items-end w-full">
						<div className="gsap-project-quote flex flex-col justify-end items-end gap-8 w-full max-w-2xl">
							<p className={`${props.textColorStyle} ` + "text-2xl md:text-3xl text-right"}>{props.quote}</p>
							<span className={`${props.textColorStyle} ` + "text-xl md:text-2xl"}>— {props.author}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectDescription;
