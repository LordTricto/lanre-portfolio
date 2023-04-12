import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import ViewProject from "../CircularWords/CircularWords";
import useDimension from "../../hooks/useDimension";
import {useNavigate} from "react-router-dom";

// import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface CoordsInterface {
	x: number;
	y: number;
}
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
	customTextOverlayStyle: string;

	delay?: number;

	link?: string;
	withViewProject?: boolean;
	circularWordsCustomStyle?: string;
}

function PhoneContainer(props: Props): JSX.Element {
	const {isSingle = true} = props;

	const {width} = useDimension();
	const navigate = useNavigate();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const primaryDivRef = useRef<HTMLDivElement | null>(null);

	const [hideCursor, setHideCursor] = useState(false);
	const [coords, setCoords] = useState<CoordsInterface>({
		x: 0,
		y: 0,
	});
	// const tl2 = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				gsap.from(".gsap-primary-container-tag", {
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
						start: "top center",
						// toggleActions: "restart none none reverse",
						// markers: true,
					},
					translateY: width > 1023 ? undefined : "10%",
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
							// toggleActions: "restart none none reverse",
							// markers: props.title === "Homescreen" ? true : false,
							// markers: true,
							onEnter: () => {
								// primaryDivRef.current?.classList.toggle("-active");
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

				if (width > 1023) {
					tl.current.from(
						".gsap-image-tag",
						{
							scale: 1.3,
							bottom: "1rem",
							duration: 1,
							clearProps: "bottom,scale",
						},
						">-1.25"
					);
				} else {
					tl.current.from(
						".gsap-image-tag",
						{
							opacity: 0,
							duration: 1,
							translateY: "10%",
							clearProps: "opacity,translateY",
						},
						">-1.25"
					);
				}
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

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const handleMouseOver = useCallback(() => {
		setHideCursor(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setHideCursor(false);
	}, []);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (phoneRef.current) {
			setCoords({
				x: e.clientX - phoneRef.current?.getBoundingClientRect().left || 0,
				y: e.clientY - phoneRef.current?.getBoundingClientRect().top || 0,
			});
		}
	}, []);

	const handleOnClick = useCallback(() => {
		if (props.link) {
			navigate(props.link || "");
		}
	}, [props.link]);

	return (
		<>
			<div className="w-full relative" style={{cursor: width > 1023 && hideCursor ? "none" : "auto"}} onClick={handleOnClick} ref={phoneRef}>
				{props.withViewProject && hideCursor && width > 1023 && (
					<div className="hidden z-30 lg:block">
						<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
					</div>
				)}
				<div
					className="gsap-container-tag w-full"
					style={{
						perspective: "500px",
						transformStyle: "preserve-3d",
					}}
					onMouseOver={props.withViewProject ? handleMouseOver : undefined}
					onMouseOut={props.withViewProject ? handleMouseLeave : undefined}
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
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative lg:max-w-sm 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
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
									{props.withViewProject && (
										<div className="absolute bottom-5 -right-2 3xs:bottom-7 md:bottom-14 3xs:right-0 lg:hidden z-30">
											<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)}
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
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom  " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative lg:max-w-sm 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
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
									{props.withViewProject && (
										<div className="absolute bottom-5 -right-2 3xs:bottom-7 md:bottom-14 3xs:right-0 lg:hidden z-30">
											<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)}
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
