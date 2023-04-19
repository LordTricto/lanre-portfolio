import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import ViewProject from "../CircularWords/CircularWords";
import useDimension from "../../hooks/useDimension";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface CoordsInterface {
	x: number;
	y: number;
}
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

	link?: string;
	withViewProject?: boolean;
	circularWordsCustomStyle?: string;
}

function BigPhoneContainer(props: Props): JSX.Element {
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();
	const navigate = useNavigate();

	const [hideCursor, setHideCursor] = useState(false);
	const [coords, setCoords] = useState<CoordsInterface>({
		x: 0,
		y: 0,
	});
	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				gsap.from(".gsap-big-phone", {
					scrollTrigger: {
						trigger: ".gsap-big-phone",
						start: "top center+=150px",
					},
					translateY: "10%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					clearProps: "opacity,translateY",
				});

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-big-phone",
						start: "top center",
					},
				});

				if (width > 1023) {
					tl.current.from(".gsap-big-phone", {
						width: "100%",
						borderRadius: 0,
						padding: width > 1023 ? 0 : undefined,
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
						stagger: width < 476 ? 0.375 : 0.75,
						duration: width < 476 ? 1 : 2,
						clearProps: "opacity",
						ease: Circ.easeInOut,
					},
					width < 476 ? ">-0.25" : ">-0.5"
				);
				tl.current.from(
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
				if (width > 1023) {
					tl.current.from(
						".gsap-big-phone-img",
						{
							duration: 1,
							scale: width > 1023 ? 1.4 : 1.3,
							bottom: width > 1023 ? "unset" : "1rem",
							clearProps: "scale,bottom",
						},
						">-1.25"
					);
				} else {
					tl.current.from(
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
				tl.current.from(".gsap-view-project", {
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
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
		// setCoords({
		// x: 0,
		// y: 0,
		// });
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
			<div className="w-full relative" style={{cursor: width > 1023 && hideCursor ? "none" : "auto"}} ref={phoneRef}>
				{props.withViewProject && hideCursor && width > 1023 && (
					<div className="hidden z-30 lg:block">
						<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
					</div>
				)}
				<div className="gsap-big-phone px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto overflow-hidden relative">
					<div
						className={"gsap-big-phone-primary bg-white rounded-3xl h-[730px] lg:h-[640px] w-full " + ` ${props.customContainerStyle}`}
						onMouseOver={props.withViewProject ? handleMouseOver : undefined}
						onMouseOut={props.withViewProject ? handleMouseLeave : undefined}
						onClick={handleOnClick}
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
								/>
								{props.withViewProject && (
									<div className="gsap-view-project absolute bottom-5 -right-2 3xs:bottom-7 md:bottom-14 3xs:right-0 lg:hidden z-30">
										<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BigPhoneContainer;
