import React, {useRef} from "react";
import gsap, {Power3} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	type: string;
	title: string;
	subTitle: string;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;
	imgThree?: string;
	imgThreeAlt?: string;
	imgFour?: string;
	imgFourAlt?: string;
	// gsapImageTag: string;
	customContainerStyle: string;
	customSecondaryContainerStyle?: string | undefined;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	customOverlayStyle?: string;
	handleUpdateImageCount?: () => void;
}

function MultiPhoneContainer(props: Props): JSX.Element {
	const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const divRef = useRef<HTMLDivElement | null>(null);

	const isLessThanTabView = width < 476;
	const isLessThanLaptopView = width < 1024;

	useGSAP(
		() => {
			if (isLessThanLaptopView) {
				gsap.from(`.gsap-${props.type}-phone`, {
					scrollTrigger: {
						trigger: `.gsap-${props.type}-phone`,
						start: width < 476 ? "top center+=350px" : "top center+=150px",
					},
					translateY: "10%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					clearProps: "opacity,translateY",
				});
			}

			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-${props.type}-phone`,
					start: "top center+=100px",
					// markers: true,
					// toggleActions: "restart none none reverse",
				},
			});

			tl.current.to(`.gsap-${props.type}-phone-text-overlay`, {
				height: "0",
				stagger: isLessThanTabView ? 0.275 : 0.5,
				duration: isLessThanTabView ? 1 : 1.5,
				clearProps: "opacity",
				ease: Power3.easeInOut,
			});
			tl.current.from(
				`.gsap-${props.type}-phone-content`,
				{
					opacity: 0,
					stagger: isLessThanTabView ? 0.275 : 0.5,
					duration: isLessThanTabView ? 0.5 : 1,
					clearProps: "translateY,opacity",
					ease: Power3.easeOut,
				},
				isLessThanTabView ? ">-0.5" : ">-1.5"
			);

			tl.current.from(
				`.gsap-${props.type}-phone-img`,
				{
					opacity: "0",
					translateY: "2.5%",
					// stagger: width < 476 ? 0.125 : 0.25,
					duration: width < 476 ? 0.25 : 0.5,
					ease: Power3.easeOut,
					clearProps: "opacity,translateY",
				},
				">-0.25"
			);
		},
		{scope: divRef}
	);

	return (
		<>
			<div className="w-full" ref={divRef}>
				<div className={`gsap-${props.type}-phone ` + `px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto overflow-hidden relative `}>
					<div
						className={
							`gsap-${props.type}-phone-primary ` +
							`flex flex-col justify-start items-start gsap-${props.type}-phone-primary rounded-3xl w-full py-12 sm:py-16 ` +
							`${props.customContainerStyle} `
						}
					>
						<div className="flex flex-col justify-start items-start h-full w-full xl:w-[1152px] max-w-7xl mx-auto px-7 md:px-14 gap-14">
							<div className="flex flex-col justify-start items-start w-full gap-6">
								<div className="flex flex-row flex-wrap gap-2 font-semibold text-3xl 2xs:text-4xl lg:!text-5xl relative">
									<div
										className={
											`gsap-${props.type}-phone-text-overlay w-full h-full absolute bottom-0 left-0 z-10 origin-bottom` +
											` ${props.customOverlayStyle || ""}`
										}
									></div>
									<h2
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading-[4rem] gsap-${props.type}-phone-content ` +
											`${props.customTitleStyle}`
										}
									>
										{props.title}
									</h2>
								</div>
								<div className="relative">
									<div
										className={
											`gsap-${props.type}-phone-text-overlay ` +
											"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
											`${props.customOverlayStyle || ""}`
										}
									></div>
									<p
										className={
											`text-xl 2xs:text-lg lg:text-xl text-left gsap-${props.type}-phone-content ` +
											`${props.customSubtitleStyle || ""}`
										}
									>
										{props.subTitle}
									</p>
								</div>
							</div>
							<div
								className={
									`grid grid-cols-2 place-content-center gap-8 lg:gap-16 mt-4 pb-6 w-full ` +
									`${props.imgFour ? "2xs:grid-cols-4" : "2xs:grid-cols-3"} ` +
									`gsap-${props.type}-phone-img ` +
									`${props.customSecondaryContainerStyle || ""}`
								}
							>
								<img
									className="w-fit object-contain mx-auto"
									src={props.imgOne}
									alt={props.imgOneAlt}
									onLoad={props.handleUpdateImageCount}
								/>
								<img
									className="w-fit object-contain mx-auto"
									src={props.imgTwo}
									alt={props.imgTwoAlt}
									onLoad={props.handleUpdateImageCount}
								/>
								<img
									className={"w-fit object-contain mx-auto" + ` ${!props.imgFour ? "hidden lg:block" : ""}`}
									src={props.imgThree}
									alt={props.imgThreeAlt}
									onLoad={props.handleUpdateImageCount}
								/>
								{props.imgFour && (
									<img
										className="w-fit object-contain mx-auto"
										src={props.imgFour}
										alt={props.imgFourAlt}
										onLoad={props.handleUpdateImageCount}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MultiPhoneContainer;
