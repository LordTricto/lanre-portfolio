import "./App.css";

import {CSSTransition, SwitchTransition} from "react-transition-group";
import {RouterRoute, routes} from ".";
import gsap, {Circ, Power1, Power2, Power4} from "gsap";
import {useLocation, useOutlet} from "react-router-dom";

import Nav from "./components/nav/nav";
// import AppRouter from "./routes/AppRouter";
// import Nav from "./components/nav/nav";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDimension from "./hooks/useDimension";

function App(): JSX.Element {
	const location = useLocation();
	const {width} = useDimension();
	const currentOutlet = useOutlet();

	const specificRoute = routes.find((route) => route.path === location.pathname || route.path === "404");
	const onEntering = () => {
		// gsap.to(".gsap-transition-overlay-div", {
		// ease: Circ.easeOut,
		// opacity: 0,
		// duration: 0,
		// });
	};
	const onExiting = () => {
		console.log(specificRoute?.nodeRef.current?.children);

		console.log(specificRoute?.nodeRef.current?.lastChild?.lastChild);
		gsap.to(specificRoute?.nodeRef.current?.lastChild?.lastChild || "", {
			duration: width < 547 ? 2 : 1.6,
			left: 0,
			// pointerEvents: "none",
			ease: Power1.easeOut,
		});
		gsap.to(specificRoute?.nodeRef.current?.firstChild?.firstChild || "", {
			duration: 0,
			opacity: 0,
			delay: width < 547 ? 2 : 1.6,
			ease: Power1.easeOut,
		});
		// gsap.from(".gsap-overlay-div", {
		// duration: width < 547 ? 5 : 4.6,
		// width: 0,
		// ease: Power1.easeOut,
		// });
		// gsap.to(".gsap-overlay-div", {

		// });
		// gsap.to(".gsap-transition-overlay-div", {
		// ease: Circ.easeOut,
		// opacity: 1,
		// duration: 1,
		// background: location.pathname === "/" ? "#1F2130" : "#ffffff",
		// });
	};
	// const onEnter = (isAppearing: boolean) => {
	// console.log(isAppearing, "enter");
	// if (isAppearing) {
	// console.log(specificRoute?.nodeRef.current?.children[0].firstElementChild);
	// }
	// gsap.from([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
	// y: 30,
	// delay: 0.6,
	// ease: "power3.InOut",
	// opacity: 0,
	// stagger: {
	// amount: 0.6,
	// },
	// });
	// };

	// const onExit = (isAppearing: boolean) => {
	// console.log(isAppearing, "leave");

	// gsap.to([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
	// y: -30,
	// ease: "power3.InOut",
	// stagger: {
	// amount: 0.2,
	// },
	// });
	// };
	// console.log(routes);
	// console.log(location.pathname);
	// console.log(specificRoute);
	return (
		<div
			className={
				`w-full min-h-screen `
				//  +
				// `${location.pathname === "/" ? "bg-white-dark " : ""} ` +
				// `${location.pathname.includes("/lenco") ? "bg-lenco-bg-dark" : ""}`
			}
		>
			{/* <AppRouter /> */}
			{/* <div className="gsap-transition-overlay-div position fixed flex w-full h-screen opacity-0 z-10"></div> */}
			{specificRoute && (
				<div className="relative">
					<SwitchTransition>
						<CSSTransition
							key={location.pathname}
							nodeRef={specificRoute.nodeRef}
							timeout={{
								appear: 0,
								enter: 0,
								exit: width < 547 ? 2000 : 1600,
							}}
							classNames="page"
							// onEnter={onEnter}
							onEntering={onEntering}
							// onEntered={onEnter}
							onExiting={onExiting}
							// onExited={onExit}

							// onEnter={onEnter}
							// onEntering={onEnter}
							unmountOnExit
						>
							{() => (
								<div ref={specificRoute.nodeRef} className="page">
									{currentOutlet}
								</div>
							)}
						</CSSTransition>
					</SwitchTransition>
				</div>
			)}
		</div>
	);
}

export default App;
