import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

// import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);
interface Props {
	type: string;
	title: string;
	subTitle: string[] | null;
	imgOne: string;
	imgOneAlt: string;

	// gsapImageTag: string;
	customContainerStyle: string;
	customSecondaryContainerStyle?: string | undefined;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	customOverlayStyle?: string;
	customImageStyle?: string;
}

function SideImageContainer(props: Props): JSX.Element {
	const divRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				setTimeout(() => {
					tl.current?.scrollTrigger?.refresh();
					ScrollTrigger.refresh();
				}, 7000);

				if (width < 1024) {
					gsap.from(`.gsap-${props.type}-side-image`, {
						scrollTrigger: {
							trigger: `.gsap-${props.type}-side-image`,
							start: "top center+=150px",
						},
						translateY: "10%",
						opacity: 0,
						duration: 1,
						clearProps: "opacity,translateY",
					});
				}

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: `.gsap-${props.type}-side-image`,
						start: "top center",
					},
				});

				if (width > 1023) {
					tl.current.from(`.gsap-${props.type}-side-image`, {
						width: "100%",
						borderRadius: 0,
						padding: width > 1023 ? 0 : undefined,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						`.gsap-${props.type}-side-image-primary`,
						{
							borderRadius: 0,
							duration: 1.5,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.to(
					`.gsap-${props.type}-side-image-text-overlay`,
					{
						height: "0",
						stagger: 0.75,
						duration: 2,
						clearProps: "opacity",
						ease: Circ.easeInOut,
					},
					">-0.5"
				);
				tl.current.from(
					`.gsap-${props.type}-side-image-content`,
					{
						opacity: 0,
						stagger: 0.75,
						duration: 1.25,
						clearProps: "translateY,opacity",
						ease: Circ.easeOut,
					},
					">-2"
				);
				tl.current.from(
					`.gsap-${props.type}-side-image img`,
					{
						opacity: "0",
						translateX: "10%",
						duration: 1,
						ease: Circ.easeOut,
						clearProps: "opacity,translateX",
					},
					">-0.5"
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
			<div className="w-full" ref={divRef}>
				<div
					className={
						`gsap-${props.type}-side-image ` +
						`px-4 2xs:px-8 lg:px-16 w-full h-[730px] lg:h-[800px] xl:w-[80rem] mx-auto overflow-hidden relative `
					}
				>
					<div
						className={
							`gsap-${props.type}-side-image-primary ` +
							`flex flex-col justify-start items-start gsap-${props.type}-side-image-primary rounded-3xl h-full w-full pt-12 sm:pt-16 overflow-hidden ` +
							`${props.customContainerStyle} `
						}
					>
						<div className="flex flex-col justify-start items-start h-full w-full xl:w-[1152px] max-w-7xl mx-auto px-7 md:px-14 gap-14">
							<div className="flex flex-col justify-start items-start w-full gap-6">
								<div className="flex flex-row flex-wrap gap-2 font-semibold text-3xl 2xs:text-4xl lg:!text-5xl relative">
									<div
										className={
											`gsap-${props.type}-side-image-text-overlay w-full h-full absolute bottom-0 left-0 z-10 origin-bottom` +
											` ${props.customOverlayStyle || ""}`
										}
									></div>
									<h2
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading-[4rem] gsap-${props.type}-side-image-content ` +
											`${props.customTitleStyle}`
										}
									>
										{props.title}
									</h2>
								</div>

								<div className="flex flex-row flex-wrap gap-2 relative">
									<div
										className={
											`gsap-${props.type}-side-image-text-overlay w-full h-full absolute bottom-0 left-0 z-10 origin-bottom` +
											` ${props.customOverlayStyle || ""}`
										}
									></div>
									<p className={`text-xl 2xs:text-lg lg:text-xl text-left ` + `${props.customSubtitleStyle || ""}`}>
										{props.subTitle && props.subTitle[0]}
									</p>
								</div>
							</div>
							<div className={`h-full w-full relative gsap-${props.type}-side-image`}>
								<img
									className={"absolute origin-top object-contain " + `${props.customImageStyle || ""}`}
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

export default SideImageContainer;
