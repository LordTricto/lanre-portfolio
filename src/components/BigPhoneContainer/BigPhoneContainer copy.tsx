import React, {useRef} from "react";
import gsap, {Circ} from "gsap";

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

	const isMobileView = width < 1024;

	useGSAP(
		() => {
			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-big-phone",
					start: isMobileView ? "top center+=150px" : "top center",
					markers: true,
				},
				translateY: isMobileView ? "10%" : undefined,
				opacity: isMobileView ? 0 : undefined,
				duration: isMobileView ? (width < 476 ? 0.5 : 1) : undefined,
				clearProps: isMobileView ? "opacity,translateY" : undefined,
			});

			if (!isMobileView) {
				tl2.current.from(".gsap-big-phone", {
					width: "100%",
					borderRadius: 0,
					padding: !isMobileView ? 0 : undefined,
					duration: 1.5,
					ease: Circ.easeOut,
					clearProps: "width,padding,borderRadius",
				});
				tl2.current.from(
					".gsap-big-phone-primary",
					{
						borderRadius: 0,
						duration: 1.5,
						clearProps: "borderRadius",
					},
					"<"
				);
			}
			tl2.current.to(
				".gsap-big-phone-text-overlay",
				{
					height: "0",
					stagger: width < 476 ? 0.375 : 0.75,
					duration: width < 476 ? 1 : 2,
					clearProps: "opacity",
					ease: Circ.easeInOut,
				},
				width < 476 ? ">-0.25" : ">-0.5"
			);
			tl2.current.from(
				".gsap-big-phone-content",
				{
					opacity: 0,
					stagger: width < 476 ? 0.375 : 0.75,
					duration: width < 476 ? 0.625 : 1.25,
					clearProps: "translateY,opacity",
					ease: Circ.easeOut,
				},
				width < 476 ? ">-1" : ">-2"
			);
			if (!isMobileView) {
				tl2.current.from(
					".gsap-big-phone-img",
					{
						duration: 1,
						scale: !isMobileView ? 1.4 : 1.3,
						bottom: !isMobileView ? "unset" : "1rem",
						clearProps: "scale,bottom",
					},
					">-1.25"
				);
			} else {
				tl2.current.from(
					".gsap-big-phone-img",
					{
						opacity: 0,
						duration: width < 476 ? 0.5 : 1,
						translateY: "10%",
						clearProps: "opacity,translateY",
					},
					width < 476 ? "0.625" : ">-1.25"
				);
			}
		},
		{scope: mainDivRef}
	);

	return (
		<div className="w-full relative" ref={mainDivRef}>
			<div className="gsap-big-phone px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto overflow-hidden relative">
				<div
					className={"gsap-big-phone-primary bg-white rounded-3xl h-[730px] lg:h-[640px] w-full " + `${props.customContainerStyle}`}
					onClick={() => navigate(props.link || "")}
				>
					<div className="flex flex-col lg:flex-row justify-between items-center h-full w-full xl:w-[1152px] max-w-7xl mx-auto px-7 md:px-14">
						<div className={"flex flex-col gap-8 w-full pt-12 sm:pt-16 lg:pt-0 relative" + ` ${props.imgFirst ? "lg:order-2" : ""}`}>
							<div
								className={
									"flex flex-row flex-wrap gap-2 text-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs relative" +
									` ${props.customTitleStyle}`
								}
							>
								<div
									className={
										"gsap-big-phone-text-overlay bg-white w-full h-full absolute bottom-0 left-0 z-10 origin-bottom" +
										` ${props.customOverlayStyle}`
									}
								></div>
								<span className="gsap-big-phone-content">{props.title}</span>
							</div>
							<div className={"relative lg:max-w-sm 2xs:text-lg lg:text-xl" + ` ${props.customSubtitleStyle || ""}`}>
								<div
									className={
										"gsap-big-phone-text-overlay bg-white w-full h-full absolute bottom-0 left-0 z-10 origin-bottom" +
										` ${props.customOverlayStyle}`
									}
								></div>
								<p className="gsap-big-phone-content">{props.subTitle}</p>
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
