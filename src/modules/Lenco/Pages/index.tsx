import {LencoSection, LencoSections} from "../Services/lenco.constant";
import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ, Power4} from "gsap";

import ArchitectureImg from "../../../assets/images/lenco/lenco-architecture-1.png";
import AssessingImgFour from "../../../assets/images/lenco/lenco-assessing-4.png";
import AssessingImgOne from "../../../assets/images/lenco/lenco-assessing-1.png";
import AssessingImgThree from "../../../assets/images/lenco/lenco-assessing-3.png";
import AssessingImgTwo from "../../../assets/images/lenco/lenco-assessing-2.png";
import ClosePage from "../../../components/ClosePage/ClosePage";
import HeaderContainer from "../../../components/HeaderContainer/HeaderContainer";
import HeaderImgOne from "../../../assets/images/lenco/lenco-header-1.png";
import HeaderImgThree from "../../../assets/images/lenco/lenco-header-3.png";
import HeaderImgTwo from "../../../assets/images/lenco/lenco-header-2.png";
import HomeScreenImgOne from "../../../assets/images/lenco/lenco-homescreen-1.png";
import HomeScreenImgTwo from "../../../assets/images/lenco/lenco-homescreen-2.png";
import MultiPhoneContainer from "../../../components/MultiPhoneContainter/MultiPhoneContainer";
import Nav from "../../../components/nav/nav";
import PhoneContainer from "../../../components/PhoneContainter/PhoneContainer";
import PhysicalImgOne from "../../../assets/images/lenco/lenco-physical-1.png";
import PhysicalImgTwo from "../../../assets/images/lenco/lenco-physical-2.png";
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription";
import ReimbursementsListImgFour from "../../../assets/images/lenco/lenco-reimbursement-4.png";
import ReimbursementsListImgOne from "../../../assets/images/lenco/lenco-reimbursement-1.png";
import ReimbursementsListImgThree from "../../../assets/images/lenco/lenco-reimbursement-3.png";
import ReimbursementsListImgTwo from "../../../assets/images/lenco/lenco-reimbursement-2.png";
// import useDimension from "../../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sections from "../../../components/Sections/Sections";
import SwitchBusinessImgOne from "../../../assets/images/lenco/lenco-switch-1.png";
import TransactionListImgFour from "../../../assets/images/lenco/lenco-transaction-4.png";
import TransactionListImgOne from "../../../assets/images/lenco/lenco-transaction-1.png";
import TransactionListImgThree from "../../../assets/images/lenco/lenco-transaction-3.png";
import TransactionListImgTwo from "../../../assets/images/lenco/lenco-transaction-2.png";
import VirtualImgOne from "../../../assets/images/lenco/lenco-virtual-1.png";
import {useLocation} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
type LocationState = {
	from: string;
};

function Lenco(): JSX.Element {
	// const {width} = useDimension();
	const tl = useRef<gsap.core.Timeline | undefined>();
	const tl2 = useRef<gsap.core.Timeline | undefined>();
	const tl3 = useRef<gsap.core.Timeline | undefined>();
	const tl4 = useRef<gsap.core.Timeline | undefined>();
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation().state as LocationState;

	useLayoutEffect(() => {
		window.onload;
		const ctx = gsap.context(() => {
			setTimeout(() => {
				tl.current?.scrollTrigger?.refresh();
				tl4.current?.scrollTrigger?.refresh();
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
					},
				},
				"<"
			);

			tl2.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-assessing-phone-imgs`,
					start: "top center",
					// markers: true,
					// toggleActions: "restart none none reverse",
				},
			});

			tl2.current.from(
				`.gsap-assessing-phone-imgs img`,
				{
					opacity: "0",
					translateY: "5%",
					duration: 0.5,
					stagger: 0.5,
					ease: Power4.easeOut,
					clearProps: "opacity,translateY",
				}
				// "<+=0.5"
			);

			tl3.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-revised-phone-imgs`,
					start: "top top+=300px",
					// markers: true,
					// toggleActions: "restart none none reverse",
				},
			});

			tl3.current.from(
				`.gsap-revised-phone-imgs img`,
				{
					opacity: "0",
					translateY: "10%",
					duration: 1,
					// stagger: 0.25,
					ease: Circ.easeOut,
					clearProps: "opacity,translateY",
				}
				// "<+=0.5"
			);

			//close section
			tl4.current = gsap.timeline({
				scrollTrigger: {
					trigger: `.gsap-takeout-section`,
					start: "top center",
					// markers: true,
					// toggleActions: "restart none none reverse",
				},
			});

			tl4.current.from(
				`.gsap-close-section`,
				{
					opacity: 0,
					duration: 0.5,
					translateX: "5%",
					clearProps: "opacity,translateX",
				},
				"1.75"
			);

			// gsap-assessing-phone-section
		}, landingDivRef);

		return () => {
			ctx.revert(); // cleanup!!
		};
	}, []);

	return (
		<>
			<Nav />
			<main
				className="gsap-main-div flex flex-col justify-start items-start h-full w-full gap-4 bg-lenco-bg-dark min-h-screen pb-8 relative overflow-hidden "
				ref={landingDivRef}
			>
				<div
					className={
						`gsap-page-entry-transition-div w-screen h-screen fixed z-50 bg-white-dark ` +
						`${location?.from === "/" ? "!bg-white-dark " : ""} ` +
						`${location?.from === "/accrue" ? "!bg-accrue-blue" : ""}`
					}
				></div>
				<div className="flex flex-col justify-start items-start w-full mb-8 md:mb-24 gap-28">
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
					<ProjectDescription
						title="Lenco Bank Mobile"
						subTitle="Lenco is a neo-bank that issues easy to open and free to operate current bank accounts for Startups and SMEs
									without any hassle."
						textColorStyle="text-blue-quat"
						customTitleStyle="text-white"
						customBorderStyle="border-white"
						customSubTitleStyle="text-blue-quat"
						author="Jef Raskin"
						quote={
							<>
								Creating an interface is much like building a house: <br /> If you don’t get the foundations right, no amount of
								decorating can fix the resulting structure.”
							</>
						}
						role="Conception, UX/UI, Design System"
						timeline="1"
					/>

					<div className="flex flex-col justify-start items-start w-full gap-28 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={LencoSections[LencoSection.THE_GOAL].value}
							lists={LencoSections[LencoSection.THE_GOAL].lists}
							paragraph={LencoSections[LencoSection.THE_GOAL].paragraph}
							title={LencoSections[LencoSection.THE_GOAL].title}
							listsStyle="text-blue-quat"
							titleStyle="text-white"
							paragraphStyle="text-blue-quat"
						/>

						<div className="gsap-assessing-phone-section flex flex-col justify-start items-start w-full gap-8">
							<Sections
								type={LencoSections[LencoSection.ASSESSING_THE_PREVIOUS_APP].value}
								lists={LencoSections[LencoSection.ASSESSING_THE_PREVIOUS_APP].lists}
								paragraph={LencoSections[LencoSection.ASSESSING_THE_PREVIOUS_APP].paragraph}
								title={LencoSections[LencoSection.ASSESSING_THE_PREVIOUS_APP].title}
								titleStyle="text-white"
								listsStyle="text-blue-quat"
								paragraphStyle="text-blue-quat"
							/>
							<div className="gsap-assessing-phone-imgs grid grid-cols-2 2xs:grid-cols-4 mt-4 gap-8 lg:gap-16">
								<img className="w-fit object-fill" src={AssessingImgOne} alt="lenco-old-app" />
								<img className="w-fit object-contain" src={AssessingImgTwo} alt="lenco-old-app" />
								<img className="w-fit object-contain" src={AssessingImgThree} alt="lenco-old-app" />
								<img className="w-fit object-contain" src={AssessingImgFour} alt="lenco-old-app" />
							</div>
						</div>
						<Sections
							type={LencoSections[LencoSection.COMPETITIVE_ANALYSIS].value}
							lists={LencoSections[LencoSection.COMPETITIVE_ANALYSIS].lists}
							paragraph={LencoSections[LencoSection.COMPETITIVE_ANALYSIS].paragraph}
							title={LencoSections[LencoSection.COMPETITIVE_ANALYSIS].title}
							titleStyle="text-white"
							listsStyle="text-blue-quat"
							paragraphStyle="text-blue-quat"
						/>
						<div className="gsap-revised-phone-section flex flex-col justify-start items-start w-full gap-12">
							<Sections
								type={LencoSections[LencoSection.REVISED_ARCHITECTURE].value}
								lists={LencoSections[LencoSection.REVISED_ARCHITECTURE].lists}
								paragraph={LencoSections[LencoSection.REVISED_ARCHITECTURE].paragraph}
								title={LencoSections[LencoSection.REVISED_ARCHITECTURE].title}
								titleStyle="text-white"
								listsStyle="text-blue-quat"
								paragraphStyle="text-blue-quat"
							/>
							<div className="gsap-revised-phone-imgs">
								<img className={`w-full ` + `object-contain`} src={ArchitectureImg} alt="lenco-phone-app" />
							</div>
						</div>
						<div className="flex flex-col justify-start items-start w-full gap-28">
							<Sections
								type={LencoSections[LencoSection.THE_REDESIGN].value}
								lists={LencoSections[LencoSection.THE_REDESIGN].lists}
								paragraph={LencoSections[LencoSection.THE_REDESIGN].paragraph}
								title={LencoSections[LencoSection.THE_REDESIGN].title}
								titleStyle="text-white"
								listsStyle="text-blue-quat"
								paragraphStyle="text-blue-quat"
							/>

							<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8">
								<div className="lg:w-50% xl:w-60%">
									<PhoneContainer
										title="Homescreen"
										subTitle='Cards with a "tap to expand" features were used to keep screens as brief as possible.'
										customTitleStyle="text-accrue-blue"
										customContainerStyle="bg-white-dark "
										gsapImageTag="gsap-accrue-img"
										gsapPrimaryContainerTag="gsap-accrue-primary"
										gsapSecondaryContainerTag="gsap-accrue-secondary"
										imgOne={HomeScreenImgOne}
										imgTwo={HomeScreenImgTwo}
										imgOneAlt="phone showing app home screen(lenco)"
										imgTwoAlt="second phone showing home screen(lenco)"
										isSingle={false}
										customTextOverlayStyle="bg-white-dark "
										gsapImgsContainerTag="gsap-accrue-imgs"
										gsapTextOverlayTag="gsap-accrue-text-overlay"
										// delay={width > 1279 ? 1 : undefined}
									/>
								</div>
								<div className="lg:w-50% xl:w-40%">
									<PhoneContainer
										title="Switch Business"
										subTitle="Key actions were kept accessible as this was designed with accessibility in mind. Finger-friendly buttons and cards."
										customTitleStyle="text-white"
										customSubtitleStyle="text-white"
										customContainerStyle="bg-fora-blue"
										gsapImageTag="gsap-fora-img"
										gsapPrimaryContainerTag="gsap-fora-primary"
										gsapSecondaryContainerTag="gsap-fora-secondary"
										imgOne={SwitchBusinessImgOne}
										imgOneAlt="phone showing app switching business(lenco)"
										isSingle
										customTextOverlayStyle="bg-fora-blue"
										gsapImgsContainerTag="gsap-accrue-imgs"
										gsapTextOverlayTag="gsap-accrue-text-overlay"
									/>
								</div>
							</div>
						</div>
					</div>
					<MultiPhoneContainer
						type="filter"
						title="Transaction List Filter"
						subTitle="Filters were designed with consideration of the user’s priorities, allowing quick and multiple selection as well
									as display the applied filters."
						customTitleStyle="text-white"
						customSubtitleStyle="text-blue-quat"
						customContainerStyle="bg-lenco-bg-xdark w-full"
						customOverlayStyle="bg-lenco-bg-xdark"
						// customContainerStyle="bg-white w-full"
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
					<div className="flex justify-start lg:justify-between items-start flex-col lg:flex-row w-full gap-16 lg:gap-8 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<div className="lg:w-50% xl:w-40%">
							<PhoneContainer
								title="Virtual Cards"
								subTitle="By removing unnecessary elements, I was able create an interface that draws the user’s attention to what
											matters most."
								customTitleStyle="text-accrue-blue"
								customContainerStyle="bg-white-dark "
								gsapImageTag="gsap-virtual-img"
								gsapPrimaryContainerTag="gsap-virtual-primary"
								gsapSecondaryContainerTag="gsap-virtual-secondary"
								imgOne={VirtualImgOne}
								imgOneAlt="phone showing app(lenco-virtual)"
								isSingle
								customTextOverlayStyle="bg-white-dark "
								gsapImgsContainerTag="gsap-accrue-imgs"
								gsapTextOverlayTag="gsap-accrue-text-overlay"
							/>
						</div>
						<div className="lg:w-50% xl:w-60%">
							<PhoneContainer
								title="Physical Cards"
								subTitle="Minimalistic and accessible design with a basic call to action and navigation bar."
								customTitleStyle="text-white"
								customSubtitleStyle="text-white"
								customContainerStyle="bg-fora-blue"
								gsapImageTag="gsap-accrue-img"
								gsapPrimaryContainerTag="gsap-accrue-primary"
								gsapSecondaryContainerTag="gsap-accrue-secondary"
								imgOne={PhysicalImgOne}
								imgTwo={PhysicalImgTwo}
								imgOneAlt="phone showing app(lenco-virtual)"
								imgTwoAlt="second phone showing app(lenco-virtual)"
								isSingle={false}
								customTextOverlayStyle="bg-fora-blue "
								gsapImgsContainerTag="gsap-accrue-imgs"
								gsapTextOverlayTag="gsap-accrue-text-overlay"
							/>
						</div>
					</div>
					<MultiPhoneContainer
						type="reimbursement"
						title="Reimbursements"
						subTitle="The goal was to create a flow that is easy to use, and an easy way to improve usability of the product is to
										simplify it, and removing any extraneous actions or buttons."
						customTitleStyle="text-white"
						customSubtitleStyle="text-blue-quat"
						customContainerStyle="bg-lenco-bg-xdark w-full"
						customOverlayStyle="bg-lenco-bg-xdark"
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
					<div className="gsap-takeout-section flex flex-col justify-start items-start w-full gap-8 pb-0 lg:pb-8 xl:pb-0 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto">
						<Sections
							type={LencoSections[LencoSection.TAKEOUT].value}
							lists={LencoSections[LencoSection.TAKEOUT].lists}
							paragraph={LencoSections[LencoSection.TAKEOUT].paragraph}
							title={LencoSections[LencoSection.TAKEOUT].title}
							listsStyle="text-blue-quat"
							titleStyle="text-white"
							paragraphStyle="text-blue-quat"
						/>
					</div>
					<div className=" w-full flex justify-end items-end px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">
						<div className="gsap-close-section w-full flex justify-end items-end">
							<ClosePage link="/" customCloseStyle="text-white" />
						</div>
					</div>
				</div>
				<div
					className={`gsap-page-departure-transition-div left-right-lenco-gradient h-full w-[110vw] absolute top-0 left-[100%] z-30 `}
				></div>
			</main>
		</>
	);
}

export default Lenco;
