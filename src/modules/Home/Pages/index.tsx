import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ, Power1, Power4} from "gsap";

import BigPhoneContainer from "../../../components/BigPhoneContainer/BigPhoneContainer";
import CircularWords from "../../../components/CircularWords/CircularWords";
import ContactMe from "../../../components/Lenco/ContactMe/ContactMe";
import {ReactComponent as DownloadIcon} from "../../../assets/svg/download-icon.svg";
import ImageFive from "../../../assets/images/home/img-5.png";
import ImageFour from "../../../assets/images/home/img-4.png";
import ImageOne from "../../../assets/images/home/img-1.png";
import ImageThree from "../../../assets/images/home/img-3.png";
import ImageTwo from "../../../assets/images/home/img-2.png";
import MacContainer from "../../../components/Lenco/MacContainer/MacContainer";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainer/PhoneContainer";
import PhoneImageFive from "../../../assets/images/home/phone-img-5.png";
import PhoneImageFour from "../../../assets/images/home/phone-img-4.png";
import PhoneImageOne from "../../../assets/images/home/phone-img-1.png";
import PhoneImageThree from "../../../assets/images/home/phone-img-3.png";
import PhoneImageTwo from "../../../assets/images/home/phone-img-2.png";
import PuffLoader from "react-spinners/PuffLoader";
import ReactGA from "react-ga";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../../hooks/useDimension";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

type LocationState = {
	from: string;
};

function Home(): JSX.Element {
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const {width} = useDimension();
	const location = useLocation().state as LocationState;
	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [showLoader, setShowLoader] = useState(false);
	const [numOfImages, setNumOfImages] = useState<number>(0);

	useLayoutEffect(() => {
		window.onload;
		document.body.style.scrollBehavior = "unset";
		window.scrollTo(0, 0);

		// window.onbeforeunload = function () {
		// window.scrollTo(0, 0);
		// };

		ReactGA.pageview(window.location.pathname);

		if (numOfImages === 12) {
			setIsLoading(false);
			setShowLoader(false);
		} else {
			setTimeout(() => {
				setShowLoader(true);
			}, 4000);
		}
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline();

			tl.current.to(".gsap-hero-text", {
				color: "white",
				duration: 0,
				onComplete: () => {
					document.body.style.overflow = "hidden";
					document.body.style.scrollBehavior = "unset";
				},
			});

			if (numOfImages !== 12) {
				tl.current.pause(0.05);
			}

			tl.current.to(".gsap-page-entry-transition-div", {
				opacity: 0,
				pointerEvents: "none",
				duration: 1,
				delay: 1,
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
			tl.current.from(".gsap-contact-me-now", {
				duration: 1,
				opacity: 0,
				ease: Power4.easeOut,
				onComplete: () => {
					document.body.style.overflow = "unset";
					document.body.style.scrollBehavior = "smooth";
				},
			});

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

			gsap.from(".gsap-img-1", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top bottom-=300px",
					// toggleActions: "restart none none reverse",
				},
				translateX: "-20%",
				opacity: 0,
				duration: 0.5,
				ease: Circ.easeOut,
				clearProps: "translateX,opacity",
			});
			gsap.from(".gsap-img-2", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top bottom-=300px",
					// toggleActions: "restart none none reverse",
				},
				translateY: "20%",
				opacity: 0,
				duration: 0.5,
				ease: Circ.easeOut,
				clearProps: "translateY,opacity",
			});
			gsap.from(".gsap-img-3", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top bottom-=300px",
					// toggleActions: "restart none none reverse",
				},
				translateX: "20%",
				opacity: 0,
				duration: 0.5,
				ease: Circ.easeOut,
				clearProps: "translateX,opacity",
			});

			gsap.from(".gsap-img-4", {
				scrollTrigger: {
					trigger: ".gsap-imgs-2",
					start: "top bottom-=300px",
					// toggleActions: "restart none none reverse",
				},
				translateX: "-20%",
				opacity: 0,
				duration: 0.5,
				ease: Circ.easeOut,
				clearProps: "translateX,opacity",
			});
			gsap.from(".gsap-img-5", {
				scrollTrigger: {
					trigger: ".gsap-imgs-2",
					start: "top bottom-=300px",
					// toggleActions: "restart none none reverse",
				},
				translateX: "20%",
				opacity: 0,
				duration: 0.5,
				ease: Circ.easeOut,
				clearProps: "translateX,opacity",
			});

			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-memo",
					start: width < 476 ? "top center+=200px" : "top center",
				},
			});

			if (width > 767) {
				tl2.current.from(".gsap-memo", {
					width: "100%",
					borderRadius: 0,
					padding: 0,
					height: "30rem",
					duration: 1.5,
					ease: "M0,0 C0,0 0.024,0.595 0.2,0.8 0.406,1.04 1,1 1,1 ",
					clearProps: "height,width,padding,borderRadius",
				});

				tl2.current.from(
					".gsap-memo-primary",
					{
						borderRadius: 0,
						duration: 1.5,
						clearProps: "borderRadius",
					},
					"<"
				);
			} else {
				tl2.current.from(".gsap-memo", {
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					translateY: "10%",
					clearProps: "opacity,translateY",
				});
			}

			tl2.current.from([".gsap-memo-one", ".gsap-memo-two"], {
				translateY: "100%",
				opacity: 0,
				duration: width < 476 ? 0.5 : 1,
				stagger: width < 476 ? 0.25 : 0.5,
				ease: Circ.easeOut,
				clearProps: "transform,translateY",
			});
			tl2.current.to(".gsap-memo-one-span", {
				color: "#1F2130",
				duration: width < 476 ? 0.25 : 0.5,
				stagger: width < 476 ? 0.125 : 0.25,
				ease: Power4.easeInOut,
			});
			tl2.current.to(
				".gsap-memo-two-span",
				{
					color: "#1F2130",
					duration: width < 476 ? 0.25 : 0.5,
					stagger: width < 476 ? 0.125 : 0.25,
					ease: Power4.easeInOut,
				},
				width < 476 ? ">+0.25" : ">+0.5"
			);

			gsap.from(".gsap-section-project-header", {
				scrollTrigger: {
					trigger: ".gsap-section-project",
					start: width < 476 ? "top center" : "top center-=150px",
				},
				translateY: "20%",
				opacity: 0,
				duration: width < 476 ? 0.5 : 1,
				ease: Circ.easeOut,
				clearProps: "translateY,opacity",
			});
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, [numOfImages]);

	const handleUpdateImageCount = useCallback(() => {
		setNumOfImages((prev) => prev + 1);
	}, []);

	return (
		<>
			<Nav pageLoaded={numOfImages === 12} />

			<main className="flex flex-col gap-16 min-h-screen w-full bg-white-dark pb-8 relative overflow-hidden" ref={landingDivRef}>
				<div
					className={
						`gsap-main-div flex justify-center items-center w-full h-full min-h-screen bg-black fixed top-0 left-0 z-60 ` +
						`${!isLoading ? "opacity-0 pointer-events-none" : ""} ` +
						`${location?.from === "/" ? "!bg-white-dark " : ""} ` +
						`${location?.from === "/lenco" ? "!bg-lenco-bg-dark " : ""} ` +
						`${location?.from === "/ridr" ? "!bg-ridr-bg-green " : ""} ` +
						`${location?.from === "/accrue" ? "!bg-accrue-blue-light " : ""} ` +
						`${location?.from === "/berger" ? "!bg-berger-white " : ""} ` +
						`${location?.from === "/fora" ? "!bg-fora-bg-white " : ""} `
					}
				>
					<div className={`transition-all z-30 ${showLoader ? "opacity-100" : "opacity-0"}`}>
						<PuffLoader color={location?.from === "/lenco" || location?.from === "/ridr" ? "#ffff" : "#1F2130"} speedMultiplier={2} />
					</div>
				</div>
				<div
					className={
						`gsap-page-entry-transition-div w-screen h-screen fixed z-50 bg-black ` +
						`${location?.from === "/" ? "!bg-white-dark " : ""} ` +
						`${location?.from === "/lenco" ? "!bg-lenco-bg-dark " : ""} ` +
						`${location?.from === "/ridr" ? "!bg-ridr-bg-green " : ""} ` +
						`${location?.from === "/accrue" ? "!bg-accrue-blue-light " : ""} ` +
						`${location?.from === "/berger" ? "!bg-berger-white " : ""} ` +
						`${location?.from === "/fora" ? "!bg-fora-bg-white " : ""} `
					}
				></div>

				<section className="relative z-10 w-full overflow-hidden">
					<div className="h-screen px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto w-full">
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
									Hi, I&apos;m Olanrewaju, a Product Designer focused on building products and connections driven by empathy, people
									and technology.
								</p>
							</div>
						</div>
						<div
							className="relative"
							onClick={(e) => {
								e.preventDefault();
								ReactGA.event({
									category: "contact",
									action: "test action",
									label: "test action",
									value: 2,
								});
								const mailToLink = document.createElement("a");
								mailToLink.href = "mailto:olanrewaju.olukanni@gmail.com";
								mailToLink.style.display = "none";
								document.body.appendChild(mailToLink);
								mailToLink.click();
								document.body.removeChild(mailToLink);
							}}
						>
							<div className="gsap-contact-me-now flex justify-center items-center absolute bottom-8 right-0 h-36 w-36 rounded-full">
								<div className="relative">
									<CircularWords name="- C o n t a c t - M e - N o w " />
								</div>
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
								onLoad={handleUpdateImageCount}
							/>
							<div
								className={
									`gsap-img-2 absolute top-0 left-0 h-full w-full ` +
									`h-[200px] xs:h-[300px] md:!h-[400px] lg:!h-[620px] xl:!h-[820px]`
								}
							>
								<div className="relative w-full h-full">
									<img
										className="object-contain h-full w-max grayscale transition !ease-linear duration-300 hover:grayscale-0 mx-auto "
										src={ImageTwo}
										alt="map"
										onLoad={handleUpdateImageCount}
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
								onLoad={handleUpdateImageCount}
							/>
						</div>
						<div className="gsap-imgs-2 relative mb-8 xs:mb-16 lg:mb-32 mt-16 2xs:mt-0 h-[200px] md:!h-[350px] lg:!h-[450px] xl:!h-[550px]">
							<img
								className={
									`gsap-img-4 absolute top-0 ` +
									`h-[120px] [@media(min-width:360px)]:h-[145px] [@media(min-width:540px)]:h-[200px] md:!h-[350px] lg:!h-[450px] xl:!h-[550px] ` +
									`object-contain h-full grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
									`-left-[31px] [@media(min-width:360px)]:-left-[38px] [@media(min-width:540px)]:-left-[53px] md:!-left-[95px] lg:!-left-[120px] xl:!-left-[150px] `
								}
								src={ImageFour}
								alt="people dancing"
								onLoad={handleUpdateImageCount}
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
								onLoad={handleUpdateImageCount}
							/>
						</div>
					</div>
					<div className="gsap-memo px-4 2xs:px-8 lg:px-16 !pb-0 py-16 lg:p-16 w-full xl:w-[80rem] mx-auto relative overflow-hidden">
						<div className="gsap-memo-primary w-full h-full bg-white rounded-3xl">
							<div className="flex flex-col md:flex-row justify-between items-start h-full gap-4 px-7 md:px-14 py-12 md:py-16 xl:w-[1152px] max-w-7xl mx-auto">
								<div className="gsap-memo-overlay-one flex justify-start items-start lg:max-w-lg overflow-hidden">
									<p className="gsap-memo-one text-2xl xs:text-3xl lg:!text-4xl text-black-quat">
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
									<p className="gsap-memo-two text-2xl xs:text-3xl lg:!text-4xl text-black-quat">
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
										user-centered products.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`gsap-section-project ` + "w-full h-fit"}>
					<div className="flex flex-col min-h-screen gap-16 lg:gap-32 w-full">
						<h2
							className={
								`gsap-section-project-header ` +
								`pb-2 px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto ` +
								`pt-16 2xs:pt-36 text-4xl 2xs:text-5xl lg:!text-6xl text-black text-left font-medium overflow-hidden `
							}
						>
							<span>Projects</span>
						</h2>

						<BigPhoneContainer
							title="Lenco Bank Mobile"
							subTitle="Lenco is a neo-bank that issues easy to open and free to operate current bank accounts for Startups
												and SMEs without any hassle."
							customTitleStyle="text-blue"
							customContainerStyle="bg-white"
							customOverlayStyle="bg-white"
							imgOne={PhoneImageOne}
							imgOneAlt="phone showing app dashboard(lenco)"
							link="/lenco"
							withViewProject
							handleUpdateImageCount={handleUpdateImageCount}

							// delay={1}
						/>

						<BigPhoneContainer
							title="Ridr Fitness"
							subTitle="Ridr is a Web3 fitness app with Social-Fi and Game-Fi elements. Users equipped with NFT e-Bikes,
												e-Scotters, Skateboards et.c – ride and earn tokens."
							customTitleStyle="text-success"
							customContainerStyle="bg-white"
							customOverlayStyle="bg-white"
							imgOne={PhoneImageTwo}
							imgOneAlt="phone showing app(ridr)"
							imgFirst
							link="/ridr"
							withViewProject
							handleUpdateImageCount={handleUpdateImageCount}

							// delay={1}
						/>

						<div className="w-full relative">
							<div className="flex justify-start lg:justify-end items-start flex-col lg:flex-row w-full gap-16 lg:gap-8 relative transition-transform px-4 2xs:px-8 lg:px-16 xl:w-[80rem] mx-auto ">
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Accrue Savings"
										subTitle="Accrue Savings is a New York-based fintech startup that helps users save money towards purchases by offering
										customizable savings plans and cash rewards."
										customTitleStyle="text-accrue-blue"
										customContainerStyle="bg-white"
										customTextOverlayStyle="bg-white"
										imgOne={PhoneImageThree}
										imgTwo={PhoneImageFour}
										imgOneAlt="phone showing app(accrue)"
										imgTwoAlt="second phone showing app(accrue)"
										isSingle={false}
										delay={width > 1279 ? 1 : undefined}
										link="/accrue"
										withViewProject
										handleUpdateImageCount={handleUpdateImageCount}
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Fora"
										subTitle="Fora is a mobile online community that allows Nigerians creatives build a portfolio, connect with other
										creatives."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-fora-blue"
										customTextOverlayStyle="bg-fora-blue"
										imgOne={PhoneImageFive}
										imgOneAlt="phone showing app(fora)"
										delay={width > 1279 ? 1 : undefined}
										isSingle
										link="/fora"
										withViewProject
										circularWordsCustomStyle="text-white lg:text-black"
										handleUpdateImageCount={handleUpdateImageCount}
									/>
								</div>
							</div>
						</div>
						<MacContainer
							link="/berger"
							withViewProject
							circularWordsCustomStyle="text-black"
							handleUpdateImageCount={handleUpdateImageCount}
						/>
					</div>
				</section>
				<ContactMe />
				<footer>
					<div className="flex justify-center items-center w-full gap-3 2xs:gap-10 text-lg uppercase max-w-7xl mx-auto">
						<a href="https://www.linkedin.com/in/olanrewaju-olukanni-628a11149/" target="_blank" rel="noreferrer">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">LinkedIn</span>
						</a>
						<a href="https://drive.google.com/file/d/1tu0lPxDybsIBOZfnoc5jDy6GWBHVNuD9/view" target="_blank" rel="noreferrer">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">
								<DownloadIcon className="pr-1" />
								RESUME
							</span>
						</a>
						<a href="mailto:olanrewaju.olukanni@gmail.com">
							<span className="flex flex-row justify-center items-center text-xs xs:text-base">Contact</span>
						</a>
					</div>
				</footer>
				<div
					className={`gsap-page-departure-transition-div black-gradient-left-right-home h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Home;
