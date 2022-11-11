import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ, Power1, Power4} from "gsap";

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
			// const animation1 = gsap.to(".box1", { rotation: "+=360" });
			tl.current = gsap.timeline();
			tl.current.to(".gsap-hero-text", {
				// scale: 1,
				color: "white",
				duration: 0.5,
			});
			tl.current.from(".gsap-hero-text", {
				duration: 1.5,
				scale: 5,
				// color: "white",
				// opacity: 0,
			});
			// tl.current.to(".gsap-hero-text", {
			// scale: 1,
			// // color: "white",
			// });
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
			gsap.to(".gsap-imgs-1", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "-150px 400px",
					// end: "top 100px",
					// scrub: 1,
					// markers: true,
					toggleActions: "play none none reverse",
				},
				opacity: 1,
				duration: 2,
				ease: "none",
				// reversed: false,
			});
			gsap.from(".gsap-img-1", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top center",
					end: "top 100px",
					scrub: 1,
					// markers: true,
				},
				y: -75,
				ease: Circ.easeOut,
			});
			gsap.from(".gsap-img-3", {
				scrollTrigger: {
					trigger: ".gsap-imgs-1",
					start: "top center",
					end: "top 100px",
					scrub: 1,
					// markers: true,
				},
				y: +50,
				ease: Circ.easeOut,
			});
		}, landingDivRef);
		// <- scopes all selector text inside the context to this ref
		// (optional, default is document)

		//   const onMove = () => {
		//     ...
		//   };
		//   window.addEventListener("pointermove", onMove);

		// cleanup function will be called when component is removed

		return () => {
			ctx.revert(); // cleanup!!
			// window.removeEventListener("pointermove", onMove);
		};
	}, []);

	return (
		<main className="flex flex-col min-h-screen w-full bg-white-dark pb-8 relative" ref={landingDivRef}>
			{/* <main className="flex flex-col min-h-screen w-full bg-white-dark pb-8 max-w-7xl mx-auto relative"> */}
			<section className="relative z-10 w-full overflow-hidden">
				{/* <div className="fixed h-screen w-full uppercase bg-black z-20">
					<ul className="flex flex-col justify-center items-center gap-14 h-full w-full p-8 text-6xl text-white">
						<li className="transition-all hover:scale-110">LENCO</li>
						<li className="transition-all line-through text-black-secondary opacity-10 hover:scale-110">ACCRUE</li>
						<li className="transition-all hover:scale-110">FORA</li>
						<li className="transition-all hover:scale-110">RIDR</li>
						<li className="transition-all hover:scale-110">BERGER</li>
					</ul>
				</div> */}
				<div className="h-screen px-8 lg:px-16 max-w-7xl mx-auto w-full">
					<Nav />
					{/* <nav className="w-full flex flex-row justify-between items-start absolute top-0 left-0 px-8 lg:px-16 pt-8 z-30">
						<div className="uppercase 2xs:text-lg lg:text-xl text-black text-white">Olanrewaju Olukanni</div>
						<div className="hidden lg:block uppercase">
							<ul className="flex flex-row gap-14 text-base text-black-tertiary">
								<li>LENCO</li>
								<li>ACCRUE</li>
								<li>FORA</li>
								<li>RIDR</li>
								<li>BERGER</li>
							</ul>
						</div>
						<div className="block lg:hidden cursor-pointer ">
							<ArrowDownIcon className="stroke-current h-4 w-4 text-black transform rotate-180  text-white" />
							<div className="h-1 w-8 bg-black rounded-lg"></div>
							<div className="h-1 w-8 bg-black rounded-lg mt-1"></div>
							<div className="h-1 w-8 bg-black rounded-lg mt-1"></div>
						</div>
					</nav> */}

					<div className="h-full w-full flex flex-col justify-center items-center gap-10">
						{/* <div className="bg-black h-fit-available w-full absolute top-0 left-0 z-20 gsap-initial-div"></div> */}
						{/* <div className="black-gradient h-full w-[110vw] absolute top-0 -right-0.5 z-30 gsap-overlay-div"></div> */}
						{/* <div className="text-center p-10 relative z-20">
							<span
							ref={heroText}
							className="block text-5xl 3xs:text-6xl xs:!text-[5rem] lg:!text-9xl uppercase text-white font-zighead z-30"
							>
								Olanrewaju
							</span>
							<span className="block text-black-quat mt-2 text-sm -z-10">/aww◦lan◦ray◦wa◦jew/</span>
						</div> */}
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
					<div className="gsap-imgs-1 opacity-0 relative h-108 xs:!h-[560px] sm:!h-[600px] md:!h-[820px] lg:!h-[1000px] xl:!h-[1220px] w-full max-w-[1720px] bg-purple-100 ">
						<div
							className={
								`gsap-img-1 absolute top-8 3xs:top-16 ` +
								`h-[100px] 3xs:h-[150px] xs:h-[220px] md:!h-[320px] lg:!h-[520px] xl:!h-[720px] ` +
								`-left-[83px] 3xs:-left-[125px] xs:-left-[185px] md:!-left-[270px] lg:!-left-[440px] xl:!-left-[610px] `
							}
						>
							<img
								className="object-contain h-full w-max grayscale transition !ease-linear duration-300 hover:grayscale-0 mx-auto "
								src={ImageOne}
								alt="chair"
							/>
						</div>
						<div
							className={
								`absolute top-0 left-0 h-full w-full ` +
								`h-[150px] 3xs:h-[200px] xs:h-[300px] md:!h-[400px] lg:!h-[620px] xl:!h-[820px]`
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
						<div
							className={
								`gsap-img-3 absolute top-4 3xs:top-8 ` +
								`h-[150px] 3xs:h-[200px] xs:h-[300px] md:!h-[400px] lg:!h-[620px] xl:!h-[820px] ` +
								`-right-[63px] 3xs:-right-[82px] xs:-right-[125px] md:!-right-[168px] lg:!-right-[260px] xl:!-right-[345px] `
							}
						>
							<img
								className="object-contain h-full w-max grayscale transition !ease-linear duration-300 hover:grayscale-0 mx-auto "
								src={ImageThree}
								alt="people"
							/>
						</div>
					</div>
					<div className="relative [@media(min-width:1400px)]:!h-[720px] [@media(min-width:1240px)]:!h-[620px] [@media(min-width:1100px)]:!h-[560px] [@media(min-width:1024px)]:!h-[520px] [@media(min-width:880px)]:h-108 [@media(min-width:775px)]:h-96 sm:h-80 xs:h-60 4xs:h-44 h-36">
						<img
							className={
								`absolute -top-24 [@media(min-width:1400px)]:!-left-[168px] [@media(min-width:1240px)]:!-left-[148px] [@media(min-width:1100px)]:!-left-[134px] grayscale transition !ease-linear duration-300 hover:grayscale-0 ` +
								`[@media(min-width:1024px)]:!-left-[125px] [@media(min-width:880px)]:-left-[103px] [@media(min-width:775px)]:-left-[92px] sm:-left-[76px] xs:-left-[56px] 4xs:-left-[42px] -left-[34px] ` +
								`[@media(min-width:1400px)]:!h-[700px] [@media(min-width:1240px)]:!h-[620px] [@media(min-width:1100px)]:!h-[560px] [@media(min-width:1024px)]:!h-[520px] ` +
								`[@media(min-width:880px)]:h-108 [@media(min-width:775px)]:h-96 sm:h-80 xs:h-60 4xs:h-44 h-36 w-max object-contain`
							}
							src={ImageFour}
							alt="people dancing"
						/>
						<img
							// className="absolute -top-6 -right-[56px] sm:-right-[76px] [@media(min-width:775px)]:-right-[90px]
							// [@media(min-width:880px)]:-right-[93px] lg:-right-[12%] xs:h-60 h-36 sm:h-80 [@media(min-width:775px)]:h-96
							// [@media(min-width:880px)]:h-108
							//  [@media(min-width:1024px)]:h-[520px] [@media(min-width:1100px)]:!h-[560px] [@media(min-width:1240px)]:!h-[620px]
							//  [@media(min-width:1400px)]:!h-[700px] w-max object-contain"
							className={
								`absolute lg:-top-6 [@media(min-width:880px)]:-top-8 [@media(min-width:775px)]:-top-10 sm:-top-12 xs:-top-16 -top-20 grayscale transition !ease-linear duration-300 hover:grayscale-0  ` +
								`[@media(min-width:1400px)]:!-right-[168px] [@media(min-width:1240px)]:!-right-[148px] [@media(min-width:1100px)]:!-right-[134px] [@media(min-width:1024px)]:!-right-[125px] ` +
								`[@media(min-width:880px)]:-right-[103px] [@media(min-width:775px)]:-right-[92px] sm:-right-[76px] xs:-right-[56px] 4xs:-right-[42px] -right-[34px] ` +
								// `[@media(min-width:1400px)]:!h-[700px] [@media(min-width:1240px)]:!h-[620px]
								//  [@media(min-width:1100px)]:!h-[560px] [@media(min-width:1024px)]:!h-[520px] ` +
								`h-[280px] xs:h-[420px] md:!h-[640px] lg:!h-[820px] xl:!h-[700px] ` +
								`[@media(min-width:880px)]:h-108 [@media(min-width:775px)]:h-96 sm:h-80 xs:h-60 4xs:h-44 h-36 w-max object-contain `
							}
							src={ImageFive}
							alt="hero page"
						/>
					</div>
				</div>
				<div className="px-8 py-16 lg:p-16 max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6 p-7 2xs:p-14 bg-white rounded-3xl">
						<div className="max-w-lg">
							<p className="text-2xl xs:text-3xl lg:!text-4xl text-black-tertiary">
								With a background in design,
								<span className="text-black"> I work closely with design-focused teams </span>
								to build websites for companies and Individuals.
							</p>
						</div>
						<div className="max-w-lg">
							<p className="text-2xl xs:text-3xl lg:!text-4xl text-black-tertiary">
								I have
								<span className="text-black"> years of experience working, collaborating with product teams and building </span>
								user-centered products.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="px-8 lg:px-16 min-h-screen flex flex-col gap-16 lg:gap-32 max-w-7xl mx-auto">
				<p className="text-4xl 2xs:text-5xl lg:!text-6xl text-black font-medium lg:pt-16">Projects</p>
				<div className="flex flex-col lg:flex-row justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14">
					<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
						<span className="text-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs lg:leading-[4rem]">
							Lenco Bank Mobile
						</span>
						<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
							Lenco is a neo-bank that issues easy to open and free to operate current bank accounts for Startups and SMEs without any
							hassle.
						</p>
					</div>
					<div className="mt-1 pt-20 w-full flex justify-center">
						<img
							className="-mt-10 h-[420px] lg:h-[720px] scale-[1.2] origin-top w-max object-contain"
							src={PhoneImageOne}
							alt="phone showing app dashboard(lenco)"
						/>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14">
					<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full lg:order-2">
						<span className="text-success font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-xs lg:leading-[4rem]">Ridr Fitness</span>
						<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
							Ridr is a Web3 fitness app with Social-Fi and Game-Fi elements. Users equipped with NFT e-Bikes, e-Scotters, Skateboards
							et.c – ride and earn tokens.
						</p>
					</div>
					<div className="mt-0.5 pt-20 w-full flex justify-center lg:order-1">
						<img
							className="-mt-10 h-[420px] lg:h-[720px] scale-[1.2] origin-top w-max object-contain"
							src={PhoneImageTwo}
							alt="phone showing app(ridr)"
						/>
					</div>
				</div>
				<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
					<div className="flex flex-col justify-between items-start bg-white rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14 w-full lg:w-60%">
						<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
							<span className="text-accrue-blue font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-sm lg:leading-[4rem]">
								Accrue Savings
							</span>
							<p className="lg:max-w-sm 2xs:text-lg lg:text-xl">
								Accrue Savings is a New York-based fintech startup that helps users save money towards purchases by offering
								customizable savings plans and cash rewards.
							</p>
						</div>
						<div className="pt-20 w-full flex justify-center xl:justify-between gap-4">
							<img
								className="-mt-10 h-[420px] xl:h-120 scale-[1.2] origin-top w-max object-contain"
								src={PhoneImageThree}
								alt="phone showing app(accrue)"
							/>
							<img
								className="-mt-10 h-120 scale-[1.2] origin-top w-max object-contain hidden xl:block"
								src={PhoneImageFour}
								alt="second phone showing app(accrue)"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-between items-start bg-fora-blue rounded-3xl h-[640px] lg:h-[720px] overflow-hidden relative px-7 md:px-14 w-full lg:w-40%">
						<div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
							<span className="text-white font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-sm lg:leading-[4rem]">Fora</span>
							<p className="lg:max-w-sm 2xs:text-lg lg:text-xl text-white">
								Fora is a mobile online community that allows Nigerians creatives build a portfolio, connect with other creatives.
							</p>
						</div>
						<div className="pt-20 w-full flex justify-center">
							<img
								className="-mt-10 h-[420px] xl:h-120 scale-[1.2] origin-top w-max object-contain"
								src={PhoneImageFive}
								alt="phone showing app(ridr)"
							/>
						</div>
					</div>
				</div>
				<div className="h-full w-full pb-24 md:pb-96">
					<div className="flex flex-col justify-center items-center w-full bg-purple-700 text-white rounded-3xl h-[640px] xl:!h-[860px] relative px-7 md:px-14 overflow-hidden md:overflow-visible">
						<div className="flex flex-col justify-start items-left lg:items-center gap-8 pt-12 sm:pt-20 w-full">
							<span className="font-semibold text-3xl 2xs:text-4xl lg:!text-5xl max-w-sm lg:leading-[4rem] text-left lg:text-center">
								Berger Paints
							</span>
							<p className="lg:max-w-sm 2xs:text-lg lg:text-xl text-white">
								Nigeria&apos;s leading paint brand, offering varieties of paints and coating products to provide your desired colours.
							</p>
						</div>
						<div className="h-full w-full relative">
							<div className="pt-[68px] md:pt-20 w-full flex justify-center absolute md:!-bottom-44 top-0 md:left-0">
								<img
									className="mt-10 h-[270px] md:h-[420px] xl:!h-[640px] scale-[1.2] lg:scale-[1.2] origin-top w-full md:w-max object-contain"
									src={MacImageOne}
									alt="Mac showing app landing page(Berger Paints)"
								/>
							</div>
							{/* <div className="pt-[80px] md:pt-20 w-full flex justify-center absolute md:!-bottom-44 top-0 md:left-0">
								<img
									className="mt-10 h-[370px] md:h-[420px] xl:!h-[640px] scale-[1.2] lg:scale-[1.2] origin-top w-full md:w-max object-contain"
									src={MacImageOne}
									alt="Mac showing app landing page(Berger Paints)"
								/>
							</div> */}
						</div>
					</div>
				</div>
			</section>
			<section className="px-8 py-16 lg:p-16 max-w-7xl mx-auto w-full">
				<div className="flex flex-col xl:flex-row justify-start xl:justify-between items-center px-7 py-14 md:px-14 bg-white rounded-3xl">
					<div className="w-full xl:max-w-lg">
						<div className="flex flex-col justify-start items-start gap-2">
							<p className="text-5xl 2xs:text-7xl lg:!text-8xl text-black font-medium">Say Hello!</p>
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
							<span className="text-black"> I have spent almost a decades in the digital industry </span>
							working for design studios, companies and startups. I am currently
							<span className="text-black"> Product Designer at Lenco in Nigeria.</span>
						</p>
					</div>
					<div className="w-full xl:max-w-lg">
						<div className="flex flex-col gap-5.5 text-xl xs:text-2xl lg:!text-3xl text-black-tertiary mt-5.5 xl:mt-2">
							<p>
								I have
								<span className="text-black"> expertise in </span>
								leading large scale projects, from
								<span className="text-black"> Product Strategy, User Experience & Interaction Design. </span>
							</p>
							<p>
								I&apos;m very
								<span className="text-black"> passionate about digital products, technology, </span>
								and
								<span className="text-black"> designs </span>
								that create a significant impact on humanity.
							</p>

							<p>
								I<span className="text-black"> contribute </span>
								by bringing technology
								<span className="text-black"> into people&apos;s lives through simple </span>
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
	);
}

export default Home;
