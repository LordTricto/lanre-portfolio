import React from "react";

interface Props {
	headerImgOne: string;
	headerImgOneAlt: string;
	headerImgTwo?: string;
	headerImgTwoAlt?: string;
	headerImgThree?: string;
	headerImgThreeAlt?: string;
	gsapHeaderContainerTag: string;
	gsapPrimaryContainerTag: string;
	gsapImgOneTag: string;
	gsapImgTwoTag: string;
	gsapImgTwoContainerTag: string;
	gsapImgThreeTag: string;
	isSingle?: boolean;
}

function HeaderContainer(props: Props): JSX.Element {
	return (
		<>
			<div
				className={
					`flex flex-col lg:flex-row justify-center items-center gap-5 relative transition-all duration-[0ms] ` +
					// `h-[25vh] xs:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] w-full overflow-hidden mt-36 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto ` +
					// `!h-[25vh] xs:!h-[30vh] md:!h-[40vh] lg:!h-[50vh] xl:!h-[60vh] w-full overflow-hidden mt-36 px-4 2xs:px-8 lg:px-16 max-w-7xl mx-auto ` +
					`h-[200px] 2xs:h-[25vh] xs:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] w-full overflow-hidden mt-36 px-4 2xs:px-8 lg:px-16 xl:w-[80rem] mx-auto ` +
					// `h-screen w-full overflow-hidden mx-auto ` +
					`${props.gsapHeaderContainerTag}`
				}
			>
				<div
					className={
						`h-full w-full relative flex flex-row justify-center gap-2 2xs:gap-4 md:gap-8 overflow-hidden ` +
						`bg-white-dark rounded-3xl ` +
						`${props.gsapPrimaryContainerTag}`
					}
				>
					{props.isSingle && (
						<>
							<div className={` h-full w-full ` + `flex justify-center items-center `}>
								<img
									// className={`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[320px] lg:!h-[520px] xl:!h-[660px] `}
									className={
										`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ` + `${props.gsapImgOneTag}`
									}
									src={props.headerImgOne}
									alt={props.headerImgOneAlt}
								/>
							</div>
						</>
					)}
					{!props.isSingle && (
						<>
							<div className="flex justify-center items-center h-full w-[360px] absolute mx-auto ">
								<img
									className={
										`${props.gsapImgOneTag} ` +
										// `left-8 ` +
										`left-0 md:ml-[-800px] transition-transform duration-[0ms] ` +
										`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ` +
										`translate-y-16 xs:translate-y-[5.75rem] sm:translate-y-24 md:translate-y-32 lg:translate-y-40 xl:translate-y-48`

										// `absolute -bottom-[20%] xs:-bottom-[30%] xl:-bottom-[45%] transform-none `
									}
									src={props.headerImgOne}
									alt={props.headerImgOneAlt}
								/>
							</div>
							<div className={`flex justify-center items-center h-full w-[360px] absolute mx-auto z-10 `}>
								<img
									// className={`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] `}
									className={
										// `h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ml-6.5 ` +
										`${props.gsapImgTwoTag} transition-transform duration-[0ms]  z-20  ` +
										`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ` +
										`-translate-y-16 xs:-translate-y-[5.75rem] sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-40 xl:-translate-y-48`
									}
									src={props.headerImgTwo}
									alt={props.headerImgTwoAlt}
								/>
							</div>
							{/* <div
								className={
									`${props.gsapImgTwoContainerTag} ` +
									`left-0 top-0 h-full w-full ` +
									`absolute -top-8 3xs:-top-[25%] xl:-top-[35%] ` +
									`flex justify-center items-center `
								}
							>
								<img
									// className={`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] `}
									className={
										`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ml-6.5 ` +
										`${props.gsapImgTwoTag}`
									}
									src={props.headerImgTwo}
									alt={props.headerImgTwoAlt}
								/>
							</div> */}
							<div className={`flex justify-center items-center h-full w-[360px] absolute mx-auto `}>
								<img
									className={
										`${props.gsapImgThreeTag} transition-transform duration-[0ms] ` +
										// `left-8 ` +
										`left-0 md:mr-[-800px] ` +
										`h-[220px] xs:h-[280px] sm:h-[320px] md:!h-[420px] lg:!h-[520px] xl:!h-[660px] ` +
										`translate-y-16 xs:translate-y-[5.75rem] sm:translate-y-24 md:translate-y-32 lg:translate-y-40 xl:translate-y-48`

										// `absolute -bottom-[20%] xs:-bottom-[30%] xl:-bottom-[45%] transform-nThree `
									}
									src={props.headerImgThree}
									alt={props.headerImgThreeAlt}
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default HeaderContainer;
