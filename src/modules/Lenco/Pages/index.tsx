import React, {useLayoutEffect, useRef} from "react";

import ArchitectureImg from "../../../assets/images/lenco/lenco-architecture-1.png";
import AssessingImgFour from "../../../assets/images/lenco/lenco-assessing-4.png";
import AssessingImgOne from "../../../assets/images/lenco/lenco-assessing-1.png";
import AssessingImgThree from "../../../assets/images/lenco/lenco-assessing-3.png";
import AssessingImgTwo from "../../../assets/images/lenco/lenco-assessing-2.png";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/lenco/lenco-header-1.png";
import HeaderImgThree from "../../../assets/images/lenco/lenco-header-3.png";
import HeaderImgTwo from "../../../assets/images/lenco/lenco-header-2.png";
import HomeScreenImgOne from "../../../assets/images/lenco/lenco-homescreen-1.png";
import HomeScreenImgTwo from "../../../assets/images/lenco/lenco-homescreen-2.png";
import MultiPhoneContainer from "../../../components/MultiPhoneContainter/MultiPhoneContainer";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainter/PhoneContainer";
// import PhoneImageFive from "../../../assets/images/phone-img-5.png";
// import PhoneImageFour from "../../../assets/images/phone-img-4.png";
// import PhoneImageOne from "../../../assets/images/phone-img-1.png";
// import PhoneImageThree from "../../../assets/images/phone-img-3.png";
import PhysicalImgOne from "../../../assets/images/lenco/lenco-physical-1.png";
import PhysicalImgTwo from "../../../assets/images/lenco/lenco-physical-2.png";
import ReimbursementsListImgFour from "../../../assets/images/lenco/lenco-reimbursement-4.png";
import ReimbursementsListImgOne from "../../../assets/images/lenco/lenco-reimbursement-1.png";
import ReimbursementsListImgThree from "../../../assets/images/lenco/lenco-reimbursement-3.png";
import ReimbursementsListImgTwo from "../../../assets/images/lenco/lenco-reimbursement-2.png";
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import SwitchBusinessImgOne from "../../../assets/images/lenco/lenco-switch-1.png";
import TransactionListImgFour from "../../../assets/images/lenco/lenco-transaction-4.png";
import TransactionListImgOne from "../../../assets/images/lenco/lenco-transaction-1.png";
import TransactionListImgThree from "../../../assets/images/lenco/lenco-transaction-3.png";
import TransactionListImgTwo from "../../../assets/images/lenco/lenco-transaction-2.png";
import VirtualImgOne from "../../../assets/images/lenco/lenco-virtual-1.png";
// import PhoneImageTwo from "../../../assets/images/phone-img-2.png";
import gsap from "gsap";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Lenco(): JSX.Element {
	// const {width} = useDimension();
	const tl = useRef<gsap.core.Timeline | undefined>();
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation().state as LocationState;

	useLayoutEffect(() => {
		window.onload;
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline();

			tl.current.to(".gsap-header-section", {
				height: "100vh",
				maxWidth: "unset",
				width: "100vw",
				marginTop: 0,
				padding: 0,
				duration: 0,
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
				},
				"<"
			);
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<Nav />
			<div ref={landingDivRef}>
				{/* <div className="gsap-lenco-overlay-div fixed top-0 left-0 h-screen w-screen bg-white-dark z-10 duration-[5000ms]"></div> */}
				<div
					className={
						`gsap-page-entry-transition-div w-screen h-screen fixed z-50 bg-white-dark ` +
						`${location?.from === "/" ? "!bg-white-dark " : ""} ` +
						`${location?.from === "/accrue" ? "!bg-accrue-blue" : ""}`
					}
				></div>
				<main className="gsap-main-div flex flex-col justify-start items-start h-full w-full gap-4 bg-lenco-bg-dark">
					<div className="flex flex-col justify-start items-start w-full mb-36 gap-28">
						<HeaderContainer
							gsapHeaderContainerTag="gsap-header-section"
							gsapPrimaryContainerTag="gsap-header-imgs-div"
							gsapImgOneTag="gsap-header-img-1"
							gsapImgTwoContainerTag="gsap-header-img-2-div"
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
						<div className="flex flex-col justify-start items-start w-full gap-12 border-white divide-y-2 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<div className="flex flex-row justify-between items-start w-full gap-2">
								<span className="text-7xl text-white max-w-sm leading-[75px]">Lenco Bank Mobile</span>
								<p className="text-3xl text-blue-quat max-w-sm">
									Lenco is a neo-bank that issues easy to open and free to operate current bank accounts for Startups and SMEs
									without any hassle.
								</p>
							</div>
							<div className="flex flex-col justify-between items-start w-full gap-24 pt-12">
								<div className="flex flex-row justify-start items-start gap-16 w-full">
									<div className="flex flex-col justify-start items-start">
										<span className="text-2xl text-white">Timeline</span>
										<span className="text-xl text-blue-quat">1 Month</span>
									</div>
									<div className="flex flex-col justify-start items-start">
										<span className="text-2xl text-white">Role</span>
										<span className="text-xl text-blue-quat">Conception, UX/UI, Design System</span>
									</div>
								</div>
								<div className="flex flex-col justify-end items-end w-full">
									<div className="flex flex-col justify-end items-end gap-8 w-full max-w-2xl">
										<p className="text-3xl text-blue-quat text-right">
											Creating an interface is much like building a house: <br /> If you don’t get the foundations right, no
											amount of decorating can fix the resulting structure.”
										</p>
										<span className="text-2xl text-blue-quat">— Jef Raskin</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
							<div className="flex flex-col justify-start items-start w-full gap-8">
								<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">The Goal</h2>
								<ul className="list-disc text-blue-quat text-xl ml-5">
									<li>Clearly define the apps goals, capabilities, and audience</li>
									<li>Define where the current app falls shorts or hits pain points</li>
									<li>Research and explore competitors, ideation, and user engagement</li>
									<li>Synthesize research with new design direction and objectives</li>
									<li>Build high-fidelity prototypes and align with stakeholders</li>
									<li>Work closely with engineering to implement and deploy</li>
								</ul>
							</div>
							<div className="flex flex-col justify-start items-start w-full gap-8">
								<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">Assessing the Previous App</h2>
								<p className=" text-blue-quat text-xl">
									A thoughtful review of the previous app highlighted many issues and pain points that indicated poor
									user-experience which led to user abandonment and the overall degrade in the experience interacting with the app.
								</p>
								<ul className="list-disc text-blue-quat text-xl ml-5">
									<li>The design was antiquated and didn{"'"}t reflect the cutting-edge technology driving it</li>
									<li>It was hard to understand what the app did or how to access much of its power</li>
									<li>There was little or no interaction that would engage the user</li>
									<li>Data and analytics were too technical and didn{"'"}t make sense to most users</li>
								</ul>
								<div className="grid grid-cols-4 mt-4 gap-16">
									<img className="w-fit object-fill" src={AssessingImgOne} alt="lenco-old-app" />
									<img className="w-fit object-contain" src={AssessingImgTwo} alt="lenco-old-app" />
									<img className="w-fit object-contain" src={AssessingImgThree} alt="lenco-old-app" />
									<img className="w-fit object-contain" src={AssessingImgFour} alt="lenco-old-app" />
								</div>
							</div>
							<div className="flex flex-col justify-start items-start w-full gap-8">
								<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">Competitive Analysis</h2>
								<p className=" text-blue-quat text-xl">
									To understand where our product stood in the market, determine whether there were any gaps in the industry, and
									identify attributes that these competitors{"'"} products lacked, research was conducted on a few direct and
									indirect competitors{"'"} products. Focused and thoughtful UX competitor analysis provided insightful information
									that allowed us to change important product design features
								</p>
							</div>
							<div className="flex flex-col justify-start items-start w-full gap-12">
								<div className="flex flex-col justify-start items-start w-full gap-8">
									<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">The Revised Architecture</h2>
									<p className=" text-blue-quat text-xl">
										After conducting extensive competitors{"'"} analysis, establishing the business goals by working closely with
										all key stakeholders, and determining how prospective users categorize information through card sorting
										session, I went on to revise and redesign the product{"'"}s information architecture (IA).
									</p>
								</div>
								<div>
									<img className={`h-full ` + `object-contain`} src={ArchitectureImg} alt="lenco-phone-app" />
								</div>
							</div>
							<div className="flex flex-col justify-start items-start w-full gap-28">
								<div className="flex flex-col justify-start items-start w-full gap-8">
									<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">The Redesign</h2>
									<p className=" text-blue-quat text-xl">
										After all the flows and content struct have been established, I went on create visual interfaces users will
										find easy to navigate, simple to use, and enjoyable.
									</p>
								</div>
								<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
									<PhoneContainer
										title="Homescreen"
										subTitle='Cards with a "tap to expand" features were used to keep screens as brief as possible.'
										customTitleStyle="text-accrue-blue"
										customContainerStyle="bg-white-dark lg:w-50% xl:w-60%"
										gsapImageTag="gsap-accrue-img"
										gsapPrimaryContainerTag="gsap-accrue-primary"
										gsapSecondaryContainerTag="gsap-accrue-secondary"
										imgOne={HomeScreenImgOne}
										imgTwo={HomeScreenImgTwo}
										imgOneAlt="phone showing app home screen(lenco)"
										imgTwoAlt="second phone showing home screen(lenco)"
										isSingle={false}
									/>
									<PhoneContainer
										title="Switch Business"
										subTitle="Key actions were kept accessible as this was designed with accessibility in mind. Finger-friendly buttons and cards."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-fora-blue lg:w-50% xl:w-40%"
										gsapImageTag="gsap-fora-img"
										gsapPrimaryContainerTag="gsap-fora-primary"
										gsapSecondaryContainerTag="gsap-fora-secondary"
										imgOne={SwitchBusinessImgOne}
										imgOneAlt="phone showing app switching business(lenco)"
										isSingle
									/>
								</div>
								<MultiPhoneContainer
									title="Transaction List Filter"
									subTitle="Filters were designed with consideration of the user’s priorities, allowing quick and multiple selection as well
									as display the applied filters."
									customTitleStyle="text-white"
									customSubtitleStyle="text-blue-quat"
									customContainerStyle="bg-lenco-bg-xdark w-full"
									gsapPrimaryContainerTag="gsap-lenco-primary"
									gsapSecondaryContainerTag="gsap-lenco-secondary"
									imgOne={TransactionListImgOne}
									imgOneAlt="phone showing app switching business(lenco)"
									imgTwo={TransactionListImgTwo}
									imgTwoAlt="phone showing app switching business(lenco)"
									imgThree={TransactionListImgThree}
									imgThreeAlt="phone showing app switching business(lenco)"
									imgFour={TransactionListImgFour}
									imgFourAlt="phone showing app switching business(lenco)"
								/>
								<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
									<PhoneContainer
										title="Virtual Cards"
										subTitle="By removing unnecessary elements, I was able create an interface that draws the user’s attention to what
											matters most."
										customTitleStyle="text-accrue-blue"
										customContainerStyle="bg-white-dark lg:w-50% xl:w-40%"
										gsapImageTag="gsap-virtual-img"
										gsapPrimaryContainerTag="gsap-virtual-primary"
										gsapSecondaryContainerTag="gsap-virtual-secondary"
										imgOne={VirtualImgOne}
										imgOneAlt="phone showing app(lenco-virtual)"
										isSingle
									/>

									<PhoneContainer
										title="Physical Cards"
										subTitle="Minimalistic and accessible design with a basic call to action and navigation bar."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-fora-blue lg:w-50% xl:w-60%"
										gsapImageTag="gsap-accrue-img"
										gsapPrimaryContainerTag="gsap-accrue-primary"
										gsapSecondaryContainerTag="gsap-accrue-secondary"
										imgOne={PhysicalImgOne}
										imgTwo={PhysicalImgTwo}
										imgOneAlt="phone showing app(lenco-virtual)"
										imgTwoAlt="second phone showing app(lenco-virtual)"
										isSingle={false}
									/>
								</div>
								<MultiPhoneContainer
									title="Reimbursements"
									subTitle="The goal was to create a flow that is easy to use, and an easy way to improve usability of the product is to
										simplify it, and removing any extraneous actions or buttons."
									customTitleStyle="text-white"
									customSubtitleStyle="text-blue-quat"
									customContainerStyle="bg-lenco-bg-xdark w-full"
									gsapPrimaryContainerTag="gsap-lenco-primary"
									gsapSecondaryContainerTag="gsap-lenco-secondary"
									imgOne={ReimbursementsListImgOne}
									imgOneAlt="phone showing app switching business(lenco)"
									imgTwo={ReimbursementsListImgTwo}
									imgTwoAlt="phone showing app switching business(lenco)"
									imgThree={ReimbursementsListImgThree}
									imgThreeAlt="phone showing app switching business(lenco)"
									imgFour={ReimbursementsListImgFour}
									imgFourAlt="phone showing app switching business(lenco)"
								/>
							</div>
							{/* <div className="flex flex-col justify-start items-start w-full gap-12"></div> */}
							<div className="flex flex-col justify-start items-start w-full gap-8">
								<h2 className="text-4xl 2xs:text-5xl lg:!text-6xl text-white font-medium">Takeout</h2>
								<p className=" text-blue-quat text-xl">
									A great experience from start to finish with valuable insights from designing a product with improved UX, UI and
									navigation. Following multiple Guerilla Usability Testing sessions with potential consumers and important
									stakeholders, necessary iterations were made.
								</p>
							</div>
						</div>
					</div>
				</main>
				<div
					className={`gsap-page-departure-transition-div left-right-lenco-gradient h-full w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</div>
		</>
	);
}

export default Lenco;
