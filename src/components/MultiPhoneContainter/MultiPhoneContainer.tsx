import React from "react";

interface Props {
	title: string;
	subTitle: string;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;
	imgThree?: string;
	imgThreeAlt?: string;
	imgFour?: string;
	imgFourAlt?: string;
	// gsapImageTag: string;
	gsapPrimaryContainerTag: string;
	gsapSecondaryContainerTag: string;
	customContainerStyle: string;
	customSecondaryContainerStyle?: string | undefined;
	customTitleStyle: string;
	customSubtitleStyle?: string;
}

function MultiPhoneContainer(props: Props): JSX.Element {
	return (
		<>
			<div
				className={
					`flex flex-col justify-start items-start gap-14 p-6 md:p-12 w-full relative rounded-3xl overflow-hidden ` +
					`${props.gsapPrimaryContainerTag} ` +
					`${props.customContainerStyle} `
				}
			>
				{/* <div className="flex flex-col gap-8 pt-12 sm:pt-20 w-full">
					<span className={`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading-[4rem] max-w-sm ` + `${props.customTitleStyle}`}>
						{props.title}
					</span>
					<p className={`lg:max-w-sm 2xs:text-lg lg:text-xl ` + `${props.customSubtitleStyle || ""}`}>{props.subTitle}</p>
				</div>
				<div className={`flex justify-center w-full relative ` + `${props.gsapSecondaryContainerTag}`}>
					<img
						className={
							`h-[420px] scale-[1.4] !ease-linear origin-top w-max object-contain ` + `absolute bottom-8 ` + `${props.gsapImageTag}`
						}
						src={props.imgOne}
						alt={props.imgOneAlt}
					/>
				</div> */}
				<div className="flex flex-col justify-center items-center w-full gap-6">
					<h2 className={`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading-[4rem] text-white ` + `${props.customTitleStyle}`}>
						{" "}
						{props.title}
					</h2>
					<p className={`text-xl lg:max-w-5xl 2xs:text-lg lg:text-xl text-center ` + `${props.customSubtitleStyle || ""}`}>
						{props.subTitle}
					</p>
				</div>
				<div className={`grid grid-cols-4 gap-16 ` + `${props.gsapSecondaryContainerTag}` + `${props.customSecondaryContainerStyle || ""}`}>
					<img className="w-fit object-contain" src={props.imgOne} alt={props.imgOneAlt} />
					<img className="w-fit object-contain" src={props.imgTwo} alt={props.imgTwoAlt} />
					<img className="w-fit object-contain" src={props.imgThree} alt={props.imgThreeAlt} />
					<img className="w-fit object-contain" src={props.imgFour} alt={props.imgFourAlt} />
				</div>
			</div>
		</>
	);
}

export default MultiPhoneContainer;
