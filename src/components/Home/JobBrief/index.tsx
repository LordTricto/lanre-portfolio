import React, {useRef} from "react";
import gsap, {Power1} from "gsap";

import {useGSAP} from "@gsap/react";

function JobBrief(): JSX.Element {
	const el = useRef<HTMLDivElement | null>(null);
	const animation = useRef<gsap.core.Timeline>();

	useGSAP(
		() => {
			animation.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-memo",
					start: "center center",
					scrub: true,
					pin: ".gsap-memo",
					pinSpacing: true,
				},
			});

			animation.current.to([".gsap-memo-one-span", ".gsap-memo-two-span"], {
				color: "#1F2130",
				stagger: 0.25,
				ease: Power1.easeInOut,
			});
		},
		{scope: el}
	);

	return (
		<>
			<div className="min-h-screen h-full w-full" ref={el}>
				<div className="gsap-memo px-4 2xs:px-8 lg:px-16 !pb-0 py-16 lg:p-16 w-full xl:w-[80rem] mx-auto relative overflow-hidden h-screen min-h-screen flex justify-center items-center">
					<div className="gsap-memo-primary w-full h-fit bg-white rounded-3xl">
						<div className="flex flex-col md:flex-row justify-between items-start h-full gap-4 px-7 md:px-14 py-12 md:py-16 xl:w-[1152px] max-w-7xl mx-auto">
							<div className="gsap-memo-overlay-one flex justify-start items-start lg:max-w-lg overflow-hidden">
								<p className="gsap-memo-one text-2xl xs:text-3xl lg:!text-4xl text-black-quat select-none">
									With a background in design,
									<span className="gsap-memo-one-span w-full"> I </span>
									<span className="gsap-memo-one-span w-full"> work </span>
									<span className="gsap-memo-one-span w-full"> closely </span>
									<span className="gsap-memo-one-span w-full"> with </span>
									<span className="gsap-memo-one-span w-full"> design-focused </span>
									<span className="gsap-memo-one-span w-full"> teams </span>
									to build websites for companies and Individuals.
								</p>
							</div>
							<div className="gsap-memo-overlay-two flex justify-start items-start lg:max-w-lg overflow-hidden">
								<p className="gsap-memo-two text-2xl xs:text-3xl lg:!text-4xl text-black-quat select-none">
									I have
									<span className="gsap-memo-two-span"> years </span>
									<span className="gsap-memo-two-span"> of </span>
									<span className="gsap-memo-two-span"> experience </span>
									<span className="gsap-memo-two-span"> working, </span>
									<span className="gsap-memo-two-span"> collaborating </span>
									<span className="gsap-memo-two-span"> with </span>
									<span className="gsap-memo-two-span"> product </span>
									<span className="gsap-memo-two-span"> teams </span>
									<span className="gsap-memo-two-span"> and </span>
									<span className="gsap-memo-two-span"> building </span>
									user-centered
									<span className="gsap-memo-two-span"> products.</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default JobBrief;
