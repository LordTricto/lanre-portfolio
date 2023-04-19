import {BergerSection, BergerSections} from "../Services/berger.constant";
import React, {useLayoutEffect, useRef} from "react";

import CardOfCards from "../../../components/CardOfCards/CardOfCards";
import CustomBGImageContainer from "../../../components/CustomBGImageContainer/CustomerBGImageContainer";
import DesignImgOne from "../../../assets/images/berger/berger-design-1.png";
import DesignImgThree from "../../../assets/images/berger/berger-design-3.png";
import DesignImgThreeBG from "../../../assets/images/berger/berger-design-3-bg.png";
import DesignImgTwo from "../../../assets/images/berger/berger-design-2.png";
import ExploreImgOne from "../../../assets/images/berger/berger-explore-1.png";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/berger/berger-header-1.png";
import HomeOwnerImgOne from "../../../assets/images/berger/berger-homeowner-1.png";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainer/PhoneContainer";
import ProfessionalImgOne from "../../../assets/images/berger/berger-professional-1.png";
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription";
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import SideImageContainer from "../../../components/SideImageContainer/SideImageContainer";
import SideImageWithNoSectionContainer from "../../../components/SideImageWithNoSectionContainer/SideImageWithNoSectionContainer";
import UserFlowImgOne from "../../../assets/images/berger/berger-user-flow-1.png";
import UserFlowImgTwo from "../../../assets/images/berger/berger-user-flow-2.png";
import UserInterviewImgOne from "../../../assets/images/berger/berger-user-interview-1.png";
import gsap from "gsap";
import useDimension from "../../../hooks/useDimension";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Berger(): JSX.Element {
	const {width} = useDimension();
	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation().state as LocationState;

	useLayoutEffect(() => {
		window.onload;
		document.body.style.scrollBehavior = "unset";
		window.scrollTo(0, 0);
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
		const ctx = gsap.context(() => {
			setTimeout(() => {
				tl.current?.scrollTrigger?.refresh();
				tl2.current?.scrollTrigger?.refresh();
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

			tl.current.to(".gsap-page-entry-transition-div", {
				opacity: 0,
				pointerEvents: "none",
				duration: 2,
			});

			tl.current.from(".gsap-header-img-1", {
				scale: "1.2",
				duration: 1,
				clearProps: "scale",
			});

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

			tl.current.to(".gsap-header-img-1", {translateY: width > 768 ? "20%" : "20%", duration: 1}, "<+=0.6");

			// project goals
			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-goals",
					start: width < 476 ? "top center+=200px" : "top center",
				},
			});

			if (width > 1023) {
				tl2.current.from(".gsap-goals", {
					width: "100%",
					borderRadius: 0,
					padding: 0,
					duration: 1.5,
					ease: "M0,0 C0,0 0.024,0.595 0.2,0.8 0.406,1.04 1,1 1,1 ",
					clearProps: "width,padding,borderRadius",
				});

				tl2.current.from(
					".gsap-goals-primary",
					{
						borderRadius: 0,
						duration: 1.5,
						clearProps: "borderRadius",
					},
					"<"
				);
			} else {
				tl2.current.from(".gsap-goals", {
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					translateY: "10%",
					clearProps: "opacity,translateY",
				});
			}
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<Nav />
			<main
				className="gsap-main-div flex flex-col justify-start items-start h-full w-full gap-4 bg-berger-white min-h-screen pb-8 lg:pb-16 relative overflow-hidden "
				ref={landingDivRef}
			>
				<div
					className={
						`gsap-page-entry-transition-div w-screen h-screen fixed z-50 ` +
						`${location?.from === "/" ? "bg-white-dark " : ""} ` +
						`${location?.from === "/lenco" ? "bg-lenco-bg-dark " : ""} ` +
						`${location?.from === "/ridr" ? "bg-ridr-bg-green " : ""} ` +
						`${location?.from === "/accrue" ? "bg-accrue-blue-light " : ""} ` +
						`${location?.from === "/fora" ? "bg-fora-bg-white " : ""} ` +
						`${location?.from === "/accrue" ? "" : ""}`
					}
				></div>
				<div className="flex flex-col justify-start items-start w-full mb-8 md:mb-24 gap-28">
					<HeaderContainer
						gsapHeaderContainerTag="gsap-header-section"
						gsapPrimaryContainerTag="gsap-header-imgs-div"
						gsapImgOneContainerTag="gsap-header-img-1-container"
						gsapImgOneTag="gsap-header-img-1"
						gsapImgTwoContainerTag="gsap-header-img-2-div"
						primaryContainerCustomStyle="bg-white"
						gsapImgTwoTag="gsap-header-img-2"
						gsapImgThreeTag="gsap-header-img-3"
						headerImgOne={HeaderImgOne}
						headerImgOneAlt="lenco-phone-app-one"
						isSingle
					/>
					<ProjectDescription
						title="Berger Paints"
						subTitle="Nigeria's leading paint brand, offering varieties of paints and coating products to provide your desired colors."
						textColorStyle="text-fora-black-secondary"
						customTitleStyle="text-black"
						customBorderStyle="bg-black"
						customSubTitleStyle="text-black"
						author="Jared Spool"
						quote={
							<>
								Good design, when it&apos;s done well, becomes invisible. It&apos;s only when it&apos;s done poorly that we notice it.
							</>
						}
						role="Conception, UX/UI, Design System"
						isHeaderBlack
						timeline="1"
					/>

					<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={BergerSections[BergerSection.THE_OVERVIEW].value}
							lists={BergerSections[BergerSection.THE_OVERVIEW].lists}
							paragraph={BergerSections[BergerSection.THE_OVERVIEW].paragraph}
							title={BergerSections[BergerSection.THE_OVERVIEW].title}
							listsStyle="text-black"
							titleStyle="text-black"
							paragraphStyle="text-black"
						/>
					</div>

					<div className="flex flex-col justify-start items-start w-full gap-16">
						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto xs:left-">
							<Sections
								type={BergerSections[BergerSection.THE_RESEARCH].value}
								lists={BergerSections[BergerSection.THE_RESEARCH].lists}
								paragraph={BergerSections[BergerSection.THE_RESEARCH].paragraph}
								title={BergerSections[BergerSection.THE_RESEARCH].title}
								titleStyle="text-black"
								listsStyle="text-black"
								paragraphStyle="text-black"
							/>
						</div>

						<SideImageContainer
							type={BergerSections[BergerSection.USER_INTERVIEW].value}
							title={BergerSections[BergerSection.USER_INTERVIEW].title}
							subTitle={BergerSections[BergerSection.USER_INTERVIEW].paragraph}
							customTitleStyle="text-berger-purple-deep"
							customSubtitleStyle="text-black"
							customContainerStyle="bg-white w-full"
							customMainContainerStyle="h-[550px] xs:h-[630px] md:h-[730px] lg:h-[800px]"
							customOverlayStyle="bg-white"
							imgOne={UserInterviewImgOne}
							imgOneAlt="image showing user interview flow(berger)"
							customImageStyle="-bottom-6 2xs:-bottom-8 sm:-bottom-14 md:-bottom-16 lg:-bottom-20 -right-32 2xs:-right-36 lg:-right-44 min-w-[400px] 2xs:min-w-[500px] sm:min-w-[650px] md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1000px] "
						/>
					</div>

					<div className="flex flex-col justify-start items-start w-full gap-16">
						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<Sections
								type={BergerSections[BergerSection.COMPETITIVE_ANALYSIS].value}
								lists={BergerSections[BergerSection.COMPETITIVE_ANALYSIS].lists}
								paragraph={BergerSections[BergerSection.COMPETITIVE_ANALYSIS].paragraph}
								paragraphWithSideIcon={BergerSections[BergerSection.COMPETITIVE_ANALYSIS].paragraphWithSideIcon}
								title={BergerSections[BergerSection.COMPETITIVE_ANALYSIS].title}
								titleStyle="text-black"
								paragraphSideIconStyle="bg-black"
								paragraphWithSideIconStyle="text-fora-black-secondary"
							/>
						</div>
						<CardOfCards />
					</div>

					<div className="flex flex-col justify-start items-start w-full gap-16">
						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<Sections
								type={BergerSections[BergerSection.USER_PERSONAS_AND_STORIES].value}
								lists={BergerSections[BergerSection.USER_PERSONAS_AND_STORIES].lists}
								paragraph={BergerSections[BergerSection.USER_PERSONAS_AND_STORIES].paragraph}
								title={BergerSections[BergerSection.USER_PERSONAS_AND_STORIES].title}
								titleStyle="text-black"
								paragraphStyle="text-fora-black-secondary"
							/>
						</div>

						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full">
									<PhoneContainer
										title="Homeowner"
										subTitle={
											<>
												As a <span className="font-semibold">homeowner, I</span> want to{" "}
												<span className="font-semibold">see ideas</span> so I can
												<span className="font-semibold"> paint my house. </span>
											</>
										}
										secondSubTitle={
											<>
												As a <span className="font-semibold">homeowner, I</span> want to{" "}
												<span className="font-semibold">get a professional</span> to paint for me.
											</>
										}
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-berger-purple-dark"
										imgOne={HomeOwnerImgOne}
										imgOneAlt="phone showing home page of app(fora)"
										isSingle
										customTextOverlayStyle="bg-berger-purple-dark"
										customImgOneStyle=" h-[620px] !-bottom-36"
									/>
								</div>
								<div className="w-full">
									<PhoneContainer
										title="Professional"
										subTitle={
											<>
												As a <span className="font-semibold"> painter, I </span> want to{" "}
												<span className="font-semibold"> get paints from an outlet </span> around me with ease.
											</>
										}
										secondSubTitle={
											<>
												As a <span className="font-semibold"> builder, I </span> want{" "}
												<span className="font-semibold"> professional support/advice </span> for my next project.
											</>
										}
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-berger-pink"
										imgOne={ProfessionalImgOne}
										imgOneAlt="phone showing explore page of app(fora)"
										isSingle
										customTextOverlayStyle="bg-berger-pink"
										customImgOneStyle="h-[640px] !-bottom-48 max-w-none"
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
							</div>
						</div>

						<div className="gsap-goals px-4 2xs:px-8 lg:px-16 !pb-0 w-full xl:w-[80rem] mx-auto relative overflow-hidden">
							<div className="gsap-goals-primary w-full h-full bg-black rounded-3xl">
								<div className="flex flex-col justify-start items-start w-full gap-16 py-12 md:py-16 px-7 md:px-14 max-w-7xl mx-auto">
									<Sections
										type={BergerSections[BergerSection.PROJECT_GOALS].value}
										lists={BergerSections[BergerSection.PROJECT_GOALS].lists}
										paragraph={BergerSections[BergerSection.PROJECT_GOALS].paragraph}
										title={BergerSections[BergerSection.PROJECT_GOALS].title}
										titleStyle="text-white"
										paragraphStyle="text-white"
									/>
									<div className="flex flex-col md:flex-row justify-start md:justify-between w-full gap-16">
										<Sections
											type={BergerSections[BergerSection.BUSINESS_GOALS].value}
											lists={BergerSections[BergerSection.BUSINESS_GOALS].lists}
											paragraph={BergerSections[BergerSection.BUSINESS_GOALS].paragraph}
											title={BergerSections[BergerSection.BUSINESS_GOALS].title}
											titleStyle="text-berger-green"
											listsStyle="text-white"
											smallText
										/>
										<Sections
											type={BergerSections[BergerSection.USER_GOALS].value}
											lists={BergerSections[BergerSection.USER_GOALS].lists}
											paragraph={BergerSections[BergerSection.USER_GOALS].paragraph}
											title={BergerSections[BergerSection.USER_GOALS].title}
											titleStyle="text-berger-yellow"
											listsStyle="text-white"
											smallText
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={BergerSections[BergerSection.PROBLEM_STATEMENT].value}
							lists={BergerSections[BergerSection.PROBLEM_STATEMENT].lists}
							paragraph={BergerSections[BergerSection.PROBLEM_STATEMENT].paragraph}
							paragraphWithSideIcon={BergerSections[BergerSection.PROBLEM_STATEMENT].paragraphWithSideIcon}
							title={BergerSections[BergerSection.PROBLEM_STATEMENT].title}
							titleStyle="text-black"
							paragraphSideIconStyle="bg-berger-blue"
							paragraphStyle="text-black text-xl max-w-sm"
						/>
					</div>

					<div className="flex flex-col justify-start items-start w-full gap-16">
						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto -right-">
							<Sections
								type={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].value}
								lists={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].lists}
								paragraph={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].paragraph}
								title={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].title}
								titleStyle="text-black"
								paragraphStyle="text-black"
							/>
						</div>
						<SideImageWithNoSectionContainer
							type={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].value}
							imgOne={UserFlowImgOne}
							imgOneAlt="Image showing the information architecture"
							imgTwo={UserFlowImgTwo}
							imgTwoAlt="Image showing the user flow"
							customContainerStyle="bg-white h-[550px] xs:h-[630px] md:h-[730px] lg:h-[800px]"
							customImageOneContainerStyle="-bottom-40 sm:-bottom-28 -right-[30rem] sm:-right-[26rem] md:-right-80 z-10"
							customImageOneStyle="max-w-[700px] sm:max-w-[800px] lg:max-w-[850px]"
							customImageTwoContainerStyle="-bottom-52 sm:-bottom-44 left-4 2xs:left-8 sm:left-16"
							customImageTwoStyle="min-w-[700px] max-w-[700px] sm:min-w-[800px] sm:max-w-[800px] lg:max-w-[850px]"
							isSingle={false}
						/>
					</div>

					<div className="flex flex-col justify-start items-start w-full gap-16">
						<div className="flex flex-col justify-start items-start w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto bottom-">
							<Sections
								type={BergerSections[BergerSection.THE_DESIGN].value}
								lists={BergerSections[BergerSection.THE_DESIGN].lists}
								paragraph={BergerSections[BergerSection.THE_DESIGN].paragraph}
								title={BergerSections[BergerSection.THE_DESIGN].title}
								titleStyle="text-black"
							/>
						</div>

						<SideImageContainer
							type={BergerSections[BergerSection.EXPLORE_COLORS].value}
							title={BergerSections[BergerSection.EXPLORE_COLORS].title}
							subTitle={BergerSections[BergerSection.EXPLORE_COLORS].paragraph}
							customTitleStyle="text-berger-purple"
							customSubtitleStyle="text-black"
							customContainerStyle="bg-berger-purple-light w-full"
							customMainContainerStyle="h-[650px] xs:h-[730px] lg:h-[800px]"
							customOverlayStyle="bg-berger-purple-light"
							imgOne={ExploreImgOne}
							imgOneAlt="Image showing color palettes used for the website"
							customImageStyle="min-w-[400px] 2xs:min-w-[500px] sm:min-w-[600px] md:min-w-[700px] lg:min-w-[850px] xl:min-w-[900px] xl:max-w-[900px] -bottom-2 -right-36"
						/>

						<SideImageWithNoSectionContainer
							type={BergerSections[BergerSection.USER_FLOW_AND_INFORMATION_ARCHITECTURE].value}
							imgOne={DesignImgOne}
							imgOneAlt="Second image showing color palettes used for the website"
							customContainerStyle="bg-white h-[300px] xs:h-[450px] md:h-[600px] lg:h-[800px]"
							customImageOneContainerStyle="!relative flex justify-center items-center"
							customImageOneStyle="w-full"
							animateFromBottom
							isSingle
						/>

						<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto xs:left-1">
							<div className="w-full lg:w-1/2">
								<CustomBGImageContainer
									imgOne={DesignImgTwo}
									imgOneAlt="Image showing two people having two separate calls"
									customImgOneStyle="h-[500px] 2xs:h-[520px] lg:h-[540px] xl:h-[560px] "
									customContainerStyle="h-[650px] xs:h-[730px] lg:h-[800px] bg-berger-pink-light flex justify-center items-center"
									customBackgroundImage={""}
									animateFromBottom
								/>
							</div>
							<div className="w-full lg:w-1/2">
								<CustomBGImageContainer
									imgOne={DesignImgThree}
									imgOneAlt="Image showing a location in a map"
									customImgOneStyle="min-w-[400px] 2xs:min-w-[500px] sm:min-w-[650px] md:min-w-[750px] lg:min-w-[500px] xl:min-w-[560px] 2xs:max-w-[600px] sm:min-w-[750px] md:min-w-[850px] lg:max-w-[600px] xl:max-w-[660px] left-16 top-36 2xs:left-24 2xs:top-24"
									customContainerStyle="h-[600px] sm:h-[730px] lg:h-[800px] bg-berger-pink-light flex justify-center items-center"
									customBackgroundImage={DesignImgThreeBG}
									// animateFromBottom
								/>
							</div>
						</div>
					</div>

					<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={BergerSections[BergerSection.THE_SOLUTION].value}
							paragraph={BergerSections[BergerSection.THE_SOLUTION].paragraph}
							lists={BergerSections[BergerSection.THE_SOLUTION].lists}
							title={BergerSections[BergerSection.THE_SOLUTION].title}
							titleStyle="text-black"
							paragraphStyle="text-black"
							listsStyle="text-black"
							// smallText
						/>
					</div>
					<div className="flex flex-col justify-start items-start w-full pb-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={BergerSections[BergerSection.ITERATIONS].value}
							lists={BergerSections[BergerSection.ITERATIONS].lists}
							paragraph={BergerSections[BergerSection.ITERATIONS].paragraph}
							title={BergerSections[BergerSection.ITERATIONS].title}
							titleStyle="text-black"
							paragraphStyle="text-black"
							withCloseSection
						/>
					</div>
				</div>
				<div
					className={`gsap-page-departure-transition-div left-right-berger-gradient h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Berger;
