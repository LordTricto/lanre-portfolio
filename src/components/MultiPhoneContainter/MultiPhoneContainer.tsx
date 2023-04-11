import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

// import useDimension from "../../hooks/useDimension";

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
	gsapPrimaryContainerTag: string;
	gsapSecondaryContainerTag: string;
	customContainerStyle: string;
	customSecondaryContainerStyle?: string | undefined;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	customOverlayStyle?: string;
}

function MultiPhoneContainer(props: Props): JSX.Element {
	const divRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				setTimeout(() => {
					tl.current?.scrollTrigger?.refresh();
					ScrollTrigger.refresh();
				}, 7000);

				if (width < 1024) {
					gsap.from(`.gsap-${props.type}-phone`, {
						scrollTrigger: {
							trigger: `.gsap-${props.type}-phone`,
							start: "top center+=150px",
							// toggleActions: "restart none none reverse",
						},
						translateY: "10%",
						opacity: 0,
						duration: 1,
						clearProps: "opacity,translateY",
					});
				}

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: `.gsap-${props.type}-phone`,
						start: "top center",
						// markers: true,
						// markers: props.type === "reimbursement" ? true : false,

						// toggleActions: "restart none none reverse",
					},
				});

				if (width > 1023) {
					// console.log("first")
					tl.current.from(`.gsap-${props.type}-phone`, {
						width: "100%",
						borderRadius: 0,
						padding: width > 1023 ? 0 : undefined,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						`.gsap-${props.type}-phone-primary`,
						{
							borderRadius: 0,
							duration: 1.5,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.to(
					`.gsap-${props.type}-phone-text-overlay`,
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
					`.gsap-${props.type}-phone-content`,
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
					`.gsap-${props.type}-phone-img img`,
					{
						// duration: 1,
						// scale: width > 1023 ? 1.4 : 1.3,
						// bottom: width > 1023 ? "unset" : "1rem",
						// clearProps: "scale,bottom",
						opacity: "0",
						translateY: "10%",
						duration: 0.5,
						stagger: 0.25,
						ease: Circ.easeOut,
						clearProps: "opacity,translateY",
					},
					">-1.25"
					// width > 1023 ? ">-2" : ">-0.5"
				);
				// if (width > 1023) {
				// tl.current.from(
				// ".gsap-${props.type}-phone-img img",
				// {
				// // duration: 1,
				// // scale: width > 1023 ? 1.4 : 1.3,
				// // bottom: width > 1023 ? "unset" : "1rem",
				// // clearProps: "scale,bottom",
				// translateY: "10%",
				// opacity: 0,
				// duration: 1,
				// clearProps: "opacity,translateY",
				// },
				// ">-1.25"
				// // width > 1023 ? ">-2" : ">-0.5"
				// );
				// } else {
				// tl.current.from(
				// ".gsap-${props.type}-phone-img img",
				// {
				// opacity: 0,
				// duration: 1,
				// translateY: "10%",
				// clearProps: "opacity,translateY",
				// },
				// ">-1.25"
				// // width > 1023 ? ">-2" : ">-0.5"
				// );
				// }

				//old gsap
				// gsap.from(".gsap-${props.type}-phone-img", {
				// scrollTrigger: {
				// trigger: `.gsap-${props.type}-phone`,
				// start: width > 1023 ? "top center" : "top center",
				// // toggleActions: "restart none none reverse",
				// // markers: true,
				// },
				// opacity: width > 1023 ? 0 : 1,
				// duration: 1,
				// clearProps: "opacity",
				// });
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
								<div
									className={
										"flex flex-row flex-wrap gap-2 font-semibold text-3xl 2xs:text-4xl lg:!text-5xl relative" +
										` ${props.customTitleStyle}`
									}
								>
									<div
										className={
											`gsap-${props.type}-phone-text-overlay bg-white w-full h-full absolute bottom-0 left-0 z-10 origin-bottom` +
											` ${props.customOverlayStyle || ""}`
										}
									></div>
									<h2
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading-[4rem] text-white gsap-${props.type}-phone-content ` +
											`${props.customTitleStyle}`
										}
									>
										{props.title}
									</h2>
								</div>

								<div
									className={
										"flex flex-row flex-wrap gap-2 font-semibold text-3xl 2xs:text-4xl lg:!text-5xl relative" +
										` ${props.customTitleStyle}`
									}
								>
									<div
										className={
											`gsap-${props.type}-phone-text-overlay bg-white w-full h-full absolute bottom-0 left-0 z-10 origin-bottom` +
											` ${props.customOverlayStyle || ""}`
										}
									></div>
									<p className={`text-xl 2xs:text-lg lg:text-xl text-left ` + `${props.customSubtitleStyle || ""}`}>
										{props.subTitle}
									</p>
								</div>
							</div>
							<div
								className={
									`grid grid-cols-2 2xs:grid-cols-4 mt-4 gap-8 lg:gap-16 pb-6 ` +
									`gsap-${props.type}-phone-img ` +
									`${props.customSecondaryContainerStyle || ""}`
								}
							>
								<img className="w-fit object-contain" src={props.imgOne} alt={props.imgOneAlt} />
								<img className="w-fit object-contain" src={props.imgTwo} alt={props.imgTwoAlt} />
								<img className="w-fit object-contain" src={props.imgThree} alt={props.imgThreeAlt} />
								<img className="w-fit object-contain" src={props.imgFour} alt={props.imgFourAlt} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MultiPhoneContainer;
