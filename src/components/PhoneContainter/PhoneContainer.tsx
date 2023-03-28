import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

// import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	isSingle: boolean;
	title: string;
	subTitle: string;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;
	gsapImageTag: string;
	gsapPrimaryContainerTag: string;
	gsapSecondaryContainerTag: string;
	gsapTextOverlayTag: string;
	gsapImgsContainerTag: string;
	customContainerStyle: string;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	delay?: number;
}

function PhoneContainer(props: Props): JSX.Element {
	const {isSingle = true} = props;

	const phoneRef = useRef<HTMLDivElement | null>(null);
	const primaryDivRef = useRef<HTMLDivElement | null>(null);

	const {width} = useDimension();
	const tl = useRef<gsap.core.Timeline | undefined>();
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				gsap.from(".gsap-primary-container-tag", {
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
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
						trigger: ".gsap-primary-container-tag",
						start: "top center",
						// markers: true,
					},
				});

				if (width > 1023) {
					gsap.from(".gsap-primary-container-tag", {
						scrollTrigger: {
							trigger: ".gsap-container-tag",
							start: "top center",
							// end:
							toggleActions: "restart none none reverse",
							// markers: true,
							onEnter: () => {
								primaryDivRef.current?.classList.add("-active");
							},
						},
					});
				}

				tl.current.to(
					".gsap-text-overlay-tag",
					{
						delay: props.delay,
						height: "0",
						stagger: 0.75,
						duration: 2,
						clearProps: "opacity",
						ease: Circ.easeInOut,
					},
					">-0.5"
				);
				tl.current.from(
					".gsap-content",
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
				tl.current.from(".gsap-image-tag", {
					duration: 1,
					scale: 1.3,
					bottom: "1rem",
					clearProps: "bottom,scale",
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
				<div
					className="gsap-container-tag w-full"
					style={{
						perspective: "500px",
						transformStyle: "preserve-3d",
					}}
				>
					{isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-4 2xs:px-8 lg:px-16 w-full ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							ref={primaryDivRef}
						>
							<div className={`gsap-secondary-container-tag ` + `flex flex-col justify-between items-start h-full w-full `}>
								<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
									<div
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] max-w-sm relative pb-1.5 ` +
											`${props.customTitleStyle}`
										}
									>
										<div
											className={
												`gsap-text-overlay-tag ` + "bg-pink-50 w-full h-full absolute bottom-0 left-0 z-10 origin-bottom"
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative lg:max-w-sm 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` + "bg-pink-50 w-full h-full absolute bottom-0 left-0 z-10 origin-bottom"
											}
										></div>
										<p className={`2xs:text-lg lg:text-xl gsap-content ` + `${props.customSubtitleStyle || ""}`}>
											{props.subTitle}
										</p>
									</div>
								</div>
								<div className={`flex justify-center w-full relative ` + `gsap-imgs-container-tag`}>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max object-contain ` +
											`absolute bottom-10 sm:bottom-16 ` +
											`gsap-image-tag`
										}
										src={props.imgOne}
										alt={props.imgOneAlt}
									/>
								</div>
							</div>
						</div>
					)}
					{!isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-6 md:px-12 w-full ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							ref={primaryDivRef}
						>
							<div className={`gsap-secondary-container-tag ` + `flex flex-col justify-between items-start h-full w-full `}>
								<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
									<div
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] max-w-sm relative pb-1.5 ` +
											`${props.customTitleStyle}`
										}
									>
										<div
											className={
												`gsap-text-overlay-tag ` + "bg-pink-50 w-full h-full absolute bottom-0 left-0 z-10 origin-bottom"
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative lg:max-w-sm 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` + "bg-pink-50 w-full h-full absolute bottom-0 left-0 z-10 origin-bottom"
											}
										></div>
										<p className={`2xs:text-lg lg:text-xl gsap-content ` + `${props.customSubtitleStyle || ""}`}>
											{props.subTitle}
										</p>
									</div>
								</div>
								<div className={`flex justify-center h-full w-full relative ` + `gsap-imgs-container-tag`}>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max xl:ml-5 object-contain ` +
											`absolute bottom-10 sm:bottom-16 xl:left-0 ` +
											`gsap-image-tag`
										}
										src={props.imgOne}
										alt={props.imgOneAlt}
									/>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max xl:mr-5 object-contain hidden xl:block ` +
											`absolute bottom-10 sm:bottom-16 right-0 ` +
											`gsap-image-tag`
										}
										src={props.imgTwo}
										alt={props.imgTwoAlt}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default PhoneContainer;
