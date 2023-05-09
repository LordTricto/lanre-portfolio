/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ} from "gsap";
import {useLocation, useNavigate} from "react-router-dom";

import {ReactComponent as ArrowDownIcon} from "../../assets/svg/arrowDownIcon.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "../../hooks/useDimension";
import {useLenis} from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	pageLoaded: boolean;
}

function Nav(props: Props): JSX.Element {
	const {width} = useDimension();
	const navigate = useNavigate();
	const location = useLocation();
	const tl = useRef<gsap.core.Timeline | undefined>();
	const navDivRef = useRef<HTMLDivElement | null>(null);

	const lenis = useLenis(() => ScrollTrigger.update());
	useEffect(() => ScrollTrigger.update(), [lenis]);

	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const [isAnimationDone, setIsAnimationDone] = useState<boolean>(false);
	const [activeRoute, setActiveRoute] = useState<string>("");

	useLayoutEffect(() => {
		setIsAnimationDone(false);
		setActiveRoute("");

		if (props.pageLoaded) {
			setTimeout(
				() => {
					setIsAnimationDone(true);
					setActiveRoute(location.pathname);
				},
				location.pathname === "/" ? (width > 1023 ? 8500 : 8500) : 6000
			);
		}
	}, [props.pageLoaded]);
	// }, [location.pathname, props.pageLoaded]);

	useEffect(() => {
		if (!isNavOpen) return;
		timeline1();
		lenis && lenis.stop && lenis.stop();

		return () => {
			timeline2();
			lenis && lenis.start && lenis.start();
		};
	}, [isNavOpen]);

	const timeline1 = useCallback(() => {
		tl.current = gsap.timeline();
		tl.current.to(".gsap-nav-overlay-div", {
			translateY: 0,
			ease: Circ.easeOut,
			duration: 1.5,
		});
		tl.current.to(
			".gsap-nav-link-one",
			{
				top: 0,
				duration: 0.25,
			},
			"=-1"
		);
		tl.current.to(
			".gsap-nav-link-two",
			{
				top: 0,
				duration: 0.25,
			},
			">"
		);
		tl.current.to(
			".gsap-nav-link-three",
			{
				top: 0,
				duration: 0.25,
			},
			">"
		);
		tl.current.to(
			".gsap-nav-link-four",
			{
				top: 0,
				duration: 0.25,
			},
			">"
		);
		tl.current.to(
			".gsap-nav-link-five",
			{
				top: 0,
				duration: 0.25,
			},
			">"
		);
	}, []);

	const timeline2 = useCallback(() => {
		tl.current = gsap.timeline();

		tl.current.to(".gsap-nav-link-five", {
			top: "3.5rem",
			duration: 0.25,
		});
		tl.current.to(".gsap-nav-link-four", {
			top: "3.5rem",
			duration: 0.25,
		});
		tl.current.to(".gsap-nav-link-three", {
			top: "3.5rem",
			duration: 0.25,
		});
		tl.current.to(".gsap-nav-link-two", {
			top: "3.5rem",
			duration: 0.25,
		});
		tl.current.to(".gsap-nav-link-one", {
			top: "3.5rem",
			duration: 0.25,
		});
		tl.current.to(".gsap-nav-overlay-div", {
			translateY: "-100%",
			ease: Circ.easeOut,
			duration: 0.75,
			delay: "0.75",
		});
	}, []);

	const handleGoHome = useCallback(() => {
		navigate("/", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);

	const handleGoLenco = useCallback(() => {
		navigate("/lenco", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);
	const handleGoAccure = useCallback(() => {
		navigate("/accrue", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);

	const handleGoFora = useCallback(() => {
		navigate("/fora", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);
	const handleGoRidr = useCallback(() => {
		navigate("/ridr", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);
	const handleGoBerger = useCallback(() => {
		navigate("/berger", {
			state: {
				from: location.pathname || "",
			},
		});
	}, []);

	return (
		<div ref={navDivRef}>
			<nav className="fixed flex flex-row justify-center items-center h-[60px] w-full z-30">
				<div
					className={
						`flex flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 2xs:px-8 lg:px-16 transition-opacity duration-300 ` +
						`${!isAnimationDone ? "opacity-0 pointer-events-none" : ""} ` +
						`${isAnimationDone && activeRoute === "/" ? "text-black " : ""} ` +
						`${isAnimationDone && (activeRoute.includes("/lenco") || activeRoute.includes("/ridr")) ? "text-white" : ""} `
					}
				>
					<span className="uppercase 2xs:text-lg lg:text-xl cursor-pointer" onClick={handleGoHome}>
						Olanrewaju Olukanni
					</span>
					<div className="block lg:hidden cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
						<ArrowDownIcon className={`stroke-current h-4 w-4 transform transition-all ` + `${isNavOpen ? "" : "rotate-180"}`} />
					</div>
					<div className="hidden lg:block uppercase">
						<ul className="flex flex-row gap-14 text-base">
							<li
								className={`${
									isAnimationDone
										? !activeRoute.includes("lenco")
											? "cursor-pointer"
											: "!cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoLenco}
							>
								LENCO
							</li>
							<li
								className={`${
									isAnimationDone
										? !activeRoute.includes("accrue")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoAccure}
							>
								ACCRUE
							</li>
							<li
								className={`${
									isAnimationDone
										? !activeRoute.includes("fora")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoFora}
							>
								FORA
							</li>
							<li
								className={`${
									isAnimationDone
										? !activeRoute.includes("ridr")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoRidr}
							>
								RIDR
							</li>
							<li
								className={`${
									isAnimationDone
										? !activeRoute.includes("berger")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoBerger}
							>
								BERGER
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className={`fixed top-0 left-0` + `lg:hidden h-screen w-full z-20 ` + `${isNavOpen ? "" : "pointer-events-none"}`}>
				<div
					className={
						`gsap-nav-overlay-div ` +
						`absolute left-0 ` +
						`lg:hidden h-[110vh] w-full z-10 transition-opacity duration-1000 -translate-y-100% ` +
						`${activeRoute === "/" ? "black-gradient-top-down-home" : ""} ` +
						`${activeRoute.includes("/lenco") ? "black-gradient-top-down-lenco" : ""} ` +
						`${activeRoute.includes("/accrue") ? "black-gradient-top-down-accrue" : ""} ` +
						`${activeRoute.includes("/fora") ? "black-gradient-top-down-fora" : ""} ` +
						`${activeRoute.includes("/ridr") ? "black-gradient-top-down-ridr" : ""} ` +
						`${activeRoute.includes("/berger") ? "black-gradient-top-down-berger" : ""} `
					}
				></div>
				<ul
					className={
						`gsap-nav-links ` +
						`absolute top-0 left-0 ` +
						`flex flex-col justify-center items-center gap-14 h-full w-screen p-8 text-4xl md:text-6xl uppercase z-30 ` +
						// `${isNavOpen ? (activeRoute.includes("/lenco") || activeRoute.includes("/ridr") ? "text-white" : "text-black") : ""} ` +
						// `${isAnimationDone && activeRoute === "/" ? "" : ""} ` +
						`${isAnimationDone && (activeRoute.includes("/lenco") || activeRoute.includes("/ridr")) ? "text-white" : "text-black"} `
					}
				>
					<li
						className={
							`transition-all h-14 w-full overflow-hidden relative ` +
							`${activeRoute === "/" ? "text-black" : ""} ` +
							`${location.pathname.includes("/lenco") ? "text-white" : ""} `
						}
					>
						<div
							className={`absolute flex justify-center items-center h-full w-full transition-all duration-1000 top-14 gsap-nav-link-one `}
						>
							<span
								className={`${
									isAnimationDone
										? !activeRoute.includes("lenco")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoLenco}
							>
								LENCO
							</span>
						</div>
					</li>
					<li className={`transition-all h-14 w-full overflow-hidden relative `}>
						<div
							className={`absolute flex justify-center items-center h-full w-full transition-all duration-1000 top-14 gsap-nav-link-two `}
						>
							<span
								className={`${
									isAnimationDone
										? !activeRoute.includes("accrue")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoAccure}
							>
								ACCRUE
							</span>
						</div>
					</li>
					<li className={`transition-all h-14 w-full overflow-hidden relative `}>
						<div
							className={`absolute flex justify-center items-center h-full w-full transition-all duration-1000 top-14 gsap-nav-link-three `}
						>
							<span
								className={`${
									isAnimationDone
										? !activeRoute.includes("fora")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoFora}
							>
								FORA
							</span>
						</div>
					</li>
					<li className={`transition-all h-14 w-full overflow-hidden relative `}>
						<div
							className={`absolute flex justify-center items-center h-full w-full transition-all duration-1000 top-14 gsap-nav-link-four `}
						>
							<span
								className={`${
									isAnimationDone
										? !activeRoute.includes("ridr")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoRidr}
							>
								RIDR
							</span>
						</div>
					</li>
					<li className={`transition-all h-14 w-full overflow-hidden relative `}>
						<div
							className={`absolute flex justify-center items-center h-full w-full transition-all duration-1000 top-14 gsap-nav-link-five `}
						>
							<span
								className={`${
									isAnimationDone
										? !activeRoute.includes("berger")
											? "cursor-pointer"
											: "cursor-default pointer-events-none line-through"
										: "cursor-default"
								}`}
								onClick={handleGoBerger}
							>
								BERGER
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
