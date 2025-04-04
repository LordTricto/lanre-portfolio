import React, {useRef} from "react";
import gsap, {Power1} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";
import {useGSAP} from "@gsap/react";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	link?: string;
	title: string;
	imgOne: string;
	subTitle: string;
	imgFirst?: boolean;
	imgOneAlt: string;
	customContainerStyle: string;
	customTitleStyle: string;
	customOverlayStyle: string;
	customSubtitleStyle?: string;

	handleUpdateImageCount?: () => void;
}

function BigPhoneContainer(props: Props): JSX.Element {
	const {width} = useDimension();
	const navigate = useNavigate();

	const mainDivRef = useRef<HTMLDivElement | null>(null);
	const tl2 = useRef<gsap.core.Timeline | undefined>();

	const isLessThanTabView = width < 476;
	const isLessThanLaptopView = width < 1024;

	useGSAP(
		() => {
			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-big-phone",
					start: "top center+=150px",
					// markers: true,
					toggleActions: "restart none none reverse",
				},
				translateY: isLessThanLaptopView ? "10%" : undefined,
				opacity: isLessThanLaptopView ? 0 : undefined,
				duration: isLessThanLaptopView ? (isLessThanTabView ? 0.5 : 1) : undefined,
				clearProps: isLessThanLaptopView ? "opacity,translateY" : undefined,
			});

			tl2.current.to(".gsap-big-phone-text-overlay", {
				translateY: "200.5%",
				stagger: isLessThanTabView ? 0.375 : 0.75,
				duration: isLessThanTabView ? 1 : 1.5,
				clearProps: "opacity",
				ease: Power1.easeInOut,
				delay: 0.5,
			});
			tl2.current.from(
				".gsap-big-phone-content",
				{
					translateY: "-1.5%",
					duration: isLessThanTabView ? 1.125 : 1.725,
					clearProps: "translateY",
					ease: Power1.easeInOut,
				},
				"<"
			);

			if (!isLessThanLaptopView) {
				tl2.current.from(
					".gsap-big-phone-img",
					{
						duration: 1.5,
						scale: 1.4,
						clearProps: "scale,bottom",
					},
					"<"
				);
			} else {
				tl2.current.from(
					".gsap-big-phone-img",
					{
						opacity: 0,
						duration: isLessThanTabView ? 0.5 : 1,
						translateY: "10%",
						clearProps: "opacity,translateY",
					},
					"<"
					// ,
					// isLessThanTabView ? "0.625" : ">-1.25"
				);
			}
		},
		{scope: mainDivRef}
	);

	return (
		<div className="w-full relative" ref={mainDivRef}>
			<div className="gsap-big-phone px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto overflow-hidden relative cursor-pointer">
				<div
					className={"gsap-big-phone-primary bg-white rounded-3xl h-[730px] lg:h-[640px] w-full " + `${props.customContainerStyle}`}
					onClick={() => navigate(props.link || "")}
				>
					{/* <div className="flex flex-col lg:flex-row justify-between items-center h-full
						w-full xl:w-[1152px] max-w-7xl mx-auto px-7 md:px-14"> */}
					<div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center h-full w-full xl:w-[1152px] max-w-7xl mx-auto px-7 md:px-14">
						<div
							className={
								"flex flex-col gap-8 w-full pt-12 sm:pt-16 lg:pt-0 relative lg:max-w-sm mx-auto " +
								`${props.imgFirst ? "lg:order-2" : ""}`
							}
						>
							<div
								className={
									"flex flex-row flex-wrap gap-2 text-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs relative" +
									` ${props.customTitleStyle}`
								}
							>
								{/* <div
									className={
										"gsap-big-phone-text-overlay bg-white w-full h-full absolute bottom-0 left-0 z-10 origin-bottom" +
										` ${props.customOverlayStyle}`
									}
								></div> */}
								<span className="">{props.title}</span>
							</div>
							<div className={"relative 2xs:text-lg lg:text-xl overflow-hidden" + ` ${props.customSubtitleStyle || ""}`}>
								<div
									className={
										"gsap-big-phone-text-overlay w-full h-[200%] absolute bottom-full left-0 z-10 origin-bottom"
										// +
										// ` ${props.customOverlayStyle}`
									}
								>
									<div className="bg-white h-full"></div>
									<div className={`${props.customOverlayStyle} h-full`}></div>
								</div>
								<p className="gsap-big-phone-content overflow-hidden">{props.subTitle}</p>
							</div>
						</div>
						<div className={"flex justify-center items-center w-full h-full relative" + ` ${props.imgFirst ? "lg:order-1" : ""}`}>
							<img
								className={
									`gsap-big-phone-img ` +
									`h-[420px] lg:h-[550px] scale-[1] !ease-linear origin-top w-max object-contain ` +
									`absolute lg:relative bottom-10 sm:bottom-16 lg:bottom-unset `
								}
								src={props.imgOne}
								alt={props.imgOneAlt}
								onLoad={props.handleUpdateImageCount}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BigPhoneContainer;
