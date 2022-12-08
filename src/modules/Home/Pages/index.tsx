import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ, Power1, Power4} from "gsap";

import BergerBG from "../../../assets/images/berger-bg.png";
// import {ReactComponent as ArrowDownIcon} from "../../../assets/svg/arrowDownIcon.svg";
import {ReactComponent as DownloadIcon} from "../../../assets/svg/download-icon.svg";
import ImageFive from "../../../assets/images/img-5.png";
import ImageFour from "../../../assets/images/img-4.png";
import ImageOne from "../../../assets/images/img-1.png";
import ImageThree from "../../../assets/images/img-3.png";
import ImageTwo from "../../../assets/images/img-2.png";
// import {Link} from "react-router-dom";
import MacImageOne from "../../../assets/images/mac-img-1.png";
import Nav from "../../../components/nav/nav";
import PhoneImageFive from "../../../assets/images/phone-img-5.png";
import PhoneImageFour from "../../../assets/images/phone-img-4.png";
import PhoneImageOne from "../../../assets/images/phone-img-1.png";
import PhoneImageThree from "../../../assets/images/phone-img-3.png";
import PhoneImageTwo from "../../../assets/images/phone-img-2.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../../hooks/useDimension";

// import { Link, animateScroll as scroll } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

function Home(): JSX.Element {
	// const timelineRanRef = useRef(false);
	// const initialDiv = useRef<HTMLDivElement | null>(null);
	// const overlayDiv = useRef<HTMLDivElement | null>(null);
	// const heroText = useRef<HTMLSpanElement | null>(null);
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();
	// const timeline = gsap.timeline();
	const tl = useRef<gsap.core.Timeline | undefined>();
	// useLayoutEffect(() => {
	// // console.log(timelineRanRef.current);
	// if (timelineRanRef.current) return;
	// console.log("first");
	// timelineRanRef.current = true;
	// timeline.from(heroText.current, {
	// duration: 1.5,
	// scale: 5,
	// color: "white",
	// // opacity: 0,
	// });
	// timeline.to(heroText.current, {
	// scale: 1,
	// });
	// timeline.from(overlayDiv.current, {
	// duration: 4,
	// width: 0,
	// ease: Power4.easeOut,
	// });
	// timeline.to(overlayDiv.current, {
	// duration: 0,
	// pointerEvents: "none",
	// opacity: 0,
	// });
	// timeline.to(initialDiv.current, {
	// duration: 4,
	// opacity: 0,
	// pointerEvents: "none",
	// ease: Power4.easeOut,
	// });
	// timeline.to(
	// heroText.current,
	// {
	// duration: 4,
	// color: "#1F2130",
	// ease: Power4.easeOut,
	// },
	// "=-4"
	// );

	// // timeline.pause();

	// return () => {
	// // console.log("object");
	// // timeline.pause();
	// };
	// }, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline();
			tl.current.to(".gsap-hero-text", {
				color: "white",
				duration: 0.5,
			});
			tl.current.from(".gsap-hero-text", {
				duration: 1.5,
				scale: 5,
			});
			tl.current.from(".gsap-overlay-div", {
				duration: width < 547 ? 5 : 4.6,
				width: 0,
				ease: Power1.easeOut,
			});
			tl.current.to(
				".gsap-overlay-div",
				{
					duration: 0,
					pointerEvents: "none",
					opacity: 0,
				},
				width < 547 ? "=-1" : "=-1.4"
			);
			tl.current.to(
				".gsap-initial-div",
				{
					duration: 2,
					opacity: 0,
					pointerEvents: "none",
				},
				width < 547 ? "=-1" : "=-1.4"
			);
			tl.current.to(
				".gsap-hero-text",
				{
					duration: 0,
					color: "#1F2130",
					ease: Power4.easeOut,
				},
				width < 547 ? "=-2.2" : "=-2"
			);

			gsap.from(".gsap-img-1", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top center",
					scrub: 1,
				},
				y: -40,
				ease: Circ.easeOut,
			});

			gsap.from(".gsap-img-3", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top center",
					scrub: 1,
				},
				y: +40,
				ease: Circ.easeOut,
			});

			gsap.from(".gsap-img-4", {
				scrollTrigger: {
					trigger: ".gsap-imgs-2",
					start: "top center",
					end: "bottom 100px",
					scrub: 1,
				},
				y: -40,
				ease: Circ.easeOut,
			});

			gsap.from(".gsap-img-5", {
				scrollTrigger: {
					trigger: ".gsap-imgs-2",
					start: "top center",
					end: "bottom 100px",
					scrub: 1,
				},
				y: +40,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-memo-span", {
				scrollTrigger: {
					trigger: ".gsap-memo",
					start: "top +=500px",
				},
				duration: 2.5,
				color: "#1F2130",
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-lenco-img", {
				scrollTrigger: {
					trigger: ".gsap-lenco-primary",
					start: "top +=400px",
				},
				duration: 1,
				scale: 1,
			});
			gsap.to(".gsap-lenco-img", {
				scrollTrigger: {
					trigger: ".gsap-lenco-primary",
					start: "center center",
					end: "bottom top",
					scrub: 0.3,
					markers: true,
					once: true,
					toggleActions: "play complete complete complete",
				},
				y: 40,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-ridr-img", {
				scrollTrigger: {
					trigger: ".gsap-ridr-primary",
					start: "top +=400px",
				},
				duration: 1,
				scale: 1,
			});
			gsap.to(".gsap-ridr-img", {
				scrollTrigger: {
					trigger: ".gsap-ridr-primary",
					start: "center center",
					end: "bottom top",
					scrub: 0.3,
					toggleActions: "play pause pause pause",
				},
				y: 40,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-accrue-img", {
				scrollTrigger: {
					trigger: ".gsap-accrue-primary",
					start: "center center",
				},
				duration: 1,
				scale: 1,
			});
			gsap.to(".gsap-accrue-img", {
				scrollTrigger: {
					trigger: ".gsap-accrue-primary",
					start: "center center",
					end: "bottom top",
					scrub: 0.3,
					toggleActions: "play pause pause pause",
				},
				y: 30,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-fora-img", {
				scrollTrigger: {
					trigger: ".gsap-fora-primary",
					start: "center center",
				},
				duration: 1,
				scale: 1,
			});
			gsap.to(".gsap-fora-img", {
				scrollTrigger: {
					trigger: ".gsap-fora-primary",
					start: "center center",
					end: "bottom top",
					scrub: 0.3,
					toggleActions: "play pause pause pause",
				},
				y: 30,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-berger-img", {
				scrollTrigger: {
					trigger: ".gsap-berger-primary",
					start: "center center",
				},
				duration: 1,
				scale: 1,
			});
			gsap.to(".gsap-berger-img", {
				scrollTrigger: {
					trigger: ".gsap-berger-primary",
					start: "center center",
					end: "bottom top",
					scrub: 0.3,
					toggleActions: "play pause pause pause",
				},
				y: 30,
				ease: Circ.easeOut,
			});

			gsap.to(".gsap-cta-span", {
				scrollTrigger: {
					trigger: ".gsap-cta",
					start: "top +=500px",
				},
				duration: 2.5,
				color: "#1F2130",
				ease: Circ.easeOut,
			});
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<main className="flex flex-col gap-16 min-h-screen w-full bg-white-dark pb-8 relative" ref={landingDivRef}>
				<section className="relative z-10 w-full overflow-hidden">
					<Nav />
					<div className="h-screen px-8 lg:px-16 max-w-7xl mx-auto w-full">
						<div className="h-full w-full flex flex-col justify-center items-center gap-10">
							<div className="bg-black h-fit-available w-full absolute top-0 left-0 z-20 gsap-initial-div"></div>
							<div className="black-gradient h-full w-[110vw] absolute top-0 -right-0.5 z-30 gsap-overlay-div"></div>
							<div className="text-center z-20 relative">
								<span className="block text-5xl 3xs:text-6xl xs:!text-[5rem] lg:!text-9xl uppercase font-zighead z-30 gsap-hero-text">
									Olanrewaju
								</span>
							</div>
							<div className="text-center pb-10 -mt-10">
								<span className="block text-black-quat mt-2 text-sm -z-10">/aww◦lan◦ray◦wa◦jew/</span>
							</div>
							<div className="max-w-3xl text-black-secondary">
								<p className="text-lg 2xs:text-xl md:!text-2xl text-center">
									Hi, I’m Olanrewaju, a Product Designer focused on building products and connections driven by empathy, people and
									technology.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full">
						<div className="gsap-imgs-1 relative mb-4 min-[360]:mb-10 3xs:mb-16 lg:mb-36 h-[232px] xs:h-[332px] md:!h-[432px] lg:!h-[652px] xl:!h-[852px] w-full max-w-[1720px] mx-auto ">
							<img
								className={
									`gsap-img-1 absolute top-8 3xs:top-16 ` +
									`h-[150px] xs:h-[220px] md:!h-[320px] lg:!h-[520px] xl:!h-[720px] ` +
									`object-contain h-full grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
									`-left-[125px] xs:-left-[185px] md:!-left-[270px] lg:!-left-[440px] xl:!-left-[610px] `
								}
								src={ImageOne}
								alt="chair"
							/>
							<div
								className={
									`absolute top-0 left-0 h-full w-full ` + `h-[200px] xs:h-[300px] md:!h-[400px] lg:!h-[620px] xl:!h-[820px]`
								}
							>
								<div className="relative w-full h-full">
									<img
										className="object-contain h-full w-max grayscale transition !ease-linear duration-300 hover:grayscale-0 mx-auto "
										src={ImageTwo}
										alt="map"
									/>
								</div>
							</div>
							<img
								className={
									`gsap-img-3 absolute top-4 3xs:top-8 ` +
									`h-[200px] xs:h-[300px] md:!h-[400px] lg:!h-[620px] xl:!h-[820px] ` +
									`object-contain h-full grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
									`-right-[82px] xs:-right-[125px] md:!-right-[168px] lg:!-right-[260px] xl:!-right-[345px] `
								}
								src={ImageThree}
								alt="people"
							/>
						</div>
						<div className="gsap-imgs-2 relative mb-8 xs:mb-16 lg:mb-32 h-[120px] [@media(min-width:360px)]:h-[145px] [@media(min-width:540px)]:h-[200px] md:!h-[350px] lg:!h-[450px] xl:!h-[550px]">
							<img
								className={
									`gsap-img-4 absolute top-0 ` +
									`h-[120px] [@media(min-width:360px)]:h-[145px] [@media(min-width:540px)]:h-[200px] md:!h-[350px] lg:!h-[450px] xl:!h-[550px] ` +
									`object-contain h-full grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
									`-left-[31px] [@media(min-width:360px)]:-left-[38px] [@media(min-width:540px)]:-left-[53px] md:!-left-[95px] lg:!-left-[120px] xl:!-left-[150px] `
								}
								src={ImageFour}
								alt="people dancing"
							/>

							<img
								className={
									`gsap-img-5 absolute top-2 lg:top-4 ` +
									`h-[120px] [@media(min-width:360px)]:h-[145px] [@media(min-width:540px)]:h-[200px] md:!h-[350px] lg:!h-[450px] xl:!h-[550px] ` +
									`object-contain h-full grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
									`-right-[31px] [@media(min-width:360px)]:-right-[38px] [@media(min-width:540px)]:-right-[53px] md:!-right-[95px] lg:!-right-[120px] xl:!-right-[150px] `
								}
								src={ImageFive}
								alt="hero page"
							/>
						</div>
					</div>
					<div className="gsap-memo px-8 !pb-0 py-16 lg:p-16 max-w-7xl mx-auto">
						<div className="flex flex-col md:flex-row justify-between items-center gap-6 p-7 2xs:p-14 bg-white rounded-3xl">
							<div className="max-w-lg">
								<p className="text-2xl xs:text-3xl lg:!text-4xl text-black-quat">
									With a background in design,
									<span className="gsap-memo-span"> I work closely with design-focused teams </span>
									to build websites for companies and Individuals.
								</p>
							</div>
							<div className="max-w-lg">
								<p className="text-2xl xs:text-3xl lg:!text-4xl text-black-quat">
									I have
									<span className="gsap-memo-span">
										{" "}
										years of experience working, collaborating with product teams and building{" "}
									</span>
									user-centered products.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full h-fit">
					<div className="flex flex-col min-h-screen gap-16 lg:gap-32 max-w-7xl mx-auto w-full px-8 lg:px-16">
						<p className="text-4xl 2xs:text-5xl lg:!text-6xl text-black font-medium">Projects</p>
						<div className="gsap-lenco-primary flex flex-col lg:flex-row justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14">
							<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
								<span className="text-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs lg:leading-[4rem]">
									Lenco Bank Mobile
								</span>
								<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
									Lenco is a neo-bank that issues easy to open and free to operate current bank accounts for Startups and SMEs
									without any hassle.
								</p>
							</div>
							<div className="mt-1 pt-20 w-full flex justify-center">
								<img
									className="-mt-10 h-[420px] lg:h-[650px] scale-[1.2] origin-top w-max object-contain gsap-lenco-img !ease-linear"
									src={PhoneImageOne}
									alt="phone showing app dashboard(lenco)"
								/>
							</div>
						</div>
						<div className="gsap-ridr-primary flex flex-col lg:flex-row justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14">
							<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full lg:order-2">
								<span className="text-success font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs lg:leading-[4rem]">
									Ridr Fitness
								</span>
								<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
									Ridr is a Web3 fitness app with Social-Fi and Game-Fi elements. Users equipped with NFT e-Bikes, e-Scotters,
									Skateboards et.c – ride and earn tokens.
								</p>
							</div>
							<div className="mt-0.5 pt-20 w-full flex justify-center lg:order-1">
								<img
									className="-mt-10 h-[420px] lg:h-[650px] scale-[1.2] origin-top w-max object-contain gsap-ridr-img !ease-linear"
									src={PhoneImageTwo}
									alt="phone showing app(ridr)"
								/>
							</div>
						</div>
						<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
							<div className="gsap-accrue-primary flex flex-col justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14 w-full lg:w-60%">
								<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
									<span className="text-accrue-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-sm lg:leading-[4rem]">
										Accrue Savings
									</span>
									<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
										Accrue Savings is a New York-based fintech startup that helps users save money towards purchases by offering
										customizable savings plans and cash rewards.
									</p>
								</div>
								<div className="gsap-accrue-secondary pt-[30px] w-full flex justify-center xl:justify-between gap-4 pb-10">
									<img
										className="h-[420px] xl:h-[350px] scale-[1.2] origin-top w-max object-contain gsap-accrue-img !ease-linear"
										src={PhoneImageThree}
										alt="phone showing app(accrue)"
									/>
									<img
										className="h-[350px] scale-[1.2] origin-top w-max object-contain hidden xl:block gsap-accrue-img !ease-linear"
										src={PhoneImageFour}
										alt="second phone showing app(accrue)"
									/>
								</div>
							</div>
							<div className="gsap-fora-primary flex flex-col justify-between items-start bg-fora-blue rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14 w-full lg:w-40%">
								<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
									<span className="text-white font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-sm lg:leading-[4rem]">
										Fora
									</span>
									<p className="lg:max-w-sm 2xs:text-lg lg:text-xl text-white">
										Fora is a mobile online community that allows Nigerians creatives build a portfolio, connect with other
										creatives.
									</p>
								</div>
								<div className="gsap-fora-secondary pt-10 w-full flex justify-center pb-10">
									<img
										className="h-[420px] xl:h-[350px] scale-[1.2] origin-top w-max object-contain gsap-fora-img !ease-linear"
										src={PhoneImageFive}
										alt="phone showing app(fora)"
									/>
								</div>
							</div>
						</div>
						<div className="h-full w-full pb-24 md:pb-96 relative">
							<div className="gsap-berger-primary flex flex-col justify-center items-center w-full text-white rounded-3xl z-10 h-[520px] 4xs:h-[580px] 2xs:h-[780px] md:!h-[640px] xl:!h-[720px] relative px-7 md:px-14 overflow-hidden md:overflow-visible">
								<img className="h-full w-full absolute rounded-3xl" src={BergerBG} alt="Berger Paints bg" />
								<div className="flex flex-col justify-start items-left md:items-center gap-8 pt-12 sm:pt-20 w-full z-10">
									<span className="font-semibold text-3xl 2xs:text-4xl md:!text-5xl max-w-sm md:leading-[4rem] text-left md:text-center">
										Berger Paints
									</span>
									<p className="md:max-w-sm 2xs:text-lg md:text-xl text-white">
										Nigeria&apos;s leading paint brand, offering varieties of paints and coating products to provide your desired
										colors.
									</p>
								</div>
								<div className="h-full w-full relative">
									<div className=" pt-5 4xs:pt-9 2xs:pt-[68px] md:pt-0 [@media(min-width:930px)]:pt-20 w-max md:w-full block [@media(min-width:890px)]:flex justify-center absolute [@media(min-width:890px)]:!-bottom-44 top-0 [@media(min-width:890px)]:left-0">
										<img
											className="gsap-berger-img h-[240px] 4xs:h-[280px] 2xs:h-[390px] [@media(min-width:500px)]:h-[410px] xs:!h-[460px] sm:!h-[520px] md:!h-[600px] xl:!h-[640px] scale-[1.2] md:scale-[1.2] origin-top w-full [@media(min-width:890px)]:w-max object-contain"
											src={MacImageOne}
											alt="Mac showing app landing page(Berger Paints)"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="px-8 !pt-0 py-16 lg:p-16 max-w-7xl mx-auto w-full">
					<div className="gsap-cta flex flex-col xl:flex-row justify-start xl:justify-between items-center px-7 py-14 md:px-14 bg-white rounded-3xl">
						<div className="w-full xl:max-w-lg">
							<div className="flex flex-col justify-start items-start gap-2">
								<p className="gsap-cta-span text-5xl 2xs:text-7xl lg:!text-8xl font-medium text-black-tertiary">Say Hello!</p>
								<p className="w-full break-words">
									<a
										className="text-xl xs:text-2xl lg:!text-3xl text-black-tertiary w-full"
										href="mailto:olanrewaju.olukanni@gmail.com"
									>
										olanrewaju.olukanni@gmail.com
									</a>
								</p>
							</div>
							<p className="text-xl xs:text-2xl lg:!text-3xl text-black-tertiary pt-14">
								I was born and raised in Lagos,
								<span className="gsap-cta-span"> I have spent almost a decades in the digital industry </span>
								working for design studios, companies and startups. I am currently
								<span className="gsap-cta-span"> Product Designer at Lenco in Nigeria.</span>
							</p>
						</div>
						<div className="w-full xl:max-w-lg">
							<div className="flex flex-col gap-5.5 text-xl xs:text-2xl lg:!text-3xl text-black-tertiary mt-5.5 xl:mt-2">
								<p>
									I have
									<span className="gsap-cta-span"> expertise in </span>
									leading large scale projects, from
									<span className="gsap-cta-span"> Product Strategy, User Experience & Interaction Design. </span>
								</p>
								<p>
									I&apos;m very
									<span className="gsap-cta-span"> passionate about digital products, technology, </span>
									and
									<span className="gsap-cta-span"> designs </span>
									that create a significant impact on humanity.
								</p>

								<p>
									I<span className="gsap-cta-span"> contribute </span>
									by bringing technology
									<span className="gsap-cta-span"> into people&apos;s lives through simple </span>
									and elegant digital products.
								</p>
							</div>
						</div>
					</div>
				</section>
				<footer>
					<div className="flex justify-center items-center w-full gap-3 2xs:gap-10 text-lg uppercase max-w-7xl mx-auto">
						<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">LinkedIn</span>
						</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">
								<DownloadIcon className="pr-1" />
								RESUME
							</span>
						</a>
						<a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">Twitter</span>
						</a>
					</div>
				</footer>
			</main>
		</>
	);
}

export default Home;
