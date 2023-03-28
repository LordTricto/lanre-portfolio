import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

// import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	title: string;
	subTitle: string;
	imgOne: string;
	imgOneAlt: string;
	customContainerStyle: string;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	customOverlayStyle: string;
	imgFirst?: boolean;
	delay?: number;
}

function BigPhoneContainer(props: Props): JSX.Element {
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				gsap.from(".gsap-big-phone", {
					scrollTrigger: {
						trigger: ".gsap-big-phone",
						start: "top center+=150px",
						// toggleActions: "restart none none reverse",
						// markers: true,
					},
					translateY: "10%",
					opacity: 0,
					duration: 1,
					clearProps: "opacity,translateY",
				});

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-big-phone",
						start: "top center",
						// markers: true,
						// toggleActions: "restart none none reverse",
					},
				});

				if (width > 1279) {
					// console.log("first")
					tl.current.from(".gsap-big-phone", {
						width: "100%",
						borderRadius: 0,
						padding: width > 1279 ? 0 : undefined,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						".gsap-big-phone-primary",
						{
							borderRadius: 0,
							duration: 1.5,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.to(
					".gsap-big-phone-text-overlay",
					{
						height: "0",
						// opacity: 0,
						stagger: 0.75,
						duration: 2,
						clearProps: "opacity",
						ease: Circ.easeInOut,
					},
					">-0.5"
				);
				tl.current.from(
					".gsap-big-phone-content",
					{
						// translateY: "20%",
						opacity: 0,
						stagger: 0.75,
						duration: 1.25,
						clearProps: "translateY,opacity",
						ease: Circ.easeOut,
					},
					">-2"
				);
				tl.current.from(
					".gsap-big-phone-img",
					{
						duration: 1,
						scale: width > 1023 ? 1.4 : 1.3,
						bottom: width > 1023 ? "unset" : "1rem",
						clearProps: "scale,bottom",
					},
					">-1.25"
					// width > 1023 ? ">-2" : ">-0.5"
				);

				gsap.from(".gsap-big-phone-img", {
					scrollTrigger: {
						trigger: ".gsap-big-phone",
						start: width > 1023 ? "top center" : "top center",
						// toggleActions: "restart none none reverse",
						// markers: true,
					},
					opacity: width > 1023 ? 0 : 1,
					duration: 1,
					clearProps: "opacity",
				});
			}, phoneRef);

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
			<div className="w-full" ref={phoneRef}>
				<div className="gsap-big-phone px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto overflow-hidden relative">
					<div className={"gsap-big-phone-primary bg-white rounded-3xl h-[730px] lg:h-[640px] w-full" + ` ${props.customContainerStyle}`}>
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
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BigPhoneContainer;
