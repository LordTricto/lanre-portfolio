import React, {useLayoutEffect, useRef} from "react";
import {RidrSection, RidrSections} from "../Services/ridr.constant";
import gsap, {Circ, Power4} from "gsap";

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
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Ridr(): JSX.Element {
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
			// tl.current.pause(4);
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
				className="gsap-main-div flex flex-col justify-start items-start h-full w-full gap-4 bg-ridr-bg-green min-h-screen pb-8 lg:pb-16 relative overflow-hidden "
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

						<div className="flex flex-col justify-start items-start w-full gap-28">
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
