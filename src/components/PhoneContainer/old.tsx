import React, {useCallback, useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import ViewProject from "../CircularWords/CircularWords";
import useDimension from "../../hooks/useDimension";
import {useNavigate} from "react-router-dom";

interface Props {
	mainRef?: React.MutableRefObject<HTMLDivElement | null>;
	imgRef?: React.MutableRefObject<HTMLDivElement | null>;
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

	delay?: number;

	link?: string;
	withViewProject?: boolean;
	circularWordsCustomStyle?: string;
	handleUpdateImageCount?: () => void;
}

function PhoneContainer(props: Props): JSX.Element {
	const {isSingle = true} = props;

	const {width} = useDimension();
	const navigate = useNavigate();

	const tl = useRef<gsap.core.Timeline | undefined>();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			if (props.mainRef) {
				gsap.from(".gsap-primary-container-tag", {
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
						// start: "top center",
						start: width < 476 ? "top center+=200px" : "top center",
					},
					translateY: width > 1023 ? undefined : "10%",
					opacity: 0,
					duration: width < 476 ? 0.5 : 1,
					clearProps: "opacity,translateY",
				});

				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: ".gsap-primary-container-tag",
						start: width < 476 ? "top center+=200px" : "top center",
					},
				});

				if (width > 1023) {
					gsap.from(".gsap-primary-container-tag", {
						scrollTrigger: {
							trigger: ".gsap-container-tag",
							start: width < 476 ? "top center+=200px" : "top center",
							onEnter: () => {
								props.imgRef?.current?.classList.add("-active");
							},
						},
					});
				}

				tl.current.to(
					".gsap-text-overlay-tag",
					{
						delay: props.delay,
						height: "0",
						stagger: width < 476 ? 0.375 : 0.75,
						duration: width < 476 ? 1 : 2,
						clearProps: "opacity",
						ease: Circ.easeInOut,
					},
					">-0.5"
				);
				tl.current.from(
					".gsap-content",
					{
						opacity: 0,
						stagger: width < 476 ? 0.375 : 0.75,
						duration: width < 476 ? 0.625 : 1.25,
						clearProps: "translateY,opacity",
						ease: Circ.easeOut,
					},
					width < 476 ? ">-1" : ">-2"
				);

				if (width > 1023) {
					tl.current.from(
						".gsap-image-tag",
						{
							scale: 1.3,
							bottom: props.customImgOneStyle ? undefined : "1rem",
							duration: width < 476 ? 0.5 : 1,
							clearProps: "bottom,scale",
						},
						width < 476 ? ">-0.625" : ">-1.25"
					);
				} else {
					tl.current.from(
						".gsap-image-tag",
						{
							opacity: 0,
							duration: width < 476 ? 0.5 : 1,
							translateY: "10%",
							clearProps: "opacity,translateY",
						},
						width < 476 ? ">-0.625" : ">-1.25"
					);
				}
				if (props.withViewProject) {
					tl.current.from(".gsap-view-project", {
						opacity: 0,
						duration: width < 476 ? 0.5 : 1,
						clearProps: "opacity",
					});
				}
			}
		}, props.mainRef);
		console.log(props.mainRef);
		return () => {
			ctx.revert(); // cleanup!!
		};
	}, [props.mainRef?.current]);

	const handleOnClick = useCallback(() => {
		if (props.link) {
			navigate(props.link || "");
		}
	}, [props.link]);

	return (
		<>
			<div className="w-full relative">
				<div
					className="gsap-container-tag w-full"
					style={{
						perspective: "500px",
						transformStyle: "preserve-3d",
					}}
					onClick={handleOnClick}
				>
					{isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-7 md:px-14 w-full ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							ref={props.imgRef}
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
									{props.withViewProject && (
										<div className="gsap-view-project absolute bottom-20 z-30 left-20">
											<ViewProject circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)}
								</div>
							</div>
						</div>
					)}
					{!isSingle && (
						<div
							className={
								`rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-7 md:px-14 w-full ` +
								`gsap-primary-container-tag ` +
								`${props.customContainerStyle} `
							}
							ref={props.imgRef}
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
									{props.withViewProject && (
										<div className="gsap-view-project absolute bottom-20 z-30 left-20">
											<ViewProject circularWordsCustomStyle={props.circularWordsCustomStyle} />
										</div>
									)}
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
