import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ, Power4} from "gsap";

import CircularWords from "../../CircularWords/CircularWords";
import ReactGA from "react-ga";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface CoordsInterface {
	x: number;
	y: number;
}

function ContactMe(): JSX.Element {
	const contactDivRef = useRef<HTMLDivElement | null>(null);
	const divRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const [hideCursor, setHideCursor] = useState(false);
	const [coords, setCoords] = useState<CoordsInterface>({
		x: 0,
		y: 0,
	});

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-contact-me",
						start: width > 1024 ? "center center-=200px" : "top center",
					},
				});

				if (width > 767) {
					tl.current.from(".gsap-contact-me", {
						width: "100%",
						borderRadius: 0,
						padding: 0,
						duration: 1.5,
						ease: "M0,0 C0,0 0.024,0.595 0.2,0.8 0.406,1.04 1,1 1,1 ",
						clearProps: "width,padding,borderRadius",
					});

					tl.current.from(
						".gsap-contact-me-primary",
						{
							borderRadius: 0,
							duration: 1.5,
							clearProps: "borderRadius",
						},
						"<"
					);
				} else {
					tl.current.from(".gsap-contact-me", {
						opacity: 0,
						duration: width < 476 ? 0.5 : 1,
						translateY: "10%",
						clearProps: "opacity,translateY",
					});
				}

				tl.current.from(".gsap-contact-me-paragraph", {
					translateY: "100%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					stagger: width < 476 ? 0.25 : 0.5,
					ease: Circ.easeOut,
					clearProps: "transform,translateY",
				});

				tl.current.from(
					".gsap-contact-me-circular-words",
					{
						opacity: 0,
						duration: width < 476 ? 0.5 : 1,

						clearProps: "opacity",
					},
					">"
				);

				tl.current.to(
					".gsap-cta-one-span",
					{
						color: "#1F2130",
						duration: width < 476 ? 0.25 : 0.5,
						stagger: width < 476 ? 0.125 : 0.25,
						ease: Power4.easeInOut,
					},
					width < 476 ? ">+0.25" : ">+0.5"
				);
				tl.current.to(
					".gsap-cta-two-span",
					{
						color: "#1F2130",
						duration: width < 476 ? 0.25 : 0.5,
						stagger: width < 476 ? 0.125 : 0.25,
						ease: Power4.easeInOut,
					},
					width < 476 ? ">+0.25" : ">+0.5"
				);
				tl.current.to(
					".gsap-cta-three-span",
					{
						color: "#1F2130",
						duration: width < 476 ? 0.25 : 0.5,
						stagger: width < 476 ? 0.125 : 0.25,
						ease: Power4.easeInOut,
					},
					width < 476 ? ">+0.25" : ">+0.5"
				);
				tl.current.to(
					".gsap-cta-four-span",
					{
						color: "#1F2130",
						duration: width < 476 ? 0.25 : 0.5,
						stagger: width < 476 ? 0.125 : 0.25,
						ease: Power4.easeInOut,
					},
					width < 476 ? ">+0.25" : ">+0.5"
				);
				tl.current.to(
					".gsap-cta-five-span",
					{
						color: "#1F2130",
						duration: width < 476 ? 0.25 : 0.5,
						stagger: width < 476 ? 0.125 : 0.25,
						ease: Power4.easeInOut,
					},
					width < 476 ? ">+0.25" : ">+0.5"
				);
			}, contactDivRef);

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
		if (contactDivRef.current) {
			setCoords({
				x: e.clientX - contactDivRef.current?.getBoundingClientRect().left || 0,
				y: e.clientY - contactDivRef.current?.getBoundingClientRect().top || 0,
			});
		}
	}, []);

	const handleOnClick = useCallback(() => {
		ReactGA.event({
			category: "contact me",
			action: "test action",
			label: "test action",
			value: 1,
		});
		window.location.href = "mailto:yourmail@domain.com";
	}, []);

	return (
		<>
			<div className="w-full relative" style={{cursor: width > 1023 && hideCursor ? "none" : "auto"}} ref={contactDivRef}>
				{hideCursor && width > 1023 && (
					<div className="hidden z-30 lg:block pointer-events-none">
						<CircularWords coords={coords} name="- C o n t a c t - M e - N o w " />
					</div>
				)}

				<div className="gsap-contact-me px-4 2xs:px-8 lg:px-16 !pb-0 py-16 lg:p-16 w-full xl:w-[80rem] mx-auto relative overflow-hidden">
					<div className="gsap-contact-me-circular-words absolute -right-2 top-24 3xs:right-0 lg:relative z-30 lg:hidden pointer-events-none ">
						<CircularWords coords={coords} name="- C o n t a c t - M e - N o w " />
					</div>

					<div className="gsap-contact-me-primary w-full h-full bg-white rounded-3xl">
						<div
							className="flex flex-col xl:flex-row justify-start xl:justify-between items-start h-full gap-4 px-7 md:px-14 py-12 md:py-16 xl:w-[1152px] max-w-7xl mx-auto overflow-hidden"
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseLeave}
							onClick={handleOnClick}
							ref={divRef}
						>
							<div className="w-full xl:max-w-lg">
								<div className="gsap-cta gsap-contact-me-paragraph flex flex-col justify-start items-start gap-2">
									<p className="text-5xl 2xs:text-7xl lg:!text-8xl font-medium text-black-tertiary">
										<span className="gsap-cta-one-span"> Say </span>
										<span className="gsap-cta-one-span"> Hello! </span>
									</p>
									<p className="w-full break-words">
										<a
											className="text-xl xs:text-2xl lg:!text-3xl text-black-tertiary w-full"
											href="mailto:olanrewaju.olukanni@gmail.com"
										>
											olanrewaju.olukanni@gmail.com
										</a>
									</p>
								</div>
								<p className="gsap-contact-me-paragraph text-xl xs:text-2xl lg:!text-3xl text-black-tertiary pt-14">
									I was born and raised in Lagos,
									<span className="gsap-cta-two-span"> I </span>
									<span className="gsap-cta-two-span"> have </span>
									<span className="gsap-cta-two-span"> spent </span>
									<span className="gsap-cta-two-span"> almost </span>
									<span className="gsap-cta-two-span"> a </span>
									<span className="gsap-cta-two-span"> decades </span>
									<span className="gsap-cta-two-span"> in </span>
									<span className="gsap-cta-two-span"> the </span>
									<span className="gsap-cta-two-span"> digital </span>
									<span className="gsap-cta-two-span"> industry </span>
									working for design studios, companies and startups. I am currently
									<span className="gsap-cta-two-span"> Product </span>
									<span className="gsap-cta-two-span"> Designer </span>
									<span className="gsap-cta-two-span"> at </span>
									<span className="gsap-cta-two-span"> Lenco </span>
									<span className="gsap-cta-two-span"> in </span>
									<span className="gsap-cta-two-span"> Nigeria.</span>
								</p>
							</div>
							<div className="w-full xl:max-w-lg">
								<div className="flex flex-col gap-5.5 text-xl xs:text-2xl lg:!text-3xl text-black-tertiary mt-5.5 xl:mt-2">
									<p className="gsap-contact-me-paragraph ">
										I have
										<span className="gsap-cta-three-span"> expertise </span>
										<span className="gsap-cta-three-span"> in </span>
										leading large scale projects, from
										<span className="gsap-cta-three-span"> Product </span>
										<span className="gsap-cta-three-span"> Strategy, </span>
										<span className="gsap-cta-three-span"> User </span>
										<span className="gsap-cta-three-span"> Experience </span>
										<span className="gsap-cta-three-span"> & </span>
										<span className="gsap-cta-three-span"> Interaction </span>
										<span className="gsap-cta-three-span"> Design. </span>
									</p>
									<p className="gsap-contact-me-paragraph ">
										I&apos;m very
										<span className="gsap-cta-four-span"> passionate </span>
										<span className="gsap-cta-four-span"> about </span>
										<span className="gsap-cta-four-span"> digital </span>
										<span className="gsap-cta-four-span"> products, </span>
										<span className="gsap-cta-four-span"> technology, </span>
										and
										<span className="gsap-cta-four-span"> designs </span>
										that create a significant impact on humanity.
									</p>

									<p className="gsap-contact-me-paragraph ">
										I<span className="gsap-cta-five-span"> contribute </span>
										by bringing technology
										<span className="gsap-cta-five-span"> into </span>
										<span className="gsap-cta-five-span"> people&apos;s </span>
										<span className="gsap-cta-five-span"> lives </span>
										<span className="gsap-cta-five-span"> through </span>
										<span className="gsap-cta-five-span"> simple </span>
										and elegant digital products.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactMe;
