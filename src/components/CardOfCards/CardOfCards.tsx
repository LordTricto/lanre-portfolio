import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import BergerBG from "../../assets/images/berger/berger-competitive-bg.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

function CardOfCards(): JSX.Element {
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				if (width < 1024) {
					gsap.from(".gsap-card-primary", {
						scrollTrigger: {
							trigger: ".gsap-card-primary",
							start: "top center+=150px",
						},
						translateY: "10%",
						opacity: 0,
						duration: 1,
						clearProps: "opacity,translateY",
						// toggleActions: "restart none none reverse",
					});
				}

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-card-primary",
						start: "top center",
						// toggleActions: "restart none none reverse",
					},
				});
				if (width > 1023) {
					tl.current.from(".gsap-card-primary", {
						width: "100%",
						borderRadius: 0,
						padding: 0,
						duration: 1.5,
						ease: Circ.easeOut,
						clearProps: "width,padding,borderRadius",
					});
					tl.current.from(
						".gsap-card-primary-bg",
						{
							borderRadius: 0,
							duration: 1.5,
							ease: Circ.easeOut,
							clearProps: "borderRadius",
						},
						"<"
					);
				}
				tl.current.from(
					".gsap-card-primary-images div",
					{
						translateY: "10%",
						opacity: 0,
						stagger: 0.25,
						duration: 0.25,
						ease: Circ.easeOut,
						clearProps: "opacity,translateY",
					},
					">"
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
			<div className="w-full" ref={phoneRef}>
				<div className="gsap-card-primary px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto relative rounded-3xl">
					<div className="w-full relative">
						<img className="gsap-card-primary-bg h-full w-full absolute rounded-3xl" src={BergerBG} alt="Berger Paints bg" />
						<div className="gsap-card-primary-images flex justify-start items-start flex-wrap gap-5 w-full px-7 md:px-14 py-8 md:py-12 ">
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">No clear Call-to-Action</div>
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">
									Lack of consistency (Product Image)
								</div>
							</div>
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">No product suggestions</div>
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">
									Difficulty in navigating through the website
								</div>
							</div>
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">
									Landing page is somewhat confusing
								</div>
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">Distracting content/interface</div>
								<div className="py-3 px-5 rounded-2xl bg-white text-black text-base font-medium">Poor e-commerce experience</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardOfCards;
