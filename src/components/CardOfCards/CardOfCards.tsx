import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import BergerBG from "../../assets/images/berger/berger-competitive-bg.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	handleUpdateImageCount?: () => void;
}

function CardOfCards(props: Props): JSX.Element {
	const phoneRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			if (width < 1024) {
				gsap.from(".gsap-card-primary", {
					scrollTrigger: {
						trigger: ".gsap-card-primary",
						start: "top center+=150px",
					},
					translateY: "10%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					clearProps: "opacity,translateY",
					// toggleActions: "restart none none reverse",
				});
			}

			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-card-primary",
					start: width < 476 ? "top center+=200px" : "top center",
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
					stagger: width < 476 ? 0.125 : 0.25,
					duration: width < 476 ? 0.125 : 0.25,
					ease: Circ.easeOut,
					clearProps: "opacity,translateY",
				},
				">"
			);
		}, phoneRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<div className="w-full h-full" ref={phoneRef}>
				<div className="gsap-card-primary px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto relative rounded-3xl">
					<div className="w-full relative">
						<img
							className="gsap-card-primary-bg h-full w-full absolute rounded-3xl"
							src={BergerBG}
							alt="Berger Paints bg"
							onLoad={props.handleUpdateImageCount}
						/>
						<div className="gsap-card-primary-images flex justify-start items-start flex-wrap gap-5 w-full px-7 md:px-14 py-8 md:py-12 ">
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									No clear Call-to-Action
								</div>
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									Lack of consistency (Product Image)
								</div>
							</div>
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									No product suggestions
								</div>
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									Difficulty in navigating through the website
								</div>
							</div>
							<div className="flex justify-start items-start flex-wrap gap-5 w-full">
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									Landing page is somewhat confusing
								</div>
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									Distracting content/interface
								</div>
								<div className="py-2 md:py-3 px-4 md:px-5 rounded-xl md:rounded-2xl bg-white text-black text-sm md:text-base font-medium">
									Poor e-commerce experience
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardOfCards;
