import React, {useCallback, useRef} from "react";
import gsap, {Power3} from "gsap";

import BergerBG from "../../../assets/images/home/berger-bg.png";
import MacImageOne from "../../../assets/images/home/mac-img-1.png";
// import ViewProject from "../../CircularWords/CircularWords";
import useDimension from "../../../hooks/useDimension";
import {useGSAP} from "@gsap/react";
import {useNavigate} from "react-router-dom";

interface Props {
	link?: string;
	withViewProject?: boolean;
	circularWordsCustomStyle?: string;

	handleUpdateImageCount?: () => void;
}

function MacContainer(props: Props): JSX.Element {
	const {width} = useDimension();
	const navigate = useNavigate();

	const mainDivRef = useRef<HTMLDivElement | null>(null);

	const tl = useRef<gsap.core.Timeline | undefined>();

	useGSAP(
		() => {
			if (width < 1024) {
				gsap.from(".gsap-berger-primary", {
					scrollTrigger: {
						trigger: ".gsap-berger-primary",
						start: "top center+=150px",
					},
					translateY: "10%",
					opacity: 0,
					duration: 1,
					clearProps: "opacity,translateY",
				});
			}

			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-berger-primary",
					start: "top center",
					toggleActions: "restart none none reverse",
				},
			});

			tl.current.from(".gsap-berger-content", {
				opacity: 0,
				stagger: 0.5,
				duration: 1,
				translateY: "40%",
				ease: Power3.easeOut,
				clearProps: "translateY,opacity,transform",
			});
			if (width > 1023) {
				tl.current.from(".gsap-berger-img", {
					duration: 1,
					scale: 1.2,
					clearProps: "bottom,scale",
				});
			} else {
				tl.current.from(".gsap-berger-img", {
					opacity: 0,
					duration: 1,
					translateX: "10%",
					clearProps: "opacity,translateX",
				});
			}
		},
		{scope: mainDivRef}
	);

	const handleOnClick = useCallback(() => {
		if (props.link) {
			navigate(props.link || "");
		}
	}, [props.link]);

	return (
		<>
			<div className="w-full relative" ref={mainDivRef}>
				<div
					// className="gsap-berger-primary h-full px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto pb-24 md:pb-96 relative rounded-3xl "
					className="gsap-berger-primary h-full px-4 2xs:px-8 lg:px-16 w-full xl:w-[80rem] mx-auto pb-24 relative rounded-3xl "
					// style={{cursor: width > 1023 && hideCursor ? "none" : "auto"}}
				>
					<div
						className="flex flex-col justify-center items-center w-full text-white cursor-pointer z-10 h-[640px] 2xs:h-[780px] md:!h-[740px] xl:!h-[720px] mx-auto relative px-7 md:px-14 overflow-hidden "
						onClick={handleOnClick}
					>
						<img
							className="gsap-berger-primary-bg h-full w-full absolute rounded-3xl"
							src={BergerBG}
							alt="Berger Paints bg"
							onLoad={props.handleUpdateImageCount}
						/>
						<div className="flex flex-col justify-start items-start lg:items-center gap-8 pt-12 sm:pt-20 w-full z-10 text-left lg:text-center">
							<span className="gsap-berger-content font-semibold text-3xl 2xs:text-4xl md:!text-5xl max-w-sm md:leading-[4rem] text-left lg:text-center">
								Berger Paints
							</span>
							<p className="gsap-berger-content max-w-2xl 2xs:text-lg md:text-xl text-white">
								Nigeria&apos;s leading paint brand, offering varieties of paints and coating products to provide your desired colors.
							</p>
						</div>
						<div className="h-full w-full relative">
							<div className={"md:pt-20 w-full " + `flex justify-center items-end lg:block ` + `absolute -bottom-16 lg:top-0 left-0`}>
								<img
									className={
										"gsap-berger-img scale-[1] origin-top object-contain " +
										"w-full [@media(min-width:900px)]:w-[700px] lg:!w-full  " +
										//for the mobile view
										"absolute left-0 [@media(min-width:815px)]:relative " +
										"min-w-[400px] 3xs:min-w-[500px] xs:min-w-[650px] sm:min-w-[675px] md:min-w-[700px]  " +
										"bottom-10 xs:bottom-[unset] " +
										"lg:h-[600px] xl:h-[700px] " +
										``
									}
									src={MacImageOne}
									onLoad={props.handleUpdateImageCount}
									alt="Mac showing app landing page(Berger Paints)"
								/>
								{/* {props.withViewProject && (
									<div className="gsap-view-project absolute bottom-20 z-30 right-20">
										<ViewProject circularWordsCustomStyle={props.circularWordsCustomStyle} />
									</div>
								)} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MacContainer;
