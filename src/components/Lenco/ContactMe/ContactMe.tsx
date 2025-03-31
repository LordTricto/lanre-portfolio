import React, {useCallback, useRef} from "react";
import gsap, {Power1} from "gsap";

import ReactGA from "react-ga";
// import useDimension from "../../../hooks/useDimension";
import {useGSAP} from "@gsap/react";

function ContactMe(): JSX.Element {
	const contactDivRef = useRef<HTMLDivElement | null>(null);
	const divRef = useRef<HTMLDivElement | null>(null);
	// const {width} = useDimension();

	const tl = useRef<gsap.core.Timeline | undefined>();

	useGSAP(
		() => {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-contact-me",
					// start: "center center",
					start: "center center",
					// markers: true,
					scrub: true,
					pin: ".gsap-contact-me",
					pinSpacing: true,
				},
			});

			tl.current.to([".gsap-cta-span"], {
				color: "#1F2130",
				stagger: 0.25,
				ease: Power1.easeInOut,
			});

			// if (width < 1024) {
			// tl.current.from(".gsap-contact-me", {
			// opacity: 0,
			// duration: width < 476 ? 0.5 : 1,
			// translateY: "10%",
			// clearProps: "opacity,translateY",
			// });
			// }
		},
		{scope: contactDivRef}
	);

	const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		ReactGA.event({
			category: "contact",
			action: "test action",
			label: "test action",
			value: 1,
		});
		const mailToLink = document.createElement("a");
		mailToLink.href = "mailto:olanrewaju.olukanni@gmail.com";
		mailToLink.style.display = "none";
		document.body.appendChild(mailToLink);
		mailToLink.click();
		document.body.removeChild(mailToLink);
	}, []);

	return (
		<>
			<div className="min-h-screen h-full w-full relative" ref={contactDivRef}>
				<div className="gsap-contact-me px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto relative overflow-hidden h-screen min-h-screen xl:flex xl:justify-center xl:items-center">
					<div className="gsap-contact-me-primary w-full h-full xl:h-fit bg-white rounded-3xl cursor-pointer">
						<div
							className="flex flex-col xl:flex-row justify-start xl:justify-between items-start h-full gap-4 px-7 md:px-14 py-12 md:py-16 xl:w-[1152px] max-w-7xl mx-auto overflow-hidden"
							onClick={handleOnClick}
							ref={divRef}
						>
							<div className="w-full xl:max-w-lg">
								<div className="gsap-cta gsap-contact-me-paragraph flex flex-col justify-start items-start gap-2">
									<p className="text-5xl 2xs:text-7xl lg:!text-8xl font-medium text-black-quat">
										<span className="gsap-cta-span"> Say </span>
										<span className="gsap-cta-span"> Hello! </span>
									</p>
									<p className="w-full break-words">
										<a
											className="text-xl xs:text-2xl lg:!text-3xl text-black-quat w-full"
											href="mailto:olanrewaju.olukanni@gmail.com"
										>
											olanrewaju.olukanni@gmail.com
										</a>
									</p>
								</div>
								<p className="gsap-contact-me-paragraph text-xl xs:text-2xl lg:!text-3xl text-black-quat pt-14">
									I was born and raised in Lagos,
									<span className="gsap-cta-span"> I </span>
									<span className="gsap-cta-span"> have </span>
									<span className="gsap-cta-span"> spent </span>
									<span className="gsap-cta-span"> almost </span>
									<span className="gsap-cta-span"> a </span>
									<span className="gsap-cta-span"> decades </span>
									<span className="gsap-cta-span"> in </span>
									<span className="gsap-cta-span"> the </span>
									<span className="gsap-cta-span"> digital </span>
									<span className="gsap-cta-span"> industry </span>
									working for design studios, companies and startups. I am currently
									<span className="gsap-cta-span"> Product </span>
									<span className="gsap-cta-span"> Designer </span>
									<span className="gsap-cta-span"> at </span>
									<span className="gsap-cta-span"> Lenco </span>
									<span className="gsap-cta-span"> in </span>
									<span className="gsap-cta-span"> Nigeria.</span>
								</p>
							</div>
							<div className="w-full xl:max-w-lg">
								<div className="flex flex-col gap-5.5 text-xl xs:text-2xl lg:!text-3xl text-black-quat mt-5.5 xl:mt-2">
									<p>
										I have
										<span className="gsap-cta-span"> expertise </span>
										<span className="gsap-cta-span"> in </span>
										leading large scale projects, from
										<span className="gsap-cta-span"> Product </span>
										<span className="gsap-cta-span"> Strategy, </span>
										<span className="gsap-cta-span"> User </span>
										<span className="gsap-cta-span"> Experience </span>
										<span className="gsap-cta-span"> & </span>
										<span className="gsap-cta-span"> Interaction </span>
										<span className="gsap-cta-span"> Design. </span>
									</p>
									<p>
										I&apos;m very
										<span className="gsap-cta-span"> passionate </span>
										<span className="gsap-cta-span"> about </span>
										<span className="gsap-cta-span"> digital </span>
										<span className="gsap-cta-span"> products, </span>
										<span className="gsap-cta-span"> technology, </span>
										and
										<span className="gsap-cta-span"> designs </span>
										that create a significant impact on humanity.
									</p>

									<p>
										I<span className="gsap-cta-span"> contribute </span>
										by bringing technology
										<span className="gsap-cta-span"> into </span>
										<span className="gsap-cta-span"> people&apos;s </span>
										<span className="gsap-cta-span"> lives </span>
										<span className="gsap-cta-span"> through </span>
										<span className="gsap-cta-span"> simple </span>
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
