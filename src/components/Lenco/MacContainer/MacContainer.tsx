import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ} from "gsap";

import BergerBG from "../../../assets/images/berger-bg.png";
import MacImageOne from "../../../assets/images/mac-img-1.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import ViewProject from "../../CircularWords/CircularWords";
import useDimension from "../../../hooks/useDimension";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface CoordsInterface {
	x: number;
	y: number;
}

interface Props {
	link?: string;
	withViewProject?: boolean;
	circularWordsCustomStyle?: string;
}

function MacContainer(props: Props): JSX.Element {
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();
	const navigate = useNavigate();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const [hideCursor, setHideCursor] = useState(false);
	const [coords, setCoords] = useState<CoordsInterface>({
		x: 0,
		y: 0,
	});

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				if (width < 1024) {
					gsap.from(".gsap-berger-primary", {
						scrollTrigger: {
							trigger: ".gsap-berger-primary",
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
						trigger: ".gsap-berger-primary",
						start: "top center",
					},
				});
				if (width > 1023) {
					tl.current.from(".gsap-berger-primary", {
						width: "100%",
						borderRadius: 0,
						padding: 0,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						".gsap-berger-primary-bg",
						{
							borderRadius: 0,
							duration: 1.5,
							ease: Circ.easeOut,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.from(".gsap-berger-content", {
					opacity: 0,
					stagger: 0.75,
					duration: 1,
					translateY: "40%",
					ease: Circ.easeOut,
					clearProps: "translateY,opacity,transform",
				});
				if (width > 1023) {
					tl.current.from(
						".gsap-berger-img",
						{
							duration: 1,
							scale: 1.2,
							clearProps: "bottom,scale",
						},
						">-=1"
					);
				} else {
					tl.current.from(
						".gsap-berger-img",
						{
							opacity: 0,
							duration: 1,
							translateX: "10%",
							clearProps: "opacity,translateX",
						},
						">-=1"
					);
				}
				tl.current.from(".gsap-view-project", {
					opacity: 0,
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
			<div className="w-full" ref={phoneRef}>
				<div
					className="gsap-berger-primary h-full px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto pb-24 md:pb-96 relative rounded-3xl"
					style={{cursor: width > 1023 && hideCursor ? "none" : "auto"}}
				>
					{props.withViewProject && hideCursor && width > 1023 && (
						<div className="hidden z-30 lg:block">
							<ViewProject coords={coords} circularWordsCustomStyle={props.circularWordsCustomStyle} />
						</div>
					)}
					<div
						className="flex flex-col justify-center items-center w-full text-white  z-10 h-[640px] 2xs:h-[780px] md:!h-[740px] xl:!h-[720px] mx-auto relative px-7 md:px-14 overflow-hidden lg:overflow-visible"
						onMouseOver={props.withViewProject ? handleMouseOver : undefined}
						onMouseOut={props.withViewProject ? handleMouseLeave : undefined}
						onClick={handleOnClick}
					>
						<img className="gsap-berger-primary-bg h-full w-full absolute rounded-3xl" src={BergerBG} alt="Berger Paints bg" />
						<div className="flex flex-col justify-start items-start lg:items-center gap-8 pt-12 sm:pt-20 w-full z-10 text-left lg:text-center">
							<span className="gsap-berger-content font-semibold text-3xl 2xs:text-4xl md:!text-5xl max-w-sm md:leading-[4rem] text-left lg:text-center">
								Berger Paints
							</span>
							<p className="gsap-berger-content max-w-2xl 2xs:text-lg md:text-xl text-white">
								Nigeria&apos;s leading paint brand, offering varieties of paints and coating products to provide your desired colors.
							</p>
						</div>
						<div className="h-full w-full relative">
							<div className={"md:pt-20 w-full " + `flex justify-center items-end lg:block ` + `absolute -bottom-16 lg:top-0 left-0`}>
								<img
									className={
										"gsap-berger-img scale-[1] origin-top object-contain " +
										"w-full [@media(min-width:900px)]:w-[700px] lg:!w-full  " +
										//for the mobile view
										"absolute left-0 [@media(min-width:815px)]:relative " +
										"min-w-[400px] 3xs:min-w-[500px] xs:min-w-[650px] sm:min-w-[675px] md:min-w-[700px]  " +
										"bottom-10 xs:bottom-[unset] " +
										"lg:h-[600px] xl:h-[700px] " +
										``
									}
									src={MacImageOne}
									alt="Mac showing app landing page(Berger Paints)"
								/>
								{props.withViewProject && (
									<div className="gsap-view-project absolute -right-2 bottom-24 3xs:right-0 lg:hidden z-30">
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

export default MacContainer;
