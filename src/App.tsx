import "./App.css";

import {CSSTransition, SwitchTransition} from "react-transition-group";
import gsap, {Power1} from "gsap";
import {useLocation, useOutlet} from "react-router-dom";

import React from "react";
import ReactGA from "react-ga";
import {Lenis as ReactLenis} from "@studio-freight/react-lenis";
import {routes} from ".";
import useDimension from "./hooks/useDimension";

const TrackingId = "G-5H4ZJRTBS0";

ReactGA.initialize(TrackingId);

function App(): JSX.Element {
	const location = useLocation();
	const {width} = useDimension();
	const currentOutlet = useOutlet();

	const specificRoute = routes.find((route) => route.path === location.pathname || route.path === "404");
	const onExiting = () => {
		gsap.to(specificRoute?.nodeRef.current?.lastChild?.lastChild || "", {
			left: "-5rem",
			duration: width < 547 ? 2 : 1.6,
			ease: Power1.easeOut,
		});
		gsap.to(specificRoute?.nodeRef.current?.firstChild?.firstChild || "", {
			delay: 1.5,
			opacity: 0,
			duration: 0,
			ease: Power1.easeOut,
		});
	};

	return (
		<div className="w-full min-h-screen">
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
							onExiting={onExiting}
							unmountOnExit
						>
							{() => (
								<div ref={specificRoute.nodeRef} className="page">
									<ReactLenis
										root
										options={{
											duration: 1,
											easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
											orientation: "vertical",
											gestureOrientation: "vertical",
											smoothWheel: true,
											smoothTouch: false,
											touchMultiplier: 0.1,
											wheelMultiplier: 0.1,
										}}
									>
										{currentOutlet}
									</ReactLenis>
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
