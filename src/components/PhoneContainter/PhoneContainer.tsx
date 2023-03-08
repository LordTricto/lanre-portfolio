import React from "react";

interface Props {
	isSingle: boolean;
	title: string;
	subTitle: string;
	imgOne: string;
	imgOneAlt: string;
	imgTwo?: string;
	imgTwoAlt?: string;
	gsapImageTag: string;
	gsapPrimaryContainerTag: string;
	gsapSecondaryContainerTag: string;
	customContainerStyle: string;
	customTitleStyle: string;
	customSubtitleStyle?: string;
}

function PhoneContainer(props: Props): JSX.Element {
	const {isSingle = true} = props;
	return (
		<>
			{isSingle && (
				<div
					className={
						`flex flex-col justify-between items-start rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-6 md:px-12 w-full ` +
						`${props.gsapPrimaryContainerTag} ` +
						`${props.customContainerStyle} `
						// h-[700px] lg:h-[780px]
					}
				>
					<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
						<span className={`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading- max-w-sm ` + `${props.customTitleStyle}`}>
							{props.title}
						</span>
						<p className={`lg:max-w-sm 2xs:text-lg lg:text-xl ` + `${props.customSubtitleStyle || ""}`}>{props.subTitle}</p>
					</div>
					<div className={`flex justify-center w-full relative ` + `${props.gsapSecondaryContainerTag}`}>
						<img
							className={
								`h-[420px] scale-[1] !ease-linear origin-top w-max object-contain ` +
								`absolute bottom-10 sm:bottom-16 ` +
								`${props.gsapImageTag}`
							}
							src={props.imgOne}
							alt={props.imgOneAlt}
						/>
					</div>
				</div>
			)}
			{!isSingle && (
				<div
					className={
						`flex flex-col justify-between items-start rounded-3xl h-[730px] lg:h-[800px] overflow-hidden relative px-6 md:px-12 w-full ` +
						`${props.gsapPrimaryContainerTag} ` +
						`${props.customContainerStyle} `
					}
				>
					<div className="flex flex-col gap-8 pt-12 sm:pt-16 w-full">
						<span className={`font-semibold text-3xl 2xs:text-4xl lg:!text-[44px] lg:leading- max-w-sm ` + `${props.customTitleStyle}`}>
							{props.title}
						</span>
						<p className={`2xs:text-lg lg:text-xl ` + `${props.customSubtitleStyle || ""}`}>{props.subTitle}</p>
					</div>
					<div className={`flex justify-center w-full relative ` + `${props.gsapSecondaryContainerTag}`}>
						<img
							className={
								`h-[420px] scale-[1] !ease-linear origin-top w-max xl:ml-5 object-contain ` +
								`absolute bottom-10 sm:bottom-16 xl:left-0 ` +
								`${props.gsapImageTag}`
							}
							src={props.imgOne}
							alt={props.imgOneAlt}
						/>
						<img
							className={
								`h-[420px] scale-[1] !ease-linear origin-top w-max xl:mr-5 object-contain hidden xl:block ` +
								`absolute bottom-10 sm:bottom-16 right-0 ` +
								`${props.gsapImageTag}`
							}
							src={props.imgTwo}
							alt={props.imgTwoAlt}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default PhoneContainer;
