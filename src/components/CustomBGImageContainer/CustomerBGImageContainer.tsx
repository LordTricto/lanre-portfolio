import React, {useLayoutEffect, useRef} from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	imgOne: string;
	imgOneAlt: string;

	customContainerStyle: string;
	customImgOneStyle?: string;

	customBackgroundImage: string;

	animateFromBottom?: boolean;
}

function CustomBGImageContainer(props: Props): JSX.Element {
	const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const primaryDivRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				gsap.from(".gsap-primary-container-tag", {
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
						start: width < 476 ? "top center+=200px" : "top center",
					},
					translateY: width > 1023 ? undefined : "10%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					clearProps: "opacity,translateY",
				});

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
						start: width < 476 ? "top center+=200px" : "top center",
					},
				});

				if (width > 1023) {
					gsap.from(".gsap-primary-container-tag", {
						scrollTrigger: {
							trigger: ".gsap-container-tag",
							start: "top center",
							onEnter: () => {
								primaryDivRef.current?.classList.add("-active");
							},
						},
					});
				}
				tl.current.from(
					".gsap-image-tag",
					{
						opacity: 0,
						duration: width < 476 ? 0.5 : 1,
						translateX: props.animateFromBottom ? undefined : "10%",
						translateY: props.animateFromBottom ? "10%" : undefined,
						clearProps: props.animateFromBottom ? "opacity,translateY" : "opacity,translateX",
					},
					width < 476 ? ">=+0.5" : ">=+1"
				);
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
			<div className="w-full relative" ref={phoneRef}>
				<div
					className="gsap-container-tag w-full"
					style={{
						perspective: "500px",
						transformStyle: "preserve-3d",
					}}
				>
					<div
						className={
							`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative w-full ` +
							`gsap-primary-container-tag ` +
							`${props.customContainerStyle} `
						}
						ref={primaryDivRef}
					>
						{props.customBackgroundImage && (
							<img className="h-full w-full absolute rounded-3xl" src={props.customBackgroundImage} alt="custom background image" />
						)}
						<div className={`gsap-secondary-container-tag ` + `flex flex-col justify-between items-start h-full w-full relative `}>
							<div className="flex justify-center items-center w-full h-full relative ">
								<img
									className={
										`gsap-image-tag ` +
										`absolute !ease-linear origin-top w-max object-contain ` +
										`${props.customImgOneStyle || ""} `
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

export default CustomBGImageContainer;
