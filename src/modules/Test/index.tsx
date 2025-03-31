import React, {useLayoutEffect, useRef, useState} from "react";
import gsap, {Circ, Power1, Power4} from "gsap";

import Box from "./component/box";
import FadeIn from "./component/fadeIn";
import Pin from "./component/pin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Test(): JSX.Element {
	const landingDivRef = useRef<HTMLDivElement | null>(null);
	const animation = useRef<gsap.core.Tween>();

	const [tl, setTl] = useState<gsap.core.Timeline | undefined>();

	// useGSAP(() => {
	// });

	const toggle = () => {
		if (animation.current) animation.current.reversed(!animation.current.reversed());
	};

	return (
		<>
			<div id="gsap-index-div" className="min-h-screen w-screen bg-purple-300" ref={landingDivRef}>
				<div className="min-h-screen flex-grow bg-black flex justify-center items-center gap-32">
					<Box />
					<div className="box h-20 w-20 rounded-sm bg-gradient-to-bl bg-pink-500">Selector</div>
					<div className="circle h-16 w-16 rounded-full bg-blue">Ref - no leak</div>p
				</div>
				<Pin mainRef={landingDivRef} />
				<div className="min-h-screen flex-grow bg-black flex justify-center items-center gap-32">
					<div>
						<div>
							<button onClick={toggle}>Toggle</button>
						</div>
						<FadeIn stagger={0.1} x={100} ref={animation}>
							<div className="h-20 w-20 rounded-sm bg-purple-200">Box 1</div>
							<div className="h-20 w-20 rounded-sm bg-purple-200">Box 2</div>
						</FadeIn>
					</div>
				</div>
				<Pin mainRef={landingDivRef} />
				<div className="min-h-screen flex-grow bg-black flex justify-center items-center gap-32"></div>
			</div>
		</>
	);
}

export default Test;
