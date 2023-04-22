import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import {RidrSection, RidrSections} from "../Services/ridr.constant";

import ActivitiesImgOne from "../../../assets/images/ridr/ridr-activities-1.png";
import ActivitiesImgTwo from "../../../assets/images/ridr/ridr-activities-2.png";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/ridr/ridr-header-1.png";
import HeaderImgThree from "../../../assets/images/ridr/ridr-header-3.png";
import HeaderImgTwo from "../../../assets/images/ridr/ridr-header-2.png";
import HomepageImgOne from "../../../assets/images/ridr/ridr-homepage-1.png";
import HomepageImgTwo from "../../../assets/images/ridr/ridr-homepage-2.png";
import MapsImgOne from "../../../assets/images/ridr/ridr-maps-1.png";
import MapsImgTwo from "../../../assets/images/ridr/ridr-maps-2.png";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainer/PhoneContainer";
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription";
import {PuffLoader} from "react-spinners";
import ReactGA from "React-ga";
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import gsap from "gsap";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Ridr(): JSX.Element {
	const tl = useRef<gsap.core.Timeline | undefined>();
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation().state as LocationState;
	const [isLoading, setIsLoading] = useState(true);
	const [showLoader, setShowLoader] = useState(false);
	const [numOfImages, setNumOfImages] = useState<number>(0);

	useLayoutEffect(() => {
		window.onload;
		document.body.style.scrollBehavior = "unset";
		window.scrollTo(0, 0);
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};

		ReactGA.pageview(window.location.pathname);

		if (numOfImages === 9) {
			setIsLoading(false);
			setShowLoader(false);
		} else {
			setTimeout(() => {
				setShowLoader(true);
			}, 4000);
		}

		const ctx = gsap.context(() => {
			setTimeout(() => {
				tl.current?.scrollTrigger?.refresh();
			}, 7000);

			tl.current = gsap.timeline();

			tl.current.to(".gsap-header-section", {
				height: "100vh",
				maxWidth: "unset",
				width: "100vw",
				marginTop: 0,
				padding: 0,
				duration: 0,
				onComplete: () => {
					document.body.style.overflow = "hidden";
					document.body.style.scrollBehavior = "unset";
				},
			});
			tl.current.to([".gsap-header-img-1", ".gsap-header-img-2", ".gsap-header-img-3"], {
				translateY: "unset",
				duration: 0,
			});

			if (numOfImages !== 9) {
				tl.current.pause(0.05);
			}

			tl.current.to(".gsap-page-entry-transition-div", {
				opacity: 0,
				pointerEvents: "none",
				duration: 2,
			});
			tl.current.from([".gsap-header-img-1", ".gsap-header-img-3"], {
				margin: 0,
				duration: 1,
			});
			tl.current.to([".gsap-header-img-1", ".gsap-header-img-2", ".gsap-header-img-3"], {
				transitionDuration: 1,
				duration: 0,
			});
			tl.current.to(
				[".gsap-header-img-1", ".gsap-header-img-2", ".gsap-header-img-3"],
				{
					translateY: "unset",
					duration: 1,
					clearProps: "transform",
				},
				"=-0.5"
			);

			tl.current.to(".gsap-header-section", {
				transitionDuration: 1,
				duration: 0,
			});
			tl.current.from(
				".gsap-header-section",
				{
					clearProps: "height,padding,margin,width",
				},
				"=+0.75"
			);
			tl.current.from(
				".gsap-header-imgs-div",
				{
					borderRadius: 0,
					duration: 2,
					onComplete: () => {
						document.body.style.overflow = "unset";
						document.body.style.scrollBehavior = "smooth";
					},
				},
				"<"
			);
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
			<Nav pageLoaded={numOfImages === 9} />
			<main
				className="flex flex-col justify-start items-start h-full w-full gap-4 bg-ridr-bg-green min-h-screen pb-8 lg:pb-16 relative overflow-hidden "
				ref={landingDivRef}
			>
				<div
					className={
						`gsap-main-div flex justify-center items-center w-full h-full min-h-screen bg-white-dark fixed top-0 left-0 z-60 ` +
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
						`gsap-page-entry-transition-div w-screen h-screen fixed z-50 ` +
						`${location?.from === "/" ? "!bg-white-dark " : ""} ` +
						`${location?.from === "/lenco" ? "!bg-lenco-bg-dark " : ""} ` +
						`${location?.from === "/ridr" ? "!bg-ridr-bg-green " : ""} ` +
						`${location?.from === "/accrue" ? "!bg-accrue-blue-light " : ""} ` +
						`${location?.from === "/berger" ? "!bg-berger-white " : ""} ` +
						`${location?.from === "/fora" ? "!bg-fora-bg-white " : ""} `
					}
				></div>
				<div className="flex flex-col justify-start items-start w-full mb-8 md:mb-24 gap-28">
					<HeaderContainer
						gsapHeaderContainerTag="gsap-header-section"
						gsapPrimaryContainerTag="gsap-header-imgs-div"
						gsapImgOneTag="gsap-header-img-1"
						gsapImgTwoContainerTag="gsap-header-img-2-div"
						primaryContainerCustomStyle="bg-white"
						gsapImgTwoTag="gsap-header-img-2"
						gsapImgThreeTag="gsap-header-img-3"
						headerImgOne={HeaderImgOne}
						headerImgOneAlt="lenco-phone-app-one"
						headerImgTwo={HeaderImgTwo}
						headerImgTwoAlt="lenco-phone-app-two"
						headerImgThree={HeaderImgThree}
						headerImgThreeAlt="lenco-phone-app-three"
						handleUpdateImageCount={handleUpdateImageCount}
						// isSingle
					/>
					<ProjectDescription
						title="Ridr"
						subTitle="Ridr is a Web3 fitness app with Social-Fi and Game-Fi elements. Users equipped with NFT e-Bikes,e-Scotters, Skateboards et.c - ride and earn tokens."
						textColorStyle="text-ridr-white-secondary"
						customTitleStyle="text-ridr"
						customBorderStyle="bg-white"
						customSubTitleStyle="text-white"
						author="John Maeda"
						quote={
							<>
								Design used to be the seasoning you&apos;d sprinkle on for taste; <br /> now it&apos;s the flour you need at the start
								of the recipe.&quot;
							</>
						}
						role="Conception, UX/UI, Design System"
						timeline="1"
					/>

					<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={RidrSections[RidrSection.THE_GOAL].value}
							lists={RidrSections[RidrSection.THE_GOAL].lists}
							paragraph={RidrSections[RidrSection.THE_GOAL].paragraph}
							title={RidrSections[RidrSection.THE_GOAL].title}
							listsStyle="text-ridr-white-secondary"
							titleStyle="text-ridr"
							paragraphStyle="text-ridr-white-secondary"
						/>

						<div className="flex flex-col justify-start items-start w-full gap-16">
							<Sections
								type={RidrSections[RidrSection.THE_DESIGN].value}
								lists={RidrSections[RidrSection.THE_DESIGN].lists}
								title={RidrSections[RidrSection.THE_DESIGN].title}
								paragraph={RidrSections[RidrSection.THE_DESIGN].paragraph}
								titleStyle="text-ridr"
								listsStyle="text-ridr-white-secondary"
								paragraphStyle="text-ridr-white-secondary"
							/>

							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Homepage"
										subTitle="A START button that accessible for users to easily interact with. Clear presentation of users profile, elements, balance and tokens earned."
										customTitleStyle="text-ridr-bg-green"
										customSubtitleStyle="text-black"
										customContainerStyle="bg-white-dark"
										imgOne={HomepageImgOne}
										imgTwo={HomepageImgTwo}
										imgOneAlt="phone showing app home screen(lenco)"
										imgTwoAlt="second phone showing home screen(lenco)"
										isSingle={false}
										customTextOverlayStyle="bg-white-dark"
										handleUpdateImageCount={handleUpdateImageCount}
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Maps (Park)"
										subTitle="Park mode for with Average Speed, Time traveled and Distance traveled indicators."
										customTitleStyle="text-ridr"
										customSubtitleStyle="text-ridr-white-secondary"
										customContainerStyle="bg-black"
										imgOne={MapsImgOne}
										imgOneAlt="phone showing app switching business(lenco)"
										isSingle
										customTextOverlayStyle="bg-black"
										handleUpdateImageCount={handleUpdateImageCount}
									/>
								</div>
							</div>
							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Maps (Mountain)"
										subTitle="Mountain mode for with Average Speed, Time traveled and Distance traveled indicators."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-ridr"
										imgOne={MapsImgTwo}
										imgOneAlt="phone showing app switching business(lenco)"
										isSingle
										customTextOverlayStyle="bg-ridr"
										handleUpdateImageCount={handleUpdateImageCount}
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Activities"
										subTitle="This interface is designed to allow users keep track of their activities as well as have an overview of tokens earned."
										customTitleStyle="text-white"
										customSubtitleStyle="text-ridr-white-secondary"
										customContainerStyle="bg-ridr-bg-green-darker"
										imgOne={ActivitiesImgTwo}
										imgTwo={ActivitiesImgOne}
										imgOneAlt="phone showing app home screen(lenco)"
										imgTwoAlt="second phone showing home screen(lenco)"
										isSingle={false}
										customTextOverlayStyle="bg-ridr-bg-green-darker"
										handleUpdateImageCount={handleUpdateImageCount}
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start w-full pb-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={RidrSections[RidrSection.TAKEOUT].value}
							lists={RidrSections[RidrSection.TAKEOUT].lists}
							paragraph={RidrSections[RidrSection.TAKEOUT].paragraph}
							title={RidrSections[RidrSection.TAKEOUT].title}
							titleStyle="text-ridr"
							paragraphStyle="text-ridr-white-secondary"
							withCloseSection
						/>
					</div>
				</div>
				<div
					className={`gsap-page-departure-transition-div left-right-ridr-gradient h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Ridr;
