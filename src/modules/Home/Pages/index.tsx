import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import gsap, {Power1, Power4} from "gsap";

import BigPhoneContainer from "../../../components/BigPhoneContainer/BigPhoneContainer";
import CircularWords from "../../../components/CircularWords/CircularWords";
import ContactMe from "../../../components/Lenco/ContactMe/ContactMe";
import {ReactComponent as DownloadIcon} from "../../../assets/svg/download-icon.svg";
import ImageFive from "../../../assets/images/home/img-5.png";
import ImageFour from "../../../assets/images/home/img-4.png";
import ImageOne from "../../../assets/images/home/img-1.png";
import ImageThree from "../../../assets/images/home/img-3.png";
import ImageTwo from "../../../assets/images/home/img-2.png";
import JobBrief from "../../../components/Home/JobBrief";
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
import useDimension from "../../../hooks/useDimension";
import {useGSAP} from "@gsap/react";
// import {useLenis} from "@studio-freight/react-lenis";
import {useLocation} from "react-router-dom";

type LocationState = {
	from: string;
};

function Home(): JSX.Element {
	const {width} = useDimension();
	const location = useLocation().state as LocationState;

	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const landingDivRef = useRef<HTMLDivElement | null>(null);

	const [isLoading, setIsLoading] = useState(true);
	const [showLoader, setShowLoader] = useState(false);
	const [numOfImages, setNumOfImages] = useState<number>(0);

	// const lenis = useLenis(() => ScrollTrigger.update());
	useLayoutEffect(() => {
		window.onload;
		document.body.style.scrollBehavior = "unset";
		window.scrollTo(0, 0);

		if (numOfImages === 12) {
			setIsLoading(false);
			setShowLoader(false);
		} else {
			setTimeout(() => {
				setShowLoader(true);
			}, 4000);
		}
	}, [numOfImages]);

	useGSAP(
		() => {
			tl.current = gsap.timeline();
			tl2.current = gsap.timeline();

			tl.current.to(".gsap-hero-text", {
				color: "white",
				duration: 0,
				onComplete: () => {
					document.body.style.overflow = "hidden";
					document.body.style.scrollBehavior = "unset";
					// lenis && lenis.stop && lenis.stop();
				},
			});

			if (isLoading) {
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
					// lenis && lenis.start && lenis.start();
				},
			});

			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-links",
					start: "top-=50px bottom",
					// toggleActions: "restart none none reverse",
					// markers: true,
				},
			});

			tl2.current.from([".gasp-link"], {
				opacity: 0,
				duration: 1.5,
				ease: Power1.easeInOut,
			});
		},
		{dependencies: [isLoading]}
	);

	// useEffect(() => ScrollTrigger.update(), [lenis]);

	const handleUpdateImageCount = useCallback(() => {
		setNumOfImages((prev) => prev + 1);
	}, []);

	return (
		<>
			<Nav pageLoaded={!isLoading} />

			<main
				id="smooth-content"
				className="flex flex-col min-h-screen w-full bg-white-dark pb-8 2xl:pb-24 relative overflow-hidden"
				ref={landingDivRef}
			>
				{/* <main className="flex flex-col gap-16 min-h-screen w-full bg-white-dark pb-8 relative
				 overflow-hidden [&>svg]:h-5" ref={landingDivRef}> */}
				<div id="gsap-index-div" className="h-full w-full flex flex-col gap-16">
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

					<section className="relative z-10 w-full overflow-hidden min-h-fit">
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
										Hi, I&apos;m Olanrewaju, a Product Designer focused on building products and connections driven by empathy,
										people and technology.
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
						<JobBrief />
					</section>
					<section className={`gsap-section-project ` + "w-full h-fit"}>
						<div className="flex flex-col min-h-screen gap-16 lg:gap-32 w-full">
							<h2
								className={
									`gsap-section-project-header ` +
									`pb-2 px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto ` +
									`md:pt-36 text-4xl 2xs:text-5xl lg:!text-6xl text-black text-left font-medium overflow-hidden `
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
								customOverlayStyle="bg-blue-tertiary"
								imgOne={PhoneImageOne}
								imgOneAlt="phone showing app dashboard(lenco)"
								link="/lenco"
								handleUpdateImageCount={handleUpdateImageCount}
							/>

							<BigPhoneContainer
								title="Ridr Fitness"
								subTitle="Ridr is a Web3 fitness app with Social-Fi and Game-Fi elements. Users equipped with NFT e-Bikes,
												e-Scotters, Skateboards et.c - ride and earn tokens."
								customTitleStyle="text-success"
								customContainerStyle="bg-white"
								customOverlayStyle="bg-success-tertiary"
								link="/ridr"
								imgOne={PhoneImageTwo}
								imgOneAlt="phone showing app(ridr)"
								handleUpdateImageCount={handleUpdateImageCount}
								imgFirst
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
											link="/accrue"
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
											isSingle
											link="/fora"
											handleUpdateImageCount={handleUpdateImageCount}
										/>
									</div>
								</div>
							</div>

							<MacContainer link="/berger" handleUpdateImageCount={handleUpdateImageCount} />
						</div>
					</section>
					<ContactMe />
					<footer>
						<div className="gsap-links flex justify-center items-center w-full gap-3 2xs:gap-10 text-lg uppercase max-w-7xl mx-auto">
							<a
								className="gasp-link"
								href="https://www.linkedin.com/in/olanrewaju-olukanni-628a11149/"
								target="_blank"
								rel="noreferrer"
							>
								<span className="text-xs xs:text-base">LinkedIn</span>
							</a>
							<a
								className="gasp-link"
								href="https://drive.google.com/file/d/1tu0lPxDybsIBOZfnoc5jDy6GWBHVNuD9/view"
								target="_blank"
								rel="noreferrer"
							>
								<span className="flex flex-row justify-center items-center text-xs xs:text-base">
									<DownloadIcon className="pr-1" />
									RESUME
								</span>
							</a>
							<a className="gasp-link" href="mailto:olanrewaju.olukanni@gmail.com">
								<span className="text-xs xs:text-base">Contact</span>
							</a>
						</div>
					</footer>
					<div
						className={`gsap-page-departure-transition-div black-gradient-left-right-home h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
					></div>
				</div>
			</main>
		</>
	);
}

export default Home;
