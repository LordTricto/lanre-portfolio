import React, {useLayoutEffect, useRef} from "react";
import gsap, {Circ} from "gsap";

import {AccrueSection} from "../../modules/Accrue/Services/accrue.constant";
import {BergerSection} from "../../modules/Berger/Services/berger.constant";
import ClosePage from "../ClosePage/ClosePage";
import {ForaSection} from "../../modules/Fora/Services/fora.constant";
// import useDimension from "../../hooks/useDimension";
import {LencoSection} from "../../modules/Lenco/Services/lenco.constant";
import {RidrSection} from "../../modules/Ridr/Services/ridr.constant";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	title: string;
	type: LencoSection | ForaSection | RidrSection | AccrueSection | BergerSection;
	lists: string[] | null;
	paragraph: string[] | null;
	paragraphWithSideIcon?: string[] | null;

	listsStyle?: string | undefined;
	titleStyle?: string | undefined;
	paragraphStyle?: string | undefined;
	paragraphSideIconStyle?: string | undefined;
	paragraphWithSideIconStyle?: string | undefined;

	smallText?: boolean;
	withCloseSection?: boolean;
	delay?: number;
}

function Sections(props: Props): JSX.Element {
	const divRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | undefined>();
	const {width} = useDimension();

	useLayoutEffect(() => {
		const onPageLoad = () => {
			const ctx = gsap.context(() => {
				setTimeout(() => {
					tl.current?.scrollTrigger?.refresh();
				}, 7000);
				tl.current = gsap.timeline({
					scrollTrigger: {
						trigger: `.gsap-${props.type}-title`,
						start: width < 476 ? "top center+=200px" : "top center",
						markers: !!props.withCloseSection,
						// toggleActions: "restart none none reverse",
					},
				});

				tl.current.from(
					`.gsap-${props.type}-title `,
					{
						opacity: "0",
						translateY: "30%",
						duration: width < 476 ? 0.25 : 0.5,
						ease: Circ.easeOut,
						clearProps: "opacity,translateY",
						delay: props.delay,
					},
					"<+=0.25"
				);
				if (props.paragraphWithSideIcon) {
					tl.current.from(
						`.gsap-${props.type}-side-icon`,
						{
							opacity: "0",
							duration: width < 476 ? 0.25 : 0.5,
							ease: Circ.easeOut,
							clearProps: "opacity",
						},
						">"
					);
				}
				if (props.paragraph || props.paragraphWithSideIcon) {
					tl.current.from(
						`.gsap-${props.type}-paragraph p`,
						{
							opacity: "0",
							duration: width < 476 ? 0.25 : 0.5,
							stagger: width < 476 ? 0.125 : 0.25,
							ease: Circ.easeOut,
							clearProps: "opacity",
						},
						">"
					);
				}
				if (props.lists) {
					tl.current.from(
						`.gsap-${props.type}-lists li`,
						{
							opacity: "0",
							duration: width < 476 ? 0.25 : 0.5,
							stagger: width < 476 ? 0.125 : 0.25,
							ease: Circ.easeOut,
							clearProps: "opacity",
						},
						">"
					);
				}
				if (props.withCloseSection) {
					tl.current.from(
						`.gsap-close-section`,
						{
							opacity: 0,
							duration: width < 476 ? 0.25 : 0.5,
							translateX: "5%",
							clearProps: "opacity,translateX",
						},
						">"
					);
				}
			}, divRef);

			return () => {
				ctx.revert(); // cleanup!!
			};
		};

		// Check if the page has already loaded
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			// Remove the event listener when component unmounts
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	return (
		<>
			<div className="flex flex-col justify-start items-start w-full gap-8" ref={divRef}>
				<h2
					className={
						`gsap-${props.type}-title ${props.titleStyle || ""} ` +
						`${props.smallText ? "text-2xl 2xs:text-3xl lg:!text-4xl" : ""} ` +
						`${!props.smallText ? "text-4xl 2xs:text-5xl lg:!text-6xl" : ""} ` +
						"font-medium"
					}
				>
					{props.title}
				</h2>

				{(props.paragraph || props.lists || props.paragraphWithSideIcon) && (
					<div className={`flex flex-col justify-start items-start w-full ` + `${props.paragraph && props.lists ? "" : "gap-8"}`}>
						{props.paragraph && (
							<div
								className={
									`gsap-${props.type}-paragraph ${props.paragraphStyle || ""} ` +
									`${props.smallText ? "text-sm 2xs:text-base lg:text-lg" : ""} ` +
									`${!props.smallText ? "text-base 2xs:text-lg lg:text-xl" : ""} ` +
									"flex flex-col justify-start items-start gap-6 w-full "
								}
							>
								{props.paragraph.map((_list, index) => (
									<p className="text-left whitespace-normal break-words max-w-full" key={index}>
										{_list}
									</p>
								))}
							</div>
						)}

						{props.lists && (
							<ul
								className={
									`gsap-${props.type}-lists ${props.listsStyle || ""} ` +
									`${props.smallText ? "text-sm 2xs:text-base lg:text-lg" : ""} ` +
									`${!props.smallText ? "text-base 2xs:text-lg lg:text-xl" : ""} ` +
									"list-disc ml-5"
								}
							>
								{props.lists.map((_list, index) => (
									<li key={index}>{_list}</li>
								))}
							</ul>
						)}

						{props.paragraphWithSideIcon && (
							<div className="flex flex-col justify-start items-start gap-6 w-full">
								{props.paragraphWithSideIcon.map((_list, index) => (
									<div className={"flex justify-start items-stretch w-full gap-6 " + ` gsap-${props.type}-paragraph`} key={index}>
										<div
											className={
												"flex-grow w-full max-w-[0.25rem]  " +
												` gsap-${props.type}-side-icon ${props.paragraphSideIconStyle || ""}`
											}
										></div>
										<p
											className={
												` ${props.paragraphWithSideIconStyle || ""} ` +
												`${props.smallText ? "text-sm 2xs:text-base lg:text-lg" : ""} ` +
												`${!props.smallText ? "text-base 2xs:text-lg lg:text-xl" : ""} ` +
												"text-left whitespace-normal break-words max-w-full"
											}
											key={index}
										>
											{_list}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				)}

				{props.withCloseSection && (
					<div className="flex justify-end items-end w-full pt-32 px-4 overflow-hidden">
						<div className="gsap-close-section w-full flex justify-end items-end">
							<ClosePage link="/" customCloseStyle={props.titleStyle || ""} />
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Sections;
