import React, {useCallback, useRef} from "react";
import gsap, {Power3} from "gsap";

import useDimension from "../../hooks/useDimension";
import {useGSAP} from "@gsap/react";
import {useNavigate} from "react-router-dom";

interface Props {
	isSingle: boolean;
	title: string | React.ReactNode;
	subTitle: string | React.ReactNode;
	secondSubTitle?: string | React.ReactNode;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;
	customContainerStyle: string;
	customTitleStyle: string;
	customSubtitleStyle?: string;
	customTextOverlayStyle: string;
	customImgOneStyle?: string;

	link?: string;
	handleUpdateImageCount?: () => void;
}

function PhoneContainer(props: Props): JSX.Element {
	const {isSingle = true} = props;

	const {width} = useDimension();
	const navigate = useNavigate();

	const tl = useRef<gsap.core.Timeline | undefined>();
	const mainDivRef = useRef<HTMLDivElement | null>(null);

	const isLessThanTabView = width < 476;
	const isLessThanLaptopView = width < 1024;

	useGSAP(
		() => {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".gsap-primary-container-tag",
					start: "top center+=200px",
					// markers: true,
					// toggleActions: "restart none none reverse",
				},
			});

			tl.current.to(".gsap-text-overlay-tag", {
				// delay: props.delay,
				height: "0",
				stagger: isLessThanTabView ? 0.275 : 0.5,
				duration: isLessThanTabView ? 1 : 1.5,
				clearProps: "opacity",
				ease: Power3.easeInOut,
			});
			tl.current.from(
				".gsap-content",
				{
					opacity: 0,
					stagger: isLessThanTabView ? 0.275 : 0.5,
					duration: isLessThanTabView ? 0.5 : 1,
					clearProps: "translateY,opacity",
					ease: Power3.easeOut,
				},
				isLessThanTabView ? ">-0.5" : ">-1.5"
			);

			if (!isLessThanLaptopView) {
				tl.current.from(
					".gsap-image-tag",
					{
						scale: 1.3,
						bottom: props.customImgOneStyle ? undefined : "1rem",
						duration: isLessThanTabView ? 0.5 : 1,
						clearProps: "bottom,scale",
					},
					isLessThanTabView ? ">-0.5" : ">-1"
				);
			} else {
				tl.current.from(
					".gsap-image-tag",
					{
						opacity: 0,
						duration: isLessThanTabView ? 0.5 : 1,
						translateY: "10%",
						clearProps: "opacity,translateY",
					},
					isLessThanTabView ? ">-0.5" : ">-1"
				);
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
				<div className="gsap-container-tag w-full" onClick={handleOnClick}>
					{isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-7 md:px-14 w-full cursor-pointer ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							// ref={props.imgRef}
						>
							<div className={`gsap-secondary-container-tag ` + `flex flex-col justify-between items-start h-full w-full `}>
								<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
									<div
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] max-w-sm relative pb-1.5 ` +
											`${props.customTitleStyle}`
										}
									>
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<p className={`2xs:text-lg lg:text-xl gsap-content ` + `${props.customSubtitleStyle || ""}`}>
											{props.subTitle}
										</p>
									</div>
									{props.secondSubTitle && (
										<div className="relative 2xs:text-lg lg:text-xl">
											<div
												className={
													`gsap-text-overlay-tag ` +
													"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
													`${props.customTextOverlayStyle}`
												}
											></div>
											<p className={`2xs:text-lg lg:text-xl gsap-content ` + `${props.customSubtitleStyle || ""}`}>
												{props.secondSubTitle}
											</p>
										</div>
									)}
								</div>
								<div className={`flex justify-center w-full relative ` + `gsap-imgs-container-tag`}>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max object-contain ` +
											`absolute bottom-10 sm:bottom-16 ` +
											`${props.customImgOneStyle || ""} ` +
											`gsap-image-tag`
										}
										onLoad={props.handleUpdateImageCount}
										src={props.imgOne}
										alt={props.imgOneAlt}
									/>
									{/* {props.withViewProject && (
										<div className="gsap-view-project absolute bottom-20 z-30 left-20">
											<ViewProject circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)} */}
								</div>
							</div>
						</div>
					)}
					{!isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-7 md:px-14 w-full cursor-pointer ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							// ref={props.imgRef}
						>
							<div className={`gsap-secondary-container-tag ` + `flex flex-col justify-between items-start h-full w-full `}>
								<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
									<div
										className={
											`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] max-w-sm relative pb-1.5 ` +
											`${props.customTitleStyle}`
										}
									>
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom  " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<span className="gsap-content">{props.title}</span>
									</div>
									<div className="relative 2xs:text-lg lg:text-xl">
										<div
											className={
												`gsap-text-overlay-tag ` +
												"w-full h-full absolute bottom-0 left-0 z-10 origin-bottom " +
												`${props.customTextOverlayStyle}`
											}
										></div>
										<p className={`2xs:text-lg lg:text-xl gsap-content ` + `${props.customSubtitleStyle || ""}`}>
											{props.subTitle}
										</p>
									</div>
								</div>
								<div className={`flex justify-center h-full w-full relative ` + `gsap-imgs-container-tag`}>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max xl:ml-5 object-contain ` +
											`absolute bottom-10 sm:bottom-16 xl:left-0 ` +
											`gsap-image-tag`
										}
										onLoad={props.handleUpdateImageCount}
										src={props.imgOne}
										alt={props.imgOneAlt}
									/>
									<img
										className={
											`h-[420px] scale-[1] !ease-linear origin-top w-max xl:mr-5 object-contain hidden xl:block ` +
											`absolute bottom-10 sm:bottom-16 right-0 ` +
											`gsap-image-tag`
										}
										onLoad={props.handleUpdateImageCount}
										src={props.imgTwo}
										alt={props.imgTwoAlt}
									/>
									{/* {props.withViewProject && (
										<div className="gsap-view-project absolute bottom-20 z-30 left-20">
											<ViewProject circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)} */}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default PhoneContainer;
