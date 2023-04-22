import {AccrueSection, AccrueSections} from "../Services/accrue.constant";
import React, {useCallback, useLayoutEffect, useRef, useState} from "react";

import CardsImgOne from "../../../assets/images/accrue/accrue-card-1.png";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/accrue/accrue-header-1.png";
import HeaderImgThree from "../../../assets/images/accrue/accrue-header-3.png";
import HeaderImgTwo from "../../../assets/images/accrue/accrue-header-2.png";
import HomepageImgOne from "../../../assets/images/accrue/accrue-homepage-1.png";
import HomepageImgTwo from "../../../assets/images/accrue/accrue-homepage-2.png";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainer/PhoneContainer";
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription";
import {PuffLoader} from "react-spinners";
import ReactGA from "React-ga";
import RetailImgOne from "../../../assets/images/accrue/accrue-retail-1.png";
import SavingsImgOne from "../../../assets/images/accrue/accrue-savings-1.png";
import SavingsImgTwo from "../../../assets/images/accrue/accrue-savings-2.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import gsap from "gsap";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Accrue(): JSX.Element {
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
				className="flex flex-col justify-start items-start h-full w-full gap-4 bg-accrue-blue-light min-h-screen pb-8 lg:pb-16 relative overflow-hidden "
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
						title="Accrue"
						subTitle="Accrue Savings is a New York-based fintech startup that helps users save money towards purchases by offering customizable savings plans and cash rewards."
						textColorStyle="text-accrue-blue-darker"
						customTitleStyle="text-accrue-blue-dark"
						customBorderStyle="bg-accrue-blue-dark"
						customSubTitleStyle="text-black"
						author="Scott Adams"
						isHeaderBlack
						quote={
							<>
								Creativity is allowing yourself to make mistakes. <br /> Design is knowing which ones to keep.
							</>
						}
						role="Conception, UX/UI, Design System"
						timeline="1"
					/>

					<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={AccrueSections[AccrueSection.THE_GOAL].value}
							lists={AccrueSections[AccrueSection.THE_GOAL].lists}
							paragraph={AccrueSections[AccrueSection.THE_GOAL].paragraph}
							title={AccrueSections[AccrueSection.THE_GOAL].title}
							listsStyle="text-accrue-blue-darker"
							titleStyle="text-accrue-blue-dark"
							paragraphStyle="text-accrue-blue-darker"
						/>

						<div className="flex flex-col justify-start items-start w-full gap-28">
							<Sections
								type={AccrueSections[AccrueSection.THE_DESIGN].value}
								lists={AccrueSections[AccrueSection.THE_DESIGN].lists}
								title={AccrueSections[AccrueSection.THE_DESIGN].title}
								paragraph={AccrueSections[AccrueSection.THE_DESIGN].paragraph}
								titleStyle="text-accrue-blue-dark"
								listsStyle="text-accrue-blue-darker"
								paragraphStyle="text-accrue-blue-darker"
							/>

							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Homepage"
										subTitle="Personalization adds a nice touch to the user's perception of the product and is an easy way to strengthen user's experience."
										customTitleStyle="text-accrue-blue-dark"
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
										title="Retail"
										subTitle="Recommendations help users discover most relevant products, enhance experience, and reduce barriers to purchase (allowing users save more)."
										customTitleStyle="text-white"
										customSubtitleStyle="text-accrue-blue-lighter"
										customContainerStyle="bg-black"
										imgOne={RetailImgOne}
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
										title="Cards"
										subTitle="Contactless card transactions makes purchase faster and more convenient."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-accrue-blue-dark"
										imgOne={CardsImgOne}
										imgOneAlt="phone showing app switching business(lenco)"
										isSingle
										customTextOverlayStyle="bg-accrue-blue-dark"
										handleUpdateImageCount={handleUpdateImageCount}
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Savings"
										subTitle="Setting financial goals is essential and help users stay focused on what they are actually saving for. Rewards programs are crucial because they make the user feel uniquely valued."
										customTitleStyle="text-accrue-blue-dark"
										customSubtitleStyle="text-accrue-blue-darker"
										customContainerStyle="bg-accrue-blue-darker-bg"
										imgOne={SavingsImgOne}
										imgTwo={SavingsImgTwo}
										imgOneAlt="phone showing app home screen(lenco)"
										imgTwoAlt="second phone showing home screen(lenco)"
										isSingle={false}
										customTextOverlayStyle="bg-accrue-blue-darker-bg"
										handleUpdateImageCount={handleUpdateImageCount}
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start w-full pb-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={AccrueSections[AccrueSection.TAKEOUT].value}
							lists={AccrueSections[AccrueSection.TAKEOUT].lists}
							paragraph={AccrueSections[AccrueSection.TAKEOUT].paragraph}
							title={AccrueSections[AccrueSection.TAKEOUT].title}
							titleStyle="text-accrue-blue-dark"
							paragraphStyle="text-accrue-blue-darker"
							withCloseSection
						/>
					</div>
				</div>
				<div
					className={`gsap-page-departure-transition-div left-right-accrue-gradient h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Accrue;
