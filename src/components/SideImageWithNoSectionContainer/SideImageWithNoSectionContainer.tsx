import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

// import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);
interface Props {
	type: string;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;

	// gsapImageTag: string;
	customContainerStyle: string;
	customImageOneContainerStyle?: string;
	customImageTwoContainerStyle?: string;
	customImageOneStyle?: string;
	customImageTwoStyle?: string;

	isSingle?: boolean;
	animateFromBottom?: boolean;
}

function SideImageWithNoSectionContainer(props: Props): JSX.Element {
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
					gsap.from(`.gsap-${props.type}-side-image-no-section`, {
						scrollTrigger: {
							trigger: `.gsap-${props.type}-side-image-no-section`,
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
						trigger: `.gsap-${props.type}-side-image-no-section`,
						start: width < 476 ? "top center+=200px" : "top center",
						// toggleActions: "restart none none reverse",
					},
				});

				if (width > 1023) {
					tl.current.from(`.gsap-${props.type}-side-image-no-section`, {
						width: "100%",
						borderRadius: 0,
						padding: width > 1023 ? 0 : undefined,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						`.gsap-${props.type}-side-image-no-section-primary`,
						{
							borderRadius: 0,
							duration: 1.5,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.from(
					`.gsap-${props.type}-side-image-no-section-img img`,
					{
						opacity: "0",
						translateX: props.animateFromBottom ? undefined : "10%",
						translateY: props.animateFromBottom ? "10%" : undefined,
						duration: width < 476 ? 0.5 : 1,
						stagger: width < 476 ? 0.5 : 1,
						ease: Circ.easeOut,
						clearProps: props.animateFromBottom ? "opacity,translateY" : "opacity,translateX",
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
			<div className="w-full" ref={divRef}>
				<div
					className={
						`gsap-${props.type}-side-image-no-section ` +
						`px-4 2xs:px-8 lg:px-16 w-full h-max xl:w-[80rem] mx-auto overflow-hidden relative `
						// `px-4 2xs:px-8 lg:px-16 w-full h-[730px] lg:h-[800px] xl:w-[80rem] mx-auto overflow-hidden relative `
					}
				>
					<div
						className={
							`gsap-${props.type}-side-image-no-section-primary ` +
							`flex flex-col justify-start items-start gsap-${props.type}-side-image-no-section-primary rounded-3xl w-full ` +
							`${props.customContainerStyle} `
						}
					>
						<div className="flex flex-col justify-center items-center h-full w-full relative overflow-hidden ">
							{props.isSingle && (
								<div
									className={
										"absolute " + `gsap-${props.type}-side-image-no-section-img ` + `${props.customImageOneContainerStyle || ""}`
									}
								>
									<img
										className={"origin-top object-contain " + "w-full " + `${props.customImageOneStyle || ""}`}
										src={props.imgOne}
										alt={props.imgOneAlt}
									/>
								</div>
							)}
							{!props.isSingle && (
								<>
									<div
										className={
											"absolute " +
											`gsap-${props.type}-side-image-no-section-img ` +
											`${props.customImageOneContainerStyle || ""}`
										}
									>
										<img
											className={"origin-top object-contain " + " w-full " + `${props.customImageOneStyle || ""}`}
											src={props.imgOne}
											alt={props.imgOneAlt}
										/>
									</div>
									<div
										className={
											"absolute " +
											`gsap-${props.type}-side-image-no-section-img ` +
											`${props.customImageTwoContainerStyle || ""}`
										}
									>
										<img
											className={"origin-top object-contain " + " w-full " + `${props.customImageTwoStyle || ""}`}
											src={props.imgTwo}
											alt={props.imgTwoAlt}
										/>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SideImageWithNoSectionContainer;
