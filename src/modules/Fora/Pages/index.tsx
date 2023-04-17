import {ForaSection, ForaSections} from "../Services/fora.constant";
import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ, Power4} from "gsap";

import ExploreImgOne from "../../../assets/images/fora/fora-explore-1.png";
import ExploreImgTwo from "../../../assets/images/fora/fora-explore-2.png";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/fora/fora-header-1.png";
import HeaderImgThree from "../../../assets/images/fora/fora-header-3.png";
import HeaderImgTwo from "../../../assets/images/fora/fora-header-2.png";
import HomepageImgOne from "../../../assets/images/fora/fora-homepage.png";
import LowFidelityImg from "../../../assets/images/fora/fora-low-fidelity.png";
import MessagingImgOne from "../../../assets/images/fora/fora-messaging-1.png";
import MessagingImgTwo from "../../../assets/images/fora/fora-messaging-2.png";
import MultiPhoneContainer from "../../../components/MultiPhoneContainer/MultiPhoneContainer";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainer/PhoneContainer";
import ProfileImgOne from "../../../assets/images/fora/fora-profile-1.png";
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription";
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import WalkthroughImgOne from "../../../assets/images/fora/fora-walkthrough-1.png";
import WalkthroughImgThree from "../../../assets/images/fora/fora-walkthrough-3.png";
import WalkthroughImgTwo from "../../../assets/images/fora/fora-walkthrough-2.png";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Fora(): JSX.Element {
	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const tl3 = useRef<gsap.core.Timeline | undefined>();
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
				tl3.current?.scrollTrigger?.refresh();
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

			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-assessing-phone-imgs`,
					start: "top center",
				},
			});

			tl2.current.from(`.gsap-assessing-phone-imgs img`, {
				opacity: "0",
				translateY: "5%",
				duration: 0.5,
				stagger: 0.5,
				ease: Power4.easeOut,
				clearProps: "opacity,translateY",
			});

			tl3.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-revised-phone-imgs`,
					start: "top top+=300px",
				},
			});

			tl3.current.from(`.gsap-revised-phone-imgs img`, {
				opacity: "0",
				translateY: "10%",
				duration: 1,
				ease: Circ.easeOut,
				clearProps: "opacity,translateY",
			});
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<Nav />
			<main
				className="gsap-main-div flex flex-col justify-start items-start h-full w-full gap-4 bg-fora-bg-white min-h-screen pb-8 lg:pb-16 relative overflow-hidden "
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
						// isSingle
					/>
					<ProjectDescription
						title="Fora"
						subTitle="Fora is a mobile online community that allows Nigerians creatives build a portfolio, connect with other creatives."
						textColorStyle="text-fora-black-secondary"
						customTitleStyle="text-black"
						customBorderStyle="bg-black"
						customSubTitleStyle="text-black"
						author="Thin Martian"
						quote={
							<>
								{/* Creating an interface is much like building a house: <br /> If you don’t get the foundations right, no amount of
								decorating can fix the resulting structure.”  */}
								Ignoring UI would be like going on a first date without making any effort, still expecting to get that second date.”
							</>
						}
						role="Conception, UX/UI, Design System"
						isHeaderBlack
						timeline="1"
					/>

					<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={ForaSections[ForaSection.THE_GOAL].value}
							lists={ForaSections[ForaSection.THE_GOAL].lists}
							paragraph={ForaSections[ForaSection.THE_GOAL].paragraph}
							title={ForaSections[ForaSection.THE_GOAL].title}
							listsStyle="text-fora-black-secondary"
							titleStyle="text-black"
							paragraphStyle="text-fora-black-secondary"
						/>

						<Sections
							type={ForaSections[ForaSection.CONTEXT].value}
							lists={ForaSections[ForaSection.CONTEXT].lists}
							paragraph={ForaSections[ForaSection.CONTEXT].paragraph}
							title={ForaSections[ForaSection.CONTEXT].title}
							titleStyle="text-black"
							listsStyle="text-fora-black-secondary"
							paragraphStyle="text-fora-black-secondary"
						/>

						<Sections
							type={ForaSections[ForaSection.COMPETITIVE_ANALYSIS].value}
							lists={ForaSections[ForaSection.COMPETITIVE_ANALYSIS].lists}
							paragraph={ForaSections[ForaSection.COMPETITIVE_ANALYSIS].paragraph}
							paragraphWithSideIcon={ForaSections[ForaSection.COMPETITIVE_ANALYSIS].paragraphWithSideIcon}
							title={ForaSections[ForaSection.COMPETITIVE_ANALYSIS].title}
							titleStyle="text-black"
							paragraphSideIconStyle="bg-black"
							paragraphWithSideIconStyle="text-fora-black-secondary"
						/>

						<div className="gsap-revised-phone-section flex flex-col justify-start items-start w-full gap-12">
							<Sections
								type={ForaSections[ForaSection.LOW_FIDELITY_DESIGN].value}
								lists={ForaSections[ForaSection.LOW_FIDELITY_DESIGN].lists}
								paragraph={ForaSections[ForaSection.LOW_FIDELITY_DESIGN].paragraph}
								title={ForaSections[ForaSection.LOW_FIDELITY_DESIGN].title}
								titleStyle="text-black"
								paragraphStyle="text-fora-black-secondary"
							/>
							<div className="gsap-revised-phone-imgs w-full flex justify-center items-center">
								<img className={`w-max ` + `object-contain`} src={LowFidelityImg} alt="lenco-phone-app" />
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start w-full gap-28">
						<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<Sections
								type={ForaSections[ForaSection.HIGH_FIDELITY_DESIGN].value}
								lists={ForaSections[ForaSection.HIGH_FIDELITY_DESIGN].lists}
								paragraph={ForaSections[ForaSection.HIGH_FIDELITY_DESIGN].paragraph}
								title={ForaSections[ForaSection.HIGH_FIDELITY_DESIGN].title}
								titleStyle="text-black"
							/>
						</div>

						<MultiPhoneContainer
							type="walkthrough"
							title="Walkthrough"
							subTitle="The core purpose of these Walkthrough pages is to educate the user about the functions and benefits of Fora. "
							customTitleStyle="text-black"
							customSubtitleStyle="text-fora-black-secondary"
							customContainerStyle="bg-white w-full"
							customOverlayStyle="bg-white"
							// customContainerStyle="bg-white w-full"
							imgOne={WalkthroughImgOne}
							imgOneAlt="phone showing walkthrough of app(fora)"
							imgTwo={WalkthroughImgTwo}
							imgTwoAlt="phone showing walkthrough of app(fora)"
							imgThree={WalkthroughImgThree}
							imgThreeAlt="phone showing walkthrough of app(fora)"
						/>

						<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Homepage"
										subTitle="Easy navigation as users get to scroll down to see projects from followed and suggested accounts."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-black"
										imgOne={HomepageImgOne}
										imgOneAlt="phone showing home page of app(fora)"
										isSingle
										customTextOverlayStyle="bg-black"
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Explore"
										subTitle="Explore pages means more exposure for creatives and their projects."
										customTitleStyle="text-fora"
										customSubtitleStyle="text-black"
										customContainerStyle="bg-white"
										imgOne={ExploreImgOne}
										imgTwo={ExploreImgTwo}
										imgOneAlt="phone showing explore page of app(fora)"
										imgTwoAlt="phone second showing explore page of app(fora)"
										isSingle={false}
										customTextOverlayStyle="bg-white"
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
							</div>

							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="w-full lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Messaging"
										subTitle="This interface is designed to allow users connect and communicate privately."
										customTitleStyle="text-black"
										customSubtitleStyle="text-fora-black-secondary"
										customContainerStyle="bg-fora-grey"
										imgOne={MessagingImgOne}
										imgTwo={MessagingImgTwo}
										imgOneAlt="phone showing messaging page of app(fora)"
										imgTwoAlt="phone second showing messaging page of app(fora)"
										isSingle={false}
										customTextOverlayStyle="bg-fora-grey"
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
								<div className="w-full lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Profile"
										subTitle="A simple design of the Profile page for the user and the interface for another account."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-fora"
										imgOne={ProfileImgOne}
										imgOneAlt="phone showing profile page of app(fora)"
										isSingle
										customTextOverlayStyle="bg-fora"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start w-full pb-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={ForaSections[ForaSection.TAKEOUT].value}
							lists={ForaSections[ForaSection.TAKEOUT].lists}
							paragraph={ForaSections[ForaSection.TAKEOUT].paragraph}
							title={ForaSections[ForaSection.TAKEOUT].title}
							titleStyle="text-black"
							paragraphStyle="text-fora-black-secondary"
							withCloseSection
						/>
					</div>
				</div>
				<div
					className={`gsap-page-departure-transition-div left-right-fora-gradient h-full w-[150vw] 2xs:w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Fora;
